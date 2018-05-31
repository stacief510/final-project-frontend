import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {Redirect} from 'react-router-dom';

class LogIn extends Component {
    state = {
		email: '',
		password: '',
		
    }
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:3001/login', userData)
             .then(res => {
                 const { token } = res.data;
                 localStorage.setItem('jwtToken', token);
                 setAuthToken(token);
                 const decoded = jwt_decode(token);
                 this.props.setCurrentUser(decoded);
                 let user_Id = decoded.id;
                 this.closeModal();
                 
            
             })
             .catch(err => console.log(err));
    }
    closeModal = () => {
        document.getElementById("LogInModalLong").click();
        <Redirect to={`/roast/find`}/>
    }
    
  render(){
      
    return(
        <div className="modal fade" id="LogInModalLong" tabIndex="-1" role="dialog" aria-labelledby="LogInModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="LogInModalLongTitle">Please LogIn:</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body">
                   <form className='logForm' onSubmit={this.handleSubmit}>
                      <label>Email:</label>
                      <input type='email' name="email" placeholder="email" value={this.state.email} onInput={this.handleChange}/>
                      <label>Password:</label>
                      <input type='password' name="password" placeholder="..." value={this.state.password} onInput={this.handleChange}/>

                       <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" >LogIn</button>
                       </div>
                 </form> 
              </div>
             
              </div>
          </div>
        </div>
    )
  }
}
export default LogIn;