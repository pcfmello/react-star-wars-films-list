import React from "react";
import PropTypes from "prop-types";

import ModalFullScreen from "../../common/Modal/ModalFullScreen";
import ModalContent from "./ModalFilmContent";

const ModalFilm = ({ open, handleClose, film }) => {
  return (
    <ModalFullScreen title="Description" {...{ open, handleClose }}>
      <ModalContent {...{ film }} />
    </ModalFullScreen>
  );
};

ModalFilm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired
};

export default ModalFilm;
