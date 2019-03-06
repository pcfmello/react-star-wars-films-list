import React, { useState, useEffect } from "react";
import ModalFilm from "../ModalFilm/ModalFilm";
import FilmService from "../../services/FilmsService";

import Films from "./Films";

const FilmsContainer = () => {
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

  const sortBy = header => {
    const newList = films.sort((a, b) =>
      a[header].toString().localeCompare(b[header].toString())
    );
    setFilms(() => [...newList]);
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
      <Films items={films} {...{ openModal, isError, sortBy }} />
      {isOpenModal && (
        <ModalFilm
          {...{ film, sortBy }}
          open={isOpenModal}
          handleClose={closeModal}
        />
      )}
    </div>
  );
};

export default FilmsContainer;
