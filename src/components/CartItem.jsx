import React from "react";
import { Link } from "react-router-dom";
import { shortenText } from "../helper/helper";
import { IoMdClose, IoMdRemove } from "react-icons/io";
const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex">
      <div className="w-full min-h[150px] flex items-center mb-2 ">
        <Link to={`/product:${id}`}>
          <img src={image} className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex  justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w[240px] text-primary hover:underline hover"
              to={`/product:${id}`}>
              {shortenText(title)}
            </Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" bg-pink-200 flex gap-x-2 h-[36px]:">
            <div>
              <IoMdRemove />
            </div>
            <div>price</div>
            <div>finalprice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
