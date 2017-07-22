import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
<<<<<<< HEAD
  return <div />;
=======
  return (
    <div>
      <Link to="/login">
        <button>Go to login</button>
      </Link>
      <button onClick={event => alert('test')}>Create</button>
    </div>
  );
>>>>>>> install react pdf
};


export default Landing;
