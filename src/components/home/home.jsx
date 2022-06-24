import React from "react";
import pelisJSON from './../../assets/movies.json';
import './home.css';
import CardInfo from "../cardinfo/cardinfo";

const Home = () => {
  const peliculas = pelisJSON.slice(0, 5);

  const listaPeliculas = peliculas.map(peli => {
    return <CardInfo key={peli.id} peli={peli}/>
  });

  return (
    <>
      <div className="home">
        <h2>Películas recientes</h2>
        <div className="peliculas">
          {listaPeliculas}
        </div>
      </div>
    </>
  );
}

export default Home;