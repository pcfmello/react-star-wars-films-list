import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const styles = {
  paper: {
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  toolbarRoot: {
    backgroundColor: "gray",
    color: "black",
    fontSize: "1.5em"
  },
  appBar: {
    position: "relative"
  },
  toolbarDescription: {
    flex: 1,
    textTransform: "uppercase"
  },
  content: {
    padding: 24
  }
};

const transition = props => <Slide direction="up" {...props} />;

const ModalFullScreen = ({ open, handleClose, title, children, classes }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={transition}
      classes={{ paper: classes.paper }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbarRoot}>
          <div className={classes.toolbarDescription}>{title}</div>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </Dialog>
  );
};

ModalFullScreen.propTypes = {
  /** Defines modal show state */
  open: PropTypes.bool.isRequired,
  /** Handler function to close modal */
  handleClose: PropTypes.func.isRequired,
  /** Modal title. It will be shown at header */
  title: PropTypes.string.isRequired,
  /** Content will be shown at body */
  children: PropTypes.node.isRequired,
  /** @ignore */
  classes: PropTypes.object
};

export default withStyles(styles)(ModalFullScreen);
