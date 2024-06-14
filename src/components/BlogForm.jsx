import React, { useState, useEffect } from "react";

const BlogForm = ({ categories, onSubmit, currentUser, onCancel }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  useEffect(() => {
    if (currentUser) {
      setTitle(currentUser.title);
      setText(currentUser.text);
      setCategory(currentUser.category);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...currentUser,
      title,
      text,
      category,
    });
    setTitle("");
    setText("");
    setCategory(categories[0] || "");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="blog-container">
        <label className="label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
      </div>

      <div className="blog-container">
        <label className="label">Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
          required
        />
      </div>

      <div className="blog-container">
        <label className="label">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">
        {currentUser ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default BlogForm;
