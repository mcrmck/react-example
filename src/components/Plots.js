import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";
import WindTempOverTime from "./plots/WindTempOverTime";
import React from "react";
import Histogram from "./plots/Histogram";
import Boxplot from "./plots/Boxplot";

function Plots() {
  return (
    <React.Fragment>
      <OzoneOverTime />
      <OzoneOverSolar />
      <WindTempOverTime />
      <Histogram />
      <Boxplot />
    </React.Fragment>
  );
}

export default Plots;
