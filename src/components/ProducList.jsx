import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading state
        const response = await fetch(
          "https://run.mocky.io/v3/bbf3b222-6f4d-46e9-983c-240a90c16afc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <div className="flex gap-10 px-4">
        <div className="w-1/2">
          <CategoryFilter
            categories={[...new Set(products.map((p) => p.category))]}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        {/* Sorting Dropdown */}
        <div className="mb-4 w-1/2">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded-lg w-full"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
