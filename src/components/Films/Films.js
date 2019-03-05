import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import moment from "moment";
import { Hidden, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Loading from "../../common/Loading/Loading";
import ErrorPage from "../../common/Error/Error";

const styles = theme => ({
  tableRow: {
    display: "flex",
    padding: "12px 24px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.5em",
    position: "relative",
    color: theme.palette.application.primary,
    cursor: "pointer"
  },
  tableRowHeader: {
    color: theme.palette.application.secondary,
    backgroundColor: theme.palette.application.primary,
    borderBottom: `1px solid ${theme.palette.application.secondary}`
  },
  tableRowDesktop: {
    "&:hover": {
      color: theme.palette.application.secondary,
      backgroundColor: theme.palette.application.primary
    },
    "&:active": {
      backgroundColor: theme.palette.application.active
    }
  },
  tableRowMobile: {
    padding: "8px 16px"
  }
});

const Films = ({ openModal, items, isError, classes }) => {
  const headerRow = () => (
    <Hidden xsDown>
      <Grid container className={cn(classes.tableRow, classes.tableRowHeader)}>
        <Grid item sm={8} md={5} lg={4}>
          <div>TITLE</div>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2}>
            <div>EPISODE</div>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item md={5} lg={4}>
            <div>DIRECTOR</div>
          </Grid>
        </Hidden>
        <Grid item sm={3} md={2} lg={2}>
          <div>RELEASE</div>
        </Grid>
      </Grid>
    </Hidden>
  );

  const bodyRow = item => (
    <React.Fragment key={item.url}>
      <Hidden xsDown>
        <Grid
          container
          key={item.url}
          className={cn(classes.tableRow, classes.tableRowDesktop)}
          onClick={() => openModal(item)}
        >
          <Grid item sm={8} md={5} lg={4}>
            <div>{item.title}</div>
          </Grid>
          <Hidden mdDown>
            <Grid item lg={2}>
              <div>{item.episode_id}</div>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item md={5} lg={4}>
              <div>{item.director}</div>
            </Grid>
          </Hidden>
          <Grid item sm={3} md={2} lg={2}>
            <div>{moment(item.release_date).format("L")}</div>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <div
          key={item.url}
          className={cn(classes.tableRow, classes.tableRowHover, classes.tableRowMobile)}
        >
          <Button variant="contained" size="large" fullWidth onClick={() => openModal(item)}>
            {item.title}
          </Button>
        </div>
      </Hidden>
    </React.Fragment>
  );

  return (
    <div className={cn(classes.root)}>
      <div>{headerRow()}</div>
      <div>
        {isError && (
          <ErrorPage iconName="error_outline" message="There was an error to loading films list" />
        )}
        {(!isError && (items.length && items.map(item => bodyRow(item)))) ||
          (!isError && !items.length && <Loading size={100} />)}
      </div>
    </div>
  );
};

Films.propTypes = {
  openModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Films);
