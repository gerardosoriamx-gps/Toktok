'use client';

import { useState, useMemo } from 'react';
import { dummyProducts, Product } from '@/lib/dummy-data';

function ProductCard({ product }: { product: Product }) {
  const whatsappLink = `https://wa.me/${product.whatsapp}?text=Hola,%20estoy%20interesado%20en%20tu%20producto%20'${product.name}'`;

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-4">${product.price}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600"
      >
        Contact on WhatsApp
      </a>
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      return dummyProducts;
    }
    return dummyProducts.filter(product =>
      product.whatsapp.startsWith(searchQuery)
    );
  }, [searchQuery]);

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Local Online Store</h1>
      <p className="text-gray-600 mb-8">Find products in your area by phone prefix.</p>

      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Enter phone prefix (e.g., 5566)"
          className="w-full px-4 py-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center mt-8">No products found for this area.</p>
        )}
      </div>
    </main>
  );
}
