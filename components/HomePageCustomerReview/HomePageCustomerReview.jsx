import React from 'react'
import useLocalize from 'i18n/i18n';
import styles from './HomePageCustomerReview.module.scss'
import HomePageCustomerReviewCarousel from 'components/HomePageCustomerReviewCarousel/HomePageCustomerReviewCarousel'

export default function HomePageCustomerReview() {
    const {localize} = useLocalize()
  return (
    <div className='text-center mt-4 mb-2'>
    <div className={`${styles.review_Text}`}>{localize("customerHaveToSay")}</div>
    <HomePageCustomerReviewCarousel />
    </div>
  )
}
