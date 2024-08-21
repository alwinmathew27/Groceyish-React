import React from 'react';
import { Apple, Star } from 'lucide-react';
import Orange from "../../assets/images/toprated/Orange.png";
import Spinach from "../../assets/images/toprated/Spinach.png";
import Strawberry from "../../assets/images/toprated/Strawberry.png";
import Peach from "../../assets/images/toprated/Peach.png";
import Potato from "../../assets/images/toprated/Potato.png";
import Carrot from "../../assets/images/toprated/Carrot.png";
import Appl from "../../assets/images/toprated/Appl.png";
const ProductCard = ({ image, name, rating, price, originalPrice }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow">
    <img src={image} alt={name} className="w-[100px] h-[100px] sm:w-[66px] sm:h-[66px] object-cover rounded" />
    <div className="text-center sm:text-left">
      <h3 className="font-semibold">{name}</h3>
      <div className="flex items-center justify-center sm:justify-start">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="text-gray-500 text-sm ml-1">({rating})</span>
      </div>
      <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 sm:mt-1">
        <span className="font-bold text-green-600">${price.toFixed(2)}</span>
        <span className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
);
const ProductSection = ({ title, products }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-green-500 text-center sm:text-left sm:inline-block">{title}</h2>
    <div className="grid grid-cols-1 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);
const ProductDisplay = () => {
  const sections = [
    { title: 'Top Sells', products: [
      { image: Orange, name: 'Orange 1kg', rating: 4, price: 5, originalPrice: 6.99 },
      { image: Spinach, name: 'Spinach 1kg', rating: 3, price: 2, originalPrice: 3.99 },
      { image: Strawberry, name: 'Strawberry 1kg', rating: 4, price: 2, originalPrice: 3.99 },
    ]},
    { title: 'Top Rated', products: [
      { image: Peach, name: 'Peach 1kg', rating: 3, price: 2, originalPrice: 3.99 },
      { image: Spinach, name: 'Spinach', rating: 3, price: 2, originalPrice: 3.99 },
      { image: Appl, name: 'Apple 1kg', rating: 4, price: 2, originalPrice: 3.99 },
    ]},
    { title: 'Trending Items', products: [
      { image: Carrot, name: 'Carrot 1kg', rating: 5, price: 2, originalPrice: 3.99 },
      { image: Potato, name: 'Potato 1kg', rating: 4, price: 2, originalPrice: 3.99 },
      { image: Orange, name: 'Orange 1kg', rating: 4, price: 5, originalPrice: 4.99 },
    ]},
    { title: 'Recently Added', products: [
      { image: Appl, name: 'Apple 1kg', rating: 4, price: 2, originalPrice: 3.99 },
      { image: Carrot, name: 'Carrot 1kg', rating: 5, price: 2, originalPrice: 3.99 },
      { image: Strawberry, name: 'Strawberry 1kg', rating: 4, price: 2, originalPrice: 3.99 },
    ]},
  ];
  return (
    <div className="wrapper container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap">
        {sections.map((section, index) => (
          <ProductSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
};
export default ProductDisplay;