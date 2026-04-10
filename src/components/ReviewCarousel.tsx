import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewData } from '../constants/reviewData';

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewData.length) % reviewData.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Real Reviews <br />
            <span className="text-red-600">From Real Customers</span>
          </h2>
          <div className="flex justify-center items-center gap-1 text-[#FFD700]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-black font-black text-sm">5.0 RATING</span>
          </div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative">
                <Quote className="absolute top-6 right-8 text-red-50/50 w-24 h-24 -z-0" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center md:justify-start gap-1 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-2xl font-medium text-gray-800 italic leading-relaxed">
                    "{reviewData[currentIndex].testimonial}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-black uppercase tracking-widest text-sm">{reviewData[currentIndex].name}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{reviewData[currentIndex].date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button 
              onClick={() => { prevSlide(); setIsPaused(true); }}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button 
              onClick={() => { nextSlide(); setIsPaused(true); }}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {reviewData.map((_, index) => (
            <button
              key={index}
              onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); setIsPaused(true); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
