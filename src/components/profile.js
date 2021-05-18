import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css';
const Cards = (props) => (
  <tr>
    <td>{props.cards.cetagory}</td>
    <td>{props.cards.name}</td>
    <td>{props.cards.place}</td>
    <td>{props.cards.date}</td>
    <td>{props.cards.fullname}</td>
    <td>{props.cards.born}</td>
    <td>{props.cards.sex}</td>
    <td>{props.cards.phone}</td>
    <td>{props.cards.email}</td>
  </tr>
);

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.cardsList = this.cardsList.bind(this);

    this.state = {
      cards: [],
      search: "",
      cetagory: "",
      name: "",
      place: "",
      organizer: "",
      date: "",
      fullname: "",
      sex: "",
      born: "",
      phone: "",
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/cards/profile")
      .then((response) => {
        this.setState({ cards: response.data });
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

  cardsList() {
    return this.state.cards.map((currentuser) => {
      return (
        <Cards
          cards={currentuser}
          // deleteUser={this.deleteUser}
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
      .get("http://localhost:5000/cards/search/" + search)
      .then((response) => {
        this.setState({ cards: response.data });
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
          <h1 className="h1">List Page</h1>
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
                className="btn btn-primary b"
                onClick={() => this.confirm()}
              >
                <span>search</span>
              </button>
            </div>
          </div>
          <br />
          <br />

          <div class="form-group">
            <table class="table table-striped">
              <thead class="table-dark ">
                <tr>
                  <th>Cetagory</th>
                  <th>List</th>
                  <th>Locate</th>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody class="table table-striped">
                {this.cardsList()}
              </tbody>

            </table>
          </div>
        </div>
      </>
    );
  }
}
