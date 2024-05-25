import React, { useState } from "react";
import Form from "./Form";
import Post from "./Post";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories] = useState(["Tech", "Lifestyle", "Business"]);
  const [filterCategory, setFilterCategory] = useState("");

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const filteredPosts = filterCategory
    ? posts.filter((post) => post.category === filterCategory)
    : posts;

  return (
    <div>
      <h1>Blog</h1>
      <Form categories={categories} onSubmit={addPost} />

      <div>
        <label>Filter by category:</label>
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          value={filterCategory}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
