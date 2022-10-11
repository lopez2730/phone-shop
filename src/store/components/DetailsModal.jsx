import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PhoneCard } from './PhoneCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const DetailsModal = ({
  id, 
  open, 
  handleClose, 
  marca,
  modelo,
  precio,
  imagen,
  detalles,
}) => {

  return (
    <>
      <Modal
        key={id}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          <div className='row no-gutter'>
            <div className='col-4'>
              <img src={imagen} className='card-img' alt={modelo} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className='card-title'>{modelo}</h5>
                <p className='card-text'>{marca}</p>
                <p className='card-text'>${precio}</p>
                <p className='card-text'>{detalles}</p>
              </div>
            </div>
          </div>
      </Box>
      </Modal>
    </>
  )
}
