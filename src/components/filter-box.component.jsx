import React from "react";

const FilterBox = ({ handleActive, handleAll, handleCompleted, filter }) => {
  return (
    <li className="filter-box">
      <button
        className={`filter-box__filter ${
          filter === "all" ? "filter-box__filter--all" : ""
        }`}
        onClick={handleAll}
      >
        All
      </button>
      <button
        className={`filter-box__filter ${
          filter === "active" ? "filter-box__filter--active" : ""
        }`}
        onClick={handleActive}
      >
        Active
      </button>
      <button
        className={`filter-box__filter ${
          filter === "completed" ? "filter-box__filter--completed" : ""
        }`}
        onClick={handleCompleted}
      >
        Completed
      </button>
    </li>
  );
};

export default FilterBox;
