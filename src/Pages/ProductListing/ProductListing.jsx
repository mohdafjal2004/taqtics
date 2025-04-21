import React, { useState } from "react";
import style from "./ProductListing.module.css";
import useAPIFetch from "../../hooks/useAPIFetch";
import { capitalise } from "../../Utils/capitalise";
import ProductCard from "../../components/ProductCard/ProductCard";
import { priceRanges, rating } from "../../Utils/filtersObject";
import { useLocation } from "react-router";

const ProductListing = () => {
  const { data: categories } = useAPIFetch({ url: "/products/categories" });
  const { data: productData } = useAPIFetch({ url: "/products" });
  const location = useLocation();

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState(
    location && location.state ? location.state : ""
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRate, setSelectedRange] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filtering logic
  const filteredProducts = productData?.filter((product) => {
    const matchesCategory =
      selectedCategory && selectedCategory !== "all"
        ? product.category === selectedCategory
        : true;
    const matchesPrice = selectedPriceRange
      ? product.price >= priceRanges[selectedPriceRange][0] &&
        product.price <= priceRanges[selectedPriceRange][1]
      : true;
    const matchRating = selectedRate
      ? product.rating.rate >= selectedRate
      : true;
    const matchesSearch = searchInput
      ? product.title.toLowerCase().includes(searchInput.toLowerCase())
      : true;
    return matchesCategory && matchesPrice && matchRating && matchesSearch;
  });
  if (sortBy === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price); // Low to High
  } else if (sortBy === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price); // High to Low
  }
  return (
    <div className={style.wrapper}>
      <p className={style.header}>Discover Excellence in Every Detail</p>
      <div className={style.container}>
        {/* Filters Section */}
        <div className={style.mobileFiltersContainers}>
          <p className={style.sort}>
            <select name="" id="" onChange={(e) => setSortBy(e.target.value)}>
              <option value="" hidden>
                Sort By
              </option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </p>
          <p className={style.inputFilter}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search here..."
            />
          </p>
          <p className={style.dropDownFilter}>
            {" "}
            {/* Category Filter */}
            <select
              className={style.mobileFilters}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" hidden>
                Category
              </option>
              <option value="all">All</option>
              {categories &&
                categories.map((item, index) => (
                  <option key={index} value={item}>
                    {capitalise(item)}
                  </option>
                ))}
            </select>
            {/* Price Range Filter */}
            <select
              className={style.mobileFilters}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="" hidden>
                Price
              </option>
              {Object.keys(priceRanges).map((range, index) => (
                <option key={index} value={range}>
                  ${range.replace("-", " - ")}
                </option>
              ))}
            </select>
            {/* Price Range Filter */}
            <select
              className={style.mobileFilters}
              onChange={(e) => setSelectedRange(e.target.value)}
            >
              <option value="" hidden>
                Rating
              </option>
              {rating.map((rate, index) => (
                <option key={rate.id} value={rate.rate}>
                  {rate.rate} {index === 0 ? "Star" : "Stars"}
                </option>
              ))}
            </select>
          </p>
        </div>

        {/* Products Display */}
        <div className={style.productMainSection}>
          <div className={style.productsContainer}>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
