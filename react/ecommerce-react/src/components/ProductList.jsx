import ProductCard from "./ProductCard";
// import products from '../data/products';
import { useEffect, useState } from "react";

const ProductList = () => {
  let [productList, setProductList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products"
    );
    const products = await response.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Hello");
  }, []);

  function handleFilterButtonClick() {
    productList = productList.filter((product) => product.rating > 4);
    setProductList(productList);
  }

  return (
    <section className="products">
      <h1>Trending Products</h1>
      {/* 
        div className=search-filter
            search input : onChange((e) => setSearchText(e.target.value))
            button with name Search: onClick={handleSearchFilter}

        div
      */}
      <button onClick={handleFilterButtonClick} className="filter-button">
        Filter Top Rated Products
      </button>
      <div className="products-grid">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
