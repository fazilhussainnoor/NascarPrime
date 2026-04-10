/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      {/* Global Header Section */}
      <div className="flex flex-col">
        <TopBar />
        <Header />
        <Navigation />
      </div>

      {/* Main Content Placeholder */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Premium Quality <br />
              <span className="text-red-600">Nascar Prime</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Shop the best deals on Men, Women, and Kids apparel. High-quality export surplus at unbeatable prices from Nascar Prime.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/men/800/1000" 
                alt="Men's Collection" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-white text-3xl font-bold uppercase tracking-tighter">Men's Collection</h2>
                <button className="mt-2 text-white text-sm font-bold underline underline-offset-4 uppercase tracking-widest">Shop Now</button>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/women/800/1000" 
                alt="Women's Collection" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-white text-3xl font-bold uppercase tracking-tighter">Women's Collection</h2>
                <button className="mt-2 text-white text-sm font-bold underline underline-offset-4 uppercase tracking-widest">Shop Now</button>
              </div>
            </div>
          </div>

          <section className="py-20 text-center border-y border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="space-y-2">
                <div className="text-2xl font-black">FAST SHIPPING</div>
                <p className="text-sm text-gray-500">Quick delivery across Pakistan</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-black">PREMIUM QUALITY</div>
                <p className="text-sm text-gray-500">Export quality guaranteed</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-black">EASY RETURNS</div>
                <p className="text-sm text-gray-500">7-day hassle-free returns</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-50 border-t border-gray-100 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-lg font-black tracking-tighter text-black uppercase">
                NASCAR<span className="text-red-600">PRIME</span>
              </span>
              <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
                Nascar Prime is your premier destination for high-quality export surplus and premium apparel. Thank you for choosing us for your fashion needs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">Contact Us</h4>
              <p className="text-sm text-gray-500">
                Nascar Prime<br />
                11 KM Satiana Road<br />
                Faisalabad, Pakistan
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-red-600 transition-colors">@nascarprime.shoponline</a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              © 2026, Nascar Prime. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
