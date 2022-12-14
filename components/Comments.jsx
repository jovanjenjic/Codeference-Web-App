import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import parse from "html-react-parser";
import PropTypes from "prop-types";

import { getComments } from "../services";

function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    comments.length > 0 && (
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {comments.length} Comments
        </h3>
        {comments.map((comment) => (
          <div
            key={comment?.createdAt}
            className="border-b border-gray-100 mb-4 pb-4"
          >
            <p className="mb-4">
              <span className="font-semibold">{comment.name}</span> on{" "}
              {dayjs(comment.createdAt).format("DD.MM.YYYY.")}
            </p>
            <p className="whitespace-pre-line text-gray-600 w-full">
              {parse(comment.comment)}
            </p>
          </div>
        ))}
      </div>
    )
  );
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Comments;
