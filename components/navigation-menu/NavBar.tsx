"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import nav from "./nav.json";

console.log(nav);

function NavBar() {
  return (
    <div className="fixed flex justify-center items-center border-b-2 w-full p-4">
      <NavigationMenu>
        <NavigationMenuList>
          {nav.map((item, index) => (
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              key={index}
            >
              <Link href={item.href}>
                <span className="text-lg">{item.title}</span>
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
