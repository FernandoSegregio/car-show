/* eslint-disable import/no-unresolved */
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import { Pagination, Navigation } from 'swiper';
import {
  ButtonCarousel,
  CarouselContainer,
} from './style';
import data from '../../helper/database';

function Carousel() {
  return (
    <CarouselContainer
      slidesPerView="auto"
      spaceBetween={24}
      slidesPerGroup={1}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {
      data.map(({
        id, image, alt, name, year, speed, energyRating, userRating, model,
      }) => (
        <SwiperSlide key={id}>
          <img src={image} alt={alt} className={model} />
          <h2>{name}</h2>
          <ul>
            <li>
              <span className="iconify date" data-icon="bi:calendar2-date" />
              <span>{year}</span>
            </li>
            <li>
              <span className="iconify velo" data-icon="fluent:top-speed-20-regular" />
              <span>{`${speed} Km/h`}</span>
            </li>
            <li>
              <span className="iconify energy" data-icon="simple-line-icons:energy" />
              <span>{`${energyRating}/10`}</span>
            </li>
            <li>
              <span className="iconify people" data-icon="fluent:people-20-regular" />
              <span>{`${userRating}/10`}</span>
            </li>
          </ul>
          <ButtonCarousel>Ver carro</ButtonCarousel>
        </SwiperSlide>
      ))
      }
    </CarouselContainer>
  );
}

export default Carousel;
