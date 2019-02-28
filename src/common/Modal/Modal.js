import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  content: {
    padding: 24
  }
};

const Modal = ({ isOpenModal, closeModal, film, children, classes }) => {
  const transition = props => <Slide direction="up" {...props} />;

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpenModal}
        onClose={closeModal}
        TransitionComponent={transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Descrição do filme {film.title}
            </Typography>

            <IconButton color="inherit" onClick={closeModal} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>{children}</div>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Modal);
