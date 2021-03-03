import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Emoji from "../../components/emoji";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Search the directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Search the directory</h1>
      </main>

      <footer className={styles.footer}>Copyright 2021 findamod.com</footer>
    </div>
  );
}
