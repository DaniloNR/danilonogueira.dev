import { render, screen } from "@testing-library/react";
import { Navigation, NavigationLinks } from "./";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header component", () => {
  it("Renders the active link accordingly", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    const links: NavigationLinks[] = [
      {
        name: "Home",
        href: "/",
      },
    ];

    render(<Navigation navLinks={links} />); // Arrange
    const home = screen.getByText("Home"); // Act
    expect(home).toHaveClass("link--active"); // Assert
  });

  it("Renders a different active link when route changes", () => {
    (usePathname as jest.Mock).mockReturnValue("/career");

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

    render(<Navigation navLinks={links} />); // Arrange
    const home = screen.getByText("Home"); // Act
    const career = screen.getByText("Career"); // Act
    expect(home).not.toHaveClass("link--active"); // Assert
    expect(career).toHaveClass("link--active"); // Assert
  });
});
