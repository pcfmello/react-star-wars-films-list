import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Films from "../Films";

const styles = theme => ({
  root: {
    maxWidth: 1366,
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: { padding: "24px" },
    [theme.breakpoints.down("xs")]: { padding: "8px" }
  },
  films: {
    [theme.breakpoints.up("sm")]: { border: `1px solid ${theme.palette.application.primary}` },
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

export default withStyles(styles, { withTheme: true })(Main);
