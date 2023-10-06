import { Navigation, NavigationLinks } from "../Navigation";
import { ThemeSelector } from "../ThemeSelector";
import styles from "./styles.module.scss";
import { Noto_Sans } from "next/font/google";
const NotoSans = Noto_Sans({ weight: ["300", "500"], subsets: ["latin"] });

export function Header() {
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
      <div className={styles.logo}>
        <span className={NotoSans.className}>Danilo</span>
        <span className={NotoSans.className}>Nogueira</span>
      </div>
      <Navigation navLinks={navLinks} />
      <ThemeSelector />
    </header>
  );
}
