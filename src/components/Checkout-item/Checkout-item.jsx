import './Checkout-item.scss'

const CheckoutItem = ({item}) => {
  const sub = item.priceWithVat * item.quantity - item.discount
  const total = sub.toFixed(2)

  return (
    <tr key={item.id} className="checkout-item-container">
      <td className="name">{item.name}</td>
      <td className="value">{item.quantity}</td>
      <td className="price">${item.price}</td>
      <td>${item.discount}</td>
      <td>{item.VAT * 100}%</td>
      <td>${parseFloat(total)}</td>
    </tr>
  );
};

export default CheckoutItem;
