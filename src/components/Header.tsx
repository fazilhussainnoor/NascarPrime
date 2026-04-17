/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, User, ShoppingCart, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex flex-col items-start group" aria-label="Nascar Prime - Genuine Quality & Unbeatable Savings">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-[#dc2626] leading-none">
              NASCAR PRIME
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 font-bold tracking-wider uppercase mt-1 group-hover:text-gray-900 transition-colors">
              Big Brands, Small Prices
            </span>
          </a>
        </div>

        {/* Desktop Utilities */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Currency Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger render={
              <Button variant="ghost" size="sm" className="gap-2 font-medium text-xs">
                <Globe className="w-4 h-4" />
                {currency}
              </Button>
            } />
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCurrency("USD")}>USD - US Dollar</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency("CAD")}>CAD - Canadian Dollar</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency("GBP")}>GBP - British Pound</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-10"
                >
                  <Input
                    placeholder="Search products..."
                    className="h-9 text-xs focus-visible:ring-black"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-transparent"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </Button>
          </div>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <User className="w-5 h-5" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* Mobile Utilities */}
        <div className="flex lg:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar (Expandable) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-3"
          >
            <div className="relative">
              <Input
                placeholder="Search for items..."
                className="pr-10 h-10 text-sm focus-visible:ring-black"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
