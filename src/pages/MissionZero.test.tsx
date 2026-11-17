import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getRouteSeo } from "@/seo";
import MissionZero, {
  JOIN_CONSENT_STATEMENT,
  JOIN_OPENED_MESSAGE,
  JOIN_SUBJECT,
  buildJoinMailto,
  canSubmitJoin,
} from "./MissionZero";

describe("buildJoinMailto", () => {
  it("keeps an ampersand in the company name and puts the consent statement in the body", () => {
    const url = buildJoinMailto({
      name: "Ada Lovelace",
      email: "ada@smith.example",
      company: "Smith & Sons",
      role: "Engineer",
    });

    expect(url.startsWith("mailto:hello@praxisgb.com?")).toBe(true);
    expect(url.split("&")).toHaveLength(2);
    expect(url).toContain("Smith%20%26%20Sons");

    const parsed = new URL(url);
    expect(parsed.searchParams.get("subject")).toBe(JOIN_SUBJECT);
    expect(parsed.searchParams.get("body")).toBe(
      [
        "Name: Ada Lovelace",
        "Email: ada@smith.example",
        "Company: Smith & Sons",
        "Role: Engineer",
        "",
        JOIN_CONSENT_STATEMENT,
      ].join("\n"),
    );
  });

  it("encodes #, ? and % so they cannot truncate the request", () => {
    const url = buildJoinMailto({
      name: "100%",
      email: "a@b.co",
      company: "A & B #1",
      role: "Cost? £10",
    });

    expect(url.split("&")).toHaveLength(2);
    const parsed = new URL(url);
    expect(parsed.searchParams.get("subject")).toBe("Join Mission Zero");
    expect(parsed.searchParams.get("body")).toContain("Name: 100%");
    expect(parsed.searchParams.get("body")).toContain("Company: A & B #1");
    expect(parsed.searchParams.get("body")).toContain("Role: Cost? £10");
    expect(parsed.searchParams.get("body")).toContain(JOIN_CONSENT_STATEMENT);
  });
});

describe("canSubmitJoin", () => {
  const valid = {
    name: "Ada Lovelace",
    email: "ada@smith.example",
    company: "Smith & Sons",
    consent: true,
  };

  it("allows a complete consented request and ignores role", () => {
    expect(canSubmitJoin(valid)).toBe(true);
  });

  it("blocks submission until consent is checked", () => {
    expect(canSubmitJoin({ ...valid, consent: false })).toBe(false);
  });

  it("blocks a blank or whitespace name", () => {
    expect(canSubmitJoin({ ...valid, name: "" })).toBe(false);
    expect(canSubmitJoin({ ...valid, name: "   " })).toBe(false);
  });

  it("blocks a blank company", () => {
    expect(canSubmitJoin({ ...valid, company: " " })).toBe(false);
  });

  it("blocks an email that is not a single address", () => {
    expect(canSubmitJoin({ ...valid, email: "" })).toBe(false);
    expect(canSubmitJoin({ ...valid, email: "not-an-email" })).toBe(false);
    expect(canSubmitJoin({ ...valid, email: "ada@smith" })).toBe(false);
    expect(canSubmitJoin({ ...valid, email: "ada smith@smith.example" })).toBe(false);
  });
});

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/missionzero"]}>
      <MissionZero />
    </MemoryRouter>,
  );
}

describe("Mission Zero form", () => {
  it("keeps the consent box unchecked and blocks submit until the required fields are valid", () => {
    renderPage();
    const form = screen.getByRole("form", { name: "Follow along." });
    const submit = within(form).getByRole("button", { name: "Join the mission" });
    const consent = screen.getByRole("checkbox", { name: JOIN_CONSENT_STATEMENT });

    expect(consent).not.toBeChecked();
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@smith.example" } });
    fireEvent.change(screen.getByLabelText("Company"), { target: { value: "Smith & Sons" } });
    expect(submit).toBeDisabled();

    fireEvent.click(consent);
    expect(submit).toBeEnabled();

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "not-an-email" } });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@smith.example" } });
    fireEvent.click(consent);
    expect(consent).not.toBeChecked();
    expect(submit).toBeDisabled();

    fireEvent.submit(form);
    expect(screen.queryByText(JOIN_OPENED_MESSAGE)).not.toBeInTheDocument();
  });

  it("opens a mailto and shows the fallback once consent and the required fields are valid", () => {
    renderPage();
    const form = screen.getByRole("form", { name: "Follow along." });

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@smith.example" } });
    fireEvent.change(screen.getByLabelText("Company"), { target: { value: "Smith & Sons" } });
    fireEvent.change(screen.getByLabelText("Role (optional)"), { target: { value: "Engineer" } });
    fireEvent.click(screen.getByRole("checkbox", { name: JOIN_CONSENT_STATEMENT }));
    fireEvent.submit(form);

    expect(screen.getByRole("status")).toHaveTextContent(JOIN_OPENED_MESSAGE);
    expect(screen.getByRole("link", { name: "Open the email" })).toHaveAttribute(
      "href",
      buildJoinMailto({
        name: "Ada Lovelace",
        email: "ada@smith.example",
        company: "Smith & Sons",
        role: "Engineer",
      }),
    );
    expect(screen.getByText(/We will only use your details for the updates you asked for/)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/Buttondown|Mailchimp|Loops|double opt-in|third-party/i);
    expect(document.body.textContent).not.toMatch(/XERO/);
  });

  it("marks the Mission Zero wordmark as the current page", () => {
    renderPage();
    expect(screen.getByRole("link", { name: "Mission Zero" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "node" })).not.toHaveAttribute("aria-current");
  });
});

describe("Mission Zero SEO", () => {
  it("sets the title, description, canonical and wordmark image", () => {
    const seo = getRouteSeo("/missionzero");
    expect(seo.title).toBe("Mission Zero | node by Praxis GB");
    expect(seo.description).toBe(
      "Mission Zero is node's aim: accident-free workplaces, reached by cutting the accident frequency rate. Join us.",
    );
    expect(seo.canonical).toBe("https://nodehub.uk/missionzero");
    expect(seo.image).toBe("https://nodehub.uk/mission-zero-og.png");
    expect(seo.imageWidth).toBe(1200);
    expect(seo.imageHeight).toBe(630);
  });

  it("serves the node product at / and /node with one canonical homepage", () => {
    const home = getRouteSeo("/");
    const node = getRouteSeo("/node");
    expect(home.title).toBe("node, near-miss detection for UK warehouses, by Praxis GB");
    expect(home.canonical).toBe("https://nodehub.uk/");
    expect(node).toEqual(home);
    expect(home.description).toContain("its own cameras and its own network");
  });
});
