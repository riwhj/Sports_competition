import React, { Component } from "react";
import axios from "axios";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangeRunningname = this.onChangeRunningname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      sex: "",
      phone: "",
      email: "",
      // runningname:'',
      // runningname: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          sex: response.data.sex,
          phone: response.data.phone,
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


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
 
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      sex: this.state.sex,
      phone: this.state.phone,
      email: this.state.email,
      //   runningname: this.state.runningname
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/update/" + this.props.match.params.id,user)
      .then((res) => console.log(res.data));

    window.location = "/userlist";
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
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>sex: </label>
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
