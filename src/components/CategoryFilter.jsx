import React from "react";

const CategoryFilter = ({ categories, onCategorySelect }) => (
  <div className="mb-4">
    <select
      onChange={(e) => onCategorySelect(e.target.value)}
      className="border p-2 rounded-lg w-full"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
