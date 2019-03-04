import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import backgroundHeaderDesktop from "../../assets/images/background_header_desktop.jpeg";
import logo from "../../assets/images/logo.png";

const styles = {
  root: {
    position: "relative",
    textAlign: "center"
  },
  headerBackground: {
    height: 300,
    backgroundImage: `url(${backgroundHeaderDesktop})`,
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headerLogo: {
    height: "100%",
    maxHeight: 130
  },
  headerLogoMobile: {
    margin: "24px 24px 0"
  }
};

const getLogo = classes => <img alt="Site Logo" src={logo} className={cn(classes)} />;

const Header = ({ classes }) => (
  <header className={classes.root}>
    <Hidden xsDown>
      <div className={classes.headerBackground}>{getLogo(classes.headerLogo)}</div>
    </Hidden>
    <Hidden smUp>{getLogo([classes.headerLogo, classes.headerLogoMobile])}</Hidden>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Header);
