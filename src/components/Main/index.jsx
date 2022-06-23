import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Carousel from '../Carousel';
import {
  ArticleAbout,
  ButtonAbout,
  MainContainer,
  SectionAbout,
  SectionMain,
} from './style';

function Main() {
  const size = useWindowSize();
  return (
    <MainContainer id="home">
      <SectionMain>
        <h1>MUSTANG</h1>
      </SectionMain>
      <Carousel />
      <SectionAbout id="about">
        <div />
        <ArticleAbout>
          {
            size.width < 800 ? (
              <>
                <h1>O que são</h1>
                <p>
                  A sigla SUV significa Sport Utility Vehicle -- ou seja,
                  veículo utilitário esportivo.
                  As SUVs costumam ter porte avantajado,
                  além de interior espaçoso e possibilidade de
                  trafegar dentro e fora da cidade.
                </p>
              </>
            ) : (
              <>
                <h1>Mustang</h1>
                <p>
                  {`O Ford Mustang é um automóvel desportivo produzido
            pela Ford Motor Company. O carro foi apresentado ao
            público em 17 de abril de 1964 durante a New York World's Fair.
            O Mustang, apesar de ter sofrido grandes alterações
            ao longo dos anos é a mais antiga linha de automóveis da Ford.`}
                </p>
              </>
            )
          }
          <a href="/#cars">
            <ButtonAbout type="button">Ver carros</ButtonAbout>
          </a>
        </ArticleAbout>
      </SectionAbout>
    </MainContainer>
  );
}

export default Main;
