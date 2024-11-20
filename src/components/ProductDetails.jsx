import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-400 hover:text-blue-600 flex justify-center items-center"
      >
        <svg
          class="w-5 h-5 text-blue-400 hover:text-blue-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        Back to Products
      </button>
      <div className=" md:justify-between md:flex md:mx-28">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2  h-1/3 object-cover my-4 mix-blend-darken"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl  mt-4 hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
