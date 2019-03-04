import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = {
  root: {
    fontSize: 24,
    paddingBottom: 16,
    textAlign: "justify",
    "& .label": {
      fontWeight: "bold",
      textTransform: "uppercase",
      paddingBottom: 8
    }
  }
};

const FilmDetail = ({ label, description, classes }) => (
  <div className={classes.root}>
    <div className="label">{label}</div>
    <div>{description}</div>
  </div>
);

FilmDetail.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(FilmDetail);
