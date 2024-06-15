"use client";
import React, { useState } from "react";

const CategoryFilter = ({ onCategorySelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Cream",
      value: "Cream",
    },
    {
      id: 3,
      name: "Makeup",
      value: "Makeup",
    },
    {
      id: 4,
      name: "Brush",
      value: "Brush",
    },
    {
      id: 5,
      name: "Lotion",
      value: "Lotion",
    },
  ];

  return (
    <div className="w-full flex gap-4  scrollbar-hide pt-6 bg-white">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            onCategorySelect(item.value);
          }}
          className={`border p-1 px-4 text-sm rounded-md border-gray-300 hover:border-white hover:text-white font-semibold hover:bg-gray-800 ${
            activeIndex === index
              ? "border-gray-800 bg-gray-800 text-white"
              : "text-gray-900"
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
