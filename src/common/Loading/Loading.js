import React from "react";
import PropTypes from "prop-types";

import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: 300,
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  circularProgress: {
    color: theme.palette.application.primary
  }
});

const Loading = ({ classes, ...props }) => (
  <div {...props} className={classes.root}>
    <CircularProgress {...props} className={classes.circularProgress} />
  </div>
);
Loading.propTypes = {
  /** It's the size of loading bar */
  size: PropTypes.number,
  /** @ignore */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Loading);
