import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Films from "../Films";

const styles = theme => ({
  root: {
    maxWidth: 1366,
    margin: "0 auto",
    padding: 24
  },
  films: {
    border: "1px solid gray",
    [theme.breakpoints.down("xs")]: { borderRadius: 8 }
  }
});

const Main = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.films}>
      <Films />
    </div>
  </div>
);

Main.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Main);
