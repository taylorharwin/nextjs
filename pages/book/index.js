import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Emoji from "../../components/emoji";
import { useRouter } from "next/router";

import components from "../../components/forms";

import { FormiumForm, defaultComponents } from "@formium/react";

import { formium } from "../../lib/formium";

export async function getStaticProps(context) {
  // You can find your form's slug in the API Information panel
  // on your form's Overview page in the dashboard.
  const form = await formium.getFormBySlug("requesttobook");
  return { props: { form } };
}
export default function Home({ form }) {
  const router = useRouter();

  const { name } = router.query;

  console.log(form);
  const [success, setSuccess] = React.useState(false);

  const myComponents = {
    ...defaultComponents,
    ...components,
  };

  const message = success ? (
    <h3>Thanks! We'll get to work</h3>
  ) : (
    <div styles={{ width: "100%", textAlign: "left" }}>
      <FormiumForm
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm("requesttobook", values);
          setSuccess(true);
        }}
        components={myComponents}
        data={form}
      />
    </div>
  );

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
        <a href="/faq" className={styles.secondaryCTA}>
          <p>How we select our moderators</p>
        </a>
        <a href="/apply" className={styles.primaryCTA}>
          <p>Apply to be a moderator</p>
        </a>
      </div>

      <main className={styles.main}>{message}</main>

      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
