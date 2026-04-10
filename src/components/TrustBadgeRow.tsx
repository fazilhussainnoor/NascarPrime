import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Zap } from 'lucide-react';

const TrustBadgeRow: React.FC = () => {
  const badges = [
    { 
      icon: <Truck className="w-6 h-6" />, 
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all prepaid orders'
    },
    { 
      icon: <RotateCcw className="w-6 h-6" />, 
      title: 'Easy Returns & Exchanges',
      description: 'Unused items can be returned or exchanged for a full refund'
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: '100% Genuine',
      description: 'No fakes, no first copies. Only original brands'
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Unbeatable Savings',
      description: 'Factory prices that nobody else can beat'
    }
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {badge.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black uppercase tracking-widest text-black group-hover:text-red-600 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed mx-auto">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeRow;
