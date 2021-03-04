import React from "react";
import Head from "next/head";
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
  const myComponents = {
    ...defaultComponents,
    ...components,
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Apply to be a moderator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <FormiumForm
            onSubmit={async (values) => {
              // Send form values to Formium
              await formium.submitForm("findamod", values);
              alert("Success");
            }}
            components={myComponents}
            data={form}
          />
        </div>
      </main>
      <footer className={styles.footer}>copyright 2021 findamod.com</footer>
    </div>
  );
}
