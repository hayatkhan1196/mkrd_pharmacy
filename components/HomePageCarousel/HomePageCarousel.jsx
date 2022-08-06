
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar } from 'swiper';

// for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./HomePageCarousel.module.scss";
// components
import HomePageCaraousalImage from 'components/HomePageCaraousalImage/HomePageCaraousalImage';
import { useSelector } from 'react-redux';

export default function HomePageCarousel() {
    return (
        <>
             <Swiper
                slidesPerView={2}
                spaceBetween={50}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Pagination,Autoplay,Navigation]}
                className="mySwiper"
                loop={true}
                speed =  {800}
                autoplayDisableOnInteraction = {false}
            > 
                 <SwiperSlide >
                    <HomePageCaraousalImage 
                    name="Image"
                    src="/assets/home-page/Group74941.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HomePageCaraousalImage 
                    name="Image"
                    src="/assets/home-page/Group74941.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HomePageCaraousalImage 
                    name="Image"
                    src="/assets/home-page/Group74941.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HomePageCaraousalImage 
                    name="Image"
                    src="/assets/home-page/Group74941.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HomePageCaraousalImage 
                    name="Image"
                    src="/assets/home-page/Group74941.png"
                    />
                </SwiperSlide> 
             </Swiper> 
        </>
    )
}
