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
        <Title>Stacked Histogram</Title>
        <Plot
          data={[
            {
              x: ozoneData,
              name: "Ozone (Dobsons)",
              type: "histogram",
              marker: { color: "green", opacity: 0.75 },
            },
            {
              x: windData,
              name: "Wind Speed (mph)",
              type: "histogram",
              marker: { color: "blue", opacity: 0.75 },
            },
            {
              x: tempData,
              name: "Temperature (°F)",
              type: "histogram",
              marker: { color: "red", opacity: 0.75 },
            },
          ]}
          layout={{ barmode: "stack" }}
        />
      </Paper>
    </Grid>
  );
}

export default Histogram;
