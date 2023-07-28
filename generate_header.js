// script used to fetch and generate categories data for header
// regarding better SEO

/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');

const { request, gql } = require('graphql-request');

const fs = require('fs');

dotenv.config();

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
        subcategories {
          name
          slug
          hide
        }
        order
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

(async () => {
  const categories = await getCategories();

  if (!fs.existsSync(`${process.cwd()}/data`)) {
    fs.mkdirSync(`${process.cwd()}/data`);
  }

  fs.writeFile(
    `${process.cwd()}/data/header.json`,
    JSON.stringify(categories),
    (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    }
  );
})();
