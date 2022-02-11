import { Stack, Typography } from "@mui/material";
import * as React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReplayIcon from "@mui/icons-material/Replay";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Grid } from "@mui/material";
import "../homeComponents/styles/homeComponents.css";
export default function Services() {
  return (
    <>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <LocalShippingIcon fontSize="large" className="serviceIcons" />
            <Typography variant="h6" className="titleSetion">
              Livraison
            </Typography>
            <Typography variant="subtitle2" className="serviceDescription">
              sur toute la tunisie.
            </Typography>
          </Stack>

          <Stack direction="column" justifyContent="center" alignItems="center">
            <MonetizationOnIcon fontSize="large" className="serviceIcons" />
            <Typography variant="h6" className="titleSetion">
              Paiement
            </Typography>
            <Typography variant="subtitle2" className="serviceDescription">
              à la livraison.
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          {" "}
          <Stack direction="column" justifyContent="center" alignItems="center">
            <ReplayIcon fontSize="large" className="serviceIcons" />
            <Typography variant="h6" className="titleSetion">
              Remboursement
            </Typography>
            <Typography variant="subtitle2" className="serviceDescription">
              aprés 48h.
            </Typography>
          </Stack>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <PhoneIphoneIcon fontSize="large" className="serviceIcons" />
            <Typography variant="h6" className="titleSetion">
              Services
            </Typography>
            <Typography variant="subtitle2" className="serviceDescription">
              De 9h à 18h.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
