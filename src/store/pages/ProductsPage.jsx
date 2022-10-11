import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { BASE_URL } from '../../constans/api/apiConstants';
import { PhoneList } from '../components/PhoneList';
import { SearchPage } from './SearchPage';

export default function ProductsPage() {

  return (
    <>
    <h1>Productos</h1>
    <hr />
      <PhoneList />
    </>
  )
}
