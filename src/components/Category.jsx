import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

const Form = ({ categories, onSubmit }) => {
  const [titleInput] = useInput("");
  const [contentInput] = useInput("");
  const [category, setCategory] = useState(categories[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: titleInput.value,
      content: contentInput.value,
      category: category,
    });
    titleInput.reset();
    contentInput.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label className="label">Title</label>
        <input type="text" {...titleInput} className="input" required />
      </div>

      <div>
        <label className="label">Content</label>
        <textarea {...contentInput} className="input" required />
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

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
