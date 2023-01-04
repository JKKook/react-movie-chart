import React from 'react';
import Movie from './Movie';
import { dummy } from '../data/moviedb';
import Navbar from './Navbar';

export default function AppTemplate({ children }) {
  return (
    <div>
      <Navbar />
      <div className='app-container'>
        {/* dummy data 가져오기 */}
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
