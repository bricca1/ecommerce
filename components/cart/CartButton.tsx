'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { useState } from 'react';
import { CartPopup } from './CartPopup';
import { CartItem } from '@/lib/types';

export const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce<CartItem[]>((acc, item) => {
    if (!acc.some((i) => i.id !== item.id)) {
      acc.push(item);
    }
    return acc;
  }, []).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
      >
        🛒 <span className="font-medium">{totalItems}</span>
      </button>
      {isOpen && <CartPopup onClose={() => setIsOpen(false)} />}
    </div>
  );
};