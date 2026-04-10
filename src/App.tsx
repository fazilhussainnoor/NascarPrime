/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionalBanner from "./components/PromotionalBanner";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      {/* Global Header Section */}
      <div className="flex flex-col">
        <TopBar />
        <Header />
        <Navigation />
        <PromotionalBanner />
      </div>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <CategoryGrid />
        
        {/* Features Section */}
        <section className="py-20 text-center bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-12">The Nascar Prime Promise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="space-y-4 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xl font-black uppercase tracking-tighter">FAST SHIPPING</div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">Quick delivery across Pakistan in 2-4 business days.</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-xl font-black uppercase tracking-tighter">PREMIUM QUALITY</div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">Hand-picked export quality guaranteed for every item.</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <div className="text-xl font-black uppercase tracking-tighter">EASY RETURNS</div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">7-day hassle-free returns if you're not satisfied.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="space-y-6 col-span-1 md:col-span-2">
              <span className="text-2xl font-black tracking-tighter uppercase">
                NASCAR<span className="text-red-600">PRIME</span>
              </span>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Nascar Prime is your premier destination for high-quality export surplus and premium apparel. We bring you the world's best fashion brands at unbeatable prices.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  {/* Icon */}
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-red-500">Contact Us</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Nascar Prime Store<br />
                11 KM Satiana Road<br />
                Faisalabad, Pakistan
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-red-500">Legal</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.3em]">
              © 2026 Nascar Prime. All rights reserved. Designed for Excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
