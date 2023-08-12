import * as React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { green } from "@mui/material/colors";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar style={{ minHeight: "50px" }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <a href="/">
            <img
              src="./logo.png"
              alt="logo"
              style={{ flexGrow: 1, height: 20, width: 200 }}
            />
          </a>
        </Typography>
        <Button
          className="e-button color-primary"
          style={{
            backgroundColor: green[700],
            color: "#fff",
            height: 30,
            fontSize: 12,
            fontWeight: "bold",
            padding: 15,
          }}
        >
          Buy Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
