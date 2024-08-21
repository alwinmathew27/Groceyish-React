import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import categoriesData from "../ExploreCategories.json";
// Imported all images
const imageContext = require.context(
  "../../assets/images/explore categories",
  false,
  /\.(png|jpe?g|svg|avif)$/
);
const images = {};
imageContext.keys().forEach((key) => {
  const imageName = key.replace("./", "");
  images[imageName] = imageContext(key);
});
const CategorySlider = () => {
  const [filter, setFilter] = useState("All");
  const [centerIndex, setCenterIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7);
  const categories = categoriesData.categories.map((cat) => ({
    ...cat,
    image: images[cat.image] || cat.image,
  }));
  const filteredCategories =
    filter === "All"
      ? categories
      : categories.filter((cat) => cat.type === filter);
  useEffect(() => {
    // Update visible items based on screen size
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setVisibleItems(2);
      } 
        else if (screenWidth < 640) {
        setVisibleItems(3);
      } else if (screenWidth < 768) {
        setVisibleItems(4);
      } else if (screenWidth < 1024) {
        setVisibleItems(6);
      } else {
        setVisibleItems(7);
      }
    };
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);
  useEffect(() => {
    setCenterIndex(0); 
  }, [filter]);
  const handlePrev = () => {
    setCenterIndex((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCenterIndex((prev) =>
      Math.min(filteredCategories.length - visibleItems, prev + 1)
    );
  };
  const uniqueTypes = ["All", ...new Set(categories.map((cat) => cat.type))];
  const getVisibleCategories = () => {
    const start = centerIndex;
    const end = Math.min(filteredCategories.length, centerIndex + visibleItems);
    return filteredCategories.slice(start, end);
  };
  return (
    <div className="wrapper container mx-auto py-16">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Explore Categories</h2>
        <div className="hidden max-[540px]:hidden sm:block space-x-4">
          {uniqueTypes.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded  ${
                filter === category ? "bg-green-500 text-white" : "bg-gray-200"
              } `}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          disabled={centerIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex overflow-hidden w-full">
          {getVisibleCategories().map((category, index) => (
            <div
              key={index}
              className={`px-4`}
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <div
                className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 object-contain rounded-lg mb-2"
                />
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.items} items</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          disabled={centerIndex >= filteredCategories.length - visibleItems}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
export default CategorySlider;
