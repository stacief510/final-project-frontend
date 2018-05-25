import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <img alt="homeImg" className="homeImg" style={{height: "500px"}} src={"images/sideCup.jpg"}/>
            <h1>Roast</h1>
            <h3>A place to espresso yourself.</h3>
            <p>Create an account or login to give your favorite drinks a latte of love.</p>
        </div>
    );
  };

export default Home;