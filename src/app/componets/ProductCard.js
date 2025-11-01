import React, { memo } from "react";

function ProductCard({ product }) {
  return (
    <div
      key={product?.id}
      className="col-span-12 md:col-span-3 bg-white rounded-xl shadow-2xl p-3 "
    >
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src={product?.imageUrl}
          alt={product?.productName}
          className="w-full h-48 object-cover rounded-t-md"
          onError={(e) => {
            e.currentTarget.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuYqXFIPj9pzDHrN9Q9OiPZxieJvhNWYaQw&s";
          }}
        />
      </div>

      <div className="flex justify-between px-3 items-center mt-3">
        <div className="font-bold text-lg truncate">{product?.productName}</div>
        <div className="text-xs border border-gray-100 px-2 py-1 rounded-xl">
          {product?.category}
        </div>
      </div>

      <div className="flex justify-between px-3 items-center mt-1">
        <div className="font-bold text-lg text-green-600">{product?.price}</div>
        <div
          className={`text-xs text-white px-3 py-1 rounded-2xl ${
            product?.availableUnits != 0 ? "bg-[#1e3a8a]" : "bg-red-500"
          }`}
        >
          {product?.availableUnits != 0 ? "In Stock" : "Out of Stock"}
        </div>
      </div>

      <div className="px-3 py-2 text-sm text-gray-600">
        {product?.availableUnits} units available
      </div>
    </div>
  );
}

export default memo(ProductCard);
