import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ListContainer, ButtonAdd, Form, FormContainer, FormButton,
} from './style';
import data from '../../helper/database';
import CarShowContext from '../../context/CarShowContext';
import retangle from '../../assets/images/addCar/retangle.png';

function TableList() {
  const location = useLocation();

  const [isHidden, setIsHidden] = useState('is-hidden');
  const { setTheme } = useContext(CarShowContext);
  const initialState = {
    name: '',
    year: '',
    speed: '',
    energyRating: '',
    userRating: '',
    model: '',
    image: '',
  };
  const [newCar, setNewCar] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setNewCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isDisable = Object.values(newCar).some((item) => !item);

  function addNewCar(e) {
    e.preventDefault();
    data.push(newCar);
    setNewCar(initialState);
  }

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
          <Form onSubmit={(e) => { addNewCar(e); }}>
            <label htmlFor="name">
              Nome
              <input onChange={handleChange} id="name" type="text" name="name" value={newCar.name} />
            </label>
            <label htmlFor="model">
              Modelo
              <input onChange={handleChange} id="model" type="text" name="model" value={newCar.model} />
            </label>
            <label htmlFor="name">
              Ano
              <input onChange={handleChange} id="year" type="text" name="year" value={newCar.year} />
            </label>
            <label htmlFor="speed">
              Velocidade Máxima Km/h
              <input onChange={handleChange} id="speed" type="text" name="speed" value={newCar.speed} />
            </label>
            <label htmlFor="energyRating">
              Nota economia
              <input onChange={handleChange} id="energyRating" type="text" name="energyRating" value={newCar.energyRating} />
            </label>
            <label htmlFor="userRating">
              Nota usúarios
              <input onChange={handleChange} id="userRating" type="text" name="userRating" value={newCar.userRating} />
            </label>
            <label htmlFor="link">
              Link produtos
              <input
                onChange={handleChange}
                id="link"
                type="text"
                name="image"
                value={newCar.image}
              />
            </label>
            <FormButton
              disabled={isDisable}
              type="submit"
            >
              <span className="iconify" data-icon="carbon:add" />
              Adicionar Novo
            </FormButton>
          </Form>
        </div>
      </FormContainer>
      <article>
        <h1>Lista</h1>
        <ButtonAdd
          type="button"
          onClick={() => {
            setIsHidden('no-hidden');
          }}
        >
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
          { data.length > 0 && data.map(({
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
