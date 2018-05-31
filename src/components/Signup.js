import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        current_city:'',
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.password2) {
          const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            current_city: this.state.current_city,
          }

          console.log('newuser', newUser)
          console.log(axios)
      
          axios.post('http://localhost:3001/register/', newUser)
            .then(res => console.log(res))
            .then(res => {
                this.closeModal()
            })
            .catch(err => console.log(err));
        }
      }

    closeModal = () => {
		document.getElementById("accountModalLong").click();
    }

    render(){
        return(
            <div className="modal fade" id="accountModalLong" tabIndex="-1" role="dialog" aria-labelledby="accountModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="accountModalLongTitle">Create an Account:</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className='acctForm' onSubmit={this.handleSubmit}>
                            <label>Name:</label>
                            <input type='text' name="name" placeholder="Your Name Here" value={this.state.name} onInput={this.handleChange}/>
                            <label>Current City:</label>
                            <input type='text' name="current_city" placeholder="City, State" value={this.state.current_city} onInput={this.handleChange}/>
                            <label>Email:</label>
                            <input type='email' name="email" placeholder="email" value={this.state.email} onInput={this.handleChange}/>
                            <label>Password:</label>
                            <input type='password' name="password" placeholder="..." value={this.state.password} onInput={this.handleChange}/>
                            <label>Confirm Password:</label>
                            <input type='password' name="password2" placeholder="..." value={this.state.password2} onInput={this.handleChange}/>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                       
                </div>
            </div>
            </div>
        )
    }
}
export default SignUp;