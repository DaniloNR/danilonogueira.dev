"use client";

import TechStack from "@/app/[lang]/components/TechStack";
import styles from "./styles.module.scss";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr/Image";
import { Globe } from "@phosphor-icons/react/dist/ssr/Globe";
import { createPortal } from "react-dom";
import { useState } from "react";
import Gallery from "../components/Gallery";
import { Locale } from "@/../i18n-config";
import { dictionary } from "@/../translations";

type ProjectProps = {
  params: {
    lang: Locale;
  };
};

type ProjectInfo = {
  gallery: string[];
  tech: string[];
  link?: string;
};

type Projects = {
  dashboard: ProjectInfo;
  newAdmin: ProjectInfo;
  blog: ProjectInfo;
  designSystem: ProjectInfo;
  admin: ProjectInfo;
};

const gallery: Projects = {
  dashboard: {
    gallery: ["/img/projects/dashboard_1.png", "/img/projects/dashboard_2.png"],
    tech: [
      "JavaScript",
      "TypeScript",
      "VueJs",
      "Webpack",
      "SingleSpa",
      "Jest",
      "Firebase",
      "Git",
    ],
  },
  newAdmin: {
    gallery: ["/img/projects/new_admin_1.png", "/img/projects/new_admin_2.png"],
    tech: [
      "JavaScript",
      "TypeScript",
      "VueJs",
      "ReactJs",
      "Webpack",
      "SingleSpa",
      "Jest",
      "Firebase",
      "Graphql",
      "Git",
    ],
  },
  blog: {
    gallery: ["/img/projects/blog.png"],
    tech: ["JavaScript", "VueJs", "Nuxt", "Webpack", "Git"],
    link: "https://niduu.com/blog",
  },
  designSystem: {
    gallery: [],
    tech: ["JavaScript", "TypeScript", "Git"],
    link: "https://www.npmjs.com/~dev-niduu",
  },
  admin: {
    gallery: ["/img/projects/admin_1.png", "/img/projects/admin_2.png"],
    tech: ["JavaScript", "VueJs", "Webpack", "Jest", "Firebase", "Git"],
  },
};

export default function Projects({ params: { lang } }: ProjectProps) {
  const [showGallery, setShowGallery] = useState<keyof Projects | boolean>(
    false
  );
  const t = dictionary[lang];

  return (
    <main className={styles.projects}>
      <section>
        <h3>{t.projects.main.title}</h3>
        <p>{t.projects.main.description}</p>
      </section>

      <section>
        <h3>{t.projects.timeline.title}</h3>

        <ul className={styles.projects}>
          {t.projects.timeline.projects.map((project) => {
            const system = gallery[project.id as keyof Projects];
            return (
              <li className={styles.projects__item} key={project.id}>
                <h5>{project.name}</h5>
                {system.gallery.length > 0 && (
                  <button
                    role="button"
                    type="button"
                    onClick={() => setShowGallery(project.id as keyof Projects)}
                  >
                    <ImageIcon
                      size="1.5rem"
                      color="currentcolor"
                      alt={t.projects.timeline.galleryAlt}
                    />
                  </button>
                )}
                {showGallery === project.id &&
                  createPortal(
                    <Gallery
                      onClose={() => setShowGallery(false)}
                      images={system.gallery}
                    />,
                    document.body
                  )}
                {system.link && (
                  <a
                    href={system.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe
                      size="1.5rem"
                      color="currentcolor"
                      alt="Check it online"
                    />
                  </a>
                )}
                <p>{project.description}</p>
                <TechStack stack={system.tech} />
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles["info-tooltip"]}>
        <blockquote>{t.projects.main.quote}</blockquote>
      </section>
    </main>
  );
}
