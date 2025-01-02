import React from "react";
import { Link, Links } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  // destructure product
  const { id, image, category, price, title } = product;
  return (
    <>
      <div className="border border-[#e4e4e4] h-[300px] w-[300px]  mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 "
              src={image}
              alt=""
            />
          </div>

          <div className="absolute top-0 right-0 bg-red-500 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link className="w-12 h-12 bg-white flex justify-center items-center ">
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
