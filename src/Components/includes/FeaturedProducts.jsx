import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Plus, Minus, Heart } from 'lucide-react';
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
    <div className="wrapper container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <div className="space-x-2 hidden sm:block">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 pb-6 justify-start items-stretch hide-scrollbars"
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
                className="flex-none w-56 items-center border rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform"
                style={{ scrollSnapAlign: 'start' }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="h-48">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover relative" />
                  <button 
                    onClick={() => handleWishlistToggle(product)}
                    className={`p-2 rounded-full absolute top-0 right-0 ${isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    <Heart size={20} />
                  </button>
                  <div className="inset-0 flex items-center justify-relative">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="px-2 py-2 rounded flex items-center bg-green-200 text-green-700 text-xs transition-colors absolute right-2 bottom-2"
                    >
                      <ShoppingCart size={19} className="mr-2" />
                      {isInCart(product.id) ? 'Add More' : 'Add'}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg text-green-600">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
export default FeaturedProducts;
