import React from 'react';
import menImg from '../assets/cat-men.png';
import womenImg from '../assets/cat-women.png';
import kidsImg from '../assets/cat-kids.png';

const CategoryGrid: React.FC = () => {
  const categories = [
    {
      title: "Men",
      subtitle: "Modern Elite - Style Redefined",
      image: menImg,
    },
    {
      title: "Women",
      subtitle: "Daily Ease - Made For Comfort",
      image: womenImg,
    },
    {
      title: "Kids",
      subtitle: "Daily Fun - Designed For Activity",
      image: kidsImg,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-gray-100 aspect-[3/4] cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{cat.title}</h3>
                  <p className="text-gray-300 text-sm font-bold uppercase tracking-wider">{cat.subtitle}</p>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block border-b-2 border-red-500 text-white text-xs font-black uppercase tracking-widest pb-1">Explore Now</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
