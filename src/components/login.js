import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

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
                 const {token} = res.data;
                 localStorage.setItem('jwtToken', token);
                 setAuthToken(token);
                 const decoded = jwt_decode(token);
                 this.props.setCurrentUser(decoded);
                 //user_id??
                //  this.props.history.push(`/users/${user_id}`);
             })
             .catch(err => console.log(err));
	}

	closeModal(){
		document.getElementById("moLogInModalLongdal").click();
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
                   <form className='logForm' onSubmit={(e)=> this.handleSubmit(e)}>
                      <label>Email:</label>
                      <input type='email' name="username" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                      <label>Password:</label>
                      <input type='password' name="psw" placeholder="..." value={this.state.password} onChange={this.handleChange}/>
                  </form>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.closeModal}>LogIn</button>
              </div>
              </div>
          </div>
        </div>
    )
  }
}
export default LogIn;