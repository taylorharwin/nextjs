import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Emoji from "../components/emoji";
import { useRouter } from "next/router";

import components from "../components/forms";

import { FormiumForm, defaultComponents } from "@formium/react";

import { formium } from "../lib/formium";

export async function getStaticProps(context) {
  // You can find your form's slug in the API Information panel
  // on your form's Overview page in the dashboard.
  const form = await formium.getFormBySlug("email");
  return { props: { form } };
}
export default function Home({ form }) {
  const router = useRouter();
  const [success, setSuccess] = React.useState(false);

  const myComponents = {
    ...defaultComponents,
    ...components,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Find a Mod</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.header}>
        <div>
          <h3 className={styles.description}>
            <div className={styles.emoji}>
              <Emoji symbol="✳️" label="eight spoked asterisk" />
            </div>
            Find a mod
          </h3>
        </div>
        <span style={{ display: "flex" }}>
          {/* <a href="/faq" className={styles.secondaryCTA}>
            <p>How we select our moderators</p>
          </a> */}
          <a href="/apply" className={styles.primaryCTA}>
            <p>Apply to be a moderator</p>
          </a>
        </span>
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

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            marginBottom: "32px",
          }}
        >
          We're here to help your brand launch on Clubhouse. We can provide you
          a verified moderator or consultation on how to host your first event.
        </p>

        <div className={styles.grid}>
          <a href="/apply_brand" className={styles.primaryCTA}>
            <p>Request a verified moderator</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
