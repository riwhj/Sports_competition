import React, { Component } from "react";
import './Login.css';


export default class login extends Component {
    
    render() {
        return (
            <>
            <div className="login-wrapper">
            <h1>Log In</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

// register
// firstname lastname username password tel sex email

