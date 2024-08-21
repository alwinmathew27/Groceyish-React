import React, { createContext, useState, useContext } from 'react';
const WishlistContext = createContext();
export const useWishlist = () => {
  return useContext(WishlistContext);
};
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist; // Avoid adding duplicates
      }
      return [...prevWishlist, product];
    });
  };
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
  };
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
