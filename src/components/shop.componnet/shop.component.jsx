import data from '../../items-data'
import CartItem from '../Cart-item/Cart-item'

import './shop.component.scss'

const Shop = () => {
  return (
    <section>
      <div className='products-container' id='buy'>
        {data.map((product) => (
          <CartItem key={product.id} product={product}/>
        ))}
      </div>
    </section>
  )
}

export default Shop;