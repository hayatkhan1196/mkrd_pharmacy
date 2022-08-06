import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

// for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./AlternateItemsCarousel.module.scss";
// components
import AlternateItemsCard from 'components/AlternateItemsCard/AlternateItemsCard';
import { useSelector } from 'react-redux';

export default function AlternateItemsCarousel() {
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
                {
                    genericAlternateList.map((value, key) => {
                        return (
                            <SwiperSlide key={value.id} className={`${styles.swiper_width_260}`}>
                                <AlternateItemsCard
                                    id={value.id}
                                    name={value.name_web}
                                    manufacturer={value.manufacturer_name}
                                    mrp={value.mrp}  
                                    salePrice={value.sales_price} 
                                    image={value.images?.[0]} 
                                />
                            </SwiperSlide>
                        )

                    })
                }
            </Swiper>
        </>
    )
}
