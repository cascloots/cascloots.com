import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../images/slide 3.png'
import image2 from '../images/slide 4.png'
import image3 from '../images/slide 1.png'
import image4 from '../images/slide 5.png'

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
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image1} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image2} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image3} alt="Girl in a jacket"/></SwiperSlide>
      <SwiperSlide className={sliderStyles.swiperSlide}><img src={image4} alt="Girl in a jacket"/>
      </SwiperSlide>
    </Swiper>
  );
};
