import React, { useState, useEffect, useRef } from "react";
import { Mail, Lock } from "lucide-react";
import Coffee from "../../assets/images/Daily-best-deals/coffee.png";
import Green_tea from "../../assets/images/Daily-best-deals/green-tea.png";
import Sausage from "../../assets/images/Daily-best-deals/sausage.png";
import Onion from "../../assets/images/Daily-best-deals/onion.png";
import { useCart } from "./CartContext";
import leftbtn from "../../assets/images/Daily-best-deals/li_arrow-right (1).png";
import rightbtn from "../../assets/images/Daily-best-deals/li_arrow-right.png";
import cart_icon from "../../assets/images/Daily-best-deals/li_shopping-cart.png";

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white p-2  shadow w-48 h-80 sm:w-[228px] sm:h-[387px] flex-shrink-0 border border-gray-300 relative">
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 sm:h-40 object-cover mb-4 rounded"
      />
      {/* <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
        Save {product.discount}%
      </span> */}
      {product.discount > 0 && product.id !== 2 && (
        <span className="absolute top-0 left-0 bg-[#ffd480] text-white text-xs px-2 py-1 ">
          Save {product.discount}%
        </span>
      )}
      {product.bestDeal && (
        <span className="absolute top-0 left-0 bg-[#def9ec] text-xs font-medium px-2 py-1 text-[#3bb77e] ">
          Best deal
        </span>
      )}
    </div>
    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
    <h3 className="font-semibold mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
      {product.name}
    </h3>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < product.rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1">
        ({product.reviewCount})
      </span>
    </div>
    <div className="flex gap-3 items-center mb-2">
      <span className="font-bold text-green-600">${product.price}</span>
      <span className="text-sm line-through text-gray-400">
        ${product.originalPrice}
      </span>
    </div>
    <div className="text-xs text-gray-500 mb-4">
      Sold: {product.sold}/{product.stock}
    </div>
    <button
      className="w-full bg-[#3bb77e] text-white py-3 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2"
      onClick={() => addToCart(product)}
    >
      <img src={cart_icon} alt="Cart icon" className="h-[14px] w-[14px]" />
      <span className="text-[14px]">Add to cart</span>
    </button>
  </div>
);

const RegistrationCard = () => (
  <div className="bg-yellow-50 p-4 pt-10  w-48 h-80 sm:w-[245px] sm:h-[388px] flex-shrink-0 border border-gray-300">
    <h3 className="font-bold text-3xl text-center mb-2">10% OFF</h3>
    <p className="text-sm mb-4 text-center">
      For new member sign up at the first time
    </p>
    <div className="mt-8">
      <div className="mb-4">
        <label className="block text-sm mb-1">Email address*</label>
        <div className="relative">
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full pl-8 pr-2 py-1 border rounded"
          />
          <Mail
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Password*</label>
        <div className="relative">
          <input
            type="password"
            placeholder="Maximum 8 characters"
            className="w-full pl-8 pr-2 py-1 border rounded"
          />
          <Lock
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
      </div>
      <button className="w-full bg-[#3bb77e] text-white py-2 rounded hover:bg-green-600 transition duration-300">
        Register Now
      </button>
    </div>
  </div>
);

const ProductSlider = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [timeLeft, setTimeLeft] = useState(39381); // 10:56:21 in seconds
  const { addToCart } = useCart();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coffee 1kg",
      category: "Coffee & teas",
      image: Coffee,
      rating: 4,
      reviewCount: 4,
      price: 20,
      originalPrice: 25,
      sold: 20,
      stock: 50,
      discount: 10,
      isFeatured: true,
      isPopular: true,
      isNew: false,
    },
    {
      id: 2,
      name: "Halal Sausage 350g",
      category: "Meat",
      image: Sausage,
      rating: 4,
      reviewCount: 4,
      price: 4,
      originalPrice: 10,
      sold: 7,
      stock: 20,
      discount: 4,
      bestDeal: true,
      isFeatured: true,
      isPopular: false,
      isNew: true,
    },
    {
      id: 3,
      name: "Green Tea 250g",
      category: "Coffee & teas",
      image: Green_tea,
      rating: 4,
      reviewCount: 4,
      price: 3,
      originalPrice: 7,
      sold: 32,
      stock: 50,
      discount: 4,
      isFeatured: true,
      isPopular: true,
      isNew: false,
    },
    {
      id: 4,
      name: "Onion 1kg",
      category: "Vegetables",
      image: Onion,
      rating: 4,
      reviewCount: 4,
      price: 0.5,
      originalPrice: 2,
      sold: 2,
      stock: 10,
      discount: 3,
      isFeatured: true,
      isPopular: false,
      isNew: true,
    },
  ]);

  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const filteredProducts = products.filter((product) => {
    if (activeTab === "featured") return product.isFeatured;
    if (activeTab === "popular") return product.isPopular;
    if (activeTab === "new") return product.isNew;
    return [];
  });

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Amount to scroll in pixels
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="wrapper items-center ">
      <div className="flex flex-wrap items-center  justify-between">
        <div className="flex flex-wrap items-center gap-8 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
            Daily Best Sell
          </h2>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              className={`py-2 font-medium text-[16px] px-4 rounded ${
                activeTab === "featured" ? "bg-none text-green-500" : "bg-none"
              }`}
              onClick={() => setActiveTab("featured")}
            >
              Featured
            </button>
            <button
              className={`py-2 px-4 rounded font-medium text-[16px]  ${
                activeTab === "popular" ? "bg-none text-green-500" : "bg-none"
              }`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={`py-2 px-4 rounded font-medium text-[16px]  ${
                activeTab === "new" ? "bg-none text-green-500" : "bg-none"
              }`}
              onClick={() => setActiveTab("new")}
            >
              New
            </button>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 px-2 py-1 mt-3 bg-[#F35244]">
            <span className="text-white">
              Expires in: {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" rounded-full p-3 bg-gray-200 mr-3 "
            onClick={() => handleScroll("left")}
          >
            <img src={leftbtn} className="w-6 h-6" alt="Leftbtn" />
          </button>
          <button
            className=" rounded-full  bg-gray-200 p-3"
            onClick={() => handleScroll("right")}
          >
            <img src={rightbtn} className="w-6 h-6" alt="Rightbtn" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full justify-center ">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6  scrollbar-hide"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
          <div className="flex-shrink-0">
            <RegistrationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
