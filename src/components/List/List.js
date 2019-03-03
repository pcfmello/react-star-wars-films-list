import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import moment from "moment";
import { ErrorOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import Loading from "../../common/Loading/Loading";
import ErrorPage from "../../common/Error/Error";

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
    cursor: "pointer",
    "&:hover": {
      color: "black",
      backgroundColor: "gray"
    },
    "&:active": {
      backgroundColor: "rgba(128, 128, 128, 0.5)"
    }
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

const List = ({ openModal, items, isError, classes }) => {
  const headerRow = () => (
    <div className={cn(classes.flex, classes.tableRow, classes.tableRowHeader)}>
      <div className={cn(classes.flex, classes.titleCell)}>TITLE</div>
      <div className={cn(classes.flex, classes.episodeCell)}>EPISODE</div>
      <div className={cn(classes.flex, classes.directorCell)}>DIRECTOR</div>
      <div className={cn(classes.flex, classes.releaseDateCell)}>RELEASE</div>
    </div>
  );

  const bodyRow = item => (
    <div
      key={item.episode_id}
      className={cn(classes.flex, classes.tableRow, classes.tableRowHover)}
      onClick={() => openModal(item)}
    >
      <div className={cn(classes.flex, classes.titleCell)}>{item.title}</div>
      <div className={cn(classes.flex, classes.episodeCell)}>{item.episode_id}</div>
      <div className={cn(classes.flex, classes.directorCell)}>{item.director}</div>
      <div className={cn(classes.flex, classes.releaseDateCell)}>
        {moment(item.release_date).format("L")}
      </div>
    </div>
  );

  return (
    <div className={cn(classes.root)}>
      <div>{headerRow()}</div>
      <div>
        {isError && (
          <ErrorPage Icon={ErrorOutline} message="There was an error to loading films list" />
        )}
        {(!isError && (items.length && items.map(item => bodyRow(item)))) || <Loading size={100} />}
      </div>
    </div>
  );
};

List.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(List);
