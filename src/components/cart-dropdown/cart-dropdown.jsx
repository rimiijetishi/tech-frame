import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/cart-Context';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => 
          <div className='cart-item-container'>
          <img src={item.imageUrl} alt={`${item.name}`}/>
          <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity} x ${item.price}</span>
          </div>
        </div>)}
      </div>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;