import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => (
  <div className="border animate-slideout px-4 py-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 flex justify-center gap-x-10 bg-white">
    <div className="relative w-52 h-44 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full mix-blend-darken "
        loading="lazy"
      />
    </div>
    <div className="ml-4 space-y-4">
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="bg-blue-500 text-white  mt-2 inline-block h-cover w-cover py-1 px-2 rounded-xl"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductItem;
