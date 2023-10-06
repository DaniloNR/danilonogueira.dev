"use client";
import { Sun, Moon } from "phosphor-react";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

type ThemeTypes = "LIGHT_THEME" | "DARK_THEME";

function getDefaultTheme() {
  const theme = window.localStorage.getItem(
    "@web-dev-portfolio:theme-state-1.0.0"
  );
  if (theme) theme as ThemeTypes;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "DARK_THEME";
  }

  return "LIGHT_THEME";
}

export function ThemeSelector() {
  const [theme, setTheme] = useState<ThemeTypes>(getDefaultTheme);

  function handleThemeChange() {
    setTheme((prev) => {
      const current = prev === "DARK_THEME" ? "LIGHT_THEME" : "DARK_THEME";
      localStorage.setItem("@web-dev-portfolio:theme-state-1.0.0", current);
      document.documentElement.setAttribute("data-theme", current);
      return current;
    });
  }

  function computedLabel() {
    if (theme === "DARK_THEME") {
      return styles.label, styles.active;
    }
    return styles.label;
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", getDefaultTheme());
  }, []);

  return (
    <div className={styles.theme}>
      <input
        type="checkbox"
        id="theme-switch"
        onChange={handleThemeChange}
        value={theme}
      />
      <label htmlFor="theme-switch" className={computedLabel()}>
        <Moon size="1.5rem" color="#f1d952" weight="fill" alt="Dark theme" />
        <Sun size="1.5rem" color="#f39c12" weight="fill" alt="Light theme" />
      </label>
    </div>
  );
}
