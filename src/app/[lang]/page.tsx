import Image from "next/image";
import styles from "./page.module.scss";
import { dictionary } from "@/../translations";
import { Locale } from "@/../i18n-config";

type HomeProps = {
  params: {
    lang: Locale;
  };
};

type Technologies = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default async function Home({ params: { lang } }: HomeProps) {
  const t = dictionary[lang];

  const technologies: Technologies[] = [
    {
      src: "/typescript.png",
      alt: "Typescript",
      width: 100,
      height: 100,
    },
    {
      src: "/vue.png",
      alt: "Vue",
      width: 100,
      height: 100,
    },
    {
      src: "/react.png",
      alt: "React",
      width: 100,
      height: 100,
    },
  ];

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.description}>
          <p className={styles.label}>{t.homepage.label}</p>
          <h1 className={styles.heading}>{t.homepage.heading}</h1>
          <p className={styles.msg}>{t.homepage.message}</p>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/danilonr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.homepage.link}
          </a>
        </div>

        <div className={styles.profile}>
          <div className={styles.picture}>
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={644}
              height={921}
              sizes="100vw"
              priority
            />
          </div>
          {technologies.map(({ src, alt, width, height }, index) => {
            return (
              <div className={styles.sphere} key={index}>
                <Image src={src} alt={alt} width={width} height={height} />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h1>New Section</h1>
      </section>
    </main>
  );
}
