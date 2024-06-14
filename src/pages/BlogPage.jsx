import React, { useContext, useState } from "react";
import PageLayout from "../components/PageLayout";
import BlogForm from "../components/BlogForm";
import CommentForm from "../components/CommentForm";
import { AuthContext } from "../context/AuthContext";
import Category from "../components/Category";

const initialPosts = [
  {
    id: 1,
    title: "Red Carpet",
    author: "Monica",
    text: "did you see what they wore on the red carpet?",
    category: "Lifestyle",
    comments: [],
  },
  {
    id: 3,
    title: "So dreamyyy",
    author: "Rose",
    text: "Have you read the newest book from...",
    category: "Romance",
    comments: [],
  },
  {
    id: 4,
    title: "Have you seen it?",
    author: "Jane",
    text: "This movie is the best movie ever",
    category: "Romance",
    comments: [],
  },
  {
    id: 5,
    title: "This one killed me!",
    author: "Justin",
    text: "This is the new workout regime!",
    category: "Lifestyle",
    comments: [],
  },
  {
    id: 2,
    title: "Please help",
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
  const [editingPost, setEditingPost] = useState(null);

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

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    setEditingPost(null);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
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
    <PageLayout
      title="Home"
      headline={`Welcome back ${currentUser.email.split("@")[0]}!`}
    >
      <BlogForm
        categories={categories}
        onSubmit={editingPost ? updatePost : addPost}
        currentUser={editingPost}
        onCancel={() => setEditingPost(null)}
      />
      <Category
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className="blog-posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="blog-container">
            <h3>{post.title}</h3>
            <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>{post.text}</p>
            <p>
              <strong>Category:</strong> {post.category}
            </p>
            <div className="post-actions">
              <button
                className="edit-button"
                onClick={() => setEditingPost(post)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
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
