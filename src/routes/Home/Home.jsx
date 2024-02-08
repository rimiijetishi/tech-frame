import { useNavigate } from "react-router-dom";
import Shop from '../../components/shop.componnet/shop.component';
import buyThings from '../../assets/man-shopping.webp'
import { Link } from 'react-scroll';
import './Home.scss'



const Home = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <>
    <header>
      <div className='info'>
        <span className='welcome'>
          <h1>Helllo welcome</h1>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
            Distinctio corporis voluptas harum, nesciunt numquam vero ut<br/>
            quasi praesentium deserunt consequatur sapiente animi sit,<br/>
            rerum quia accusamus fuga molestias eius id.<br/>
          </h4>
          <Link to='buy' smooth={true} duration={500}> 
          <button className="buy">Buy Products</button>
          </Link>

          <button onClick={goToCheckoutHandler} 
          className="check"
          >
            Go Checkout
          </button>
        </span>
        <img src={buyThings} alt="imag"/>
      </div>
      <div className='important-info'>
        <p>
          Because of the strict government rule that requires businesses to never superpass value of 500$ per
          invoice unless the product itself has a price larger than 500$, in that case one invoice should
          contain only that product. Businesses must create multiple invoices, distributing products across
          keeping in mind not to violate maximum value of invoice. Also, the government says that on one
          invoice, the same product cannot be repeated more than 50 times. If a customer buys the same
          product 100 times, that product should be separated into two different invoices for the same
          order with respect web.
        </p>
      </div>
    </header>
    <Shop/>
    <footer className="footer-end">
      <div className="container-end">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
};

export default Home;