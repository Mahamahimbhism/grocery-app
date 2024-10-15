
import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-[250px] flex flex-col items-center">
      <div className="w-full h-[200px] overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="object-contain h-full"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-green-600 font-bold">{price}</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
