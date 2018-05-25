import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav className="navbar-text navbar-right navbar-dark">
                        <h1>ROAST</h1>
                        <a href="#" className="navbar-link">Home</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;