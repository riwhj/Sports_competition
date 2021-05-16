import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Exercise = (props) => (
  <div class="row align-items-center no-gutters mb-7 mb-lg-0">
    <div class="col-xl-6">
      <img class="img-fluid" src={props.exercise.image} alt="" />
    </div>
    <div class="col-lg-6">
      <div class="project-text w-100 my-auto text-center text-lg-left">
        <h3 class="text-black">{props.exercise.cetagory}</h3>
        <h4 class="text-black">{props.exercise.name}</h4>
        <h6 class="mb-0 text-black-60">The place: {props.exercise.place}</h6>
        <h6 class="mb-0 text-black-60">
          Organizer: {props.exercise.organizer}
        </h6>
        <h6 class="mb-0 text-black-60">
          Date: {props.exercise.date.substring(0, 10)}
        </h6>
        <h6 class="mb-0 text-black-60">Detail: {props.exercise.detail}</h6>
        <hr class="d-none d-lg-block mb-0 ml-0" />
        <br />
        <Link
          class="btn btn-primary js-scroll-trigger"
          to={"/edit/" + props.exercise._id}
        >
          edit
        </Link>{" "}
        |{" "}
        <a
          class="btn btn-primary js-scroll-trigger"
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
            alert("Are you sure to delete data!");
          }}
        >
          delete
        </a>
      </div>
    </div>
  </div>
);

export default class LocationList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <section class="projects-section bg-light" id="projects">
          <div class="container">{this.exerciseList()}</div>
        </section>
      </>
    );
  }
}
