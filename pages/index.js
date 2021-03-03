import Head from "next/head";
import styles from "../styles/Home.module.css";
import Emoji from "../components/emoji";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    // router.push(href);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Find a Mod</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <a href="/faq" className={styles.secondaryCTA}>
          <p>How we select our moderators</p>
        </a>
        <a href="/apply" className={styles.primaryCTA}>
          <p>Apply to be a moderator</p>
        </a>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.emoji}>
            <Emoji symbol="✳️" label="eight spoked asterisk" />
          </div>
          Find a Mod
        </h1>

        <p className={styles.description}>
          We get professional moderators for your brand's Clubhouse events
          <div className={styles.emoji}>
            <Emoji symbol="🎙️" label="eight spoked asterisk" />
          </div>
        </p>

        <p className={styles.description}>
          We're carefully selecting the best moderators and will launch soon.
          Sign up to be first to hear of our launch.
        </p>

        <div className={styles.grid}>
          <a href="/apply" className={styles.primaryCTA}>
            <h3>Join the Waitlist</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
