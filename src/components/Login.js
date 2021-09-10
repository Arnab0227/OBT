import React,{useState} from 'react';
import './Login.css'

function Login(){
    let [value, setValue] = React.useState({
        fname:'',
        email:'',
        password:''
    })
    function handleUserInput(e){
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }


    return(
        <body>
            <div className="wrapper">
                <div className="heading">
                    <h1>Welcome. We are here to serve you better.</h1>
                </div>
            </div>
            <form className="form" method="post" action="#">
                <div className="sign-up">
                    <div className="form-group">
                        
                        <input type="text" required placeholder="Full name" name="name" value={value.fname} onChange={handleUserInput} className="input" />
                    </div>
                    <div className="form-group">
                        
                        <input type="email" required placeholder="Email" name="email" value={value.email} onChange={handleUserInput} className="input" />
                    </div>
                    <div className="form-group">
                        
                        <input type="password" required placeholder="Password" name="password" value={value.password} onChange={handleUserInput} className="input" />
                    </div>
                    <button type="submit" value="submit" className="btn">Create Your Account</button>
                    <div className="account-exist">
                        Already have an account? <a href="#" id="login">Login</a>
                    </div>
                </div>
                <div className="sign-in">
                    
                    <div className="form-group">
                        
                        <input type="email" required placeholder="Email" name="email" value={value.lname} onChange={handleUserInput} className="input" />
                    </div>
                    <div className="form-group">
                        
                        <input type="password" required placeholder="Password" name="password" value={value.email} onChange={handleUserInput} className="input" />
                    </div>
                    <button type="submit" value="submit" className="btn">Welcome Back!</button>
                    <div className="forgot-password">
                        <div className="check-box">
                            <input type="checkbox" id="checkbox"/>
                            <label for="checkbox">Remember me </label>
                        </div>
                    </div>
                    <div className="account-exist">
                        Create a new account <a href="#" id="signup">Signup</a>
                    </div>
                </div>
            </form>
       </body> 
    
    )
}

export default Login;