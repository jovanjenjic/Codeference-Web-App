import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import * as ga from "../lib";
import { Layout } from "../components";
import "../styles/globals.scss";
import "../styles/card.css";
import "../styles/afterMovie.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const use = async () => {
      // eslint-disable-next-line
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js" />
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
