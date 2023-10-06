"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";

export interface NavigationLinks {
  name: string;
  href: string;
}

interface NavigationProps {
  navLinks: NavigationLinks[];
}

export function Navigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ? styles["link--active"] : "";
        return (
          <Link
            className={`${styles.link} ${isActive}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
