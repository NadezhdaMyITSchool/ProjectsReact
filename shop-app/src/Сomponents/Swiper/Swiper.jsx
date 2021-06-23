


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Pagination, Navigation, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import img1 from './img/dolce.png';
import img2 from './img/gucci.png';
import img3 from './img/lv.png';
import img4 from './img/noten.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default () => {
  return (
    <section className="product-slider">
      <div className="container">
        <div className="product-slider__wrapper">

        
    <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={4}
        slidesPerGroup={2}
        spaceBetween={50}
        navigation = {{
          // nextEl: '.swiper-button-next'
        }}
        loop
        // scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        // effect='fade'
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          425: {
            // width: 380,
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          640 : {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768 : {
            slidesPerView: 3,
            slidesPerGroup: 2
          },

          1024: {
            
            slidesPerView: 4,
            spaceBetween: 50
          },
        }}
       
        
      >
        <SwiperSlide>
          <div className="product-slider__item">
            <div><img src={img3} alt="" /></div>
            <div>Louis Vouiton</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">
          <div><img src={img1} alt="" /></div>
          <div>Dolce&#38;Gabbana</div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">
          <div><img src={img2} alt="" /></div>
          <div>Gucci</div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">
          <div><img src={img4} alt="" /></div>
          <div>Dries van Noten</div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">
          <div><img src={img2} alt="" /></div>
          <div>Gucci</div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">  
          <div className="product-slider__item">
            <div><img src={img3} alt="" /></div>
            <div>Louis Vouiton</div>
          </div>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-slider__item">  
          <div><img src={img4} alt="" /></div>
          <div>Dries van Noten</div>
        </div>  
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      </section>
  );
};