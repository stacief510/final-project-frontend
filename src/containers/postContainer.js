import React, {Component} from 'react';
import Header from '../components/Header';
import axios from 'axios';

class postContainer extends Component {
    state = {
            drinks:[]
        }
   
     componentDidMount(){
        axios.get(`http://localhost:3001/users/${this.props.match.params.user_id}/drinks`)
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    drinks: res.data,
                    user_id: this.props.match.params.user_id
                })
            }).then(() => {
                    
            })
    }

    render(){
        let result = this.state.drinks.map((drinks, idx) => {
            return(
                        <div className='drinksList' key={idx}>
                            <div className="review">
                                <img alt="drinkPic" src={drinks.drink_photo}/>
                                <h2> Drink Name: {drinks.name} </h2>
                                <h4> Store: {drinks.store} </h4>
                                <h4> Title: {drinks.review_title} </h4>
                                <p> Review: {drinks.review} </p>
                                <h4> Rating: {drinks.rating} </h4>
                            </div>
                        </div>
            )
            });
        return(
            <div>
                <Header />
                <div className='container'>
                    <div className = 'row'>
                        <h1>User Name Here</h1>
                        <h3>Users current_city Here</h3>
                    </div>

                    <div className='row'>
                        {result}
                    </div>
                </div>
            </div>
        )
    }
}

export default postContainer