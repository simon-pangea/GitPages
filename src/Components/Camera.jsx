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


export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [camera, setCamera] = useState(false);
  const [display, setDisplay] = useState(false);
  const [btnLable, setBtnLable] = useState("START CAMERA");
  const width = 720;
  const height = 526;
  const classes = useStyles();

  const photo = () => {
    setDisplay(true);
    if (!camera) {
      streamCamVideo();
      setBtnLable("MAKE PHOTO");
    } else {
      handleMakePhoto();
      setBtnLable("START CAMERA");
    }
    setCamera(!camera);
  };

  const streamCamVideo = () => {
    var constraints = { audio: false, video: { width: width, height: height } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = (e) => {
          videoRef.current.play();
        };
      })
      .catch((err) => {
        console.log(err.name + ": " + err.message);
        console.log(err.message);
      });
  };

  const handleMakePhoto = () => {
    navigator.getMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getMedia(
      //{ video: true },
      {
        video: {
          facingMode: "environment",
        },
      },
      () => {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        canvasRef.current.getContext("2d").drawImage(videoRef.current, 0, 0);
        let travelerPhoto = canvasRef.current.toDataURL("image/jpeg");
        console.log(travelerPhoto);
      },
      () => {
        console.log("No Permissions");
      }
    );
  };

  return (
    <div>
      {display && (
        <>
          <canvas
            id="canvas"
            className={classes.container}
            ref={canvasRef}
            style={camera ? { display: "none" } : {}}
          />
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            ref={videoRef}
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
