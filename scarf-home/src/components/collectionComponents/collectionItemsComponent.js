import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Typography } from "@material-ui/core";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../homeComponents/styles/homeComponents.css";

var LinkTo = () => {
  window.location.href = "/item";
};

export default function collectionItemsComponent() {
  return (
    <div className="collectionBody">
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
                  <Typography variant="subtitle2" className="label">
                    {item.price}
                  </Typography>
                  <Button
                    className="detailsButton"
                    variant="contained"
                    onClick={LinkTo}
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
    </div>
  );
}

const itemData = [
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Selene-800x1200.jpg",
    description: "Foulard en sois",
    price: "14dt",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Lana-2-800x1200.jpg",
    description: "Foulard avec fleurs",
    price: "12dt",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Ayla1-800x1200.jpg",
    description: "Foulard en maille",
    price: "15dt",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2021/08/Isabelle.jpg",
    description: "Foulard en maille",
    price: "15dt",
  },
];
