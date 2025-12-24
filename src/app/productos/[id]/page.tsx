import ProductDetailsContent from '@/components/products/details/ProductDetailsContent';
import { productsData } from '@/data/productsData';
import { Product, ProductDetailsPageProps } from '@/types/product.types';
import { notFound } from 'next/navigation';

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  const product: Product | undefined = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) => p.id !== product.id);

  return (
    <ProductDetailsContent product={product} relatedProducts={relatedProducts} />
  );
};

export default ProductDetailsPage;
