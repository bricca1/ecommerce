'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="w-full min-h-screen">
      {/* Mobile View (< 768px) */}
      <div className="md:hidden">
        <Button 
          variant="secondary" 
          onClick={() => router.back()} 
          className="m-4"
        >
          ← Volver
        </Button>
        <div className="px-4 space-y-4 items-center">
          <h1 className="text-lg font-medium">{product.titulo}</h1>
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-xl font-medium">${product.precio.toFixed(2)}</p>
            <div className='flex flex-row items-center'>
              <Rating value={product.rating} />
              <span className="text-sm ml-2 ">{product.rating}</span>
            </div>

          </div>
          <div className="aspect-square w-full relative">
            <img
              src={product.imagen}
              alt={product.titulo}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mb-20">{product.descripcion}</p>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
            <Button
              variant="primary"
              onClick={() => addItem(product)}
              className="w-full"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet View (768px - 1024px) */}
      <div className="hidden md:block lg:hidden">
        <div className="max-w-2xl mx-auto p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-xl font-medium">{product.titulo}</h1>
              <p className="text-xl font-medium">${product.precio.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Rating value={product.rating} />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="aspect-[16/9] w-full relative">
              <img
                src={product.imagen}
                alt={product.titulo}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600">{product.descripcion}</p>
            <Button
              variant="primary"
              onClick={() => addItem(product)}
              className="w-full"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop View (> 1024px) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <Button 
          variant="secondary" 
          onClick={() => router.back()} 
          className="my-6"
        >
          ← Volver
        </Button>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square w-full relative border rounded-lg">
              <img
                src={product.imagen}
                alt={product.titulo}
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            </div>
            <div>
              <h2 className="font-medium mb-2">Descripcion</h2>
              <p className="text-sm text-gray-600">{product.descripcion}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-medium">{product.titulo}</h1>
            <div className="flex items-center gap-2">
              <Rating value={product.rating} />
              <span className="text-sm">{product.rating}</span>
            </div>
            <p className="text-sm text-gray-600">
              {`Calificación ${ product.rating } de 5.  500opiniones`}
            </p>
            <p className="text-xl font-medium">${product.precio.toFixed(2)}</p>
            <div className="space-y-2">
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                Ver los medios de pago
              </p>
              <p className="text-sm font-medium">Llega gratis hoy</p>
              <p className="text-sm">Más formas de entrega</p>
              <p className="text-sm">Devolución gratis</p>
              <p className="text-sm">Tenés 30 días desde que lo recibís.</p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                Conocer más
              </p>
            </div>
            <Button
              variant="primary"
              onClick={() => addItem(product)}
              className="w-full py-3"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};