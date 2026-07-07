import { useState } from "react";
import "./Filter.css";

const types = [
  "All",
  "Electric",
  "Fire",
  "Water",
  "Grass",
  "Ghost",
  "Psychic",
  "Fighting",
];

function Filter({ selectedType, onFilterChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (type) => {
    onFilterChange(type);
    setOpen(false);
  };

  return (
    <div className="filter">
      <button
        className="filter-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedType === "All" ? "Filter" : selectedType}
        {" "}
        {open ? "▲" : "▼"}
      </button>

      {open && (
        <div className="filter-menu">
          {types.map((type) => (
            <button
              key={type}
              className={`filter-item ${
                selectedType === type ? "active" : ""
              }`}
              onClick={() => handleSelect(type)}
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;