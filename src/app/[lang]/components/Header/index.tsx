import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import styles from "@/app/[lang]/components/Header/styles.module.scss";
import { ThemeSelector } from "../ThemeSelector";
import { Noto_Sans } from "next/font/google";
import { Navigation, NavigationLinks } from "../Navigation";
import { Locale } from "@/../i18n-config";
import { dictionary } from "@/../translations";

const NotoSans = Noto_Sans({ weight: ["300", "500"], subsets: ["latin"] });

type HeaderProps = {
  lang: Locale;
};

export function Header({ lang }: HeaderProps) {
  const t = dictionary[lang];

  const navLinks: NavigationLinks[] = [
    {
      name: t.navigation.home,
      href: "/",
    },
    {
      name: t.navigation.career,
      href: "/career",
    },
    {
      name: t.navigation.projects,
      href: "/projects",
    },
    {
      name: t.navigation.about,
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
