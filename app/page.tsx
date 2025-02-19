import { products } from '@/lib/data/products'
import { ProductList } from '../components/product/ProductList/ProductList';

export default function Home() {
  return (
    <main>
      <ProductList products={products} />
    </main>
  )
}