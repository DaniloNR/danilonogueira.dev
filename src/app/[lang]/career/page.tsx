import { Download } from "@phosphor-icons/react/dist/ssr/Download";
import styles from "./styles.module.scss";
import { Locale } from "@/../i18n-config";
import { dictionary } from "@/../translations";

type CareerProps = {
  params: {
    lang: Locale;
  };
};

export default function Career({ params: { lang } }: CareerProps) {
  const t = dictionary[lang];

  function getResumeURL(lang: Locale) {
    if (lang === "pt-BR") {
      return "/files/Currículo Danilo Nogueira.pdf";
    }
    return "/files/Danilo Nogueira Resume.pdf";
  }

  return (
    <main className={styles.career}>
      <section>
        <h3>{t.career.main.title}</h3>
        <p>{t.career.main.description}</p>
      </section>
      <section>
        <h3>{t.career.timeline.title}</h3>
        <a href={getResumeURL(lang)} download>
          <Download size="1.5rem" color="currentcolor" />
          {t.career.timeline.download}
        </a>
        <ul className={styles.jobs}>
          {t.career.timeline.jobs.map((job) => {
            return (
              <li key={job.period.dateTime}>
                <h5>{job.position}</h5>
                <span>
                  <a
                    href={job.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company.name}
                  </a>{" "}
                  • {job.type}
                </span>
                <time dateTime={job.period.dateTime}>{job.period.label}</time>
                <ul>
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
