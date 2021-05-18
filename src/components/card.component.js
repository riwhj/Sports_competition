import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Search extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="form-group">
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Fullname : </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.username}
                      // onChange={this.onChangeUsername}
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3">
                  <div className="form-group">
                    <label>BD: </label>
                    <div>
                      <DatePicker
                      // selected={this.state.date}
                      // onChange={this.onChangeDate}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3">
                  <div className="form-group">
                    <label>Sex: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
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
                      type="text"
                      required
                      className="form-control"
                      // value={this.state.password}
                      // onChange={this.onChangePassword}
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
                      // value={this.state.phone}
                      // onChange={this.onChangePhone}
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
        </div>
      </>
    );
  }
}
