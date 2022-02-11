import { Container, Typography } from "@mui/material";
import React from "react";
import "./styles/common.css";
import SearchBar from "../components/collectionComponents/collectionSrearch";
import CollectionItemsComponent from "../components/collectionComponents/collectionItemsComponent";

export default function CollectionsItems() {
  return (
    <>
      <Typography variant="h2" className="titles">
        Collection All in Black
      </Typography>
      <Container>
        <SearchBar />
        <CollectionItemsComponent />
      </Container>
    </>
  );
}
