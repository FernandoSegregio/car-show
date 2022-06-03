import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ListContainer, ButtonAdd, Form, FormContainer, FormButton,
} from './style';
import data from '../../helper/database';
import CarShowContext from '../../context/CarShowContext';
import retangle from '../../assets/images/addCar/retangle.png';

function TableList() {
  const [isHidden, setIsHidden] = useState('is-hidden');
  const location = useLocation();
  const { setTheme } = useContext(CarShowContext);

  useEffect(() => {
    if (location.pathname.includes('table')) {
      setTheme('dark');
    }
  }, [location.pathname]);

  return (
    <ListContainer>
      <FormContainer className={isHidden}>
        <button type="button" onClick={() => setIsHidden('is-hidden')}>
          <span className="iconify" data-icon="ant-design:close-circle-outlined" />
        </button>
        <h2>Adicionar novo</h2>
        <div>
          <img src={retangle} alt="bandeira" />
          <Form>
            <label htmlFor="name">
              Nome
              <input id="name" type="text" />
            </label>
            <label htmlFor="name">
              Ano
              <input id="name" type="text" />
            </label>
            <label htmlFor="name">
              Velocidade Máxima Km/h
              <input id="name" type="text" />
            </label>
            <label htmlFor="name">
              Nota economia
              <input id="name" type="text" />
            </label>
            <label htmlFor="name">
              Nota usúarios
              <input id="name" type="text" />
            </label>
            <label htmlFor="name">
              Link produtos
              <input id="name" type="text" />
            </label>
          </Form>
        </div>
        <FormButton>
          <span className="iconify" data-icon="carbon:add" />
          Adicionar Novo
        </FormButton>
      </FormContainer>
      <article>
        <h1>Lista</h1>
        <ButtonAdd type="button" onClick={() => setIsHidden('no-hidden')}>
          <span className="iconify" data-icon="carbon:add" />
          Adicionar Novo
        </ButtonAdd>
      </article>
      <table cellSpacing="0" className="oi">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ano</th>
            <th>Velocidade máx Km/h</th>
            <th>Nota Economia</th>
            <th>Nota usuários</th>
            <th>{ }</th>
            <th>{ }</th>
          </tr>
        </thead>
        <tbody>
          { data.map(({
            name, year, speed, energyRating, userRating, id,
          }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{year}</td>
              <td>{speed}</td>
              <td>{energyRating}</td>
              <td>{userRating}</td>
              <td><span className="iconify" data-icon="akar-icons:trash-can" /></td>
              <td><span className="iconify" data-icon="clarity:edit-line" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListContainer>
  );
}

export default TableList;
