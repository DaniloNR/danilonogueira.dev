import { useEffect, useState, Children, isValidElement } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr/index";
import styles from "./styles.module.scss";

type DropdownMenuProps = {
  children: React.ReactNode;
  buttonContent: React.ReactNode;
};

export function DropdownMenu({ children, buttonContent }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const wrappedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return <li key={index}>{child}</li>;
    }
    return null;
  });

  function handleClickOutside({ target }: MouseEvent) {
    // not all event targets are elements, so ensure that is a HTML element
    if (target instanceof HTMLElement) {
      const isDropdownButton = target.matches("[data-dropdown-button]");
      const isInsideDropdown = target.closest("[data-dropdown]");

      if (!isDropdownButton && !isInsideDropdown) {
        setIsOpen(false);
      }
    }
  }

  function getDropdownClass() {
    if (isOpen) {
      return `${styles["dropdown-menu"]} ${styles["dropdown-menu--active"]}`;
    }
    return styles["dropdown-menu"];
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  function handleDropdownClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.dropdown} data-dropdown>
      <button
        className={styles.toggle}
        type="button"
        aria-pressed={isOpen}
        data-dropdown-button
        onClick={handleDropdownClick}
      >
        <div className={styles.toggle__content}>{buttonContent}</div>
        <div className={getDropdownClass()}>
          <ul>{wrappedChildren}</ul>
        </div>
      </button>

      <div className={styles.caret} onClick={handleDropdownClick}>
        {isOpen ? (
          <CaretUp
            size="1.5rem"
            color="currentcolor"
            alt="Close language selector dropdown"
          />
        ) : (
          <CaretDown
            size="1.5rem"
            color="currentcolor"
            alt="Open language selector dropdown"
          />
        )}
      </div>
    </div>
  );
}
