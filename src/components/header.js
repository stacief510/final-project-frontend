import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 

class Header extends Component{
    render(){
        
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                            <a className="navbar-brand roast" href="/roast">ROAST</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/roast/find">Find Coffee</a>
                                </li>
                                <li className="nav-item">
                                {/* <Link className="nav-link disabled" to={"/roast"} handleLogout={this.props.handleLogout}>Log Out</Link> */}
                                </li>
                            </ul>
                        </div>
                     </nav>
                </header>
            </div>
        )
    }
}

export default Header;