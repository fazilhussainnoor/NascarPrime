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
import NewArrivals from "./components/NewArrivals";
import ReviewCarousel from "./components/ReviewCarousel";
import TrustBadgeRow from "./components/TrustBadgeRow";

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
        <NewArrivals />
        <ReviewCarousel />
        <TrustBadgeRow />
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
