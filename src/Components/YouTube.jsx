import React, { useRef, useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { makeStyles } from '@mui/styles';

  const useStyles = makeStyles({
    container: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
    responsiveiframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      border: "none",
    },
    
  });

export default function YouTube() {
  const [play, setPlay] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Button id="youtubeBtn" onClick={()=>setPlay(!play)}>
        YouTube
      </Button>
      <Divider />
      {play&&
      <iframe
      className={classes.container}
        src="https://www.youtube.com/embed/oj8_wufhE28?list=RDoj8_wufhE28"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>}
    </div>
  );
}
