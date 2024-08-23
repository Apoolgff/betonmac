import React from 'react';
import Rotation from '../utils/Rotation';
import './Hnews.css'

const Hnews = () => {
  const slides = [
    {
      image: 'https://betonmac.com/images/stories/com_form2content/p7/f58/64.jpg',
      title: 'Noticia 3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam temporibus iusto aut suscipit quas, maxime eius ex, quis ab deleniti odio omnis eos tenetur facilis doloremque architecto reiciendis nisi.',
    },
    {
      image: 'https://betonmac.com/images/Imagenes/PortadasMTH/Portada-Central-MTH2.jpg',
      title: 'Noticia 2',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam temporibus iusto aut suscipit quas, maxime eius ex, quis ab deleniti odio omnis eos tenetur facilis doloremque architecto reiciendis nisi.',
    },
    {
      image: '/public/images/home/silos.jpg',
      title: 'Noticia 3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam temporibus iusto aut suscipit quas, maxime eius ex, quis ab deleniti odio omnis eos tenetur facilis doloremque architecto reiciendis nisi.',
    },
   
  ];

  return (
    <section className='home-news'>
      <h2>Novedades</h2>
      <Rotation slides={slides} />
    </section>
  );
};

export default Hnews;
