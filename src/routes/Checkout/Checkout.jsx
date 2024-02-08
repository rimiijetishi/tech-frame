import { useContext } from "react";
import { CartContext } from "../../context/cart-Context"
import { generateInvoices } from '../../utils/utils'
import CheckoutItem from "../../components/Checkout-item/Checkout-item";
import './Checkout.scss'

const Checkout = () => {
  const {cartItems} = useContext(CartContext)

  const items = cartItems.map((item) => ({
    ...item,
    priceWithVat: parseFloat((item.price * (1 + item.VAT)).toFixed(2)),
  }));



  const invoices = generateInvoices(items);
  console.log(invoices);



  return (
    <div className="checkout-container" id="paid">
      <h1>ITEMS AND PRICE</h1>
      {invoices.map((invoice, index) => (
        <table className="my-table" key={invoice.id1}>
          <thead>
            <tr>
              <th colSpan='6'>Invoice: {index + 1}</th>
            </tr>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Vat</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (<CheckoutItem key={item.id} item={item} />))}
            <tr>
              <td colSpan='5' className='prices'>
                Subtotal Price:
              </td>
              <td>
                {parseFloat(invoice.subTotalPrice).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan='5' className='prices'>
                Vat:
              </td>
              <td>
                {parseFloat(invoice.totalPrice - invoice.subTotalPrice).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan='5' className='prices'>
                Total Price:
              </td>
              <td>
                {parseFloat(invoice.totalPrice).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
};

export default Checkout;