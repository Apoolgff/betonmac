import React from 'react';
import './Institucional.css';
import './utils/Button.css';
import Hinstitucional from './Institucional/Hinstitucional'
import Misvis from './Institucional/Misvis'
import Cardseid from './Institucional/Cardseid'
import Servicesinst from './Institucional/Servicesinst'
import Ihistoria from './Institucional/Ihistoria'
import Premios from './Institucional/Premios'
import Certificaciones from './Institucional/Certificaciones'

const Institucional = () => {
  return (
    <section className="institucional-container">
      {/*Hero */}
      <Hinstitucional />

      {/*Ttexto descriptivo */}
      <Misvis />

      {/*Cards*/}
      <Cardseid />

      {/*Seccion de Servicios*/}
      <Servicesinst />

      {/*Separador*/}

      {/*Historia*/}
      <Ihistoria />

      {/*Seccion de Premios*/}
      <Premios />

      {/*Cards*/}
      <Certificaciones />
    </section>
  );
};

export default Institucional;
