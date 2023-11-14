"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, i18n } from "@/../i18n-config";
import styles from "./styles.module.scss";
import Image from "next/image";
import { DropdownMenu } from "../ui/DropdownMenu";

type LocaleHash = {
  title: string;
  src: string;
  alt: string;
};

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const localeHash: Record<"pt-BR" | "en-US", LocaleHash> = {
    "pt-BR": {
      title: "Portuguese",
      src: "/flags/br-flag.png",
      alt: "Select portuguese language",
    },
    "en-US": {
      title: "English",
      src: "/flags/us-flag.png",
      alt: "Select english language",
    },
  };

  function redirectedPathName(locale: string) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className={styles.locales}>
      <DropdownMenu
        buttonContent={
          <div className={styles.flag}>
            <Image
              src={localeHash[lang].src}
              alt={localeHash[lang].alt}
              width={256}
              height={256}
            />
          </div>
        }
      >
        {i18n.locales.map((locale) => {
          return (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              className={styles.link}
              lang={locale}
              hrefLang={locale}
            >
              <div className={styles.flag}>
                <Image
                  src={localeHash[locale].src}
                  alt={localeHash[locale].alt}
                  width={256}
                  height={256}
                />
              </div>
              <span>{localeHash[locale].title}</span>
            </Link>
          );
        })}
      </DropdownMenu>
    </div>
  );
}
