import { buildDemoMailto } from "./Contact";

describe("buildDemoMailto", () => {
  it("keeps an ampersand in the company name and line breaks in the message", () => {
    const url = buildDemoMailto({
      name: "Ada Lovelace",
      company: "Smith & Sons",
      email: "ada@smith.example",
      phone: "+44 20 7946 0000",
      message: "First line\nSecond line",
    });

    expect(url.startsWith("mailto:hello@praxisgb.com?")).toBe(true);
    expect(url.split("&")).toHaveLength(2);
    expect(url).toContain("Smith%20%26%20Sons");
    expect(url).toContain("First%20line%0ASecond%20line");

    const parsed = new URL(url);
    expect(parsed.searchParams.get("subject")).toBe(
      "Demo request from Ada Lovelace at Smith & Sons",
    );
    expect(parsed.searchParams.get("body")).toBe(
      [
        "Name: Ada Lovelace",
        "Company: Smith & Sons",
        "Email: ada@smith.example",
        "Phone: +44 20 7946 0000",
        "",
        "First line",
        "Second line",
      ].join("\n"),
    );
  });

  it("encodes #, ? and % so they cannot truncate the enquiry", () => {
    const url = buildDemoMailto({
      name: "100%",
      company: "A & B #1",
      email: "a@b.co",
      phone: "",
      message: "Cost? £10",
    });

    expect(url.split("&")).toHaveLength(2);
    const parsed = new URL(url);
    expect(parsed.searchParams.get("subject")).toBe("Demo request from 100% at A & B #1");
    expect(parsed.searchParams.get("body")).toContain("Company: A & B #1");
    expect(parsed.searchParams.get("body")).toContain("Cost? £10");
  });
});
