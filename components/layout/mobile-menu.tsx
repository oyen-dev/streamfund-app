"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { List } from "@phosphor-icons/react/dist/ssr";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex lg:hidden bg-transparent" size={"icon"}>
          <List className="text-neutral-20 size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            This is a description of the menu.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
