import React, { Component } from 'react';
import fire from '../../Config/Fire';
import './Login.css';

class Register extends Component {
    state = {
        email:'',
        password:'',
        confirmPassword:'',
        displayName:'',
        fireErrors: ''
            }

            handleChange = e =>{
                this.setState({
                    [e.target.name]: e.target.value
                });
            }
        
            register = e => {
                e.preventDefault();
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) =>{
                   var currentUser = fire.auth().currentUser;
                   currentUser.updateProfile({
                       displayName: this.state.displayName
                   })
                   }).catch((error) => {
                       this.setState({fireErrors: error.message})
                   
                    });
            }


    render (){
        let errorNotification = this.state.fireErrors ?
        (<div className="Errors">{this.state.fireErrors}</div>) : null;
        return (
            <>
              <form>
                  {errorNotification}
                  <input type="text"
                     className="regField"
                     placeholder="User name"
                     onChange={this.handleChange}
                     value={this.state.displayName}
                     name="displayName" />
                     
                    <input type="text"
                     className="regField"
                     placeholder="Email"
                     onChange={this.handleChange}
                     value={this.state.email}
                     name="email" />

                  <input type="password"
                     className="regField"
                     placeholder="password"
                     onChange={this.handleChange}
                     value={this.state.password}
                     name="password" 
                     />

                  <input type="password"
                     className="regField"
                     placeholder="Confirm password"
                     onChange={this.handleChange}
                     value={this.state.confirmPassword}
                     name="confirmPassword" 
                     />
                  <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />
              </form>  
        </>
               );
              
            }
                              }

export default Register;