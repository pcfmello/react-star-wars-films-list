import React, { Component } from "react";
import PropTypes from "prop-types";
import "typeface-roboto";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.application.secondary,
    [theme.breakpoints.up("sm")]: {
      height: "100vh"
    }
  }
});
class App extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Header />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(App);
