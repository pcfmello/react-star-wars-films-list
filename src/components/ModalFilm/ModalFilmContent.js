import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Grid } from "@material-ui/core";
import FilmService from "../../services/FilmsService";
import injectSheet from "react-jss";

import Loading from "../../common/Loading/Loading";
import FilmDetail from "./ModalFilmDetail";

const styles = {
  root: {
    color: "gray"
  },
  loading: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    margin: "auto"
  }
};

const ModalFilmContent = ({ film, classes }) => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLists();
  }, []);

  const getLists = async () => {
    try {
      const respCharacters = await FilmService.getListOf(film.characters);
      const respPlanets = await FilmService.getListOf(film.planets);
      const respStarships = await FilmService.getListOf(film.starships);
      const respVehicles = await FilmService.getListOf(film.vehicles);
      const respSpecies = await FilmService.getListOf(film.species);

      setCharacters(respCharacters.map(character => character.data));
      setPlanets(respPlanets.map(planet => planet.data));
      setStarships(respStarships.map(starship => starship.data));
      setVehicles(respVehicles.map(vehicle => vehicle.data));
      setSpecies(respSpecies.map(specie => specie.data));

      setLoading(false);
    } catch {
      // setError(true);
      setLoading(false);
    }
  };

  const formattedNamesList = namesList =>
    namesList.map((name, index) => (
      <React.Fragment key={name.url}>
        {index === 0 ? "" : index === namesList.length - 1 ? " and " : ", "}
        {name.name}
        {index === namesList.length - 1 ? ". " : ""}
      </React.Fragment>
    ));

  return (
    <React.Fragment>
      {isLoading && <Loading style={styles.loading} size={150} />}
      {!isLoading && (
        <Grid container className={classes.root} spacing={16}>
          <Grid item md={4}>
            <FilmDetail label="Title" description={film.title} />
          </Grid>
          <Grid item md={4}>
            <FilmDetail label="Episode" description={film.episode_id.toString()} />
          </Grid>
          <Grid item md={4}>
            <FilmDetail label="Release date" description={moment(film.release_date).format("LL")} />
          </Grid>
          <Grid item md={4}>
            <FilmDetail label="Director" description={film.director} />
          </Grid>
          <Grid item md={8}>
            <FilmDetail label="Producer(s)" description={film.producer} />
          </Grid>
          <Grid item md={12}>
            <FilmDetail label="Synopsis" description={film.opening_crawl} />
          </Grid>

          <Grid item md={12}>
            <FilmDetail label="Characters" description={formattedNamesList(characters)} />
          </Grid>

          <Grid item md={12}>
            <FilmDetail label="Planets" description={formattedNamesList(planets)} />
          </Grid>

          <Grid item md={12}>
            <FilmDetail label="Starships" description={formattedNamesList(starships)} />
          </Grid>

          <Grid item md={12}>
            <FilmDetail label="Vehicles" description={formattedNamesList(vehicles)} />
          </Grid>

          <Grid item md={12}>
            <FilmDetail label="Species" description={formattedNamesList(species)} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

ModalFilmContent.propTypes = {
  film: PropTypes.object.isRequired,
  classes: PropTypes.object
};

export default injectSheet(styles)(ModalFilmContent);
