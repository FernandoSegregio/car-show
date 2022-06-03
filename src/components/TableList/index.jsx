import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListContainer, ButtonAdd } from './style';
import data from '../../helper/database';
import CarShowContext from '../../context/CarShowContext';

function TableList() {
  const location = useLocation();

  const { setTheme } = useContext(CarShowContext);

  useEffect(() => {
    if (location.pathname.includes('table')) {
      setTheme('dark');
    }
  }, [location.pathname]);

  return (
    <ListContainer>
      <div>
        <h1>Lista</h1>
        <ButtonAdd type="button">
          <span className="iconify" data-icon="carbon:add" />
          Adicionar Novo
        </ButtonAdd>
      </div>
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
