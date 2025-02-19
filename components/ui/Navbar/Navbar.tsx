'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './navbar.module.css';
import { CartButton } from '@/components/cart/CartButton';
import Image from "next/image";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.img}
            src="/Global.png" 
            alt="imagen"
            width={500} 
            height={300}
          />
        </Link>
        <div className={styles.cartContainer}>
          <CartButton />
        </div>
      </div>
    </nav>
  )
}