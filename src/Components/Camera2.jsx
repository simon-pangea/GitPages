import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  responsiveiframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
});

export default function Camera2() {
  const classes = useStyles();
  const player = useRef(null);
  const canvas = useRef(null);

  const [camera, setCamera] = useState(false);
  const [display, setDisplay] = useState(false);
  const [btnLable, setBtnLable] = useState("START CAMERA");

  const constraints = {
    video: true,
  };

  const photo = () => {
    setDisplay(true);
    if (camera) {
      Capture();
      setBtnLable("START CAMERA");
    } else {
      setBtnLable("MAKE PHOTO");
    }
    setCamera(!camera);
  };

  const Capture = () => {
    const context = canvas.current.getContext("2d");
    context.drawImage(
      player.current,
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );

    // Stop all video streams.
    player.current.srcObject.getVideoTracks().forEach((track) => track.stop());
  };

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    // Attach the video stream to the video element and autoplay.
    player.current.srcObject = stream;
  });

  return (
    <div>
      {display && (
        <>
          <canvas
            id="canvas"
            className={classes.container}
            ref={canvas}
            style={camera ? { display: "none" } : { width: 320, height: 240 }}
          />
          <video
            ref={player}
            controls
            autoPlay
            style={!camera ? { display: "none" } : {}}
          ></video>
          <br />
        </>
      )}
      <Button id="start-camera" onClick={photo}>
        {btnLable}
      </Button>
      <Divider />
    </div>
  );
}
