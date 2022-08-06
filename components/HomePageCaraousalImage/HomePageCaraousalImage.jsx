import React from 'react'
import Image from 'next/image'
import styles from './HomePageCarousalImg.module.scss'

export default function HomePageCaraousalImage(prop) {
  return (
    <div className='my_divv' >
      <Image
        src={prop.src}
        width={100}
        height={50}
        alt="Medicine"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  )
}
