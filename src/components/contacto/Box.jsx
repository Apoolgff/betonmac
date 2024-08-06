import React, { useState } from 'react';
import './Box.css';

const Box = () => {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    empresa: '',
    localidad: '',
    mail: '',
    telefono: '',
    consulta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    setFormData({
      nombreApellido: '',
      empresa: '',
      localidad: '',
      mail: '',
      telefono: '',
      consulta: ''
    });
  };

  return (
    <div className="box-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombreApellido">Nombre y Apellido</label>
          <input
            type="text"
            id="nombreApellido"
            name="nombreApellido"
            value={formData.nombreApellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="localidad">Localidad</label>
          <input
            type="text"
            id="localidad"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="consulta">Consulta</label>
          <textarea
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='button-hexagon-yellow'>
                        <div className='harallelogram-container harallelogram-button'>
                            <div className='harallelogram harallelogram-c animation-button-left'></div>
                            <div className='harallelogram harallelogram-a animation-button-left'></div>
                            <div className='harallelogram harallelogram-b animation-button-top'></div>
                            <div className='harallelogram harallelogram-d animation-button-top'></div>
                            <div className='harallelogram harallelogram-e animation-button-right'></div>
                            <div className='harallelogram harallelogram-f animation-button-right'></div>
                            <img className="button-hexagon-full" src="/public/images/icons/button-yellow-full.png" alt="" />  
                        </div> 
          </button>
      </form>
    </div>
  );
};

export default Box;
