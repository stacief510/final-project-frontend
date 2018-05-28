import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Drinks extends Component{
    
    render(){
        console.log(this.props.drinks)
        let result
        if (this.props.drinks !== 'undefined') {
            result = this.props.drinks.map((drinks, idx) => {
                return(
                            <div className='drinksList' key={idx}>
                                <div className="review row">
                                    <div className="col-md-4">
                                        <img alt="drinkPic" className="drinkPic" src={drinks.drink_photo}/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2> Drink: <Link to={`/roast/users/${drinks.user_id}/drinks/${drinks._id}`}>{drinks.name}</Link></h2>
                                        <h4> Store: {drinks.store} </h4>
                                        <h4> Title: {drinks.review_title} </h4>
                                        <p> Review: {drinks.review} </p>
                                        <h4> Rating: {drinks.rating} </h4>
                                    </div>
                                </div>
                            </div>
                )
            })
        } else {
            result = <h3>Loading...</h3>
        }
        

        return( 
            <div>
                 {result}
            </div>
        )
    }
}

export default Drinks;
