import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Emoji from "../../components/emoji";

import { FormiumForm, defaultComponents } from "@formium/react";

import { formium } from "../../lib/formium";

import components from "../../components/forms";

import styles from "../../styles/Home.module.css";

export async function getStaticProps(context) {
  // You can find your form's slug in the API Information panel
  // on your form's Overview page in the dashboard.
  const form = await formium.getFormBySlug("findamod");
  return { props: { form } };
}
// Your formium form is now available as a prop
export default function Apply({ form }) {
  const router = useRouter();

  const myComponents = {
    ...defaultComponents,
    ...components,
  };

  console.log(form);
  return (
    <div className={styles.container}>
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Apply to be a moderator</title>
        <link rel="icon" href="/favicon.ico" />
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

      <main style={{ width: "90%", marginLeft: "10%", marginRight: "10%" }}>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrvKqOlxnprM7xfJ"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1458"
          style={{ background: "transparent" }}
        ></iframe>
      </main>
      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
