"use client";

import { Locale } from "@/../i18n-config";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";
import LinkedIn from "@/app/[lang]/components/ui/CustomIcons/linkedin";
import { dictionary } from "@/../translations";

export type Testimonial = {
  profile: {
    name: string;
    picture: string;
    website: string;
    company: {
      name: string;
      position: string;
      website: string;
    };
  };
  testimonial: string[];
};

type TestimonialProps = {
  lang: Locale;
  testimonial: Testimonial;
};

export default function Testimonial({ lang, testimonial }: TestimonialProps) {
  const [readMore, setReadMore] = useState(false);
  const t = dictionary[lang];

  return (
    <li className={styles.testimonial}>
      <div className={styles.profile}>
        <div className={styles.profile__picture}>
          <Image
            src={testimonial.profile.picture}
            alt={testimonial.profile.name}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.profile__description}>
          <a
            href={testimonial.profile.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {testimonial.profile.name}
          </a>
          <span>{testimonial.profile.company.position}</span>
          <a
            href={testimonial.profile.company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {testimonial.profile.company.name}
          </a>
        </div>
      </div>
      <section aria-describedby="testimonial-text" data-expanded={readMore}>
        {testimonial.testimonial.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </section>

      <div className={styles.actions}>
        <a
          href="https://www.linkedin.com/in/danilonr/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn
            size="1rem"
            color="currentcolor"
            alt={t.testimonial.linkedin_tooltip}
          />
        </a>
        {!readMore && (
          <button
            onClick={() => setReadMore((prev) => !prev)}
            aria-expanded={readMore}
            aria-controls="testimonial-text"
            role="button"
            type="button"
          >
            {t.testimonial.expand_message}
          </button>
        )}
        {readMore && lang !== "pt-BR" && (
          <small>{t.testimonial.translation_message}</small>
        )}
      </div>
    </li>
  );
}
