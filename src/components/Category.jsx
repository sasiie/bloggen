import React from "react";
import useInput from "../hooks/useInput";

const Category = ({ categories, filterCategory, setFilterCategory }) => {
  const { value, onChange } = useInput(""); 
  return (
    <div>
      <label>Filter by category:</label>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;

