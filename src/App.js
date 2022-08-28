
import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard/MovieCard';
import Navbar from './components/NavBar/NavBar';
import { AppStyle } from './styles';
import { Grid, Container, Box } from '@mui/material';





const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Godzilla');
  const API_KEY = '&apikey=39b0ad83';

  useEffect(() => {
    const getMovieRequest = async () => {
      const url = `https://www.omdbapi.com/?s=${searchValue}` + API_KEY;
  
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };

    getMovieRequest(searchValue);
  }, [searchValue]);

  return (

    <AppStyle>
      <Box sx={{ flexGrow: 1 }}>

        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Container>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}>
            <MovieCard movies={movies} />
          </Grid>
        </Container>

      </Box>
    </AppStyle>

  );
};

export default App;