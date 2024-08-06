import React from "react";
import Logo from "../atoms/Logo";
import NavLink from "./Navigation";
import ActionIcon from "./ActionIcon";


const Header: React.FC = () => {
  // const { cart } = useCart(); // Obter o estado do carrinho

  // Calcular o número total de itens no carrinho
  // const itemCount = cart.length;

  return (
    <header className="text-black">
      <div className="max-w-[1400px] mx-auto p-4 flex justify-between items-center">
        <Logo />

        <nav className="space-x-4">
          <NavLink href="/#spotlight">
            <span className="relative z-10">Art Spotlight</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
          </NavLink>

          <NavLink href="/#preview">
            <span className="relative z-10">Preview</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
          </NavLink>

          <NavLink href="/#magazine">
            <span className="relative z-10">Magazine</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
          </NavLink>

          <NavLink href="/gallery">
            <span className="relative z-10">Gallery</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
          </NavLink>
        </nav>

        <div className="space-x-4">
          <ActionIcon href="/cart" icon="🛒" label="Bag" />
          {/* <ActionIcon href="/account" icon="👤" label="Account" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
