import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 pb-20"><div className="container mx-auto px-4"><div className="text-center"><div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neon-blue border-r-transparent" /></div></div></div>}>
      <ProductsClient />
    </Suspense>
  );
}
