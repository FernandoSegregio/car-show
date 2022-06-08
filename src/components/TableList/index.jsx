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
  const [nameCar, setNameCar] = useState('');
  const [yearCar, setYearCar] = useState('');
  const [speedCar, setSpeedCar] = useState('');
  const [energyCar, setEnergyCar] = useState('');
  const [userRatingCar, setUserRatingCar] = useState('');
  const [modelCar, setModelCar] = useState('');
  const [linkCar, setLinkCar] = useState('');

  const newData = {
    id: data[data.length - 1].id + 1,
    alt: nameCar,
    name: nameCar,
    year: yearCar,
    speed: speedCar,
    energyRating: energyCar,
    userRating: userRatingCar,
    model: modelCar,
    image: linkCar,
  };

  const nameAndYear = newData.name.length >= 2 && newData.year.length === 4;
  const speedAndEnergy = newData.speed.length >= 2 && newData.energyRating.length >= 1;
  const userRatingAndModelImage = newData.userRating.length >= 1 && newData
    .model.length >= 2 && newData.image.length >= 2;

  const desability = (nameAndYear && speedAndEnergy && userRatingAndModelImage);

  function addNewCar() {
    data.push(newData);
  }

  function resetInputs() {
    setNameCar('');
    setYearCar('');
    setSpeedCar('');
    setEnergyCar('');
    setUserRatingCar('');
    setModelCar('');
    setLinkCar('');
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
          <Form onSubmit={(e) => {
            e.preventDefault();
            addNewCar();
          }}
          >
            <label htmlFor="name">
              Nome
              <input onChange={({ target: { value } }) => setNameCar(value)} id="name" type="text" name="name" value={nameCar} />
            </label>
            <label htmlFor="model">
              Modelo
              <input onChange={({ target: { value } }) => setModelCar(value)} id="model" type="text" name="model" value={modelCar} />
            </label>
            <label htmlFor="name">
              Ano
              <input onChange={({ target: { value } }) => setYearCar(value)} id="year" type="text" name="year" value={yearCar} />
            </label>
            <label htmlFor="speed">
              Velocidade Máxima Km/h
              <input onChange={({ target: { value } }) => setSpeedCar(value)} id="speed" type="text" name="speed" value={speedCar} />
            </label>
            <label htmlFor="energyRating">
              Nota economia
              <input onChange={({ target: { value } }) => setEnergyCar(value)} id="energyRating" type="text" name="energyRating" value={energyCar} />
            </label>
            <label htmlFor="userRating">
              Nota usúarios
              <input onChange={({ target: { value } }) => setUserRatingCar(value)} id="userRating" type="text" name="userRating" value={userRatingCar} />
            </label>
            <label htmlFor="link">
              Link produtos
              <input onChange={({ target: { value } }) => setLinkCar(value)} id="link" type="text" name="link" value={linkCar} />
            </label>
            <FormButton
              disabled={!desability}
              type="submit"
              onClick={() => resetInputs()}
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
