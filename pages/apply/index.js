import React from "react";
import Head from "next/head";

import { formium } from "../../lib/formium";
import { FormiumForm, defaultComponents } from "@formium/react";
import styles from "../../styles/Home.module.css";

export async function getStaticProps(context) {
  // You can find your form's slug in the API Information panel
  // on your form's Overview page in the dashboard.
  const form = await formium.getFormBySlug("findamod");
  return { props: { form } };
}
// Your formium form is now available as a prop
export default function Apply({ form }) {
  console.log(form); // Check your console to ensure you're fetching data
  return (
    <div className={styles.container}>
      <Head>
        <title>Apply to be a moderator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FormiumForm
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm("findamod", values);
            alert("Success");
          }}
          components={defaultComponents}
          data={form}
        />
      </main>
      <footer className={styles.footer}>Copyright 2021 findamod.com</footer>
    </div>
  );
}
