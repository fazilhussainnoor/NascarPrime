import React from 'react';
import { Truck, RotateCcw, ShieldCheck, ShoppingBag, Percent } from 'lucide-react';

const TrustBadgeRow: React.FC = () => {
  const badges = [
    { icon: <Truck className="w-5 h-5" />, label: 'Free Shipping' },
    { icon: <RotateCcw className="w-5 h-5" />, label: 'Easy Returns' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: '100% Genuine' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Top Seller on Amazon' },
    { icon: <Percent className="w-5 h-5" />, label: 'Unbeatable Savings' }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {badge.icon}
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeRow;
