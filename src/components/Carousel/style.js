/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { ButtonAbout } from '../Main/style';

export const CarouselSection = styled.section`
  background-color: var(--neutral-color-white-300);
  width: 100%;
`;

export const CarouselContainer = styled(Swiper)`
  align-items: center;
  display: flex;
  height: 560px;
  justify-content: center;
  padding: 40px 0;


    @media screen and (min-width: 900px) {
      height: 600px;
      padding: 90px 0 40px;
    }  

    .swiper-wrapper {
      align-items: flex-end;
      width: 76%;
      margin: 0 50px;

      @media screen and (min-width: 900px) {
        align-items: center;
      }  
    }
    
    .swiper-slide {
      border-radius: 24px;
      border: 1px solid var(--brand-color-primary);
      display: flex;
      flex-direction: column;
      height: 362px;
      position: relative;
      width: 278px !important;
    }

    .swiper-slide .car1 {
      left: 8%;
      position: absolute;
      top: -114px;
      width: 226px;
    }

    .car2 {
      left: 9%;
      position: absolute;
      top: -80px;
      width: 228.98px;
    }

    .car3 {
      height: 272.3;
      left: -15%;
      position: absolute;
      top: -229px;
      width: 394px;
    }

    .swiper-button-next,
    .swiper-button-prev,
    .swiper-pagination {
      display: none;

      @media screen and (min-width: 900px) {
        display: initial;
        

        &::after {
          color: var(--brand-color-primary);
          font-size: 32.5px;
        }
      }    
    }

    .swiper-button-next {
      @media screen and (min-width: 900px) {
        right: 59.25px; 
      }
    }

    .swiper-button-prev {
      @media screen and (min-width: 900px) {
        left: 59.25px; 
      }
    }


    .swiper-pagination {
      @media screen and (min-width: 900px) {
        height: 4px;
        width: 273px;
        bottom: 40px;
        top: revert;
        left: calc(50% - 136.5px);
        
          span {
            background-color: var(--brand-color-primary);
          }      
      }    
    }

    h2 {
      margin: 26.4px auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-left: 32px;
      row-gap: 24px;

        li {
          align-items: center;
          column-gap: 26.4px;
          display: flex;
          flex-direction: row;
            
            span {
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
            }
            
            .date {
              height: 24px;
              width: 24px;
            }

            .velo {
              height: 28.84px;
              width: 24px;
            }

            .energy {
              height: 23.97px;
              width: 23.97px;
            }

            .people {
              height: 27.2px;
              width: 26.2px;
            }
        }
      }
`;

export const ButtonCarousel = styled(ButtonAbout)`
  border-color: var(--brand-color-primary);
  border-radius: 21px;
  color: var(--brand-color-primary);
  height: 48px;
  margin: auto;
  width: 217px;
`;
