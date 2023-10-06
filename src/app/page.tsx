import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.description}>
          <p className={styles.label}>Front-End Developer</p>
          <h1 className={styles.heading}>Talk is cheap. Show me the code</h1>
          <p className={styles.msg}>
            I design and code beautifully simple things, and I love what I do
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
              priority
            />
          </div>
          <div className={styles.sphere}>
            <Image src="/vue.png" alt="Vue" width={100} height={100} />
          </div>
          <div className={styles.sphere}>
            <Image src="/react.png" alt="React" width={100} height={100} />
          </div>
          <div className={styles.sphere}>
            <Image
              src="/typescript.png"
              alt="Typescript"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
