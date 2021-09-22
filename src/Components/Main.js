import React, { Component } from 'react';
import './Main.css';
import fire from '../Config/Fire';
import Login from  './forms/Login';
import Register from  './forms/Register';
import Tracker from './Tracker/Tracker';
import Spinner from '../assests/loader.gif';


export default class Main extends Component {
state = {
    user: 1,
    loading: true,
    formSwitcher:false
}

componentDidMount(){
    this.authListener();
}
authListener(){
    fire.auth().onAuthStateChanged((user) => {
        if(user) {
            this.setState({user});
        }else{
            this.setState({user:null})
        }
    });
}
formSwitcher = (action) =>{
    console.log(action);
    this.setState({
        formSwitcher: action === 'register' ? true : false
    });
}

render(){
    const form = !this.state.formSwitcher ? <Login/> : <Register/>;
    if(this.state.user ===1){
        return(
            <div className="mainBlock">
                <div className="Spinner">
                    <img src={Spinner} alt="Spinner" className="ImgSpinner"></img>
                </div>
            </div> 
            
        )
    }
    return(<>
    {!this.state.user ? 
     (<div className="mainBlock">
            {form} 
               { !this.state.formSwitcher ?
            (<span className="underLine">
            Not Registered?  <button
             onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'Login')} className="linkBtn"> Create an account </button>
    </span>) : (
       <span className="underLine">
        Already Have an account?  <button
         onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'Login')} className="linkBtn"> Sign in here </button>
</span>
        )
}
     </div>) : (<Tracker/>)
     }
    </>);
}

}