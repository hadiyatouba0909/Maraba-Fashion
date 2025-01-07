import React, { useState } from 'react';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';

const CategoriesList = () => {
  const [categories] = useState([
    {
      id: 1,
      name: "Sacs",
      description: "Sacs à main et accessoires",
      totalProducts: 15,
      image: "/assets/images/ramatoulaye.webp",
      createdAt: "2024-01-05",
    },
    {
      id: 2,
      name: "Chaussures",
      description: "Chaussures pour femmes",
      totalProducts: 25,
      image: "/assets/images/ramatoulaye.webp",
      createdAt: "2024-01-05",
    },
    {
      id: 3,
      name: "Vêtements",
      description: "Vêtements tendance",
      totalProducts: 30,
      image: "/assets/images/ramatoulaye.webp",
      createdAt: "2024-01-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-800 dark:text-pink-400">
          Liste des Catégories
        </h1>
        <button className="flex items-center gap-2 bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-900 transition-colors">
          <Plus size={20} />
          Ajouter une catégorie
        </button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher une catégorie..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Nombre de Produits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Date de Création</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={category.image} alt={category.name} className="h-12 w-12 rounded-lg object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{category.totalProducts}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{category.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400">
                      <Pencil size={20} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 dark:hover:text-red-400">
                      <Trash2 size={20} />
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

export default CategoriesList;