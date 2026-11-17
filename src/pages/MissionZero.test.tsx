import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getRouteSeo } from "@/seo";
import MissionZero from "./MissionZero";

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/missionzero"]}>
      <MissionZero />
    </MemoryRouter>,
  );
}

describe("node Mission Zero page", () => {
  it("shows the manifesto and a mailto join link, with no sign-up form", () => {
    renderPage();

    expect(screen.getByText("Mission Zero")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "It's our mission to make every workplace in the world accident-free.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/In today's world,/)).toBeInTheDocument();
    expect(screen.getByText("Our cars drive themselves.")).toBeInTheDocument();
    expect(screen.getByText(/Your phone knows it's you/)).toBeInTheDocument();
    expect(screen.getByText(/three streets ahead/)).toBeInTheDocument();
    expect(screen.getByText(/getting hurt at work/)).toBeInTheDocument();
    expect(
      screen.getByText(
        "The technology already exists to spot a near-miss the moment it happens (a pedestrian too close to a forklift, a missing hi-vis, someone outside the walkway) and alert someone while there's still time to act.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/No one should/)).toBeInTheDocument();
    expect(screen.getByText("Everyone home safe.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Help us get there sooner." })).toBeInTheDocument();
    expect(screen.getByText(/Today it runs at 93% accuracy/)).toBeInTheDocument();
    expect(screen.getByText("Join the mission early.")).toBeInTheDocument();
    expect(screen.getByText("node by Praxis GB")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Join the mission" })).toHaveAttribute(
      "href",
      "mailto:hello@praxisgb.com?subject=Join%20the%20mission%20early",
    );
    expect(screen.getByText("This opens an email to hello@praxisgb.com.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Start a proof of concept" })).toHaveAttribute("href", "/node");

    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/XERO|®|™|standard|scheme/i);
  });

  it("marks the Mission Zero wordmark as the current page", () => {
    renderPage();
    expect(screen.getByRole("link", { name: "Mission Zero" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "node" })).not.toHaveAttribute("aria-current");
  });
});

describe("node Mission Zero SEO", () => {
  it("sets the v4 title, description and canonical", () => {
    const seo = getRouteSeo("/missionzero");
    expect(seo.title).toBe("node Mission Zero | node by Praxis GB");
    expect(seo.description).toBe(
      "It's our mission to make every workplace in the world accident-free. node Mission Zero.",
    );
    expect(seo.canonical).toBe("https://nodehub.uk/missionzero");
    expect(seo.image).toBe("https://nodehub.uk/mission-zero-og.png");
  });

  it("serves the node product at / and /node with one canonical homepage", () => {
    const home = getRouteSeo("/");
    const node = getRouteSeo("/node");
    expect(home.title).toBe("node, near-miss detection for UK warehouses, by Praxis GB");
    expect(home.canonical).toBe("https://nodehub.uk/");
    expect(node).toEqual(home);
  });
});
