import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 150,
    height: 150
  }
};

const Error = ({ Icon, message, classes }) => (
  <div className={classes.root}>
    <SvgIcon className={classes.icon}>
      <Icon />
    </SvgIcon>
    <h2>{message}</h2>
  </div>
);

Error.propTypes = {
  Icon: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Error);
