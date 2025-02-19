import { products } from '@/lib/data/products';
import { ProductDetail } from '@/components/product/ProductDetail/ProductDetail';
import { Product } from '@/lib/types';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const findProductById = async (id: string): Promise<Product | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = products?.find(p => p.id === parseInt(id));
      resolve(data || null);
    }, 1000);
  });
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return <main><p>ID de producto no válido</p></main>;
  }

  const product = await findProductById(id);

  if (!product) {
    return <main><p>Producto no encontrado</p></main>;
  }

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
}