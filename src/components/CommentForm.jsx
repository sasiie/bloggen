import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="comment-input"
        placeholder="Add a comment..."
        required
      />
      <button type="submit" className="comment-submit-button">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
