import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    position: "relative",
    textAlign: "center"
  },
  headerBackground: {
    height: 300,
    maxHeight: 300,
    backgroundImage:
      "url(https://lumiere-a.akamaihd.net/v1/images/winter-13-header-2x_0a965898.jpeg?region=0%2C0%2C2400%2C444)",
    backgroundSize: "cover",
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
    margin: 24
  }
};

const Header = ({ classes }) => (
  <header className={classes.root}>
    <Hidden xsDown>
      <div className={classes.headerBackground}>
        <img
          alt="Logotipo do site"
          srcSet="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
          className={classes.headerLogo}
        />
      </div>
    </Hidden>
    <Hidden smUp>
      <img
        alt="Logotipo do site"
        srcSet="https://cdn.shopify.com/s/files/1/1405/7728/collections/star_wars_clear.png?v=1494619544"
        className={cn(classes.headerLogo, classes.headerLogoMobile)}
      />
    </Hidden>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Header);
