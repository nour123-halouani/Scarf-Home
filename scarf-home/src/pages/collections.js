import { Container, Typography } from "@mui/material";
import React from "react";
import "./styles/common.css";
import SearchBar from "../components/collectionComponents/collectionSrearch";
import CollectionsList from "../components/collectionComponents/collectionsList";

export default function Collections() {
  return (
    <>
      <Typography variant="h2" className="titles">
        Collections
      </Typography>
      <Container>
        <SearchBar />
        <CollectionsList />
      </Container>
    </>
  );
}
