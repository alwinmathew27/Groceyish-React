import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Mail, Lock } from "lucide-react";
import Coffee from "../../assets/images/Daily-best-deals/coffee.png";
import Green_tea from "../../assets/images/Daily-best-deals/green-tea.png";
import Sausage from "../../assets/images/Daily-best-deals/sausage.png";
import Onion from "../../assets/images/Daily-best-deals/onion.png";
import { useCart } from "./CartContext"; 
const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white p-4 rounded-lg shadow w-52 h-96">
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
        Save {product.discount}%
      </span>
      {product.bestDeal && (
        <span className="absolute top-2 right-2 bg-green-400 text-xs px-2 py-1 rounded">
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
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-green-600">${product.price}</span>
      <span className="text-sm line-through text-gray-400">
        ${product.originalPrice}
      </span>
    </div>
    <div className="text-xs text-gray-500 mb-4">
      Sold: {product.sold}/{product.stock}
    </div>
    <button
      className="w-full bg-[#3bb77e] text-white py-2 rounded hover:bg-green-600 transition duration-300"
      onClick={() => addToCart(product)} // Add to Cart functionality
    >
      Add to cart
    </button>
  </div>
);
const RegistrationCard = () => (
  <div className="bg-yellow-50 p-4 pt-10 rounded-lg w-52 h-96">
    <h3 className="font-bold text-3xl text-center mb-2">10% OFF</h3>
    <p className="text-sm mb-4 text-center">For new member sign up at the first time</p>
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
  const { addToCart } = useCart(); // Get addToCart function from useCart
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coffe 1kg",
      category: "Coffe & teas",
      image: Coffee,
      rating: 4,
      reviewCount: 5,
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
      reviewCount: 3,
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
      category: "Coffe & teas",
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
      reviewCount: 1,
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
  return (
    <div className="wrapper flex flex-col items-center px-4">
      <div className="flex flex-col sm:flex-row items-center  gap-8 mb-4 w-full">
        <h2 className=" text-3xl font-bold mb-4 sm:mb-0">Daily Best Sell</h2>
        <div className="flex  items-center space-x-4">
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "featured"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("featured")}
          >
            Featured
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "popular"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "new" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("new")}
          >
            New
          </button>
        </div>
        <div className="flex items-center justify-between mb-4 p-2 mt-3 bg-[#F35244]">
            <span>Expires in: {formatTime(timeLeft)}</span>
        </div>  
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full">
        <button className="bg-white rounded-full mb-4 sm:mb-0">
          <ChevronLeft />
        </button>
        <div className="flex flex-wrap justify-center space-x-7 overflow-x-auto">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart} // Pass addToCart function
            />
          ))}
          <div className="flex-shrink-0 w-56 h-96">
            <RegistrationCard />
          </div>
        </div>
        <button className="bg-white mb-4 sm:mb-0">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default ProductSlider;
