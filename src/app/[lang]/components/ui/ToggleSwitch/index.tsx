import { X, Check } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import type { Dispatch, SetStateAction } from "react";

export type VariantType = "BUTTON_VARIANT" | "INPUT_VARIANT";

export type ToggleSwitchProps<T> = {
  onState: {
    icon: React.ReactNode;
    value: T;
  };
  offState: {
    icon: React.ReactNode;
    value: T;
  };
  state: {
    value: T;
    setFunction: Dispatch<SetStateAction<T>>;
  };
  label?: string;
  variant?: VariantType;
};

const iconConfig = {
  width: "1rem",
  height: "1rem",
  "aria-hidden": true,
  focusable: false,
  color: "currentcolor",
};

export function ToggleSwitch<T>({
  onState = {
    icon: <Check {...iconConfig} />,
    value: true as T,
  },
  offState = {
    icon: <X {...iconConfig} />,
    value: false as T,
  },
  label,
  state,
  variant = "INPUT_VARIANT",
}: ToggleSwitchProps<T>) {
  function handleStateChange() {
    state.setFunction((prev) => {
      if (prev === onState.value) {
        return offState.value;
      }
      return onState.value;
    });
  }

  const type = {
    INPUT_VARIANT: (
      <label className={styles.toggle} htmlFor="toggle">
        <input
          id="toggle"
          type="checkbox"
          name="toggle"
          className={styles.toggle__input}
          checked={state.value === onState.value}
          onChange={handleStateChange}
        />
        <span className={styles.toggle__display} hidden>
          {onState.icon}
          {offState.icon}
        </span>
        {label}
      </label>
    ),
    BUTTON_VARIANT: (
      <button
        className={styles.toggle}
        type="button"
        aria-pressed={state.value === onState.value}
        onClick={handleStateChange}
      >
        <span className={styles.toggle__display} hidden>
          {onState.icon}
          {offState.icon}
        </span>
        {label}
      </button>
    ),
  };

  return type[variant];
}
