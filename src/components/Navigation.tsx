/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/constants/navigationData";
import { Badge } from "@/components/ui/badge";

export default function Navigation() {
  return (
    <div className="hidden lg:flex justify-center border-b border-gray-100 bg-white">
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          {navigationData.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger className={cn(
                    "h-12 px-4 text-xs font-bold uppercase tracking-wider hover:text-red-600 transition-colors",
                    item.isPromotion && "text-red-600"
                  )}>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-4 text-xs font-bold uppercase tracking-wider hover:text-red-600 transition-colors bg-transparent",
                    item.isPromotion && "text-red-600 bg-red-50 hover:bg-red-100"
                  )}
                >
                  {item.title}
                  {item.isPromotion && (
                    <Badge variant="destructive" className="ml-2 scale-75 origin-left px-1 py-0 text-[8px]">
                      HOT
                    </Badge>
                  )}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        render={
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          />
        }
      >
        <div className="text-sm font-bold leading-none uppercase tracking-tight">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
