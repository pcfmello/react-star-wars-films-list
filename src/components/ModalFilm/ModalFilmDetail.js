import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme, props) => ({
  root: {
    paddingBottom: 16,
    textAlign: props.isLongText ? "justify" : "left",
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

/** This is for pass props to the styles  */
const withStylesProps = styles => Component => props => {
  const Comp = withStyles(theme => styles(theme, props))(Component);
  return <Comp {...props} />;
};

const FilmDetail = ({ label, description, isLongText, classes }) => (
  <div className={classes.root}>
    <div className={classes.label}>{label}</div>
    <div>{description}</div>
  </div>
);

FilmDetail.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  isLongText: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

export default withStylesProps(styles)(FilmDetail);
