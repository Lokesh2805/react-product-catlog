import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProducList";
import ProductDetails from "./components/ProductDetails";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [cart, setCart] = useState([]); // Cart state

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Link to={"/"} className="text-4xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Prodify
            </span>
          </Link>
          <div className="relative">
            <ShoppingCartIcon className="h-8 w-8 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
