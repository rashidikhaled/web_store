import React from "react";
import { UseSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import CartItem from "./CartItem";
import { UseCart } from "../context/CartContext";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = UseSidebar();
  const { cart } = UseCart();

  return (
    <div
      className={`
        ${isOpen ? "right-0" : "-right-full"}
          w-full bg-slate-100 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w[30vw] translate-all duration-300 z-1 px-4 lg:px-[35]`}>
      <div className="flex items-center justify-between py-6 border-b ">
        <div className=" uppercase text-sm font-semibold ">shoping bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl " />
        </div>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
