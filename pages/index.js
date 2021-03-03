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

      <main className={styles.main}>
        <h1 className={styles.title}>Find a Mod</h1>

        <p className={styles.description}>
          We get professional moderators for your brand's Clubhouse
          <Emoji symbol="🎙️" label="studio microphone" />
        </p>

        <div className={styles.grid}>
          <a href="/search" className={styles.card}>
            <h3>Find a Mod</h3>
            <p></p>
          </a>
          <a href="/apply" className={styles.card}>
            <h3>Apply as a Mod</h3>
            <p></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Copyright 2021 findamod.com</footer>
    </div>
  );
}
