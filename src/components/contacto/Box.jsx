import React, { useState } from 'react';
import './Box.css'; // Asegúrate de tener un archivo CSS para estilizar el formulario si es necesario.

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
    // Aquí puedes manejar la lógica para enviar los datos del formulario, por ejemplo, a través de una API o realizar alguna acción con los datos.
    console.log(formData);
    // Limpia el formulario después del submit
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Box;
