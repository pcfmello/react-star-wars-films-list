import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ModalFullScreen from "../../common/Modal/ModalFullScreen";

const styles = {
  root: {
    color: "gray"
  }
};

const ModalFilm = ({ open, handleClose, film, classes }) => {
  return (
    <ModalFullScreen
      title={`Episode ${film.episode_id} | ${film.title}`}
      {...{ open, handleClose }}
    >
      {/* Here must be used grid system to build the view  */}
      <h1 className={classes.root}> {film.title}</h1>
    </ModalFullScreen>
  );
};

ModalFilm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(ModalFilm);
