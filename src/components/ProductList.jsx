import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://dummyjson.com/products');
  const searchTerm = useSelector(state => state.cart.search);

  const filteredProducts = products?.products?.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())) || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
