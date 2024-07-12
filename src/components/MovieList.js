import React from 'react';

const MovieList = ({ movies, favouriteComponent: FavouriteComponent, handleFavouritesClick }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div key={index} className="image-container col-sm-2 d-flex justify-content-start m-3">
          <img src={movie.Poster} alt='movie' className="img-fluid" />
          <div onClick={() => handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-center'>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
