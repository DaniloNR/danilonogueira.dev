import Link from "next/link";
import { Locale } from "@/../i18n-config";
import { Noto_Sans } from "next/font/google";
import styles from "./styles.module.scss";
import {
  Envelope,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr/index";
import LinkedIn from "@/app/[lang]/components/ui/CustomIcons/linkedin";

const NotoSans = Noto_Sans({ weight: ["300", "500"], subsets: ["latin"] });

type FooterProps = {
  lang: Locale;
};

const links = [
  {
    title: "Email",
    icon: <Envelope size="1.5rem" color="currentcolor" alt={"Email"} />,
    url: "mailto: danilo.nogueira1992@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <LinkedIn size="1.25rem" color="currentcolor" alt={"LinkedIn"} />,
    url: "https://www.linkedin.com/in/danilonr/",
  },
  {
    title: "Github",
    icon: <GithubLogo size="1.5rem" color="currentcolor" alt={"Github"} />,
    url: "https://github.com/DaniloNR",
  },
  {
    title: "Instagram",
    icon: (
      <InstagramLogo size="1.5rem" color="currentcolor" alt={"Instagram"} />
    ),
    url: "https://instagram.com/danilo.nr",
  },
];

export function Footer({ lang }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Link href="/" lang={lang} hrefLang={lang}>
        <div className={styles.logo}>
          <span className={NotoSans.className}>Danilo</span>
          <span className={NotoSans.className}>Nogueira</span>
        </div>
        <small>© 2023. All rights reserved</small>
      </Link>

      <ul>
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
