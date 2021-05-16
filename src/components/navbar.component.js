import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div class="container">
            {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a> */}
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link
                    to="/"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/travel"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Exercise
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/createLocation"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Create Travels
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/search"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Search
                  </Link>
                </li>

                {/* <li class="nav-item">
                  <Link
                    to="/user"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Create User
                  </Link>
                </li> */}
                {/* <li class="nav-item">
                  <Link
                    to="/userlist"
                    smooth={true}
                    duration={500}
                    class="nav-link js-scroll-trigger"
                  >
                    Users
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
