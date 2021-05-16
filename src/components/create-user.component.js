import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    // this.onChangeRunningname = this.onChangeRunningname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password:"",
      fullname:"",
      sex: "",
      phone: "",
      email: "",
      
      // runningname:'',
      // runningname: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            runningname: response.data.map((exercise) => exercise.name),
            name: response.data[0].name,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value,
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
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      fullname: this.state.name,
      sex: this.state.sex,
      phone: this.state.phone,
      email: this.state.email,
     
      //   runningname: this.state.runningname
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    window.location = "/profile";
  }

  render() {
    return (
      <>
        <div class="container">
          <div class="form-group">
            <form onSubmit={this.onSubmit}>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.fullname}
                      onChange={this.onChangeFullname}
                      placeholder="กรุณากรอกชื่อผู้ใช้"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Password : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.sex}
                      onChange={this.onChangeSex}
                      placeholder="กรุณากรอกรหัสผ่าน"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Fullname : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      placeholder="กรุณากรอกอีเมล"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Phone Number: </label>
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
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      placeholder="กรุณากรอกเพศ"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                  />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
