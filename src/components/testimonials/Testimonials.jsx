import React from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import ME from '../../assets/me.jpeg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className='peer__avatar'>
            <img src={ME} alt='person1' />
          </div>
          <h5 className='peer__name'>Bill Windows</h5>
          <small className='peer__review'>
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='peer__avatar'>
            <img src={ME} alt='person1' />
          </div>
          <h5 className='peer__name'>Bill Windows</h5>
          <small className='peer__review'>
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='peer__avatar'>
            <img src={ME} alt='person1' />
          </div>
          <h5 className='peer__name'>Bill Windows</h5>
          <small className='peer__review'>
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='peer__avatar'>
            <img src={ME} alt='person1' />
          </div>
          <h5 className='peer__name'>Bill Windows</h5>
          <small className='peer__review'>
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud
            Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get Gud Get
            Gud
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
