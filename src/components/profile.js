import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.fullname}</td>
    <td>{props.user.sex}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edituser/" + props.user._id}>edit</Link>
    </td>
  </tr>
);

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete("http://localhost:5000/users/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  userList() {
    return this.state.users.map((currentuser) => {
      return (
        <User
          user={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }
  setSearch(e) {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  }
  confirm() {
    const { search } = this.state;
    console.log(search);
    axios
      .get("http://localhost:5000/exercises/search/" + search)
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(search);
  }

  render() {
    return (
      <>
        <div class="container">
          <h1>Profile Page</h1>
          <br />
          <div className="row">
            <div className="col-10">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search exercise..."
                name=""
                onChange={this.setSearch}
              />{" "}
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary"
                onClick={() => this.confirm()}
              >
                <span>search</span>
              </button>
            </div>
          </div>
          <br />
          <div class="form-group">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>cetagory</th>
                  <th>รายการการแข่งขัน</th>
                  <th>สถานที่</th>
                  <th>ผู้จัด</th>
                  <th>dateที่จัดงาน</th>
                  <th>USERNAME</th>
                  <th>BD</th>
                  <th>SEX</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                </tr>
              </thead>
              <tbody>{this.userList()}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
