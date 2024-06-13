import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";
import BlogForm from "../components/BlogForm";
import CommentForm from "../components/CommentForm";
import { AuthContext } from "../context/AuthContext";

const initialPosts = [
  {
    id: 1,
    title: "First Post",
    author: "Monica",
    text: "did you see what they wore on the red carpet?",
    category: "Lifestyle",
    comments: [],
  },
  {
    id: 3,
    title: "First Post",
    author: "Rose",
    text: "Have you read the newest book from...",
    category: "Romance",
    comments: [],
  },
  {
    id: 4,
    title: "First Post",
    author: "Jane",
    text: "This movie is the best movie ever",
    category: "Romance",
    comments: [],
  },
  {
    id: 5,
    title: "First Post",
    author: "Justin",
    text: "This is the new workout regime!",
    category: "Lifestyle",
    comments: [],
  },
  {
    id: 2,
    title: "Second Post",
    author: "Barbara",
    text: "how do you update the iphone?",
    category: "General",
    comments: [],
  },
];

const categories = ["General", "Romance", "Lifestyle", "Business"];

const BlogPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [posts, setPosts] = useState(initialPosts);
  const [filterCategory, setFilterCategory] = useState("");

  const addPost = (newPost) => {
    setPosts([
      ...posts,
      {
        ...newPost,
        id: posts.length + 1,
        author: currentUser.email.split("@")[0],
        comments: [],
      },
    ]);
  };

  const addComment = (postId, text) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { text, author: currentUser.email.split("@")[0] },
          ],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
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
            <h4>Comments</h4>
            {post.comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>
                  <strong>{comment.author}:</strong> {comment.text}
                </p>
              </div>
            ))}
            <CommentForm onSubmit={(text) => addComment(post.id, text)} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default BlogPage;
