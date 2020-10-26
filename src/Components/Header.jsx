import React from "react";

import AppBar from "@material-ui/core/AppBar";
import BlurOn from "@material-ui/icons/BlurOn";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  // icon: {
  //   marginRight: theme.spacing(2),
  // },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {},
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="relative" width="100%">
        <Toolbar>
          <IconButton
            edge="start"
            variant="contained"
            color="inherit"
            className={classes.icon}
            href="/"
          >
            <BlurOn className={classes.icon} />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Shimmer & RefractRigh
          </Typography>
          <Box marginLeft="60%" display="flex" justifyContent="flex-end">
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                href="/upload"
              >
                Upload
              </Button>
            </label>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
