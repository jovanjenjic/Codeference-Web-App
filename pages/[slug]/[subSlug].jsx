import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import {
  getCategories,
  getSubcategoryDetails,
  getSubcategoryPost,
} from "../../services";
import {
  PostCard,
  Loader,
  AfterMovieAndVideos,
  Support,
  Meta,
} from "../../components";

function CategoryPost({ posts, subDetails }) {
  const [sizeAndPages, setSizeAndPages] = useState({ size: 3, page: 1 });
  const postsLength = posts?.length || 0;

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const { size, page } = sizeAndPages;

  return (
    <>
      <Meta
        title={subDetails?.name ?? "Codeference"}
        description={subDetails?.name}
        keywords="Codeference, Codefair, 2021, 2022, Codeference 2022, Codefair 2022, Konferencija, IT, Novi Sad, Zlatibor, Codeference 2021, Codefair 2021"
      />
      <AfterMovieAndVideos
        videoUrl={subDetails?.videoUrl}
        subDetails={subDetails}
        images={subDetails?.images}
      />
      <Support subDetails={subDetails} />
      <div className="container mx-auto lg:px-10 px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="relative col-span-1 lg:col-span-8 lg:col-start-3 mt-8">
            {posts.slice(0, size * page).map((post) => (
              <PostCard key={post.createdAt} post={post.node} />
            ))}
          </div>
        </div>
        {size * page < postsLength && (
          <div className="text-center w-full flex justify-around max-w-7xl mx-auto">
            <button
              onClick={() =>
                setSizeAndPages({ ...sizeAndPages, page: page + 1 })
              }
              type="button"
              className="w-60 transition duration-500 ease transform hover:-translate-y-1 flex bg-sky-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
            >
              Prikaži više vesti
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-5 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getSubcategoryPost(params.subSlug);
  const subDetails = await getSubcategoryDetails(params.subSlug);

  return {
    props: { posts, subDetails: subDetails?.subcategory },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = [];
  categories?.forEach((cat) => {
    cat?.subcategories?.forEach((sub) => {
      if (!sub.hide)
        paths.push({ params: { slug: cat.slug, subSlug: sub?.slug } });
    });
  });

  return {
    paths,
    fallback: true,
  };
}

CategoryPost.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
  subDetails: PropTypes.arrayOf.isRequired,
};
