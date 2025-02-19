'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { ProductCard } from '../ProductCard/ProductCard';
import { Input } from '../../ui/Input';
import NotFound from './NotFound/NotFound.';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [productList, setProductList] = useState<Product[]>(products);

  const categories = ['Todos', 'Electrónica', 'Accesorios', 'Computadoras'];

  const toggleFavorite = (productId: number) => {
    setProductList((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, fav: !product.fav }
          : product
      )
    );
  };

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.titulo
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos' || selectedCategory === '' 
        ? true
        : product.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
          {`${filteredProducts?.length} Productos`}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavoriteToggle={toggleFavorite}
          />
        ))}
      </div>
      <div>
          <NotFound filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};