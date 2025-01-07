import React, { useState } from 'react';
import { Pencil, Trash2, Plus, View, Search } from 'lucide-react';

const ProductsList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Sac à main marque Dior",
      price: 10.0,
      category: "Sacs",
      stock: 15,
      rating: 3,
      discount: 7,
      image: "/assets/images/ramatoulaye.webp",
    },
    {
      id: 2,
      name: "Sac à main marque Dior",
      price: 5.0,
      category: "Sacs",
      stock: 8,
      rating: 2,
      discount: 5,
      image: "/assets/images/ramatoulaye.webp",
    },
    {
      id: 3,
      name: "Sac à main marque Dior",
      price: 12.0,
      category: "Sacs",
      stock: 20,
      rating: 5,
      discount: 4,
      image: "/assets/images/ramatoulaye.webp",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-800 dark:text-pink-400">
          Liste des Produits
        </h1>
        <button className="flex items-center gap-2 bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-900 transition-colors">
          <Plus size={20} />
          Ajouter un produit
        </button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full pl-10 p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Prix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Réduction</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Action </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.price.toFixed(2)} €</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.discount} %</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400">
                      <Pencil size={20} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 dark:hover:text-red-400">
                      <Trash2 size={20} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 dark:hover:text-red-400">
                      <View size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;