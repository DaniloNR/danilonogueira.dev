import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import styles from "@/app/[lang]/components/Header/styles.module.scss";
import { ThemeSelector } from "../ThemeSelector";
import { Locale } from "@/../i18n-config";
import { Noto_Sans } from "next/font/google";
import { Navigation, NavigationLinks } from "../Navigation";

const NotoSans = Noto_Sans({ weight: ["300", "500"], subsets: ["latin"] });

type HeaderProps = {
  lang: Locale;
};

export function Header({ lang }: HeaderProps) {
  const navLinks: NavigationLinks[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Career",
      href: "/career",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header className={styles.header}>
      <Link href={navLinks[0].href} lang={lang} hrefLang={lang}>
        <div className={styles.logo}>
          <span className={NotoSans.className}>Danilo</span>
          <span className={NotoSans.className}>Nogueira</span>
        </div>
      </Link>
      <Navigation navLinks={navLinks} lang={lang} />
      <LocaleSwitcher lang={lang} />
      <ThemeSelector lang={lang} />
    </header>
  );
}
