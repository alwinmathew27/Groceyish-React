import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../routing/AppRoute";
import { useCart } from "./CartContext"; // Import the useCart hook
import { useWishlist } from "./WishlistContext"; // Import the useWishlist hook
import logo from "../../assets/images/header/Logo (1).png";
import {
  HomeIcon,
  NewItemIcon,
  Hotdeals,
  Promotions,
} from "../includes/SvgFiles";
import menuimage from "../../assets/images/header/menu.png";
import { Helmet } from "react-helmet";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Phone,
  Menu,
  X,
} from "lucide-react";
export default function Header({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, updateUserData } = useContext(UserContext);
  const { cart, cartTotal } = useCart(); // Use the cart and cartTotal from the cart context
  const { wishlist } = useWishlist(); // Get wishlist from the wishlist context
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <Helmet>
        <title>Groceyish</title>
      </Helmet>
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-32 md:w-40" />
          </div>
          <div className="order-3 md:order-2 w-full md:w-auto md:flex-1 max-w-xl mx-0 md:mx-8 mt-4 md:mt-0">
            <div className="relative flex w-full">
              <div className="relative hidden md:block">
                <select
                  className="appearance-none bg-gray-100 border-r font-semibold border-gray-300 text-gray-700 py-2 px-4 pr-8 focus:outline-none focus:bg-white lg:text-[16px]"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    window.scrollTo(0, 0); // Scroll to top when a new category is selected
                  }}
                >
                  <option value="All">All Categories</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Meats">Meats</option>
                  <option value="Tea & Coffee">Tea & Coffee</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full  bg-gray-100 text-gray-700 py-2 px-4 block appearance-none leading-normal focus:outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  window.scrollTo(0, 0); // Scroll to top when a new search query is entered
                }}
              />
              <button
                style={{ backgroundColor: "#3bb77e", color: "#fff" }}
                className="absolute right-0 top-0 bottom-0 text-white p-3"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-10 order-2 md:order-3">
            <Link className="hidden lg:flex items-center text-gray-700 relative ">
              <Heart size={24} className="mr-2" />
              <span className="text-[15px] font-medium">Wishlist</span>
              <span className="absolute bottom-4 right-14 bg-[#3bb77e] text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
                {wishlist.length}
              </span>
            </Link>
            <Link className="flex items-center text-gray-700 relative">
              <ShoppingCart size={24} className="mr-2" />
              <div className="flex flex-col items-start">
                <span className="hidden md:inline font-medium text-[15px]">
                  My cart
                </span>
                <span className="text-[#3bb77e] text-sm">
                  ${cartTotal.toFixed(2)}
                </span>
                <span className="absolute top-0 right-14 bg-[#3bb77e] text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
            </Link>

            <div>
              {userData ? (
                <button
                  onClick={() => handleLogout()}
                  className="bg-[#3bb77e] hover:bg-green-400 text-white font-bold py-1 px-2 md:py-2 md:px-4  rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 lg:px-4 lg:py-2 md:text-base"
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="bg-[#3bb77e] hover:bg-green-400 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:text-base md:py-1 md:px-2 lg:px-4 lg:py-2"
                  to="/auth/login"
                >
                  Login
                </Link>
              )}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="py-2 space-y-2">
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Hot deals
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Promotions
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              New products
            </a>
          </div>
          <div className="py-2">
            <div className="flex items-center justify-center text-[#3bb77e]">
              <Phone size={20} className="mr-2" />
              <span>1233-7777</span>
            </div>
            <div className="text-center text-gray-500 text-sm">
              24/7 support center
            </div>
          </div>
        </div>
        {/* Desktop bottom header */}
        <div className="hidden md:flex items-center justify-between py-1 pb-2">
          <button
            style={{ backgroundColor: "#3bb77e", color: "#fff" }}
            className=" text-white px-3 py-2  flex items-center "
          >
            {/* <Menu size={20} className="mr-2" /> */}
            <img src={menuimage} alt="menu_png" className="mr-2" />
            Browse All Categories
          </button>
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-gray-700 font-semibold text-[16px] flex items-center hover:text-[#3bb77e]"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href="/"
              className="text-gray-700 flex items-center hover:text-[#3bb77e] font-semibold text-[16px] "
            >
              <Hotdeals />
              Hot deals
            </a>
            <a
              href="/"
              className="text-gray-700 flex items-center hover:text-[#3bb77e] font-semibold text-[16px] "
            >
              <Promotions />
              Promotions
            </a>
            <a
              href="/"
              className="text-gray-700 flex items-center hover:text-[#3bb77e] font-semibold text-[16px] "
            >
              <NewItemIcon />
              New products
            </a>
          </div>
          <div className="flex items-center text-[#3bb77e]">
            <Phone size={20} className="mr-2" />
            <span>1233-7777</span>
            <span className="ml-2 text-gray-500 text-[14px] font-semibold">
              24/7 support center
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
