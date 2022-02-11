import * as React from "react";
import "./styles/collectionsList.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, ImageListItemBar, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

var linkTo = () => {
  window.location.href = "/collection-items";
};
export default function CollectionList() {
  return (
    <div className="collectionBody">
      <ImageList sx={{ width: "100%" }} variant="quilted" cols={4}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              style={{ cursor: "pointer" }}
            />
            <ImageListItemBar
              title={
                <>
                  <Typography variant="h6" className="label">
                    {item.title}
                  </Typography>
                </>
              }
              subtitle={
                <>
                  <Button
                    onClick={linkTo}
                    className="detailsButton"
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                  >
                    {" "}
                    Voir plus
                  </Button>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/The-light-Era_.jpg",
    title: "2 en 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Artboard-49.jpg",
    title: "all in Black",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Artboard-44_1.jpg",
    title: "Hiver",
  },
  {
    img: "https://foulard.store/wp-content/uploads/2022/01/Tair.jpg",
    title: "Printemps",
    cols: 2,
  },
];
