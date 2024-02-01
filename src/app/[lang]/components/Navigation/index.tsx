"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Locale } from "@/../i18n-config";

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

  function computeLocaleURL({ href }: NavigationLinks) {
    return `/${lang}${href}`;
  }

  return (
    <nav className={styles.navigation}>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link
                className={`${styles.link} ${isActiveClass(link)}`}
                href={computeLocaleURL(link)}
                lang={lang}
                hrefLang={lang}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
