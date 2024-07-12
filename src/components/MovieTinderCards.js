// import React from 'react';
// import TinderCard from 'react-tinder-card';
// import './MovieTinderCards.css';

// const MovieTinderCards = ({ movies, handleSwipe }) => {
//   const swiped = (direction, movie) => {
//     if (direction === 'right') {
//       handleSwipe(movie);
//     }
//     console.log('removing: ' + movie.Title);
//   };

//   const outOfFrame = (title) => {
//     console.log(title + ' left the screen!');
//   };

//   return (
//     <div className='tinderCards'>
//       <div className='tinderCards__container'>
//         {movies.map((movie, index) => (
//           <TinderCard
//             className='swipe'
//             key={index}
//             onSwipe={(dir) => swiped(dir, movie)}
//             onCardLeftScreen={() => outOfFrame(movie.Title)}
//           >
//             <div
//               style={{ backgroundImage: `url(${movie.Poster})` }}
//               className='card'
//             >
//               <h3>{movie.Title}</h3>
//             </div>
//           </TinderCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieTinderCards;
