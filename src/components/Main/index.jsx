import React from 'react';
import Carousel from '../Carousel';
import {
  ArticleAbout,
  ButtonAbout,
  MainContainer,
  SectionAbout,
  SectionMain,
} from './style';

function Main() {
  return (
    <MainContainer>
      <SectionMain>
        <h1>MUSTANG</h1>
      </SectionMain>
      <Carousel />
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
