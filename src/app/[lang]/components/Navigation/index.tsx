"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Locale } from "../../../../../i18n-config";

export interface NavigationLinks {
  name: string;
  href: string;
}

interface NavigationProps {
  navLinks: NavigationLinks[];
  lang: Locale;
}

export function Navigation({ navLinks, lang }: NavigationProps) {
  const pathname = usePathname();

  function isActiveClass({ href }: NavigationLinks) {
    const pathSegments = pathname.split("/");
    if (pathSegments.length > 2) {
      pathSegments.splice(1, 1);
    } else {
      pathSegments[1] = "";
    }

    if (pathSegments.join("/") === href) {
      return styles["link--active"];
    }
    return "";
  }

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link) => {
        return (
          <Link
            className={`${styles.link} ${isActiveClass(link)}`}
            href={link.href}
            key={link.name}
            lang={lang}
            hrefLang={lang}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
