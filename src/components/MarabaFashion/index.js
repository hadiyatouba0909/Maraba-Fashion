// src/components/MarabaFashion/index.js
import React from "react";
import ProductGrid from "./ProductGrid";

const MarabaFashion = () => {
  const products = [
    {
      id: 1,
      name: "Sac à main marque Dior",
      price: 10.0,
      rating: 3,
      discount: 7,
      image: "/assets/images/ramatoulaye.webp",
    },
    {
      id: 2,
      name: "Sac à main marque Dior",
      price: 5.0,
      rating: 2,
      discount: 5,
      image: "/assets/images/ramatoulaye.webp",
    },
    {
      id: 3,
      name: "Sac à main marque Dior",
      price: 12.0,
      rating: 5,
      discount: 4,
      image: "/assets/images/ramatoulaye.webp",
    },
  ];

  return <ProductGrid products={products} />;
};

export default MarabaFashion;