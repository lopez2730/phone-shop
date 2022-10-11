import { TextField } from '@mui/material'
import React from 'react'

export const SearchPage = () => {
  return (
    <div>
      <div className="col-5">
        <form>
        <TextField id="outlined-basic" label="search a phone" variant="outlined" />
          <button className='btn btn-outline-primart mt-1'>Search</button>
        </form>
        <div className="col-7">

        </div>
      </div>
    </div>
  )
}
