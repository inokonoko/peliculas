import React from "react";
import { useParams } from "react-router-dom";

const Pelicula = () => {
  const {id, title} = useParams();
  return (
    <h1>{title}</h1>
  );
};

export default Pelicula;