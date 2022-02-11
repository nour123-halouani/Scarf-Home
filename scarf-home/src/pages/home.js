import React from "react";
import "./styles/home.css";
import { Container } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";
import Banner from "../components/homeComponents/banner";
import NewCollection from "../components/homeComponents/newCollection";
import BestSeller from "../components/homeComponents/bestSeller";
import AboutUs from "../components/homeComponents/aboutUs";
import Services from "../components/homeComponents/services";

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <Divider className="dividerHome">
          <Typography variant="h2" gutterBottom className="dividerLabel">
            Nouveautés
          </Typography>
        </Divider>
        <NewCollection />
        <Divider className="dividerHome">
          <Typography variant="h2" gutterBottom className="dividerLabel">
            Best-seller
          </Typography>
        </Divider>
        <BestSeller />
        <Divider className="dividerHome">
          <Typography variant="h2" gutterBottom className="dividerLabel">
            Qui somme-nous?
          </Typography>
        </Divider>
        <AboutUs />
        <Divider className="dividerHome">
          <Typography variant="h2" gutterBottom className="dividerLabel">
            Nos services
          </Typography>
        </Divider>{" "}
        <Services />
      </Container>
    </>
  );
}
