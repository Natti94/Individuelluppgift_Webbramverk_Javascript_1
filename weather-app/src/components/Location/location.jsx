import { useState, useEffect } from "react";

function Location() {
  navigator.geolocation.getCurrentPosition(function (pos) {
    setPosition([pos.coords.latitude, pos.coords.longitude]);
  });
}

export default Location;
