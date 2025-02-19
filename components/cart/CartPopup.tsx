'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { CartItem } from './CartItem';

interface CartPopupProps {
  onClose: () => void;
}

export const CartPopup: React.FC<CartPopupProps> = ({ onClose }) => {
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (acc, item) => acc + item.product.precio * item.quantity,
    0
  );

  return (
    <div className="fixed sm:absolute right-0 left-0 sm:left-auto top-0 sm:top-full mt-0 sm:mt-2 w-full sm:w-96 max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg border p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Mi carrito</h3>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 p-2"
          aria-label="Cerrar carrito"
        >
          ✕
        </button>
      </div>
      {items.length === 0 ? (
        <>
          <h1 className="text-gray-900 text-center py-4">Tu carrito está vacío.</h1>
          <div className="py-3 flex items-center justify-center">
            <button 
              onClick={onClose} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Seguí comprando
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="text-lg font-medium">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};