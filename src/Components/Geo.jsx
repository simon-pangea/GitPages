import React, { useRef, useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Map from "./Map";

export default function Geo() {
  const [geoData, setGeodata] = useState("");
  const [latLon, setLatLon] = useState("");
  const [show, setShow] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setGeodata("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    setGeodata("Latitude: " + lat + "\nLongitude: " + lon);
    setLatLon(lat + "," + lon);
    setShow(true);
  };

  return (
    <div>
      <Button onClick={getLocation}>LOCATION</Button>
      {geoData.length > 0 && <p>{geoData}</p>}
      <br />
      <Divider />
      {show && <Map geo={latLon} />}
    </div>
  );
}
