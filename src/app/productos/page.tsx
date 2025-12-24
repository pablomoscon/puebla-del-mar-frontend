import ProductsContent from "@/components/products/ProductsContent";
import { productsData } from "@/data/productsData";
import { Product } from "@/types/product.types";

const products: Product[] = productsData;

const ProductsPage = () => {
  
  return <ProductsContent products={products} />;
};

export default ProductsPage;


