import * as React from "react";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import "../homeComponents/styles/homeComponents.css";
import { Typography } from "@material-ui/core";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function AboutUs() {
  return (
    <>
      <Grid container direction="row" alignItems="center" spacing={3}>
        <Box
          component={Grid}
          item
          xs={6}
          display={{ xs: "none", lg: "inline" }}
        >
          <img
            style={{ width: "100%", maxWidth: "100%" }}
            alt="me"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFilYv3u4LsyA/profile-displayphoto-shrink_800_800/0/1617726857434?e=1649894400&v=beta&t=Bl8A8He3TRL8W6M0DJSae4AMjFLT0hBmL5dHz9z981A"
          />
        </Box>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" className="titleSetion">
            Propriétaire de Scarf Home
          </Typography>
          <Typography variant="body2" className="paragraph">
            Welcome Girls,
            <br />
            <br />
            Je m'appelle <span className="paragraphItems">
              Nour Halouani
            </span>{" "}
            propriétaire de scarf Home de Mahdia, Tunisie.
             Notre boutique en ligne vous donne l'opportunité d'acheter
            des foulards innovants et à la mode de haute qualité à des prix
            abordables.
            <br />
            <br />
            Merci pour votre visite.
            <LoyaltyIcon fontSize="body2" className="paragraphItems" />
          </Typography>
          <Typography variant="h6" className="titleSetion">
            Mon contact
          </Typography>
          <List>
            <ListItem className="listItem">
              <ListItemIcon sx={{ pl: 3 }}>
                <EmailIcon fontSize="small" className="paragraphItems" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2" className="paragraph">
                      nourhalouani2@gmail.com
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem className="listItem">
              <ListItemIcon sx={{ pl: 3 }}>
                <FacebookIcon fontSize="small" className="paragraphItems" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2" className="paragraph">
                      Nour Halouani
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem className="listItem">
              <ListItemIcon sx={{ pl: 3 }}>
                <PhoneIcon fontSize="small" className="paragraphItems" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2" className="paragraph">
                      +216 50 217 901
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
