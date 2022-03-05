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

export default function Map(props) {
  const [show, setShow] = useState(true);
  const classes = useStyles();

  return (
    <div>
      {/*<Button id="mapBtn" onClick={() => setShow(!show)}>
        Map
      </Button>
  <Divider />*/}
      {show && (
        <iframe
        className={classes.container}
          src={`https://maps.google.com/maps?q=${props.geo}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameborder="0"
          allowfullscreen
        ></iframe>
        
      )}
    </div>
  );
}
