import data from './items-data'
import { generateInvoices } from './utils/utils'
import CheckoutItem from './Checkout-item/Checkout-item';
import './App.scss'

const App = () => {


  const items = data.map((item) => ({
    ...item,
    priceWithVat: parseFloat((item.price * (1 + item.VAT)).toFixed(2)),
  }));


  const invoices = generateInvoices(items);
  console.log(invoices);


  return (
    <div className="checkout-container">
      <h1>Testing</h1>
      {invoices.map((invoice, index) => (
        <div className='invoice' key={invoice.id}>
          <table className="my-table">
            <thead>
              <tr>
                <th colSpan='6'> Invoice: {index +1}</th>
              </tr>
            </thead>
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Vat</th>
                <th>Total</th>
              </tr>
            <tbody>
              {invoice.items.map((item) => ( <CheckoutItem key={item.id} item={item}/>))}
              <tr>
                <td colSpan='5' className='prices'>
                  Subtotal Price:
                </td>
                <td>
                  {parseFloat(invoice.subTotalPrice)}
                </td>
              </tr>
              <tr>
                <td colSpan='5' className='prices'>
                  Vat:
                </td>
                <td>
                  {parseFloat(invoice.totalPrice - invoice.subTotalPrice)}
                </td>
              </tr>
              <tr>
                <td colSpan='5' className='prices'>
                  Total Price:
                </td>
                <td>
                  {parseFloat(invoice.totalPrice)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
};

export default App;