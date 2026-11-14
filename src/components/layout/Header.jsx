import {useCart} from "../cart/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const {itemCount, setIsCartOpen} =useCart();
  return (
    <header className="bg-[#fcf4e9] grid grid-cols-3 items-center px-8 h-12">
      <div className="flex items-center">
        {!searchOpen ? (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 text-sm text-gray-800"
          >
            <FiSearch className="textbase" />
            <span>Search</span>
          </button>
        ) : (
          <div
            onMouseLeave={() => setSearchOpen(false)}
            className="flex items-center gap-2 bg-white px-3 py-1.5 w-96 shadow-sm"
          >
            <FiSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm text-gray-700 flex-1 px-3"
              autoFocus
            />
          </div>
        )}
      </div>
      <div className="flex justify-center gap-5">
        <h3 className="tracking-[3px] text-sm cursor-pointer">SAJIYA</h3>
      </div>
      <div className="flex justify-end items-center gap-3">
        <FiUser
          onClick={()=> navigate("/SignupPage")}
          className="cursor-pointer text-md"
        />
        <div onClick={()=>setIsCartOpen(true)} className="flex items-center gap-1 cursor-pointer">
          <FiShoppingBag className="text-md" />
          <span className="bg-black text-white rounded-full text-xs px-2 py-1">
            {itemCount}
          </span>
        </div>
      </div>
    </header>
  );
}
export default Header;
