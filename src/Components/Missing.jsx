import React from "react";

import Typography from "@material-ui/core/Typography";

import { Link } from "@material-ui/core";

export default function Missing() {
  return (
    <React.Fragment>
      <div className="missing">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://github.com/GuyKachur/Shimmer">
            Github
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </React.Fragment>
  );
}
