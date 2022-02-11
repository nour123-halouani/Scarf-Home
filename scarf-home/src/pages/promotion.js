import { Typography } from "@mui/material";
import React from "react";
import "./styles/common.css";

export default function Promotion() {
  return (
    <>
      <Typography variant="h2" className="titles">
        Promotions
      </Typography>

      <Typography className="error">
        Pas de promotions. <br />
        Merci pour votre visite.
      </Typography>
    </>
  );
}
