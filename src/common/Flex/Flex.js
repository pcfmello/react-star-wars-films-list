import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flex: ({ ...props }) => ({
    display: "flex",
    flexDirection: props.direction,
    flexWrap: props.wrap,
    flexFlow: props.flow,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    flex: props.flex,
    order: props.order,
    flexGrow: props.grow,
    flexShirink: props.shrink,
    flexBasis: props.basis,
    alignSelf: props.alignSelf
  })
};

/** Align */
const defaultAlign = ["flex-start", "flex-end", "center"];
const defaultAlignTwo = [...defaultAlign, "stretch"];
const defaultAlignThree = [...defaultAlignTwo, "baseline"];

const Flex = ({ children, classes, ...props }) => (
  <div className={classes.flex}>{children}</div>
);

Flex.propTypes = {
  /** It represents the flex-direction property, used in the flex container */
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  /** IT represents the flex-wrap property, used in the flex container */
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  /** It represents the flex-flow property, used in the flex container */
  flow: PropTypes.string,
  /** It represents the justify-content property, used in the flex container */
  justifyContent: PropTypes.oneOf([
    ...defaultAlign,
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  /** It represents the align-items property, used in the flex container */
  alignItems: PropTypes.oneOf([...defaultAlignTwo, "baseline"]),
  /** It represents align-content property, used in the flex container */
  alignContent: PropTypes.oneOf([...defaultAlignTwo]),

  /** It represents the flex property, used in the flex children  */
  flex: PropTypes.string,
  /** It represents the order property, used in the flex children */
  order: PropTypes.number,
  /** It represents the flex-grow property, used in the flex children */
  grow: PropTypes.number,
  /** It represents the flex-shrink property, used in the flex children */
  shrink: PropTypes.number,
  /** It represents the flex-basis property, used in the flex children */
  basis: PropTypes.string,
  /** It represents the align-self property, used in the flex children */
  alignSelf: PropTypes.oneOf([...defaultAlignThree, "auto"]),

  /** @ignore */
  children: PropTypes.node.isRequired,
  /** @ignore */
  classes: PropTypes.object
};

export default withStyles(styles)(Flex);
