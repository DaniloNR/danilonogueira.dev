import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSelector } from ".";

let store: Record<string, any> = {};
beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    store[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => store[key]);
  (global.matchMedia as jest.Mock) = jest.fn((query) => ({
    matches: false,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
});

beforeEach(() => {
  store = {};
});

describe("Theme Selector", () => {
  it("Loads the default light theme if none is set", () => {
    // Arranje
    render(<ThemeSelector lang="en-US" />);
    // Act
    const button = screen.getByRole("button");
    // Assert
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("Correctly first loads the theme stored on local storage", () => {
    // Arranje
    const storeID = "@web-dev-portfolio:theme-state-1.0.0";
    global.Storage.prototype.setItem(storeID, "DARK_THEME");
    render(<ThemeSelector lang="en-US" />);

    // Act
    const button = screen.getByRole("button");

    // Assert
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(global.Storage.prototype.getItem(storeID)).toEqual("DARK_THEME");
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      "DARK_THEME"
    );
  });

  it("Switch themes when toggle is pressed", async () => {
    // Arranje
    render(<ThemeSelector lang="en-US" />);
    const button = screen.getByRole("button");
    const storeID = "@web-dev-portfolio:theme-state-1.0.0";

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(global.Storage.prototype.getItem(storeID)).toEqual("DARK_THEME");
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      "DARK_THEME"
    );
  });

  it("Loads the theme based on OS color-scheme if local storage is unset", () => {
    // Arranje
    (global.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
    });
    render(<ThemeSelector lang="en-US" />);

    // Act
    const button = screen.getByRole("button");

    // Assert
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});

afterAll(() => {
  // return our mocks to their original values
  (global.Storage.prototype.setItem as jest.Mock).mockReset();
  (global.Storage.prototype.getItem as jest.Mock).mockReset();
  (global.matchMedia as jest.Mock).mockReset();
});
