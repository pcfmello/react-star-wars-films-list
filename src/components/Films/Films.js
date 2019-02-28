import React, { useState, useEffect } from "react";
import ModalFilm from "../ModalFilm/ModalFilm";
import axios from "axios";
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
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    try {
      const resp = await axios.get("https://swapi.co/api/films");
      setFilms(resp.data.results);
    } catch {
      console.log("Erro ao buscar filmes");
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
      <List items={films} {...{ openModal }} />
      {isOpenModal && <ModalFilm {...{ film }} open={isOpenModal} handleClose={closeModal} />}
    </div>
  );
};

export default withStyles(styles)(Films);
