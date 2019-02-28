import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "../Films/Films";

const styles = theme => ({
  root: {
    width: "95%",
    height: "calc(100vh - 324px)",
    margin: "0 auto",
    paddingTop: 24
  },
  list: {
    border: "1px solid gray"
  }
});

const Main = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.list}>
      <List />
    </div>
  </div>
);

Main.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Main);
