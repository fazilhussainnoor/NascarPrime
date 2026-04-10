import React, { useState, useEffect } from 'react';

const PromotionalBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('April 16, 2026 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-white text-red-600 font-black px-3 py-1 text-xs uppercase tracking-wider rounded">Crazy Deal</span>
          <p className="font-bold text-sm md:text-base uppercase tracking-tight">Save Minimum 40% on Crazy Deal</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xl font-black leading-none">{timeLeft.days}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Days</span>
          </div>
          <div className="text-xl font-black">:</div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-black leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Hrs</span>
          </div>
          <div className="text-xl font-black">:</div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-black leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Min</span>
          </div>
          <div className="text-xl font-black">:</div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-black leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
