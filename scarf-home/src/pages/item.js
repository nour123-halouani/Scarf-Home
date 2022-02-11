import * as React from "react";
import { Container, Typography } from "@mui/material";
import ItemComponent from "../components/collectionComponents/itemComponent";
import SearchBar from "../components/collectionComponents/collectionSrearch";

export default function Item() {
  return (
    <div>
      <Typography variant="h2" className="titles">
      Foulard En Sois Noir 
      </Typography>
      <Container>
        <SearchBar />
        <ItemComponent/>
      </Container>
    </div>
  );
}
