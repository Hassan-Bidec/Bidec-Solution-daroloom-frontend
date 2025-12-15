import React from 'react'
import { getRaqamUlAli } from '../lib/api';
import RaqamUlAli from '../components/RaqamUlAli';

const page = async() => {
         const response = await getRaqamUlAli();
        const items = Array.isArray(response)
          ? response
          : response?.data || [];
  return (
    <div className='mt-50'><RaqamUlAli items={items}/></div>
  )
}

export default page