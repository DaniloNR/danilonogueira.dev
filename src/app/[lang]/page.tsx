import Image from "next/image";
import styles from "./page.module.scss";
import { dictionary } from "@/../translations";
import { Locale } from "@/../i18n-config";
import TestimonialCard from "./components/Testimonial";
import type { Testimonial } from "./components/Testimonial";
import TechStack from "./components/TechStack";

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
      src: "/img/typescript.png",
      alt: "Typescript",
      width: 100,
      height: 100,
    },
    {
      src: "/img/vue.png",
      alt: "Vue",
      width: 100,
      height: 100,
    },
    {
      src: "/img/react.png",
      alt: "React",
      width: 100,
      height: 100,
    },
  ];

  const stack: string[] = [
    "JavaScript",
    "TypeScript",
    "VueJs",
    "ReactJs",
    "Nuxt",
    "NextJs",
    "Webpack",
    "SingleSpa",
    "Vite",
    "Jest",
    "Graphql",
    "Git",
    "Node",
    "Express",
    "Vercel",
    "Firebase",
    "Mongodb",
    "Mysql",
    "Php",
  ];

  const testimonials: Testimonial[] = [
    {
      profile: {
        name: "Felipe Lima",
        picture: "/img/testimonial_1.jpeg",
        website: "https://www.linkedin.com/in/limamr-felipe/",
        company: {
          name: "Gupy",
          position: t.homepage.testimonials.felipe.position,
          website: "https://www.linkedin.com/company/gupy/",
        },
      },
      testimonial: t.homepage.testimonials.felipe.text,
    },
    {
      profile: {
        name: "Jack Oliveira",
        picture: "/img/testimonial_2.jpeg",
        website: "https://www.linkedin.com/in/jackoliveiraa/",
        company: {
          name: "Gupy",
          position: t.homepage.testimonials.jack.position,
          website: "https://www.linkedin.com/company/gupy/",
        },
      },
      testimonial: t.homepage.testimonials.jack.text,
    },
    {
      profile: {
        name: "Júlio filho",
        picture: "/img/testimonial_3.jpeg",
        website: "https://www.linkedin.com/in/juliolvfilho/",
        company: {
          name: "Gupy",
          position: t.homepage.testimonials.julio.position,
          website: "https://www.linkedin.com/company/gupy/",
        },
      },
      testimonial: t.homepage.testimonials.julio.text,
    },
  ];

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.landing}>
          <div className={styles.description}>
            <p className={styles.label}>{t.homepage.label}</p>
            <h2 className={styles.heading}>{t.homepage.heading}</h2>
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
                src="/img/profile.png"
                alt="Profile picture"
                width={1366}
                height={768}
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
        </div>
      </section>
      <section>
        <div className={styles.information}>
          <div className={styles.techstack}>
            <h4>{t.homepage.techs}</h4>
            <TechStack stack={stack} />
          </div>
          <div className={styles.bio}>
            <small>{t.homepage.intro.label}</small>
            <h3>{t.homepage.intro.title}</h3>
            <p>{t.homepage.intro.quote}</p>
            <p>{t.homepage.intro.content}</p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.review}>
          <h3>Testimonials</h3>
          <small>What my coworkers say about me</small>
          <ul className={styles.testimonials}>
            {testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  lang={lang}
                  testimonial={testimonial}
                  key={testimonial.profile.name}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
