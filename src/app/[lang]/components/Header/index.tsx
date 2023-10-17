import { Locale } from "../../../../../i18n-config";
import { Navigation, NavigationLinks } from "../Navigation";
import { ThemeSelector } from "../ThemeSelector";
import styles from "./styles.module.scss";
import { Noto_Sans } from "next/font/google";
const NotoSans = Noto_Sans({ weight: ["300", "500"], subsets: ["latin"] });

type HeaderProps = {
  lang: Locale;
};

export function Header({ lang }: HeaderProps) {
  const navLinks: NavigationLinks[] = [
    {
      name: "Home",
      href: "/[lang]",
    },
    {
      name: "Career",
      href: "/[lang]/career",
    },
    {
      name: "Projects",
      href: "/[lang]/projects",
    },
    {
      name: "About",
      href: "/[lang]/about",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={NotoSans.className}>Danilo</span>
        <span className={NotoSans.className}>Nogueira</span>
      </div>
      <Navigation navLinks={navLinks} lang={lang} />
      <ThemeSelector />
    </header>
  );
}
