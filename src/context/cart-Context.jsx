import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product, inputQuantity) => {
  const addExistingItem = cartItems.find(cartItem => cartItem.id === product.id);

  if(addExistingItem) {
    return cartItems.map((cartItem) => 
    cartItem.id === product.id
    ? {...cartItem, quantity: cartItem.quantity + parseInt(inputQuantity, 10)}
    : cartItem
    )
  }
  return [...cartItems, {...product, quantity: parseInt(inputQuantity, 0)}]
};


const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(removedItem => removedItem.id !== cartItemToClear.id);
};


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}, 
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  setCartItems: () => {}
});


export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);


  useEffect(() => {
    const newCartCount = cartItems.reduce((itemCaount, indexOfItem) => itemCaount + indexOfItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);
 
  const addItemToCart = (product, inputQuantity) => {
    setCartItems(addCartItem(cartItems, product, inputQuantity));
  };


   const removeItemFromCart = (cartItemToRemove) => {
     setCartItems(clearCartItem(cartItems, cartItemToRemove)); 
   };

 

  const value = { 
    cartItems,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};