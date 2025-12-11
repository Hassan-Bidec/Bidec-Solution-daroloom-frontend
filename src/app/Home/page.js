import React from 'react'
import Banner from '../components/Banner'
import Qirat from '@/app/components/Qirat'
import FeaturesSection from '@/app/components/FeaturesSection'

const page = () => {
  return (
   <>
    <Banner/>
       <Qirat/>
       <div className="px-1">
       <FeaturesSection/>
       </div>
   </>
    
  )
}

export default page