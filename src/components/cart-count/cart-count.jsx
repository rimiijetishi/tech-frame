import { useContext } from 'react';
import { CartContext } from '../../context/cart-Context';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-count.scss';

const CartCount =() => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
  

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartCount;