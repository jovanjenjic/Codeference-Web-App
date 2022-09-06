import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components";
import "../styles/globals.scss";
import "../styles/card.css";
import "../styles/afterMovie.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const use = async () => {
      // eslint-disable-next-line
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="/cod-og-img.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} /> {/* eslint-disable-line */}
      </Layout>
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.any.isRequired, // eslint-disable-line
};

export default MyApp;
