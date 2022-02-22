import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const AppBar = () => {
  return (
      <MuiAppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Webiny Coding Challenge
          </Typography>
        </Toolbar>
      </MuiAppBar>
  );
};
