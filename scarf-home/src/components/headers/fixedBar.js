import * as React from "react";
import "./styles/fixBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FixedBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className="toolbar">
        <Stack
          direction="row"
          spacing={2.5}
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h5" className="titleFont">
            Suivez nous !
          </Typography>

          <Stack direction="row" spacing={0.8}>
            <Avatar sx={{ width: 35, height: 35, backgroundColor: "#524f4a" }}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <FacebookIcon className="icons" />
                </IconButton>
              </a>
            </Avatar>
            <Avatar sx={{ width: 35, height: 35, backgroundColor: "#524f4a" }}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <InstagramIcon className="icons" />
                </IconButton>
              </a>
            </Avatar>
            <Avatar sx={{ width: 35, height: 35, backgroundColor: "#524f4a" }}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <YouTubeIcon className="icons" />
                </IconButton>
              </a>
            </Avatar>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
