import React, { Component } from "react";
import "typeface-roboto";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: "black", height: "100vh", overflow: "scroll" }}
      >
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
