import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const CardInfo = (props) => {

  const navigate = useNavigate();
  const image = 'https://image.tmdb.org/t/p/w220_and_h330_face' + props.peli.poster_path;

  const doNav = () => {
    navigate(`/pelicula/${props.peli.id}/${props.peli.title}`);
  }

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="330"
        image={image}
        alt={props.peli.title}
      />
      <CardActions>
        <Button size="small" onClick={doNav}>+ Info</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default CardInfo;