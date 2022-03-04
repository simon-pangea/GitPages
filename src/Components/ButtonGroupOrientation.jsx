import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Geo from "./Geo";
import Notification from "./Notification";
import Camera from "./Camera";
import red from "@material-ui/core/colors/red";

const buttons = [
  <Geo key="one" />,
  <Notification key="two" />,
  <Camera key="three" />,
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
