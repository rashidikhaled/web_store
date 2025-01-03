import React from "react";
import { UseSidebar } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = UseSidebar();
  return (
    <div className="bg-pink-300 w-full">
      <div>header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative">
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
