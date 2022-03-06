import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Geo from "./Geo";
import Notification from "./Notification";
import Camera from "./Camera";
import Camera2 from "./Camera2";
import red from "@material-ui/core/colors/red";
import Music from "./Music";
import YouTube from "./YouTube";


const buttons = [
  <Geo key="one" />,
  <Music key="fore" />,
  <Notification key="two" />,
  //<Camera key="three" />,
  <Camera2 key="three2" />,
  <YouTube key ="youtube" />,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        color="inherit"
        size="large"
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
