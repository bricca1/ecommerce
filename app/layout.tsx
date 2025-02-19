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
        <main className='pt-16'>
          {children}
        </main>
      </body>
    </html>
  )
}