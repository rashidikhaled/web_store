import React from "react";
import { Link, Links } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { shortenText } from "../helper/helper";
import { UseCart } from "../context/CartContext";

const Product = ({ product }) => {
  // destructure product
  const { id, image, category, price, title } = product;
  const { addToCart } = UseCart();

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] w-[300px]  mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 "
              src={image}
              alt=""
            />
          </div>

          <div className="absolute top-0 right-0 p-2 mr-3 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-400">
                <BsPlus
                  onClick={() => addToCart(product, id)}
                  className="text-3xl"
                />
              </div>
            </button>
            <Link className="w-12 h-12 border border-pink-100 bg-white flex justify-center items-center ">
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{shortenText(title)}</h2>
        </Link>
        <h2 className="font-semibold ">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
