import React, { Component } from "react";
import "./App.css";
import Profile from "./component/Profile";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleShowProfile = this.handleShowProfile.bind(this);
  }

  handleShowProfile() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    return (
      <>
        <br />
        <Container>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="">State checkpoint</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>

        <br />

        {/* Main Content */}
        <div id="App">
          <button onClick={this.handleShowProfile}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          {this.state.show ? <Profile /> : <h2>Click the button</h2>}
        </div>
      </>
    );
  }
}
