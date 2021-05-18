import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import './Login.css';
import "react-datepicker/dist/react-datepicker.css";

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
        <button
          class="btn btn-primary js-scroll-trigger"
          onClick={() => props.apply(props)}
        >
          Apply
        </button>
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
      check: false,
    };
    this.setSearch = this.setSearch.bind(this);
    this.confirm = this.confirm.bind(this);
    this.apply = this.apply.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBorn = this.onChangeBorn.bind(this);
  }
  onChangeFullname(e) {
    this.setState({ fullname: e.target.value });
  }
  onChangeSex(e) {
    this.setState({ sex: e.target.value });
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeBorn(e) {
    this.setState({ born: e.target.value });
  }

  apply(props) {
    this.setState({ check: true });
    console.log(props);
    this.setState({ cetagory: props.exercise.cetagory });
    this.setState({ name: props.exercise.name });
    this.setState({ place: props.exercise.place });
    this.setState({ organizer: props.exercise.organizer });
    this.setState({ date: props.exercise.date });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(e.target.sex);
    const cards = {
      cetagory: this.state.cetagory,
      name: this.state.name,
      place: this.state.place,
      organizer: this.state.organizer,
      date: this.state.date,
      fullname: this.state.fullname,
      sex: this.state.sex,
      born: this.state.born,
      phone: this.state.phone,
      email: this.state.email,
    };
    console.log(cards);

    axios
      .post("http://localhost:5000/cards/createlistex", cards)
      .then((res) => console.log(res.data));
      this.setState({check:false})
      // window.location = "/profile";
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
          apply={this.apply}
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
        </div>

        {this.state.check == true && (
          <div class="form-group">
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Fullname : </label>
                    <input
                      name="fullname"
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.username}
                      onChange={this.onChangeFullname}
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3">
                  <div className="form-group">
                    <label>Birth Date: </label>
                    <input
                      name="born"
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.username}
                      onChange={this.onChangeBorn}
                      placeholder="กรุณากรอก วัน/เดือน/ปี เกิด"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3">
                  <div className="form-group">
                    <label>Sex: </label>
                    <input
                      name="sex"
                      type="text"
                      required
                      className="form-control"
                      onChange={this.onChangeSex}
                      placeholder="กรุณากรอกเพศ"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      name="email"
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.password}
                      onChange={this.onChangeEmail}
                      placeholder="กรุณากรอกอีเมล"
                    />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Phone Number: </label>
                    <input
                      name="phone"
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.phone}
                      onChange={this.onChangePhone}
                      placeholder="กรุณากรอกเบอร์โทรศัพท์"
                    />
                  </div>
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
        )}

        <section className="projects-section " id="projects">
          {this.state.check == false && (
            <div className="container">{this.exerciseList()}</div>
          )}
        </section>
      </>
    );
  }
}
