import React, { useContext, useState } from 'react';
import { CartContext } from '../../src/context/CartProvider';
import { DetailsModal } from './DetailsModal';

export const PhoneCard = ({
    id,
    marca,
    modelo,
    precio,
    imagen,
    detalles,
    setItemAdded,
}) => {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const cart = useContext(CartContext);

    return (
        <div className='col'>
          <DetailsModal
            id={id}
            open={open}
            handleClose={handleClose}
            detalles={detalles}
            marca={marca}
            modelo={modelo}
            precio={precio}
            imagen={imagen}
          />
            <div className='card'>
                <div className='row no-gutter'>
                    <div className='col-4'>
                        <img src={imagen} className='card-img' alt={modelo} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{modelo}</h5>
                            <p className='card-text'>{marca}</p>
                            <p className='card-text'>${precio}</p>
                            <button onClick={handleOpen} className='btn btn-primary' style={{ maxWidth: 200}}>detalles</button>
                            {/* <button onClick={() => {setItemAdded(modelo)}} className='btn btn-primary m-2' style={{ maxWidth: 200}}> agregar</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
