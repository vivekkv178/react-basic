import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import routes from "../../routes/routes";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    boxShadow: "0px 0 10px rgba(0, 0, 0, 0.8)",
  },
  gridRoot: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: "50px",
  },
}));

export default function MobileHome(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Crud");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={classes.content}>
        <Grid container className={classes.gridRoot}>
          <Grid item xs={12} lg={12} md={12} className={classes.component}>
            {props.children}
          </Grid>
        </Grid>
      </Box>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        {routes
          .filter((a) => a.bottomNavigation)
          .map((route) => (
            <BottomNavigationAction
              component={Link}
              to={route.path}
              label={route.name}
              value={route.name}
              icon={<route.icon />}
            />
          ))}
        {/* <BottomNavigationAction
          label="Sign out"
          value="signout"
          icon={<PowerSettingsNew />}
        /> */}
      </BottomNavigation>
    </>
  );
}
