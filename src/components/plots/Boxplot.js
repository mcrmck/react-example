import { Paper, Grid } from "@mui/material";
import Plot from "react-plotly.js";
import Title from "../elements/Title";
import myData from "../../data/airquality.json";

function Histogram() {
  const myJSON = JSON.stringify(myData);
  const arrayData = JSON.parse(myJSON);
  var ozoneData = [];
  var solarData = [];
  var windData = [];
  var tempData = [];

  for (var i = 0; i < arrayData.length; i++) {
    ozoneData[i] = arrayData[i].Ozone;
    solarData[i] = arrayData[i].Solar;
    windData[i] = arrayData[i].Wind;
    tempData[i] = arrayData[i].Temp;
  }

  return (
    <Grid item xs={12} md={8} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 510,
        }}
      >
        <Title>Box Plot</Title>
        <Plot
          data={[
            {
              y: solarData,
              boxpoints: "all",
              jitter: 0.3,
              pointpos: -1.8,
              type: "box",
              marker: { color: "orange", opacity: 1.0 },
              name: "Solar",
            },
            {
              y: ozoneData,
              boxpoints: "all",
              jitter: 0.3,
              pointpos: -1.8,
              type: "box",
              marker: { color: "green", opacity: 1.0 },
              name: "Ozone (Dobsons)",
            },
            {
              y: tempData,
              boxpoints: "all",
              jitter: 0.3,
              pointpos: -1.8,
              type: "box",
              marker: { color: "red", opacity: 1.0 },
              name: "Temperature (°F)",
            },
          ]}
          layout={{}}
        />
      </Paper>
    </Grid>
  );
}

export default Histogram;
