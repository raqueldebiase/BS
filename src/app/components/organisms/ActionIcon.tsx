import React from "react";
import Link from "next/link";

interface ActionIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  count?: number; // Adicionando count como uma prop opcional
}

const ActionIcon: React.FC<ActionIconProps> = ({ href, icon, label, count }) => {
  return (
    <Link href={href} className="relative hover:text-gray-400" aria-label={label}>
      <span className="border px-2 py-3 hover:bg-black hover:text-white">{label}</span>
      {count !== undefined && count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
};

export default ActionIcon;
