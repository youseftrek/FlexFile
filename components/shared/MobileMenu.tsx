import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <IoMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="mt-8 w-full items-center flex flex-col gap-2">
          <Link href="/" className="w-full">
            <SheetClose className="w-full">
              <Button variant="secondary" className="font-bold w-full">
                Home
              </Button>
            </SheetClose>
          </Link>
          <Link href="/about" className="w-full">
            <SheetClose className="w-full">
              <Button variant="secondary" className="font-bold w-full">
                About
              </Button>
            </SheetClose>
          </Link>
          <Link href="/privacy-policy" className="w-full">
            <SheetClose className="w-full">
              <Button variant="secondary" className="font-bold w-full">
                Privacy Policy
              </Button>
            </SheetClose>
          </Link>
        </div>
        <Link href="https://github.com/youseftrek/FlexFile" className="w-full">
          <Button className="flex gap-2 font-semibold w-full">
            <FaGithub size={20} />
            Github Repo
          </Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
