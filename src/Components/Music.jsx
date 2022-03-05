import React, { useRef, useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function Music() {
  const [play, setPlay] = useState(false);
  const [btnLable, setBtnLable] = useState("PLAY MUSIC");
  const audio = useRef(null);

  const music = () => {
    if (!play) {
      setBtnLable("PAUSE MUSIC");
      audio.current.play();
    } else {
      setBtnLable("PLAY MUSIC");
      audio.current.pause();
    }
    setPlay(!play);
    audio.current.addEventListener("ended", (event) => {
      setPlay(false);
      setBtnLable("PLAY MUSIC");
    });
  };

  return (
    <div>
      <audio ref={audio}>
        <source
          src="https://www.myinstants.com/media/sounds/careless_whispers.mp3"
          type="audio/mpeg"
        />
      </audio>
      <Button id="musicBtn" onClick={music}>
        {btnLable}
      </Button>
      <Divider />
    </div>
  );
}
