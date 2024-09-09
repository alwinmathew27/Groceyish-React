import React, { useRef, useState } from 'react';
import { Star, ShoppingCart, Plus, Minus, Heart } from 'lucide-react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { toast } from 'react-hot-toast';
import Redish from "../../assets/images/FeaturedProducts/redish.png";
import Potatos from "../../assets/images/FeaturedProducts/potato.png";
import Tomatos from "../../assets/images/FeaturedProducts/tomatos.png";
import Broccoli from "../../assets/images/FeaturedProducts/braccoli.png";
import GreenBeans from "../../assets/images/FeaturedProducts/greenBeans.png";
import Kanandevan from "../../assets/images/FeaturedProducts/kanan.jpeg";
import Chicken from "../../assets/images/FeaturedProducts/chicken.jpg";
import RightArrowbtn from "../../assets/images/FeaturedProducts/right.png";
import LeftArrowbtn from "../../assets/images/FeaturedProducts/Left.png";
const products = [
  { id: 1, name: 'Redish 500g', category: 'Vegetables', price: 2, oldPrice: 3.99, image: Redish, rating: 4 },
  { id: 2, name: 'Potatos 1kg', category: 'Vegetables', price: 1, oldPrice: 1.99, image: Potatos, rating: 4 },
  { id: 3, name: 'Tomatos 200g', category: 'Fruits', price: 0.30, oldPrice: 0.99, image: Tomatos, rating: 4 },
  { id: 4, name: 'Broccoli 1kg', category: 'Vegetables', price: 1.50, oldPrice: 2.99, image: Broccoli, rating: 4 },
  { id: 5, name: 'Green Beans 250g', category: 'Vegetables', price: 1, oldPrice: 1.99, image: GreenBeans, rating: 4 },
  { id: 6, name: 'Chicken 1kg', category: 'Meats', price: 8, oldPrice: 1.99, image: Chicken, rating: 4 },
  { id: 7, name: 'Kanan Devan', category: 'Tea & Coffee', price: 5, oldPrice: 1.99, image: Kanandevan, rating: 4 },
];
const categories = ['All', 'Vegetables', 'Fruits', 'Tea & Coffee', 'Meats'];
const FeaturedProducts = ({ selectedCategory, setSelectedCategory, searchQuery }) => {
  const sliderRef = useRef(null);
  const { addToCart, updateQuantity, removeFromCart, cart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const scroll = (scrollOffset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
    }
  };
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  const handleIncreaseQuantity = (productId) => {
    const product = cart.items.find(item => item.id === productId);
    updateQuantity(productId, product.quantity + 1);
  };
  const handleDecreaseQuantity = (productId) => {
    const product = cart.items.find(item => item.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };
  const isInCart = (productId) => {
    return cart.items.some(item => item.id === productId);
  };
  const getProductQuantity = (productId) => {
    const product = cart.items.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };
  const handleWishlistToggle = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      removeFromWishlist(product.id);
      toast.error(`${product.name} removed from wishlist!`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`);
    }
  };
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };
  return (
    <div className=" container mx-auto py-8">
      <div className="wrapper flex justify-between items-center mb-6">
        <h2 className="text-[32px] font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="space-x-2 hidden sm:block">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-medium text-[16px] rounded transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-green-500'
                  : 'bg-none'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        {filteredProducts.length > 5 && (
          <button 
            onClick={() => scroll(-300)} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full  shadow-md z-10 hover:bg-gray-100 transition-colors ml-10"
            aria-label="Scroll left"
          >
            <img src={LeftArrowbtn} alt="Left_Arrow" />
          </button>
        )}
        <div 
          ref={sliderRef}
          className="wrapper flex overflow-x-auto space-x-7  justify-start items-stretch hide-scrollbars"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="flex-none w-[228px] items-center border rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform"
                style={{ scrollSnapAlign: 'start' }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="h-[144px]">
                  <img src={product.image} alt={product.name} className="w-full h-full p-4 object-cover relative" />
                  <button 
                    onClick={() => handleWishlistToggle(product)}
                    className={`p-1 rounded-full absolute top-2 right-2 ${isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    <Heart size={18} />
                  </button>
                  <div className="flex justify-between items-center right-1 absolute ">
                    {isInCart(product.id) && (
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleDecreaseQuantity(product.id)}
                          className="bg-gray-200 p-1 rounded-full"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2">{getProductQuantity(product.id)}</span>
                        <button 
                          onClick={() => handleIncreaseQuantity(product.id)}
                          className="bg-gray-200 p-1 rounded-full"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="inset-0 flex items-center justify-relative">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="px-5 py-2 rounded flex items-center bg-green-200 text-green-700 text-xs transition-colors absolute right-2 bottom-3 "
                    >
                      <ShoppingCart size={19} className="mr-2" />
                      {isInCart(product.id) ? 'Add More' : 'Add'}
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-[12px] text-gray-500">{product.category}</span>
                  <h3 className="font-semibold text-[16px]  mb-2 leading-8">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                      />
                    ))}
                    <span className='ml-1 text-[12px] text-gray-600'>(4)</span>
                  </div>
                  <div>
                    <span className='text-[12px] text-gray-500'>By </span>
                    <span className='text-[12px] text-green-600'>Mr.Food</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className='mt-3'>
                      <span className="font-bold text-lg text-green-600">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-full py-8">
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          )}
        </div>
        {filteredProducts.length > 5 && (
          <button 
            onClick={() => scroll(300)} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors mr-10 "
            aria-label="Scroll right"
          >
            <img src={RightArrowbtn} alt="Right_Arrow_Btn" />
          </button>
        )}
      </div>
    </div>
  );
};
export default FeaturedProducts;
