import React from 'react';
import {
  ArticleAbout,
  ButtonAbout,
  ButtonCarousel,
  CarouselContainer,
  DivCarousel,
  MainContainer, SectionAbout, SectionMain,
} from './style';

import car1 from '../../assets/images/cars/car1.svg';

function Main() {
  return (
    <MainContainer>
      <SectionMain>
        <h1>MUSTANG</h1>
      </SectionMain>
      <CarouselContainer>
        <DivCarousel>
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
        </DivCarousel>
      </CarouselContainer>
      <SectionAbout>
        <div />
        <ArticleAbout>
          <h1>O que são</h1>
          <p>
            A sigla SUV significa Sport Utility Vehicle -- ou seja,
            veículo utilitário esportivo.
            As SUVs costumam ter porte avantajado,
            além de interior espaçoso e possibilidade de
            trafegar dentro e fora da cidade.
          </p>
          <ButtonAbout type="button">Ver carros</ButtonAbout>
        </ArticleAbout>
      </SectionAbout>
    </MainContainer>
  );
}

export default Main;
