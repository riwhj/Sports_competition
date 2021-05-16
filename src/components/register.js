import React, { Component } from "react";
import './Login.css';
import Dropdown from 'react-dropdown';



export default class register extends Component {
    
        constructor(props) {
            super(props);
        
            this.onChangeUsername = this.onChangeUsername.bind(this);
            this.onChangeSex = this.onChangeSex.bind(this);
            this.onChangePhone = this.onChangePhone.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePassword = this.onChangePassword.bind(this);
            this.onChangeFirstname = this.onChangeFirstname.bind(this);
            this.onChangeLastname = this.onChangeLastname.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
            username: "",
            sex: "",
            phone: "",
            email: "",
            password:"",
            firstname: "",
            fastname: "",
            
            };
        }
        // componentDidMount() {
        //     axios
        //     .get("http://localhost:5000/exercises/")
        //     .then((response) => {
        //         if (response.data.length > 0) {
        //         this.setState({
        //             runningname: response.data.map((exercise) => exercise.name),
        //             name: response.data[0].name,
        //         });
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // }
        
        onChangeUsername(e) {
            this.setState({
            username: e.target.value,
            });
        }
        onChangeSex(e) {
            this.setState({
            sex: e.target.value,
            });
        }
        onChangePhone(e) {
            this.setState({
            phone: e.target.value,
            });
        }
        onChangeEmail(e) {
            this.setState({
            email: e.target.value,
            });
        }
        onChangePassword(e) {
            this.setState({
            password: e.target.value,
            });
        }
        onChangeFirstname(e) {
            this.setState({
            firstname: e.target.value,
            });
        }
        onChangeLastname(e) {
            this.setState({
            lastname: e.target.value,
            });
        }
        
        onSubmit(e) {
            e.preventDefault();
        
            const user = {
            username: this.state.username,
            sex: this.state.sex,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            };
        
            console.log(user);
        
            axios
            .post("http://localhost:3000/register/add", user)
            .then((res) => console.log(res.data));
        
            window.location = "/register";
        }
        
        render() {
            return (
            <>
                <div class="container">
                <div class="form-group">
                    <form onSubmit={this.onSubmit}>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Username: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            placeholder="กรุณากรอกชื่อผู้ใช้"
                            />
                        </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                            type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="กรุณากรอกรหัสผ่าน"
                            />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Firstname: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeFirstname}
                            placeholder="กรุณากรอกชื่อ"
                            />
                        </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Lastname: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastname}
                            placeholder="กรุณากรอกนามสกุล"
                            />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Email: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder="กรุณากรอกอีเมล"
                            />
                        </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Phone: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            />
                        </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                        <div className="form-group">
                            <label>Sex: </label>
                            <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.sex}
                            onChange={this.onChangeSex}
                            placeholder="กรุณากรอกเพศ"
                            />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="form-group">
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-primary"
                        />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </>
            );
        }
}