import React from 'react';
import { productData } from '../constants/productData';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              New <br />
              <span className="text-red-600">Arrivals</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Hand-Picked Premium Quality</p>
          </div>
          <div className="pb-2">
            <button className="text-xs font-black uppercase tracking-widest border-b-2 border-black hover:text-red-600 hover:border-red-600 transition-colors pb-1">
              View All Collection
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
