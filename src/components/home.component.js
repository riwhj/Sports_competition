import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Exercise = (props) => (
  <div class="row align-items-center no-gutters mb-4 mb-lg-5">
    <div class="col-xl-7 col-lg-7">
      <img class="img-fluid mb-7 mb-lg-0" src={props.exercise.image} alt="" />
    </div>
    <div class="col-xl-5 col-lg-5">
      <div class="featured-text text-center text-lg-left">
        <h3 class="text-black">{props.exercise.cetagory}</h3>
        <h4 class="text-black">{props.exercise.name}</h4>
        <h6 class="mb-0 text-black-60">The place: {props.exercise.place}</h6>
        <h6 class="mb-0 text-black-60">
          Organizer: {props.exercise.organizer}
        </h6>
        <h6 class="mb-0 text-black-60">
          Date: {props.exercise.date.substring(0, 10)}
        </h6>
        {/* <p class="mb-0 text-black-60">Detail: {props.exercise.detail}</p> */}
        <br />
        <Link
          class="btn btn-primary js-scroll-trigger"
          to={"/showcompetition/" + props.exercise._id}
        >
          ShowDetail
        </Link>{" "}
        |{" "}
        <Link to={"/search"}>
          <button class="btn btn-primary js-scroll-trigger">Apply</button>
        </Link>
      </div>
    </div>
  </div>
);

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
      search: "",
    };
    this.setSearch = this.setSearch.bind(this);
    this.confirm = this.confirm.bind(this);
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
        <div className="container">
          <h1>Home</h1>
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
        </div>
        <section className="projects-section bg-light" id="projects">
          <div className="container">{this.exerciseList()}</div>
        </section>
      </>
    );
  }
}
