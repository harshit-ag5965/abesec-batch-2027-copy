import { useEffect, useState } from 'react';

// this hook or js function helps me to fetch the list of products.
const useProductList = () => {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
    );
    const products = await response.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return productList;
};

export default useProductList;
