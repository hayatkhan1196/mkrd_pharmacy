import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

// for swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./similarItemCarousel.module.scss";
// components
import SimilarItemCard from "./SimilarItemCard/SimilarItemCard";
import similarItems from "../../JSON_DATA/medicines.json";

export default function CartSlider({ cartItems }) {
  return (
    <div className={`box-shadow-bg p-2 mb-5 col-lg-8`}>
      <div className="p-3 pb-0">
        <h3 className={`${styles.section_title}`}>Similar Products</h3>
      </div>
      <Swiper
        className={`mt-5`}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
      >
        {similarItems.map((value, key) => {
          return (
            <SwiperSlide
              key={value.id}
              className={`${styles.swiper_width_260}`}
            >
              <SimilarItemCard
                id={value.id}
                image={value.image}
                name={value.title}
                discount={value.discount}
                manufacturer={value.description}
                mrp={value.subPrice}
                salePrice={value.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
