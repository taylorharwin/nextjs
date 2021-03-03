import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Apply() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Apply as a moderator</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Apply to be a moderator</h1>
      </main>

      <footer className={styles.footer}>Copyright 2021 findamod.com</footer>
    </div>
  );
}
