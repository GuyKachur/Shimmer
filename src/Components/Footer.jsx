import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/GuyKachur/Shimmer">
        Github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
