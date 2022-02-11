import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Typography } from "@material-ui/core";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../homeComponents/styles/homeComponents.css";

export default function BestSeller() {
  return (
    <>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <>
                  <Typography variant="h6" className="label">
                    {item.description}
                  </Typography>
                </>
              }
              subtitle={
                <>
                  <Typography
                    variant="subtitle2"
                    className="label"
                  >
                    {item.price}
                  </Typography>
                  <Button
                    className="detailsButton"
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                  >
                    {" "}
                    Voir plus
                  </Button>
                </>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "https://www.aunomdelasoie.com/2173-large_default/foulard-en-soie-femme-beige-lilas-wendy.jpg",
    description: "Cou écharpe",
    price: "14dt",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2021/08/amira1-800x1200.jpg",
    description: "Foulard en sois",
    price: "12dt",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Maria1-800x1200.jpg",
    description: "Foulard en maille",
    price: "15dt",
  },
  {
    img: "https://www.aunomdelasoie.com/2430-large_default/grand-foulard-en-soie-femme-orange-triomphe.jpg",
    description: "Echarpe sur épaule",
    price: "14 dt",
  },
];
