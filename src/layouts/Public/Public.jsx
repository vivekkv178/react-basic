import React from "react";
import useStyles from "./PublicStyles";
import { Grid, Box } from "@material-ui/core";

export default function Public(props) {
  const classes = useStyles();
  return (
    <Box className={classes.layout}>
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} lg={12} md={12} className={classes.component}>
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
}
