import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";
import WindTempOverTime from "./plots/WindTempOverTime";
import React from "react";
import Histogram from "./plots/Histogram";

function Plots() {
  return (
    <React.Fragment>
      <OzoneOverTime />
      <OzoneOverSolar />
      <WindTempOverTime />
      <Histogram />
    </React.Fragment>
  );
}

export default Plots;
