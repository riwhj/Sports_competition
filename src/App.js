import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import showtravel from "./components/showTravel";
import LocationList from "./components/locationlist.component";
import EditExercise from "./components/edit-exercise.component";
import CreateLocation from "./components/create-location.component";
import Header from "./components/Header";
import profile from "./components/profile";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import register from "./components/register";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <br />
      <Route path="/" exact component={Home} />
      <Route path="/competitions" exact component={LocationList} />
      <Route path="/List" exact component={profile} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/createLocation" component={CreateLocation} />
      <Route path="/showcompetition/:id" component={showtravel} />
      <Route path="/register" component={register} />
      <Route path="/user" component={CreateUser} />
      <Route path="/edituser/:id" component={EditUser} />

      <br />
      {/* <Signup /> */}
      {/* <Contact /> */}
      <Footer />
    </Router>
  );
}

export default App;
