import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="w-64 h-64 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
      <div className="w-full h-[160px] overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="object-contain h-full"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
