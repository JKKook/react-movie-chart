import React from 'react';
import { soon } from '../data/coming-soon-movie';
import ComingSoon from '../components/ComingSoon';

export default function Soon() {
  return (
    <div className='app-container'>
      {soon.results.map((item) => {
        return (
          <ComingSoon
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
