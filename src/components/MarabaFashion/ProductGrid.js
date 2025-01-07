import React, { useState } from "react";
import { Heart, Star, Search } from "lucide-react";

const ProductGrid = ({ products = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full pl-10 p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
            <div className="relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
              <Heart className="absolute top-2 right-2 text-pink-500 w-6 h-6" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-white">
              {product.name}
            </h3>
            <div className="mt-2 flex items-center">
              <span className="text-pink-600 dark:text-pink-400 text-xl font-bold">
                {product.price.toFixed(2)}€
              </span>
              <button className="ml-auto bg-pink-800 dark:bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-900 dark:hover:bg-pink-800 transition-colors">
                Ajouter au panier
              </button>
            </div>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < product.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;