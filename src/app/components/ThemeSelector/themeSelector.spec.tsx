import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSelector } from ".";

let store: Record<string, any> = {};
beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    store[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => store[key]);
});

beforeEach(() => {
  store = {}
})

describe("Theme Selector", () => {
  it("Loads the default light theme if none is set", () => {
    // Arranje
    render(<ThemeSelector />);
    // Act
    const input = screen.getByDisplayValue("LIGHT_THEME");
    // Assert
    expect(input).not.toBeChecked();
  });

  it("Correctly first loads the theme stored on local storage", () => {
    // Arranje
    const storeID = "@web-dev-portfolio:theme-state-1.0.0";
    global.Storage.prototype.setItem(storeID, "DARK_THEME");
    render(<ThemeSelector />);

    // Act
    const input = screen.getByDisplayValue("DARK_THEME");

    // Assert
    expect(input).toBeChecked();
    expect(global.Storage.prototype.getItem(storeID)).toEqual("DARK_THEME");
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      "DARK_THEME"
    );
  });

  it("Switch themes when toggle is pressed", async () => {
    // Arranje
    render(<ThemeSelector />);
    const input = screen.getByDisplayValue("LIGHT_THEME");
    const storeID = "@web-dev-portfolio:theme-state-1.0.0";

    // Act
    await userEvent.click(input);

    // Assert
    expect(input).toBeChecked();
    expect(global.Storage.prototype.getItem(storeID)).toEqual("DARK_THEME");
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      "DARK_THEME"
    );
  });
});

afterAll(() => {
  // return our mocks to their original values
  // 🚨 THIS IS VERY IMPORTANT to avoid polluting future tests!
  (global.Storage.prototype.setItem as jest.Mock).mockReset();
  (global.Storage.prototype.getItem as jest.Mock).mockReset();
});
