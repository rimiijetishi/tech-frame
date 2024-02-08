import { Outlet, Link } from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {

  return (
    <>
      <div className="navigation">
        <Link className="nav-link-one" to='/'>
          <button className="one">Home</button>
        </Link>
        <Link className="nav-link-two" to='/checkout'>
          <button className="one">Checkout</button>
        </Link>
      </div>
      <Outlet/>
    </>
  );
};

export default Navigation;