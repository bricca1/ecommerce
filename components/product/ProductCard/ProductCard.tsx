'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Rating } from '../../ui/Rating';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onFavoriteToggle: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onFavoriteToggle,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative pb-[100%]">
          <img
            src={product.imagen}
            alt={product.titulo}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-lg font-medium hover:text-blue-500">
              {product.titulo}
            </h3>
          </Link>
          <button
            onClick={() => onFavoriteToggle(product.id)}
            className="text-2xl hover:scale-110 transition-transform"
          >
            {product.fav ? '❤️' : '🤍'}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{product.categoria}</span>
          <Rating value={product.rating} />
        </div>
        <p className="text-gray-600 line-clamp-2 text-sm">
          {product.descripcion}
        </p>
        <p className="text-lg font-bold">${product.precio.toFixed(2)}</p>
        <Button
          variant="primary"
          onClick={() => addItem(product)}
          className="w-full"
        >
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};