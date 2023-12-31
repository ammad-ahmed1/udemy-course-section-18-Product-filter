import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import Product from "./Product";
import "./ProductList.css";
import { products as productData } from "../../product-data";
//getting all categories in product data
const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category)),
];
const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterProducts = (category) => {
    if (category === "all") {
      setProducts(productData);
      return;
    }
    const newProduct = productData.filter(
      (product) => product.category === category
    );
    setProducts(newProduct);
  };
  useEffect(() => {
    console.log(allCategories);
    setFilteredProduct(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, products]);
  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="color-white">
            <span className="color-danger">Product</span> Filter
          </h1>
          <div className="flex-between flex-direction-column py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories categories={categories} filterItems={filterProducts} />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container grid-25 py-2">
          {filteredProduct.length === 0 ? (
            <h3>No product found</h3>
          ) : (
            filteredProduct.map((product) => {
              const { id, title, image, price } = product;

              return (
                <div key={id}>
                  <Product title={title} img={image} price={price} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
