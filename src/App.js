import React, { Component } from "react";
import "typeface-roboto";
import "moment/locale/pt-br";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "black" }}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
