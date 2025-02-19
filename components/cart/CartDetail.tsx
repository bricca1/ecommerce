'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '../ui/Button';
import Link from 'next/link';


// Este componente lo realice para seguir expandiendo Funcionalidades
// Sería un carrito al estilo checkout de mercadolibre.

export const CartDetail = () => {
  const { items, updateQuantity, removeItem } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.product.precio * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-8">¿Por qué no agregas algunos productos?</p>
        <Link href="/">
          <Button variant="primary">Continuar Comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {items.map((item) => (
            <div 
              key={item.product.id} 
              className="flex items-start gap-6 pb-6 border-b last:border-0"
            >
              <Link href={`/product/${item.product.id}`} className="shrink-0">
                <img
                  src={item.product.imagen}
                  alt={item.product.titulo}
                  className="w-32 h-32 object-cover rounded"
                />
              </Link>
              
              <div className="flex-1 min-w-0">
                <Link href={`/product/${item.product.id}`}>
                  <h3 className="text-lg font-medium hover:text-blue-500">
                    {item.product.titulo}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  {item.product.categoria}
                </p>
                <p className="text-lg font-bold mt-2">
                  ${item.product.precio.toFixed(2)}
                </p>
                
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="secondary"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  
                  <Button
                    variant="danger"
                    onClick={() => removeItem(item.product.id)}
                  >
                    Eliminar
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 mt-2">
                  Subtotal: ${(item.product.precio * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t p-6 bg-gray-50 rounded-b-lg">
          <div className="flex justify-between items-center text-lg font-bold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="flex gap-4">
            <Link href="/" className="flex-1">
              <Button variant="secondary" className="w-full">
                Seguir Comprando
              </Button>
            </Link>
            <Button variant="primary" className="flex-1">
              Proceder al Pago
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};