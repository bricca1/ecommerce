
"use client";

import { usePathname } from 'next/navigation';

const Banner = () => {
  const pathname = usePathname();

  if (pathname !== '/') return null;

  return (
    <div className="w-full py-12 md:py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Global E-commerce</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mt-4">
        Descubre una experiencia de compra única con productos de calidad, envíos rápidos y un servicio excepcional.
        Encuentra todo lo que necesitas en un solo lugar, con ofertas exclusivas y la mejor atención.
      </p>
    </div>
  );
};

export default Banner;
