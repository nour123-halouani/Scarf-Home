import { Typography } from "@mui/material";
import React from "react";
import "./styles/common.css";
export default function Tutorials() {
  return (
    <>
      <Typography variant="h2" className="titles">
        Tutoriels
      </Typography>

      <Typography className="error">
        Pas de tutoriels pour le moment <br />
        Merci pour votre visite.
      </Typography>
    </>
  );
}
