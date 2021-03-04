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

      <div className={styles.header}>
        <a href="/faq" className={styles.secondaryCTA}>
          <p>How we select our moderators</p>
        </a>
        <a href="/apply" className={styles.primaryCTA}>
          <p>Apply to be a moderator</p>
        </a>
      </div>

      <main style={{ width: "100%", marginLeft: "10%", marginRight: "10%" }}>
        <h1>Search the directory and select mods to book</h1>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrkymEddJiRnXOz0?backgroundColor=cyan&viewControls=on"
          frameBorder="0"
          onMouseWheel=""
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </main>

      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
