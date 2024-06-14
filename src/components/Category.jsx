import React from "react";
import useInput from "../hooks/useInput";

const Category = ({ categories, filterCategory, setFilterCategory }) => {
  const { value, onChange } = useInput("");

  return (
    <div>
      <label>Filter by category:</label>
      <div style={{ marginBottom: "10px" }}>
        <button
          className={`category-button ${filterCategory === "" ? "active" : ""}`}
          onClick={() => setFilterCategory("")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${filterCategory === cat ? "active" : ""}`}
            onClick={() => setFilterCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
