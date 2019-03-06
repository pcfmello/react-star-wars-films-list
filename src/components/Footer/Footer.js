import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: 50,
    paddingBottom: 16,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "24px",
      fontSize: "1.5em"
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  link: {
    color: theme.palette.application.primary,
    textUnderlinePosition: "under"
  }
});

const Footer = ({ classes }) => (
  <footer className={classes.root}>
    <a
      href="https://github.com/pcfmello/react-star-wars-films-list"
      className={classes.link}
    >
      Fork on Github
    </a>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Footer);
