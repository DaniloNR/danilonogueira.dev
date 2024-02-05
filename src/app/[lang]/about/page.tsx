import styles from "./styles.module.scss";
import { Locale } from "@/../i18n-config";
import { dictionary } from "@/../translations";
import Image from "next/image";

type AboutProps = {
  params: {
    lang: Locale;
  };
};

export default function About({ params: { lang } }: AboutProps) {
  const t = dictionary[lang];

  return (
    <main className={styles.about}>
      <section>
        <h3>{t.about.main.title}</h3>
        <div className={styles.content}>
          <div className={styles.picture}>
            <Image
              src="/img/profile_2.jpg"
              alt="Profile picture"
              width={861}
              height={1238}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="/img/profile_2_low.jpg"
            />
          </div>
          <p>{t.about.main.intro}</p>
          <p>{t.about.main.main}</p>
          <p>{t.about.main.conclusion}</p>
        </div>
      </section>
    </main>
  );
}
