import "./App.css";
import Home from "./components/home";
import AddProduct from "./components/add-product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
