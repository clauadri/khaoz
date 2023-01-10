import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <div>
        <h1>¿Que es Khaos?</h1>
        <p>
          Khaos es una pagina donde encontraras todo lo que consideres arte. Tal
          como dice nuestro slogan "Aqui encontraras arte para darte crack"
        </p>
      </div>
      <div>
        <h1>Artistas</h1>
        <div>
          <p>Artista 1</p>
          <img
            src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2020/06/28/el-nacimiento-de-venus.jpeg"
            alt=""
          />
          <p>Descripcion del artista</p>
        </div>
        <div>
          <p>Artista 2</p>
          <img
            src="https://media.admagazine.com/photos/618a6aca69ed46faf86e3451/master/w_3000,h_2122,c_limit/68698.jpg"
            alt=""
          />
          <p>Descripcion del artista</p>
        </div>
        <div>
          <p>Artista 3</p>
          <img
            src="https://media.admagazine.com/photos/618a6acacc7069ed5077ca7c/master/pass/69052.jpg"
            alt=""
          />
          <p>Descripcion del artista</p>
        </div>
      </div>

      <h1>Novedades</h1>
      <div className="cuadros">
        <p>Nuevos cuadros de Picasso</p>
        <img
          src="https://media.admagazine.com/photos/618a6acacc7069ed5077ca7c/master/pass/69052.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
