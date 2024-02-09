import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-Context';
import {  ReactComponent as ShoppingIcon } from '../../assets/cart.svg'
import './Cart-item.scss';

const CartItem = ({ product }) => {
  const [inputQuantity, setInputQuantity] = useState(0)
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const onChangeHandler = (event) => {
    setInputQuantity(event.target.value)
  }

  const addProductsToCart = () => {
    addItemToCart(product, inputQuantity)
    setInputQuantity(0)
  }

  return (
    <>
      <div className='product-card-container'>
        <div className='img-container'>
          <img src={imageUrl} alt='imag'/>
        </div> 
        <div className='footer'>
          <span>
          <span className='name'>{name} x {price}</span>
          <div className='holder'>
            <input type='number' placeholder='Enter the amount' onChange={onChangeHandler} value={inputQuantity}/>
            <button onClick={addProductsToCart}><ShoppingIcon className='shopping-icon'/></button>
          </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;