import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import { PartnersStrip } from "./PartnersStrip";

describe("PartnersStrip", () => {
  it("labels the partnership and links each official logo in a new tab", () => {
    render(<PartnersStrip />);

    expect(screen.getByText("In partnership with")).toBeInTheDocument();

    const growthHub = screen.getByRole("link", { name: "Greater Manchester Growth Hub" });
    expect(growthHub).toHaveAttribute("href", "https://www.businessgrowthhub.com/");
    expect(growthHub).toHaveAttribute("target", "_blank");
    expect(growthHub).toHaveAttribute("rel", "noopener noreferrer");
    expect(growthHub.querySelector("img")).toHaveAttribute(
      "src",
      "/partners/greater-manchester-growth-hub.svg",
    );

    const university = screen.getByRole("link", { name: "University of Manchester" });
    expect(university).toHaveAttribute("href", "https://www.manchester.ac.uk/");
    expect(university).toHaveAttribute("target", "_blank");
    expect(university).toHaveAttribute("rel", "noopener noreferrer");
    expect(university.querySelector("img")).toHaveAttribute(
      "src",
      "/partners/university-of-manchester.png",
    );
  });

  it("is part of the shared footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText("In partnership with")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Greater Manchester Growth Hub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "University of Manchester" })).toBeInTheDocument();

    const brand = screen.getByRole("link", { name: "node by Praxis GB" });
    expect(brand).toHaveAttribute("href", "/");
    expect(brand.querySelector("img")).toHaveAttribute(
      "src",
      "/node-lockup-horizontal-transparent-light.png",
    );
    expect(screen.getByText("Computer vision for warehouse and logistics safety, processed on site.")).toBeInTheDocument();
  });
});
