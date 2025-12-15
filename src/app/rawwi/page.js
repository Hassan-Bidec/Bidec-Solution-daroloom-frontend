import React from 'react'
import Rawwi from '../components/Rawwi'
import { getRawwiList } from '../lib/api';

const page =  async () => {
     const response = await getRawwiList();
    const items = Array.isArray(response)
      ? response
      : response?.data || [];
  return (
    <div className='mt-50'><Rawwi items={items}/></div>
  )
}

export default page