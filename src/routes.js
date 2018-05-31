import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Home from './components/Home';
import PostContainer from './containers/postContainer';
import Map from './components/Map';
import Drink from './components/Drink';
import LogIn from './components/login';

class RoutePage extends Component{
	state = {
		currentUser: {},
		isAuthenticated: true,
	}

	componentDidMount() {
		let token;
		if(localStorage.getItem('jwtToken') === null) {
		  this.setState({ isAuthenticated: false })
		} else {
		  token = jwt_decode(localStorage.getItem('jwtToken'));
		  setAuthToken(localStorage.jwtToken);
		  this.setState({ currentUser: token, isAuthenticated: true });
		}
	  }
	
	  setCurrentUser = (userData) => {
		console.log(userData);
		this.setState({ currentUser: userData, isAuthenticated: true })
	  }
	
	  handleLogout = () => {
		if(localStorage.getItem('jwtToken') !== null) {
		  localStorage.removeItem('jwtToken');
		  this.setState({ currentUser: null, isAuthenticated: false });
		<Redirect to='/roast' />;
		}
	  }
	
	render() {
		console.log('Current User = ', this.state.currentUser);
		console.log('Authenticated = ', this.state.isAuthenticated);
	
		const PrivateRoute = ({component: Component, ...rest}) => (
		  <Route {...rest} render={(props) => (
			this.state.isAuthenticated === true
			  ? <Component {...props} />
			  : <Redirect to='/roast' />
		  )} />
		)

		return(
			<div>
				<Switch>
				<Route exact path='/roast' render={ (props) => <Home {...props} setCurrentUser={this.setCurrentUser} handleLogout={this.handleLogout}/> }></Route>
				<Route exact path='/roast/find' component={Map}></Route>
				<PrivateRoute exact path='/roast/users/:user_id/drinks' component={PostContainer}/>
				<PrivateRoute exact path='/roast/users/:user_id/drinks/:drink_id' component={Drink}/>
				</Switch>

			</div>
		);
	}
}
export default RoutePage;
 

// render={ (props) => <LogIn {...props} setCurrentUser={this.setCurrentUser} /> } 