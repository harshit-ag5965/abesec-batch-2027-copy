import ProductCard from './ProductCard';
// import products from '../data/products';
import { useEffect, useState } from 'react';

const ProductList = () => {
  let [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState(productList);
  let [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
    );
    const products = await response.json();
    setProductList(products);
    setFilteredProductList(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Hello');
  }, []);

  function handleFilterButtonClick() {
    const filteredProducts = productList.filter(
      (product) => product.rating > 4
    );
    setFilteredProductList(filteredProducts);
  }

  function handleSearchFilter() {
    const filteredProducts = productList.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProductList(filteredProducts);
  }

  function handleResetButton() {
    setFilteredProductList(productList);
  }

  return (
    <section className='products'>
      <h1>Trending Products</h1>

      <div className='search-filter'>
        <input
          className='search-filter-input'
          type='search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className='search-button' onClick={handleSearchFilter}>
          Search
        </button>
        <button onClick={handleFilterButtonClick} className='filter-button'>
          Filter Top Rated Products
        </button>
        <button className='reset-button' onClick={handleResetButton}>
          Reset
        </button>
      </div>

      <div className='products-grid'>
        {filteredProductList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
