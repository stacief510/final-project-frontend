import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import PostContainer from './containers/postContainer';
import Drink from './components/Drink';

export default(
	<div>
		<Switch>
            <Route exact path='/roast' component={Home}></Route>
		<Route exact path='/roast/users/:user_id/drinks' component={PostContainer}></Route> 
		<Route exact path='/roast/users/:user_id/drinks/:drink_id' component={Drink}></Route> 
		</Switch>
		
	</div>
)



//line 10 - home page front cover view
//line 11 - show all drinks for 1 user (Profile Page) and be able to click button to create new user
// line 12 - show one drink post and  click to update the drink post.