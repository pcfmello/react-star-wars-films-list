import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Grid } from "@material-ui/core";
import FilmService from "../../services/FilmsService";
import { withStyles } from "@material-ui/core/styles";

import Loading from "../../common/Loading/Loading";
import ErrorPage from "../../common/Error/Error";
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
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLists();
  }, []);

  const getLists = async () => {
    try {
      setError(false);
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
    } catch {
      setError(true);
    } finally {
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
      {isError && (
        <ErrorPage
          iconName="error_outline"
          message="There was an error to loading the film details"
        />
      )}
      {/* Applied inline style to force change it styles */}
      {isLoading && <Loading style={styles.loading} size={150} />}
      {!isError && !isLoading && (
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Title" description={film.title} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Episode" description={film.episode_id.toString()} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Director" description={film.director} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Producer(s)" description={film.producer} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Release date" description={moment(film.release_date).format("LL")} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilmDetail label="Last edition" description={moment(film.edited).format("LL")} />
          </Grid>
          <Grid item xs={12}>
            <FilmDetail label="Synopsis" description={film.opening_crawl} />
          </Grid>

          <Grid item xs={12}>
            <FilmDetail label="Characters" description={formattedNamesList(characters)} />
          </Grid>

          <Grid item xs={12}>
            <FilmDetail label="Planets" description={formattedNamesList(planets)} />
          </Grid>

          <Grid item xs={12}>
            <FilmDetail label="Starships" description={formattedNamesList(starships)} />
          </Grid>

          <Grid item xs={12}>
            <FilmDetail label="Vehicles" description={formattedNamesList(vehicles)} />
          </Grid>

          <Grid item xs={12}>
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

export default withStyles(styles)(ModalFilmContent);
