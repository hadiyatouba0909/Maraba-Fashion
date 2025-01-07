// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Auth/Login";
import MainLayout from "./components/Layout/MainLayout";
import ProductsList from "./components/MarabaFashion/ProductsList";
import MarabaFashion from "./components/MarabaFashion"; // Changement ici
import CategoriesList from "./components/MarabaFashion/CategoriesList"; // Changement ici

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes with Layout */}
        <Route element={<MainLayout />}>
          <Route path="/maraba-fashion" element={<MarabaFashion />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/categories" element={<CategoriesList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;