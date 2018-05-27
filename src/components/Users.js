import React, {Component} from 'react'

class Users extends Component{
    
    render(){
        let current_user = this.props.users.map((user,idx)=>{
            return(
                <div>
                    <h1>Name: {user.name}</h1>
                    <h6>Current City: {user.current_city}</h6>
                </div>    
            )
        });
        return(
            {current_user}
        )
    }
}
export default Users