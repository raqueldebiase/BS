import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <Link href={'/'}>
      <Image
        src={'/BS.svg'} 
        width={40}     
        height={40}    
        alt="MyShop Logo" 
      />
    </Link>
  );
};

export default Header;
