import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../constants/productData';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white flex flex-col h-full border border-gray-100 overflow-hidden">
      {/* Product Image and Overlay */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-red-600 text-white font-black uppercase tracking-tighter text-[10px] px-2 py-0.5 border-none">
            {product.badge}
          </Badge>
        )}

        {/* Desktop Quick Buy Hover */}
        <div className="hidden lg:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center p-4">
          <Button 
            className="w-full bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest text-xs h-12 transition-all transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Quick Buy
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow space-y-2">
        <div className="flex items-center gap-1">
          <div className="flex text-[#FFD700]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} 
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {product.rating} | {product.reviewCount} Reviews
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight line-clamp-2 leading-tight flex-grow">
          {product.title}
        </h3>

        <div className="text-base font-black text-red-600">
          {product.price}
        </div>

        {/* Mobile Quick Buy Button */}
        <div className="lg:hidden pt-2">
          <Button className="w-full bg-black text-white font-black uppercase tracking-widest text-[10px] h-10 flex items-center justify-center gap-2">
            <ShoppingCart className="w-3 h-3" />
            Quick Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
