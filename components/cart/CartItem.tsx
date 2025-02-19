'use client';

import { CartItem as CartItemType } from '@/lib/types';
import { Button } from '../ui/Button';
import { useCartStore } from '@/lib/store/useCartStore';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4 border-b">
      <img
        src={item.product.imagen}
        alt={item.product.titulo}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium">{item.product.titulo}</h4>
        <p className="text-gray-600">
          ${(item.product.precio * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="secondary"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            variant="secondary"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
            +
          </Button>
          <Button
            variant="danger"
            onClick={() => removeItem(item.product.id)}
            className="ml-4"
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};