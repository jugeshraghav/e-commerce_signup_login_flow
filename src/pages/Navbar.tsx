import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div>
      <div className="flex items-end justify-between p-8">
        <h1 className="font-bold">ECOMMERCE</h1>
        <div className="flex justify-between gap-4 text-[12px] font-bold">
          <p>Categories</p>
          <p>Sale</p>
          <p>Clearance</p>
          <p>New Stock</p>
          <p>Trending</p>
        </div>
        <div>
          <div className="mb-2 flex justify-end gap-4 text-[10px]">
            <p>Help</p>
            <p>Orders & Returns</p>
            <p>Hi, John</p>
          </div>
          <div className="text-md flex justify-end gap-2">
            <AiOutlineSearch />
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
      <div>
        <p className="bg-gray-200 p-1 text-center text-[10px]">
          Get 10% off on business signup{" "}
        </p>
      </div>
    </div>
  );
};
