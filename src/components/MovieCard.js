// import React from 'react';
// import TinderCard from 'react-tinder-card';

// const MovieCard = ({ movie, handleFavouritesClick, handleSkipClick }) => {
//   const onSwipe = (direction) => {
//     if (direction === 'right') {
//       handleFavouritesClick(movie);
//     } else if (direction === 'left') {
//       handleSkipClick(movie);
//     }
//   };

//   return (
//     <TinderCard
//       className="swipe"
//       key={movie.imdbID}
//       onSwipe={onSwipe}
//       preventSwipe={['up', 'down']}
//     >
//       <div className="movie-card">
//         <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
//         <h3>{movie.Title}</h3>
//       </div>
//     </TinderCard>
//   );
// };

// export default MovieCard;
