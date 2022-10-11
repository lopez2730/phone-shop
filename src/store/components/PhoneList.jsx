import { TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../src/context/CartProvider'
import { phones } from '../data/phones'
import { PhoneCard } from './PhoneCard'

export const PhoneList = (props) => {
  const cart = useContext(CartContext)
  console.log("🚀 ~ cart", cart)
  const [searchingPhone, setSearchingPhone] = useState(phones || [])
  const [itemAdded, setItemAdded] = useState([])

  const phoneFilter = (event) => {

    const phoneName = event.target.value
    
    if( phoneName !== '') {
      const searching = phones.filter(({modelo}) => modelo.toLocaleLowerCase() === phoneName)
      if (searching.length !== 0){
        setSearchingPhone(searching)
      }
    } else {
      setSearchingPhone(phones)
    }
  }

  return (
    <>
    <div className='container m-2'>
      <form>
        <TextField 
          id="outlined-basic" 
          label="search a phone" 
          variant="outlined"
          onChange={phoneFilter}
        />
      </form>
    </div>
      <div className='row rows-cols-1 row-cols-md-3 g-3'>

          {
              searchingPhone.map(phone => (
                  <PhoneCard
                    setItemAdded={setItemAdded}
                      key={phone.id}
                      data={phone}
                  />
              ))
          }
      </div>
    </>
  )
}
