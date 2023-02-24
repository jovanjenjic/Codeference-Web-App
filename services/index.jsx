import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (hide = false) => {
  const query = gql`
    query MyQuery($hide: Boolean!) {
      postsConnection(where: { hide: $hide }, orderBy: date_DESC, first: 100) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            date
            slug
            title
            exce
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { hide });

  return result.postsConnection.edges;
};

export const getLogos = async () => {
  const query = gql`
    query GetLogos {
      logos(first: 100) {
        name
        image {
          url
        }
        subcategories {
          name
          slug
          hide
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result?.logos;
};

export const getCategories = async () => {
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
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getSubCategories = async () => {
  const query = gql`
    query GetSubGategories {
      subcategories {
        name
        slug
        category {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result;
};

export const getSubcategoryDetails = async (slug) => {
  const query = gql`
    query GetSubcategoryDetails($slug: String!) {
      subcategory(where: { slug: $slug }) {
        name
        images(first: 100) {
          url(
            transformation: {
              image: { resize: { width: 800, height: 800, fit: clip } }
            }
          )
        }
        startDate
        endDate
        location
        participantsNumber
        sponsorsText
        lockComponent {
          name
          disabled
        }
        logos(first: 100) {
          name
          image {
            url
          }
        }
        video {
          url
        }
        videoPosterImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        exce
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        date
        slug
        content {
          raw
        }
        subcategory {
          name
        }
        postImages {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (subcategoryName, slug, hide = false) => {
  const query = gql`
    query GetPostDetails(
      $slug: String!
      $subcategoryName: String!
      $hide: Boolean!
    ) {
      posts(
        where: {
          slug_not: $slug
          AND: { subcategory: { name: $subcategoryName }, AND: { hide: $hide } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, {
    slug,
    subcategoryName,
    hide,
  });

  return result.posts;
};

export const getAdjacentPosts = async (
  createdAt,
  slug,
  subcategoryName,
  hide = false
) => {
  const query = gql`
    query GetAdjacentPosts(
      $createdAt: Date!
      $slug: String!
      $hide: Boolean!
      $subcategoryName: String!
    ) {
      next: posts(
        first: 1
        orderBy: date_ASC
        where: {
          slug_not: $slug
          AND: {
            date_gte: $createdAt
            AND: {
              hide: $hide
              AND: { subcategory: { name: $subcategoryName } }
            }
          }
        }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
      previous: posts(
        first: 1
        orderBy: date_DESC
        where: {
          slug_not: $slug
          AND: {
            date_lte: $createdAt
            AND: {
              hide: $hide
              AND: { subcategory: { name: $subcategoryName } }
            }
          }
        }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, {
    slug,
    createdAt,
    subcategoryName,
    hide,
  });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getSubcategoryPost = async (subSlug, hide = false) => {
  const query = gql`
    query GetSubcategoryPosts($subSlug: String!, $hide: Boolean!) {
      postsConnection(
        where: { subcategory: { slug: $subSlug }, hide: $hide }
        orderBy: date_DESC
        first: 100
      ) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            date
            slug
            title
            exce
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { subSlug, hide });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async (hide = false) => {
  const query = gql`
    query GetCategoryPost($hide: Boolean!) {
      posts(
        where: { featuredPost: true, hide: $hide }
        first: 100
        orderBy: date_DESC
      ) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
        date
      }
    }
  `;

  const result = await request(graphqlAPI, query, { hide });

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async (hide = false) => {
  const query = gql`
    query GetPostDetails($hide: Boolean!) {
      posts(where: { hide: $hide }, orderBy: date_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        date
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { hide });

  return result.posts;
};
