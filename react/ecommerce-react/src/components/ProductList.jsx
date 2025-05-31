import useProductList from '../utils/useProductList';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const productList = useProductList();
  const [filteredProductList, setFilteredProductList] = useState(productList);
  let [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

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
