import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Drinks extends Component{
    
    render(){

        let result = this.props.drinks.map((drinks, idx) => {
            return(
                        <div className='drinksList' key={idx}>
                            <div className="review">
                                <img alt="drinkPic" src={drinks.drink_photo}/>
                                <h2> Drink: <Link to={`/roast/users/${drinks.user_id}/drinks/${drinks._id}`}>{drinks.name}</Link></h2>
                                <h4> Store: {drinks.store} </h4>
                                <h4> Title: {drinks.review_title} </h4>
                                <p> Review: {drinks.review} </p>
                                <h4> Rating: {drinks.rating} </h4>
                            </div>
                        </div>
            )
        })
        return( 
            <div>
                 {result}
            </div>
        )
    }
}

export default Drinks;