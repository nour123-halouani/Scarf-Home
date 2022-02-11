import * as React from "react";
import "./styles/collectionsList.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, Typography } from "@mui/material";

export default function ItemComponent() {
  return (
    <div className="collectionBody">
      <Grid container>
        <Grid item>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item>
          <Typography>Détails</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const itemData = [
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Selene-800x1200.jpg?w=248&fit=crop&auto=format",
    title: "2 en 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Selene-800x1200.jpg?w=248&fit=crop&auto=format",
    title: "2 en 1",
    rows: 2,
    cols: 2,
  },
];
