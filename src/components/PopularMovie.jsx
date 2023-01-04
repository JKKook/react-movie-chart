import React from 'react';

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

export default function PopularMovie({ title, poster_path, vote_average }) {
  return (
    <div className='movie-container'>
      <img src={IMG_BASE_URL + poster_path} alt='foster of movies' />
      <div className='movie-info'>
        <h4>{title}</h4>
        <span>평점 :{vote_average}</span>
      </div>
    </div>
  );
}
