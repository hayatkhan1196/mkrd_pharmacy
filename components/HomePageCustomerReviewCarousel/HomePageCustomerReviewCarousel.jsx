import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

// for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./HomePageCustomerReviewCarousel.module.scss";
// components
import CustomerReviewCarouselCard from 'components/CustomerReviewCarouselCard/CustomerReviewCarouselCard';
import { useSelector } from 'react-redux';

export default function HomePageCustomerReviewCarousel() {
    const genericAlternateList = useSelector((state) => state.product.genericAlternateList)
    return (
        <>
            <Swiper
                className={`mt-3`}
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
            >
                            <SwiperSlide className={`${styles.card}`}>
                                <CustomerReviewCarouselCard
                                    review={"After purchasing from Medkart, I realized that we can buy quality generic medicines at much cheaper rates. I even got to learn a lot about generic medicines from my visit." }
                                    name={"Megha Vyas"}
                                    date={"22nd April 2022"}
                                />
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.card}`}>
                                <CustomerReviewCarouselCard
                                    review={"After purchasing from Medkart, I realized that we can buy quality generic medicines at much cheaper rates. I even got to learn a lot about generic medicines from my visit." }
                                    name={"Megha Vyas"}
                                    date={"22nd April 2022"}
                                />
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.card}`}>
                                <CustomerReviewCarouselCard
                                    review={"After purchasing from Medkart, I realized that we can buy quality generic medicines at much cheaper rates. I even got to learn a lot about generic medicines from my visit." }
                                    name={"Megha Vyas"}
                                    date={"22nd April 2022"}
                               />
                            </SwiperSlide>
                            <SwiperSlide className={`${styles.card}`}>
                                <CustomerReviewCarouselCard
                                    review={"After purchasing from Medkart, I realized that we can buy quality generic medicines at much cheaper rates. I even got to learn a lot about generic medicines from my visit." }
                                    name={"Megha Vyas"}
                                    date={"22nd April 2022"}
                                />
                            </SwiperSlide>
            </Swiper>
        </>
    )
}
