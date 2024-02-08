import { createContext, useState } from "react";

const addCartItem = (cartItems, productsToAdd, inputQuantity) => {
  const addExistingItem = cartItems.find(cartItem => cartItem.id === productsToAdd.id);

  if(addExistingItem) {
    return cartItems.map((cartItem) => 
    cartItem.id === productsToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + inputQuantity,}
    : cartItem
    )
  }
  return [{...productsToAdd, quantity: inputQuantity}, ...cartItems]
};


//  const clearCartItem = (cartItems, cartItemToClear) => {
//    return cartItems.filter(removedItem => removedItem.id !== cartItemToClear.id);
//  };


export const CartContext = createContext({
  // isCartOpen: false,
  // setIsCartOpen: () => {}, 
  cartItems: [],
  addItemToCart: () => {},
  // clearItemFromCart: () => {},
});


export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addItemToCart = (productsToAdd, inputQuantity) => {
    setCartItems(addCartItem(cartItems, productsToAdd, inputQuantity));
  };


  // const removeItemFromCart = (cartItemToRemove) => {
  //   setCartItems(removeCartItem(cartItems, cartItemToRemove)); 
  // };

 

  const value = { 
    cartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};