import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Foulard",
    imgPath:
      "https://foulard.store/wp-content/uploads/2021/12/new-collection.jpg",
  },
  {
    label: "Foulard",
    imgPath:
      "https://www.aunomdelasoie.com/themes/universal/assets/img/block-img-1-1-1.png?v=1638540483",
  },
  {
    label: "Foulard",
    imgPath:
      "https://www.aunomdelasoie.com/themes/universal/assets/img/block-img-2-1-1.png?v=1638540483",
  },
];
function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const useStyles = makeStyles((theme) => ({
    dot: {
      backgroundColor: "#CBC3BA",
    },
    dotActive: {
      backgroundColor: "#C09984",
    },
    keyboardArrow: {
      color: "#C09984",
    },
  }));
  const classes = useStyles();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100vw",
                  height: "75vh",
                  overflow: "hidden",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        variant="dots"
        classes={{
          root: classes.root,
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft className={classes.keyboardArrow} />
            ) : (
              <KeyboardArrowRight className={classes.keyboardArrow} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight className={classes.keyboardArrow} />
            ) : (
              <KeyboardArrowLeft className={classes.keyboardArrow} />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Banner;
