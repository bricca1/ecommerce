import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar/Navbar';
import Banner from '@/components/ui/Banner';

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
        <Banner />
        <main className='pt-16'>
          {children}
        </main>
      </body>
    </html>
  )
}