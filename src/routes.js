import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import postContainer from './containers/postContainer';
import Drink from './components/Drink';

export default(
	<div>
		<Switch>
            <Route exact path='/roast' component={Home}></Route>
		<Route exact path='/roast/users/:user_id/drinks' component={postContainer}></Route> {/* show all drinks for one user /create new drink?*/}
		<Route exact path='/roast/users/:user_id/drinks/:drink_id' component={Drink}></Route> {/* show one drink /update one drink*/}	
		</Switch>
		
	</div>
)



