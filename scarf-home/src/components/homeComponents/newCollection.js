import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../homeComponents/styles/homeComponents.css";

export default function NewCollection() {
  return (
    <>
      <ImageList sx={{ width: "90vw" }} variant="woven" cols={3} gap={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        className="detailsButton"
        variant="contained"
        endIcon={<ChevronRightIcon />}
      >
        Voir plus
      </Button>
    </>
  );
}

const itemData = [
  {
    img: "https://foulard.store/wp-content/uploads/2022/02/VD3.jpg",
    title: "foulard",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/02/VD5-2-800x1200.jpg",
    title: "foulard",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/02/VD4-2-800x1200.jpg",
    title: "foulard",
  },
];
