import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.description}>
          <p className={styles.label}>Front-End Developer</p>
          <h1 className={styles.heading}>
            Code, Creativity, and Collaboration
          </h1>
          <p className={styles.msg}>
            I love creating quality-driven web applications, delivering seamless
            user experiences, while solving complex challenges.
          </p>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/danilonr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Chat!
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
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.sphere}>
            <Image
              src="/typescript.png"
              alt="Typescript"
              width={100}
              height={100}
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.sphere}>
            <Image
              src="/vue.png"
              alt="Vue"
              width={100}
              height={100}
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>

          <div className={styles.sphere}>
            <Image
              src="/react.png"
              alt="React"
              width={100}
              height={100}
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section>
        <h1>New Section</h1>
      </section>
    </main>
  );
}
