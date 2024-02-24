"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import { ModeToggle } from "./mode-toggle";
import MobileMenu from "./shared/MobileMenu";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-3 md:py-4 md:px-8 max-w-[1920px] w-full sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <Image
          className="dark:hidden"
          src="/assets/images/black-logo.png"
          width={40}
          height={40}
          alt="FlexFile logo"
        />
        <Image
          className="hidden dark:block"
          src="/assets/images/white-logo.png"
          width={40}
          height={40}
          alt="FlexFile logo"
        />
        <h1 className="font-black text-3xl">
          Flex<span className="text-primary">File</span>
        </h1>
      </Link>
      <div className="hidden md:flex gap-2">
        <Link href="/">
          <Button variant="ghost" className="font-bold">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="font-bold">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-bold">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/" className="hidden md:block">
          <Button className="flex gap-2 font-semibold">
            <FaGithub size={20} />
            Github Repo
          </Button>
        </Link>
        <ModeToggle />
        {/* MOBLIE MENU */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
