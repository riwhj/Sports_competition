import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeCetagory = this.onChangeCetagory.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cetagory: "",
      name: "",
      image: "",
      place: "",
      organizer: "",
      date: new Date(),
      detail: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          cetagory: response.data.cetagory,
          name: response.data.name,
          image: response.data.image,
          place: response.data.place,
          organizer: response.data.organizer,
          detail: response.data.detail,
          date: new Date(response.data.date),
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
      .post(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
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
                    <label>Cetagory: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.cetagory}
                      onChange={this.onChangeCetagory}
                      placeholder="กรุณากรอกประเภทการแข่งขัน"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      placeholder="กรุณากรอกชื่อรายการ"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>The place: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.place}
                      onChange={this.onChangePlace}
                      placeholder="กรุณากรอกชื่อสถานที่"
                    />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>organizer: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.organizer}
                      onChange={this.onChangeOrganizer}
                      placeholder="กรุณากรอกผู้จัดงาน"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Image: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.image}
                      onChange={this.onChangeImage}
                      placeholder="กรุณากรอกรูปภาพ"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Date: </label>
                    <div>
                      <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                      />
                    </div>
                  </div>
                </div>

                <div class="col-m-12 col-lg-12">
                  <div className="form-group">
                    <label>Detail: </label>
                    <textarea
                      type="text"
                      required
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={this.state.detail}
                      onChange={this.onChangeDetail}
                      placeholder="กรุณากรอกรายละเอียด"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                />{" "}
                |{" "}
                <Link class="btn btn-danger js-scroll-trigger" to={"/travel"}>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
