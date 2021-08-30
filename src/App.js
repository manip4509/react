import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import HeaderComponent from "./components/header.component";

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <HeaderComponent/>
    </BrowserRouter>
    );
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    const message = <h1 class="btn-primary">Welcome {10+20}</h1>
  return (
    message
  );
}

export default App;

*/