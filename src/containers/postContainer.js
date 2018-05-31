import React, {Component} from 'react';
import Header from '../components/Header';
import Drinks from '../components/Drinks';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewDrink from '../components/NewDrink';

class PostContainer extends Component {
    state = {
            drinks:[],
            user: null,
            err: ''
        }
   
     componentDidMount(){
        axios.get(`http://localhost:3001/users/${this.props.match.params.user_id}/drinks`)
            .then((res)=>{
                console.log('drink data:', res.data)
                this.setState({
                    drinks: res.data,
                    // user_id: this.props.match.params.user_id
                })
            }).then(() => {
                    
            }).catch(err => this.setState({err: err}));
        axios.get(`http://localhost:3001/current`)
        .then((res)=>{
            console.log('getting all users: ', res.data)
            this.setState({
                user: res.data,
            })
        }).catch(err => this.setState({err: err}));
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
        let { user } = this.state;
        let userData = user 
            ? <div>
                <Header />
                <div id="profile" className='container'>
                    <div className="row">
                    <aside className="col-md-4">
                        <img alt={user.name} className="userPic" style={{height: "200px", width:"200px"}} src={user.avatar}/>
                        <h2>{user.name}</h2>
                        <h3>{user.current_city}</h3>
                        <button className="btn btn-info create" data-toggle="modal" data-target="#modal">Create a Review</button>
                        <a href='#'>Find Coffee</a>
                        <a href='#'>Top Rated Coffee</a>
                        <Link className="nav-link disabled" to={"/roast"} handleLogout={this.props.handleLogout}>Log Out</Link>
                    </aside>

                    <div className='col-md-8 reviews'>
                       <Drinks drinks={this.state.drinks} />
                    </div>
                    </div>
                </div>
                <NewDrink onSubmit={this.onSubmit}  />
            </div>
        :<h4>Loading...</h4>

        let error = <div className="text-center pt-4"><h3>Please <Link to='/roast'>login</Link> to view this page</h3></div>
        return(
            <div>
                {this.state.err ? error : userData}
            </div>        
        )
    }
}

export default PostContainer;