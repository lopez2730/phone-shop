import React, { useContext } from 'react'
import { CartContext } from '../../src/context/CartProvider'

export const CartPage = () => {
const {cartItems} = useContext(CartContext)

  return (
    <>
      {
        cartItems.map((item) => (
          <div lassName='col'>
            <div className='card'>
                <div className='row no-gutter'>
                    <div className='col-1'>
                        <img src={item.imagen} className='card-img' alt={item.modelo} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{item.modelo}</h5>
                            <p className='card-text'>{item.marca}</p>
                            <p className='card-text'>cantidad: {item.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {item.marca}
            {item.modelo}
            quantity: {item.quantity} */}
          </div>
        ))
      }
    </>
  )
}
