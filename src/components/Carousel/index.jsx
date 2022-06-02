/* eslint-disable import/no-unresolved */
import React from 'react';

import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

// import required modules
import { Pagination, Navigation } from 'swiper';

import {
  ButtonCarousel,
  CarouselContainer,
} from './style';

import car1 from '../../assets/images/cars/car1.svg';

function Carousel() {
  return (
    <CarouselContainer
      slidesPerView={1}
      // spaceBetween={24}
      slidesPerGroup={1}
      // loop
      // loopFillGroupWithBlank
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
      <SwiperSlide>
        <img src={car1} alt="car honda aversa" />
        <h2>Honda Aversa</h2>
        <ul>
          <li>
            <span className="iconify date" data-icon="bi:calendar2-date" />
            <span>2015</span>
          </li>
          <li>
            <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
            <span>180 km/h</span>
          </li>
          <li>
            <span className="iconify energy" data-icon="simple-line-icons:energy" />
            <span>9/10</span>
          </li>
          <li>
            <span className="iconify people" data-icon="fluent:people-20-regular" />
            <span>8/10</span>
          </li>
        </ul>
        <ButtonCarousel>Ver carro</ButtonCarousel>
      </SwiperSlide>
    </CarouselContainer>
  );
}

export default Carousel;
