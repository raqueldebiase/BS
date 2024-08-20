import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; 
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="block px-4 py-2 rounded">
      {children}
    </Link>
  );
};

export default NavLink;
