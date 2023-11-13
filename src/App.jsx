import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Categories from "./components/categories/Categories";
import ProductList from "./components/product/ProductList";

function App() {
  return (
    <>
      {/* <Categories /> */}
      <ProductList />
    </>
  );
}

export default App;
