import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddTutorial from "./add-tutorial.component";
import Tutorial from "./tutorial.component";
import TutorialsList from "./tutorials-list.component";

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

       
    }

    render() {

        const content = <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App1</a></div>
            </nav>
        </header>
    </div>

    const content1 =    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/tutorials" className="navbar-brand">
        Home
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      <Switch>
        <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
        <Route exact path="/add" component={AddTutorial} />
        <Route path="/tutorials/:id" component={Tutorial} />
      </Switch>
    </div>
  </div>
        return (
            content1
        )
        
    }
}

