import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>ECOMMERCE</h1>
      <div>
        <p>Categories</p>
        <p>Sale</p>
        <p>Clearance</p>
        <p>New Stock</p>
        <p>Trending</p>
      </div>
      <div>
        <div>
          <p>Help</p>
          <p>Orders & Returns</p>
          <p>Hi, John</p>
        </div>
        <div>
          <AiOutlineSearch />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
};
