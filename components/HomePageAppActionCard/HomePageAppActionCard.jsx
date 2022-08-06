import React from 'react'
import Image from 'next/image'
import styles from './HomePageAppActionCard.module.scss'

export default function HomePageAppActionCard() {
  return (
    <div className='row mt-4'>
    <div className="col-12">
     <Image  
      src="/assets/home-page/Group75273.png"
      width='1540px'
      height= '500px'
      // layout="responsive"
      // objectFit="contain"
      />
    </div>
      </div>
  )
}
