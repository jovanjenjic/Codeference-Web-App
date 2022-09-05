import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  PostDetail,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
  Meta,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";
import { AdjacentPosts } from "../../sections";

function PostDetails({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <motion.div exit={{ opacitiy: 0 }}>
      <Meta
        title={post?.title}
        description={post?.exce ?? ""}
        keywords={`Codeference, Codefair, ${post?.title ?? ""}`}
      />
      <div className="container mx-auto lg:px-10 px-6 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts
              slug={post.slug}
              createdAt={post.date || post.createdAt}
              subcategoryName={post?.subcategory?.name}
            />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-20 -top-12">
              <PostWidget
                slug={post.slug}
                subcategoryName={post?.subcategory?.name}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

PostDetails.propTypes = {
  post: PropTypes.arrayOf.isRequired,
};
