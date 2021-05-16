import React, { Component } from "react";
import './Login.css';


export default class register extends Component {
    
    render() {
        return (
            <>
            <div className="login-wrapper">
            <h1>Register</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <label>
                        <p>Firstname</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Lastname</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Telephone</p>
                        <input type="number" />
                    </label>
                    <label>
                        <p>Sex</p>
                        <input type="text" />
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