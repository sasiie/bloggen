import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";
import BlogForm from "../components/BlogForm";  
import { AuthContext } from "../context/AuthContext";

const initialPosts = [
  {
    id: 1,
    title: "First Post",
    author: "Jane Doe",
    text: "This is the first blog post by Jane Doe.",
    category: "Romance",
  },
  {
    id: 3,
    title: "First Post",
    author: "Jane Doe",
    text: "This is the first blog post by Jane Doe.",
    category: "Lifestyle",
  },
  {
    id: 4,
    title: "First Post",
    author: "Jane Doe",
    text: "This is the first blog post by Jane Doe.",
    category: "Romance",
  },  {
    id: 5,
    title: "First Post",
    author: "Jane Doe",
    text: "This is the first blog post by Jane Doe.",
    category: "Lifestyle",
  },
  {
    id: 2,
    title: "Second Post",
    author: "Jane Doe",
    text: "This is the second blog post by Jane Doe.",
    category: "General",
  },
];

const categories = ["General", "Romance", "Lifestyle", "Business"];

const BlogSida = () => {
  const { currentUser } = useContext(AuthContext);

  const { userName } = useContext(UserContext);
  const [posts, setPosts] = useState(initialPosts);
  const [filterCategory, setFilterCategory] = useState("");

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  const filteredPosts = filterCategory
    ? posts.filter((post) => post.category === filterCategory)
    : posts;

  return (
    <PageLayout title="Home" headline={`Välkommen in ${currentUser.email}!`}>
      <BlogForm categories={categories} onSubmit={addPost} /> 
      <div>
        <h2>Blog</h2>
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
        {filteredPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>{post.text}</p>
            <p>
              <strong>Category:</strong> {post.category}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default BlogSida;
