///////////////////////////////The newer code in here////////////////////////////////////

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading'; // Corrected import statement
import SearchBox from './components/SearchBox'; 
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState(''); // Ensuring consistent casing

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eef392f8`; //back-ticks'`' to dentote the template strings instead of a normal string

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);

    if (responseJson.Search){
      setMovies(responseJson.Search);

    }
 
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);


  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }
  //add an if statement to avoid the duplicate entries of the movies 

  const addFavouriteMovie = (movie) => {
    const isAlreadyFavourite = favourites.some((favourite) => favourite.imdbID === movie.imdbID);
    
    if (!isAlreadyFavourite) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4 search-container'>
        <MovieListHeading heading='CineSwipe' style={{ textShadow: '0 0 5px white' }} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className='row about-container'>
        <p className='about-text'>
          Welcome to the CineSwipe! Your one stop shop to search for a particular movie, series, documentary! Search for a movie on the top-right corner search bar and 
          Start adding to your favourites! You can have them stored in your favourites list forever and if you want to remove it just press remove favourite button.
          Enjoy your movie journey!
        </p>
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4 movie-container'>
        <MovieListHeading heading='Movies' />
      </div>

      <div className='row movies-container'>
        <MovieList 
        movies={movies} 
        handleFavouritesClick={addFavouriteMovie} 
        favouriteComponent={AddFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4 favourites-container'>
      <MovieListHeading heading='Favourites' /> 
      </div>
      <div className='row favourites-container'>
        <MovieList 
        movies={favourites} 
        handleFavouritesClick={removeFavouriteMovie} 
        favouriteComponent={RemoveFavourites} />
      </div>

    </div>
  );
};

export default App;

