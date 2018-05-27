import React, {Component} from 'react';
import Header from '../components/Header';
import Users from '../components/Users';
import Drink from '../components/Drink';
import Drinks from '../components/Drinks';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewDrink from '../components/NewDrink';

class PostContainer extends Component {
    state = {
            drinks:[],
            users:[],
            current_user:[]
        }
   
     componentDidMount(){
        axios.get(`http://localhost:3001/users/${this.props.match.params.user_id}/drinks`)
            .then((res)=>{
                console.log('drink data:', res.data)
                this.setState({
                    drinks: res.data,
                    user_id: this.props.match.params.user_id
                })
            }).then(() => {
                    
            })
        axios.get(`http://localhost:3001/users`)
        .then((res)=>{
            console.log('getting all users: ', res.data)
            this.setState({
                users: res.data,
            })
        }).then(() => {
            let currentUser_Id = this.state.drinks.user_id;
            console.log('currentUser_id', currentUser_Id)
            console.log('grabbed first user in arr', this.state.users[0]);
                this.setState({
                    current_user: this.state.users[0]
                });
            console.log('123', this.state.current_user)
        })
    }
    
    // handleDrinkChange=(event)=>{
    //     const value = event.target.value;
    //     this.setState({drinks: drinks.name: value})
    // }

    render(){
    
        return(
            <div>
                <Header />
                <div className='container'>
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt="userPic" className="userPic" style={{height: "200px", width:"200px"}} src={this.state.current_user.user_photo}/>
                        <h1>{this.state.current_user.name}</h1>
                        <h3>{this.state.current_user.current_city}</h3>
                        <button className="btn btn-info" data-toggle="modal" data-target="#modal">Create a Review</button>
                        <a href='#'>Find Coffee</a>
                        <a href='#'>Top Rated Coffee</a>
                    </aside>

                    <div className='col-md-8 reviews'>
                       <Drinks drinks={this.state.drinks} />
                    </div>
                    </div>
                </div>

         
            {/* <!-- Create Post Modal --> */}
            <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitle">Create a Post:</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <NewDrink onSubmit={this.onSubmit} handleDrinkChange={this.handleDrinkChange} handleStoreChange={this.handleStoreChange} handleTitleChange={this.handleTitleChange} handleReviewChange={this.handleReviewChange} handleRatingChange={this.handleRatingChange} handlePhotoChange={this.handlePhotoChange} name={this.state.drinks.name} store={this.state.drinks.store} review_title={this.state.drinks.review_title} review={this.state.drinks.review} />
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                </div>
            </div>
            </div>

            </div>
        )
    }
}

export default PostContainer