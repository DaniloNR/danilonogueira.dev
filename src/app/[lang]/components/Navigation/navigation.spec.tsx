import { render, screen } from "@testing-library/react";
import { Navigation, NavigationLinks } from ".";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header component", () => {
  it("Renders the active link accordingly", () => {
    // Arrange
    (usePathname as jest.Mock).mockReturnValue("/en-US");
    const links: NavigationLinks[] = [
      {
        name: "Home",
        href: "/",
      },
    ];
    render(<Navigation navLinks={links} lang={"en-US"} />);

    // Act
    const link = screen.getByRole("link");

    // Assert
    expect(link).toHaveClass("link--active");
  });

  it("Renders a different active link when route changes", () => {
    // Arrange
    (usePathname as jest.Mock).mockReturnValue("/en-US/career");
    const links: NavigationLinks[] = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Career",
        href: "/career",
      },
    ];
    render(<Navigation navLinks={links} lang={"en-US"} />);

    // Act
    const [home, career] = screen.getAllByRole("link");

    // Assert
    expect(home).not.toHaveClass("link--active");
    expect(career).toHaveClass("link--active");
  });
});
