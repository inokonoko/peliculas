import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';

const Barra = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <MovieIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Películas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Barra;