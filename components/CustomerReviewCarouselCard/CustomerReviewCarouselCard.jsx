import React from 'react'
import styles from './CustomerReviewCarouselCard.module.scss'

export default function CustomerReviewCarouselCard(prop) {
  return (
    <div className='text-center'>
    <div className={`${styles.review}`}>{prop.review}</div>
    <div className={`${styles.name}`}>{prop.name}</div>
    <div className={`${styles.date} mt-3`}>{prop.date}</div>
    </div>
  )
}
