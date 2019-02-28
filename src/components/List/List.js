import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import moment from "moment";

import Loading from "../../common/Loading/Loading";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  tableRow: {
    display: "flex",
    padding: "12px 24px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    fontSize: "1.5em",
    position: "relative",
    color: "gray"
  },
  tableRowHeader: {
    color: "black",
    backgroundColor: "gray",
    borderBottom: "1px solid black"
  },
  tableRowHover: {
    "&:hover": {
      color: "black",
      backgroundColor: "gray"
    }
  },
  actionButtons: {
    position: "absolute",
    padding: "0 24px",
    right: 0
  },
  titleCell: {
    width: "30%"
  },
  episodeCell: {
    width: "20%"
  },
  directorCell: {
    width: "30%"
  },
  releaseDateCell: {
    width: "20%"
  }
};

const List = ({ openModal, items, classes }) => {
  const headerRow = () => (
    <div className={cn(classes.flex, classes.tableRow, classes.tableRowHeader)}>
      <div className={cn(classes.flex, classes.titleCell)}>TITULO</div>
      <div className={cn(classes.flex, classes.episodeCell)}>EPISÓDIO</div>
      <div className={cn(classes.flex, classes.directorCell)}>DIRETOR</div>
      <div className={cn(classes.flex, classes.releaseDateCell)}>
        LANÇADO EM
      </div>
    </div>
  );

  const bodyRow = item => (
    <div
      key={item.episode_id}
      className={cn(classes.flex, classes.tableRow, classes.tableRowHover)}
    >
      <div className={cn(classes.flex, classes.titleCell)}>{item.title}</div>
      <div className={cn(classes.flex, classes.episodeCell)}>
        {item.episode_id}
      </div>
      <div className={cn(classes.flex, classes.directorCell)}>
        {item.director}
      </div>
      <div className={cn(classes.flex, classes.releaseDateCell)}>
        {moment(item.release_date).format("L")}
      </div>
      <div className={cn(classes.flex, classes.actionButtons)}>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={openModal}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );

  return (
    <div className={cn(classes.root)}>
      <div>{headerRow()}</div>
      <div>
        {(items.length && items.map(item => bodyRow(item))) || (
          <Loading size={100} />
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(List);
