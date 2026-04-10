import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand and Info */}
          <div className="space-y-8 col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-black tracking-tighter uppercase">
                NASCAR<span className="text-red-600">PRIME</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Your premier destination for high-quality export surplus and premium apparel. Quality you can trust.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nascar Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selling at Nascar Prime</a></li>
            </ul>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <address className="not-italic text-xs text-gray-500 leading-relaxed uppercase font-bold tracking-tight">
                  Nascar Prime, 11 KM Satiana Road, <br />
                  Faisalabad, Pakistan
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a 
                  href="tel:00923325553125" 
                  className="text-xs text-gray-500 uppercase font-black hover:text-white transition-colors tracking-widest"
                >
                  042-3256-0356
                </a>
              </div>
              <div className="pl-8 text-[10px] text-gray-600 uppercase font-bold tracking-widest leading-none">
                (10 AM to 6 PM)
              </div>
            </div>
          </div>

          {/* Customer Care Column */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How To Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Details</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">About Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why we do what we do</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company News</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.3em]">
            © 2026 Nascar Prime. All rights reserved. Designed for Excellence.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
