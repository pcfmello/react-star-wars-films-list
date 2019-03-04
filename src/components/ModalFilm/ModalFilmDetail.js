import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingBottom: 16,
    textAlign: "justify",
    [theme.breakpoints.up("sm")]: {
      fontSize: 24
    }
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: 8
  }
});

const FilmDetail = ({ label, description, classes }) => (
  <div className={classes.root}>
    <div className={classes.label}>{label}</div>
    <div>{description}</div>
  </div>
);

FilmDetail.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilmDetail);
