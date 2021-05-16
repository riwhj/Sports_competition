import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Competition type: </label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="กรุณากรอกประเภทการแข่งขัน"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
