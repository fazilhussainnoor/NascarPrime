/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, ChevronRight, ChevronDown, Globe, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navigationData } from "@/constants/navigationData";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MobileMenu() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [currency, setCurrency] = useState("USD");

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]
    );
  };

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-gray-100">
          <SheetTitle className="text-left">
            <a href="/" className="flex flex-col items-start group" aria-label="Nascar Prime - Genuine Quality & Unbeatable Savings">
              <span className="text-2xl font-black tracking-tighter uppercase text-[#dc2626] leading-none">
                NASCAR PRIME
              </span>
              <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mt-1 group-hover:text-gray-900 transition-colors">
                Big Brands, Small Prices
              </span>
            </a>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <div className="flex flex-col py-2">
            {navigationData.map((item) => (
              <div key={item.title} className="border-b border-gray-50 last:border-0">
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.title)}
                      className={cn(
                        "flex items-center justify-between w-full p-4 text-xs font-bold uppercase tracking-wider transition-colors",
                        openItems.includes(item.title) ? "text-red-600 bg-gray-50" : "text-gray-900"
                      )}
                    >
                      {item.title}
                      {openItems.includes(item.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {openItems.includes(item.title) && (
                      <div className="bg-gray-50/50 py-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block p-4 pl-8 text-xs font-semibold text-gray-600 uppercase tracking-wide hover:text-red-600"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "block p-4 text-xs font-bold uppercase tracking-wider transition-colors",
                      item.isPromotion ? "text-red-600 bg-red-50" : "text-gray-900"
                    )}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" size="sm" className="w-full justify-between text-xs font-bold" />}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  CURRENCY: {currency}
                </div>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </div>
            </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[268px]">
                <DropdownMenuItem onClick={() => setCurrency("PKR")}>PKR - Pakistan</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrency("USD")}>USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrency("GBP")}>GBP - British Pound</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-xs font-bold">
            <User className="w-4 h-4" />
            MY ACCOUNT
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
