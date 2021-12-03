import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";
import React from "react";

function Plots() {
  return (
    <React.Fragment>
      <OzoneOverTime />
      <OzoneOverSolar />
    </React.Fragment>
  );
}

export default Plots;
