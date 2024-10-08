'use client';

import React, { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import NavLink from "./Navigation";
import ActionIcon from "./ActionIcon";
import { useCart } from "@/context/CartContext";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { cart } = useCart(); 
  const cartItemCount = cart.length; 

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="text-black relative z-50">
      <div className="max-w-[1400px] mx-auto p-4 flex justify-between items-center">
        <div className="flex-1 md:flex-none">
          <Logo />
        </div>

        <div className="flex items-center gap-3">
          <div className="space-x-4 md:hidden">
            <div className="relative">
              <ActionIcon href="/cart" icon="🛒" label="Bag" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
          <button
            className="flex flex-col items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-sm focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-Caramel transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-Caramel my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-Caramel transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:justify-between md:bg-transparent md:space-x-4">
          <ul className="flex flex-row space-x-4 p-4">
            <li className="nav-item">
              <NavLink href="/#spotlight" onClick={closeMenu}>Art Spotlight</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/#preview" onClick={closeMenu}>Preview</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/#magazine" onClick={closeMenu}>Magazine</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/gallery" onClick={closeMenu}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/#search" onClick={closeMenu}>Search</NavLink>
            </li>
          </ul>
          <div className="relative space-x-4">
            <ActionIcon href="/cart" icon="🛒" label="Bag" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>

      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-4">
          
          {/* Logo for Mobile */}
          <div className="mb-4 flex justify-between">
            <Logo />
            <button 
              className="text-white text-3xl" 
              onClick={toggleMenu} 
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          {/* Navigation Links for Mobile */}
          <ul className="flex flex-col items-end space-y-4 mb-10 font-light tracking-wide">
            <li><NavLink href="/#spotlight" onClick={closeMenu}>Art Spotlight</NavLink></li>
            <li><NavLink href="/#preview" onClick={closeMenu}>Preview</NavLink></li>
            <li><NavLink href="/#magazine" onClick={closeMenu}>Magazine</NavLink></li>
            <li><NavLink href="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
            <li><NavLink href="/#search" onClick={closeMenu}>Search</NavLink></li>
          </ul>

          {/* ActionIcons for Mobile */}
          <div className="relative space-x-4 px-4 flex justify-end">
            <ActionIcon href="/cart" icon="🛒" label="Bag" />
            {cartItemCount > 0 && (
              <span className="absolute top-[-16px] right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
