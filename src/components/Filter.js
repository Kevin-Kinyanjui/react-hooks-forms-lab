import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onSearchChange(newSearch);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
