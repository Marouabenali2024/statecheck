import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Initializing state in the constructor
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  // Set interval to update the time since the component was mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Clear the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle the state to show or hide the profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Julia Roberts Bio</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide" : "Show"} Profile
        </button>
        {shows && (
          <div className="profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Julia_Roberts_%2843838880775%29_%28cropped%29.jpg/330px-Julia_Roberts_%2843838880775%29_%28cropped%29.jpg" />
            <h2>Julia Roberts</h2>
            <p>
              Julia Roberts (born October 28, 1967, Smyrna, Georgia, U.S.) is an
              American actress whose deft performances in varied roles helped
              make her one of the highest-paid and most-influential actresses in
              the 1990s and early 2000s.
            </p>
            <p>
              <strong>Profession:</strong> actress and producer
            </p>
          </div>
        )}
        <div className="time">
          <p>Time since mounted: 2000 seconds</p>
        </div>
        <footer className="App-footer">
          <p>
            Made with ❤️ by <a href="https://juliarobertsonline.com/">Maroua</a>
          </p>
        </footer>
      </div>
    );
  }
}


export default App;
