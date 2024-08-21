import React, { createContext, useContext, useReducer } from 'react';
const CartContext = createContext();
const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += 1;
          return { ...state, items: newItems };
        }
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      case 'REMOVE_FROM_CART':
        return { ...state, items: state.items.filter(item => item.id !== action.payload) };
      case 'UPDATE_QUANTITY':
        if (action.payload.quantity === 0) {
          return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        }
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      default:
        return state;
    }
  };
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };
  const cartTotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);