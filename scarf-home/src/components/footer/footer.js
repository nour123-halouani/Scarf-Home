import { Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import * as React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className="root">
      <Typography className="logo">Scarf Home</Typography>
      <Stack direction="row" spacing={1} justifyContent="center">
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <FacebookIcon className="iconColor" />
          </IconButton>
        </a>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <InstagramIcon className="iconColor" />
          </IconButton>
        </a>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <YouTubeIcon className="iconColor" />
          </IconButton>
        </a>
      </Stack>
      <Divider className="divider"></Divider>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" className="titleFooter">
            Notre store
          </Typography>
          <Link className="footerLinkItems">Collections</Link>{" "}
          <Link className="footerLinkItems">Tutoriels</Link>
          <Link className="footerLinkItems">Promotions</Link>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" className="titleFooter">
            Votre compte
          </Typography>
          <Link className="footerLinkItems">Panier</Link>{" "}
          <Link className="footerLinkItems">Achats</Link>
          <Link className="footerLinkItems">Connexion</Link>
        </Stack>

        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" className="titleFooter">
            Notre contact
          </Typography>
          <Typography className="footerTextItems">Mahdia, Tunisie</Typography>{" "}
          <Typography className="footerTextItems"> 50 217 901</Typography>
          <Link className="footerLinkItems">SH@gmail.com</Link>
        </Stack>
      </Stack>
      <Divider className="dividerTwo"></Divider>
      <Typography className="copyrightLabel">
        Tous droits réservés - Copyright Scarf Home 2022-2023.
      </Typography>
    </div>
  );
}
