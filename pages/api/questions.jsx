import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateQuestion(
      $name: String!
      $email: String!
      $question: String!
    ) {
      createQuestion(
        data: { name: $name, email: $email, question: $question }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    question: req.body.question,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}
