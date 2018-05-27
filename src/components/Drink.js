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
        console.log(this.state.review.drink_photo)
        return(
            <div className="container showOne">
                <div className="row">
                <img alt="coffeePic" className="col-md-4" style={{height: "300px", width:"200px"}}
                     src={this.state.review.drink_photo}  />
                 <div className="singleReview col-md-8" data-event-index= {this.props.match.params.drink_id} >
                    <h2>
                     Drink: {this.state.review.name} 
                    </h2>
                    <h4>
                     Store: {this.state.review.store} 
                    </h4>
                    <h4>
                       Title: {this.state.review.review_title}
                    </h4>
                    <h4>
                     Review: { this.state.review.review}
                    </h4>
                    <h4>
                     Rating: {this.state.review.rating} 
                    </h4>
                    <button className="btn btn-info" type="delete" onClick={this.onDelete}>Delete Post</button>
                    <button className="btn btn-info" type="edit" onClick={this.onEdit}>Edit Post</button>
                    <Link to={`/roast/users/${this.props.match.params.user_id}/drinks`} className="btn btn-info">Back to Profile</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Drink;

