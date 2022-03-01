import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import image from '../images/1.1.png'

import 'swiper/scss';
import * as sliderStyles from './slider.module.scss'

export default () => {
  return (
    <Swiper className={sliderStyles.swiper}
      spaceBetween={50}
      slidesPerView={"auto"}
      centeredSlides={true}
      speed={700}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image} alt="Girl in a jacket"/></SwiperSlide>
    </Swiper>
  );
};
