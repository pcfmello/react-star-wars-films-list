import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: 300,
    maxHeight: 300,
    backgroundColor: "#161616",
    position: "relative"
  },
  headerBackground: {
    backgroundImage:
      "url(https://lumiere-a.akamaihd.net/v1/images/winter-13-header-2x_0a965898.jpeg?region=0%2C0%2C2400%2C444)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headerLogo: {
    height: "100%",
    maxHeight: 130
  }
};

const Header = ({ classes }) => (
  <header className={classes.root}>
    <div className={classes.headerBackground}>
      <img
        alt="Logotipo do site"
        srcSet="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
        className={classes.headerLogo}
      />
    </div>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Header);
