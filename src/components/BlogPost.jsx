import React from "react";

const BlogPost = ({ title, content, category }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{category}</span>
    </div>
  );
};

export default BlogPost;
