import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.fullname}</td>
    <td>{props.user.sex}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edituser/"+props.user._id}>edit</Link>
    </td>
  </tr>
)

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <>
      <div class="container">
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
          <tbody>
            { this.userList() }
          </tbody>
        </table>
        </div>
        </div>
      </>
    )
  }
}