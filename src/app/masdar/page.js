import React from 'react'
import KitabulIman from '../components/masdar'
import { getMasdarList } from '../lib/api';


 const  page = async () => {
 const response = await getMasdarList();
const items = Array.isArray(response)
  ? response
  : response?.data || [];

  return (
    <div className='mt-50'><KitabulIman items={items} /></div>
  )
}

export default page