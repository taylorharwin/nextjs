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

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    // router.push(href);
  };

  const message = success ? (
    <h3>Your response is tracked. Thanks so much!</h3>
  ) : (
    <FormiumForm
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm("email", values);
        setSuccess(true);
      }}
      components={myComponents}
      data={form}
    />
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

        <div className={styles.grid}>{message}</div>
      </main>

      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
