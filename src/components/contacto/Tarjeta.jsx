import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ contacto }) => {
  const {
    logo,
    empresa,
    nombreCompleto,
    puesto,
    telefonosFijos,
    telefonosMoviles,
    fax,
    mails,
    sitioWeb,
    direccion,
    comentario,
    pais
  } = contacto;

  return (
    <div className="tarjeta-container">
      <div className="tarjeta-header">
        <img src={logo} alt={`${empresa} logo`} className="tarjeta-logo" />
        <div className="tarjeta-header-info">
          <h2>{empresa}</h2>
          <p>{nombreCompleto}</p>
          <p>{puesto}</p>
          <p>{pais}</p>
        </div>
      </div>
      <div className="tarjeta-body">
        <div className="tarjeta-contacto">
          <h3>Contactos</h3>
          <p><strong>Teléfonos Fijos:</strong> {telefonosFijos.join(', ')}</p>
          <p><strong>Teléfonos Móviles:</strong> {telefonosMoviles.join(', ')}</p>
          <p><strong>Fax:</strong> {fax.join(', ')}</p>
          <p><strong>Mails:</strong> {mails.join(', ')}</p>
          <p><strong>Sitio Web:</strong> <a href={sitioWeb} target="_blank" rel="noopener noreferrer">{sitioWeb}</a></p>
        </div>
        <div className="tarjeta-direccion">
          <h3>Dirección</h3>
          <p>{direccion}</p>
        </div>
        <div className="tarjeta-comentario">
          <h3>Comentario</h3>
          <p>{comentario}</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
