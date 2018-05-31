import React from 'react';
// import { Link } from 'react-router-dom';
import sideCup from '../images/sideCup1.jpg';
import LogIn from './login';
import SignUp from './Signup';
import PostContainer from '../containers/postContainer';

const Home = (props) => {
    const display = {
        display: 'none',
    }
    return (
        <div className="home">
            <img alt="homeImg" className="homeImg" src={sideCup} />

            {/* <!-- Create Acct trigger modal --> */}
            <a className="mLink" data-toggle="modal" data-target="#accountModalLong">
            Create Account
            </a>
            <SignUp />

            {/* <-- LogIn trigger modal --> */}
            <a className="mLink" data-toggle="modal" data-target="#LogInModalLong"> LogIn </a>
            <LogIn setCurrentUser={props.setCurrentUser} />
            <div className='title'>
                <h1 className="roast">Roast</h1>
                <h3>A place to espresso yourself.</h3>
                <h5>Create an account or login to give your favorite drinks a latte of love.</h5>
            </div>
        </div>

      );
    };

export default Home;
