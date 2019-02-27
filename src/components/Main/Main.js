import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "80%",
    height: "calc(100vh - 300px)",
    backgroundColor: "white",
    margin: "0 auto",
    padding: 24
  }
};

const Main = ({ children, classes }) => (
  <main className={classes.root}>{children}</main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Main);
