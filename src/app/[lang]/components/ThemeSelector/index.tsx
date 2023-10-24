"use client";
import { Sun, Moon } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { ToggleSwitch } from "../ui/ToggleSwitch";

type ThemeTypes = "LIGHT_THEME" | "DARK_THEME";

function getDefaultTheme() {
  const theme = window.localStorage.getItem(
    "@web-dev-portfolio:theme-state-1.0.0"
  );
  if (theme) return theme as ThemeTypes;
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

  useEffect(() => {
    if (theme) {
      console.log(theme);
      localStorage.setItem("@web-dev-portfolio:theme-state-1.0.0", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", getDefaultTheme());
  }, []);

  return (
    <div className={styles.theme}>
      <ToggleSwitch<ThemeTypes>
        variant="BUTTON_VARIANT"
        onState={{
          icon: (
            <Moon
              size="1.25rem"
              color="currentcolor"
              alt="Switch to light theme"
            />
          ),
          value: "DARK_THEME",
        }}
        offState={{
          icon: (
            <Sun
              size="1.25rem"
              color="currentcolor"
              alt="Switch to dark theme"
            />
          ),
          value: "LIGHT_THEME",
        }}
        state={{
          setFunction: setTheme,
          value: theme,
        }}
      />
    </div>
  );
}
