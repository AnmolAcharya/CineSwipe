import React from 'react';

const RemoveFavourites = () => {
    return (
        <>
            <span className='mr-2'>Remove From Favourites</span>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" /* Increased width for larger icon */
                height="24" /* Increased height for larger icon */
                fill="currentColor" /* Use current text color */
                className="bi bi-x-circle-fill" /* Bootstrap icon class */
                viewBox="0 0 16 16">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 10.646a.5.5 0 010 .708l-.708.708a.5.5 0 01-.708 0L8 9.707l-2.938 2.937a.5.5 0 01-.708 0l-.708-.708a.5.5 0 010-.708L6.293 8 3.354 5.062a.5.5 0 010-.708l.708-.708a.5.5 0 01.708 0L8 6.293l2.938-2.938a.5.5 0 01.708 0l.708.708a.5.5 0 010 .708L9.707 8l2.938 2.938z"/>
            </svg>
        </>
    );
};

export default RemoveFavourites;


