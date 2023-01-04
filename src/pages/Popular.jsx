import React from 'react';
import { popular } from '../data/popular-moviedb';
import PopularMovie from '../components/PopularMovie';

export default function Popular() {
  return (
    <div className='app-container'>
      {popular.results.map((item) => {
        return (
          <PopularMovie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}
