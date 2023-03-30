import React from "react";

function Filter({ onFilterTitleChange, onFilterRatingChange }) {
  return (
    <div className="header">
    <div className="filter">
      <label htmlFor="filter-title">Title:</label>
      <input
        className="Text"
        placeholder="Enter Movie Name" 
        type="text"
        id="filter-title"
        onChange={(e) => onFilterTitleChange(e.target.value)}
      />
      <label htmlFor="filter-rating">Rating:</label>
      <input
        className="Text"
        type="number"
        id="filter-rating"
        min="0"
        max="10"
        step="0.1"
        onChange={(e) => onFilterRatingChange(e.target.value)}
      />
    </div>
    </div>
  );
}

export default Filter;
