import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <header className='header'>
        <div className='logo'></div>
        <ul className='tags'>
          <Link to='/'>
            <li>상영작</li>
          </Link>
          <Link to='/popular'>
            <li>인기작</li>
          </Link>
          <Link to='/soon'>
            <li>Coming-Soon</li>
          </Link>
          <Link to='/help'>
            <li>고객센터</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
