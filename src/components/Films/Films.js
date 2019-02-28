import React, { useState, useEffect } from "react";
import Modal from "../../common/Modal/Modal";
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

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const film = {
    title: "A Lagoa Azul"
  };

  return (
    <div>
      <List items={films} {...{ openModal }} />
      <Modal {...{ isOpenModal, closeModal, film }}>Oie da modal</Modal>
    </div>
  );
};

export default withStyles(styles)(Films);
