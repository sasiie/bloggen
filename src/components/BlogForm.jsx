import React, { useState } from "react";

const BlogForm = ({ categories, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, text, category });
    setTitle("");
    setText("");
    setCategory(categories[0] || "");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label className="label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
      </div>

      <div>
        <label className="label">Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
          required
        />
      </div>

      <div>
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

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default BlogForm;
