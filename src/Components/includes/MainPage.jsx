import React, { useState, useEffect } from 'react';
import { WishlistProvider } from './WishlistContext'; 
import Header from './Header';
import FeaturedProducts from './FeaturedProducts';
import Slider from './Slider';
import ExploreCategories from './ExploreCatagories';
import Offer from './Offer';
import ProductSlider from './DailyBestsells';
import { CartProvider } from './CartContext'; 
export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    if (searchQuery.trim() !== "" || selectedCategory !== 'All') {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery, selectedCategory]);
  return (
    <CartProvider>
      <WishlistProvider> 
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {!isSearching && (
          <>
            <Slider/>
            <ExploreCategories/>
          </>
        )}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
        />
        <Offer/>
        <ProductSlider/>
      </WishlistProvider>
    </CartProvider>
  );
}
