import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";
import WindTempOverTime from "./plots/WindTempOverTime";
import React from "react";

function Plots() {
  return (
    <React.Fragment>
      <OzoneOverTime />
      <OzoneOverSolar />
      <WindTempOverTime />
    </React.Fragment>
  );
}

export default Plots;
