import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartButton } from '../components/cart/CartButton';
import Navbar from '@/components/ui/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global E-commerce',
  description: 'Global E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <Navbar />
        </header>
        <div className="w-full py-12 md:py-16 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Global E-commerce</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mt-4">
            Descubre una experiencia de compra única con productos de calidad, envíos rápidos y un servicio excepcional.
            Encuentra todo lo que necesitas en un solo lugar, con ofertas exclusivas y la mejor atención.
          </p>
        </div>
        <main className='pt-16'>
          {children}
        </main>
      </body>
    </html>
  )
}