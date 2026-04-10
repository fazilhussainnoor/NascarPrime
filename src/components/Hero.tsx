import React from 'react';
import heroImage from '../assets/hero-bamboo.png';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-50 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bamboo Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white space-y-6">
          <span className="inline-block px-4 py-1.5 bg-red-600 text-xs font-black uppercase tracking-[0.2em] rounded-full">New Arrival</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Bamboo <br />
            <span className="text-red-500">Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-medium">
            Soft on skin, breathable all day — comfort you'll never want to take off.
          </p>
          <div className="pt-4">
            <button className="bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 px-10 py-4 text-sm font-black uppercase tracking-widest flex items-center gap-2 group">
              Shop Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
