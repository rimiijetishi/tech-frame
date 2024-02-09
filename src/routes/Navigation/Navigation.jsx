import { useContext } from "react";
import { CartContext } from "../../context/cart-Context";
import { Outlet, Link } from "react-router-dom";
import CartCount from "../../components/cart-count/cart-count";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import './Navigation.scss'

const Navigation = () => {
  const { isCartOpen} = useContext(CartContext);
  

  return (
    <>
      <div className="navigation">
        <Link className="nav-link-one" to='/'>
          <button className="one">Home</button>
        </Link>
        <Link className="nav-link-two" to='/checkout'>
          <button className="one">Checkout</button>
        </Link>
        <CartCount />
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </>
  );
};

export default Navigation;