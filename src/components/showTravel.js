import React, { Component } from "react";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

export default class showTravel extends Component {
  constructor(props) {
    super(props);

    // this.onChangeCetagory = this.onChangeCetagory.bind(this);
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeImage = this.onChangeImage.bind(this);
    // this.onChangePlace = this.onChangePlace.bind(this);
    // this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    // this.onChangeDetail = this.onChangeDetail.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cetagory:"",
      name: "",
      image: "",
      place: "",
      organizer: "",
      date: "",
      detail: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          cetagory:response.data.cetagory,
          name: response.data.name,
          image: response.data.image,
          place: response.data.place,
          organizer: response.data.organizer,
          detail: response.data.detail,
          date:  Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeCetagory(e) {
    this.setState({
      cetagory: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangePlace(e) {
    this.setState({
      place: e.target.value,
    });
  }
  onChangeOrganizer(e) {
    this.setState({
      organizer: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onChangeDetail(e) {
    this.setState({
      detail: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      cetagory: this.state.cetagory,
      name: this.state.name,
      image: this.state.image,
      place: this.state.place,
      organizer: this.state.organizer,
      detail: this.state.detail,
      date: this.state.date,
    };
    console.log(exercise);

    axios
      .get(
        "http://localhost:5000/exercises/showcompetition/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <>
       <section class="projects-section bg-light" id="projects">
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class ="row">
    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
      <img class="img-fluid mb-12 mb-lg-12" src={this.state.image} alt="" />
    </div>
    <div class="col-xl-7 col-lg-7">
      <div class="featured-text text-center text-lg-left">
        <h4 class="text-black">{this.state.name}</h4>
        <p class="mb-0 text-black-60">The place: {this.state.place}</p>
        <p class="mb-0 text-black-60">Organizer: {this.state.organizer}</p>
        <p class="mb-0 text-black-60">Date: {this.state.date}</p>
        <p class="mb-0 text-black-60">Detail: {this.state.detail}</p>
        <br />
        {/* <Link class="btn btn-primary js-scroll-trigger" to={"/getLocation/" + props.exercise._id}>
          ShowDetail
        </Link> */}
      </div>
    </div>
  </div>
  </div>
  </section>

      </>
    );
  }
}
