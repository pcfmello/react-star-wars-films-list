import React, { useState, useEffect } from "react";
import ModalFilm from "../ModalFilm/ModalFilm";
import FilmService from "../../services/FilmsService";
import { withStyles } from "@material-ui/core/styles";

import List from "../List/List";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  tableCellHeader: {
    fontSize: "1.25em"
  },
  tableBodyCell: {
    fontSize: "1.5em"
  }
});

const Films = () => {
  const [film, setFilm] = useState({});
  const [films, setFilms] = useState([]);
  const [isError, setError] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    setError(false);
    try {
      const resp = await FilmService.getAllFilms();
      setFilms(resp.data.results);
    } catch {
      setError(true);
    }
  };

  const openModal = film => {
    setFilm(film);
    setOpenModal(true);
  };
  const closeModal = () => {
    setFilm({});
    setOpenModal(false);
  };

  return (
    <div>
      <List items={films} {...{ openModal, isError }} />
      {isOpenModal && <ModalFilm {...{ film }} open={isOpenModal} handleClose={closeModal} />}
    </div>
  );
};

export default withStyles(styles)(Films);
