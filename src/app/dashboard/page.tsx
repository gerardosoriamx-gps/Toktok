'use client';

import { useState } from 'react';
import { dummyProducts, Product } from '@/lib/dummy-data';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
      <div>
        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [whatsapp, setWhatsapp] = useState('');
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const products = dummyProducts.filter(p => p.whatsapp === whatsapp);
    setUserProducts(products);
    setSearched(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>
      <form onSubmit={handleSearch} className="w-full max-w-sm mb-8">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="tel"
            placeholder="Enter your WhatsApp number"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Find My Products
          </button>
        </div>
      </form>

      <div className="w-full max-w-4xl">
        {searched && userProducts.length === 0 && (
          <p>No products found for this WhatsApp number.</p>
        )}
        <div className="space-y-4">
          {userProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
