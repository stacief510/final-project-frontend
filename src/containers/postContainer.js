import React, {Component} from 'react';
import Header from '../components/Header';
import Users from '../components/Users';
import axios from 'axios';

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
    
    render(){
    
        let result = this.state.drinks.map((drinks, idx) => {
            return(
                        <div className='drinksList' key={idx}>
                            <div className="review">
                                <img alt="drinkPic" src={drinks.drink_photo}/>
                                <h2> Drink: {drinks.name} </h2>
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
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt="userPic" className="userPic" style={{height: "200px", width:"200px"}} src={this.state.current_user.user_photo}/>
                        <h1>{this.state.current_user.name}</h1>
                        <h3>{this.state.current_user.current_city}</h3>
                        <a href='#'>Find Coffee</a>
                        <a href='#'>Top Rated Coffee</a>
                    </aside>

                    <div className='col-md-8 reviews'>
                        {result}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostContainer