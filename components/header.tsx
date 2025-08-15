"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-[#6366f1] flex items-center justify-center">
              <span className="text-white font-bold text-sm">PC</span>
            </div>
            <span className="font-heading font-bold text-xl text-[#374151]">
              PaperCraft
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/products"
                className="text-gray-600 hover:text-[#374151] transition-all duration-300 ease-in-out"
              >
                All Products
              </Link>
              <Link
                href="/products?category=notebooks"
                className="text-gray-600 hover:text-[#374151] transition-all duration-300 ease-in-out"
              >
                Notebooks
              </Link>
              <Link
                href="/products?category=pens"
                className="text-gray-600 hover:text-[#374151] transition-all duration-300 ease-in-out"
              >
                Pens & Pencils
              </Link>
              <Link
                href="/products?category=accessories"
                className="text-gray-600 hover:text-[#374151] transition-all duration-300 ease-in-out"
              >
                Accessories
              </Link>
              <Link
                href="/products?category=gifts"
                className="text-gray-600 hover:text-[#374151] transition-all duration-300 ease-in-out"
              >
                Gift Sets
              </Link>
            </nav>

            {/* Search Bar */}
            {/* <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-[#f8fafc] border-gray-200 focus:border-[#6366f1] transition-all duration-300 ease-in-out"
              />
            </div>
          </div> */}

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={toggleCart}
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-[#6366f1] text-xs">
                    {state.itemCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 bg-[#f8fafc] border-gray-200"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  All Products
                </Link>
                <Link
                  href="/products?category=notebooks"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  Notebooks
                </Link>
                <Link
                  href="/products?category=pens"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  Pens & Pencils
                </Link>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  Accessories
                </Link>
                <Link
                  href="/products?category=gifts"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  Gift Sets
                </Link>
                <Link
                  href="/account"
                  className="text-gray-600 hover:text-[#374151] py-2"
                >
                  My Account
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
