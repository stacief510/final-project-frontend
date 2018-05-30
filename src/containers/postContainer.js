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
    onSubmit = (newDrink) => {
        let currentUser_Id = this.props.match.params.user_id
        axios.post(`http://localhost:3001/users/${currentUser_Id}/drinks`, newDrink)
            .then(res => {
                console.log("FROM POST CONTAINER: ", res.data);
                //  let updatedDrinks = this.state.drinks.concat(newDrink)
             
                this.setState({
                    drinks: [
                        ...this.state.drinks,
                        newDrink
                    ]
                });
        });
    }
    
    render(){
        
        return(
            <div>
                <Header />
                <div id="profile" className='container'>
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt="userPic" className="userPic" style={{height: "200px", width:"200px"}} src={this.state.current_user.user_photo}/>
                        <h2>{this.state.current_user.name}</h2>
                        <h3>{this.state.current_user.current_city}</h3>
                        <button className="btn btn-info create" data-toggle="modal" data-target="#modal">Create a Review</button>
                        <a href='#'>Find Coffee</a>
                        <a href='#'>Top Rated Coffee</a>
                    </aside>

                    <div className='col-md-8 reviews'>
                       <Drinks drinks={this.state.drinks} />
                    </div>
                    </div>
                </div>
                <NewDrink onSubmit={this.onSubmit}  />
            </div>
                     
        )
    }
}

export default PostContainer;