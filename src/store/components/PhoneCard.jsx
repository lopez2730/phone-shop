import React, { useContext, useState } from 'react';
import { CartContext } from '../../src/context/CartProvider';
import { DetailsModal } from './DetailsModal';

export const PhoneCard = ({
    id,
    data,
    detalles,
}) => {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const {addItem} = useContext(CartContext);

    return (
        <div className='col'>
          <DetailsModal
            id={id}
            open={open}
            handleClose={handleClose}
            detalles={detalles}
            marca={data.marca}
            modelo={data.modelo}
            precio={data.precio}
            imagen={data.imagen}
          />
            <div className='card'>
                <div className='row no-gutter'>
                    <div className='col-4'>
                        <img src={data.imagen} className='card-img' alt={data.modelo} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{data.modelo}</h5>
                            <p className='card-text'>{data.marca}</p>
                            <p className='card-text'>${data.precio}</p>
                            <button onClick={handleOpen} className='btn btn-primary' style={{ maxWidth: 200}}>detalles</button>
                            <button onClick={() => {addItem(data)}} className='btn btn-primary m-2' style={{ maxWidth: 200}}> agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
