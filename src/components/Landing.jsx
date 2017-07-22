import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>
        I am Farmbase
      </h1>
      <Link to='/login'>
        <button>Go to login</button>
      </Link>
    </div>
  )
}

export default Landing;
