import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Drink extends Component {
   state={
       review: [],
   }

    componentDidMount = () => {
        let oneUser = this.props.match.params.user_id;
        let oneReview = this.props.match.params.drink_id;
        axios.get(`http://localhost:3001/users/${oneUser}/drinks/${oneReview}`)
        .then((res)=>{
            this.setState({
                review: res.data,
                user_id: this.props.match.params.user_id
            })

        }); 
    }
   
    render(){
        return(
            <div>
                 <div className="singleReview" data-event-index= {this.props.match.params.drink_id} >
                    {/* <img className="row"
                     src={this.props.drinks.drink_photo}  /> */}
                    <h1 className="row">
                     {this.state.review.name} 
                    </h1>
                    <h1 className="row">
                     {this.state.review.store} 
                    </h1>
                    <h1 className="row">
                        {this.state.review.review_title}
                    </h1>
                    <h1 className="row">
                     { this.state.review.review}
                    </h1>
                    <h1 className="row">
                     {this.state.review.rating} 
                    </h1>
                    <button type="delete" onClick={this.onDelete}>Delete Post</button>
                    <button type="edit" onClick={this.onEdit}>Edit Post</button>
                    <Link to={`/roast/users/${this.props.match.params.user_id}/drinks`} className="btn btn-primary">Back to Profile</Link>
                </div>
            </div>
        )
    }
}

export default Drink;

