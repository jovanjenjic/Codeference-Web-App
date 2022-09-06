import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

function Meta({ description, title, keywords }) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}

Meta.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.string,
};

Meta.defaultProps = {
  description: null,
  title: null,
  keywords: null,
};

export default Meta;
