import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  ScatterChart,
  Scatter,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import myData from "../../data/airquality.json";
import moment from "moment";
import { Paper } from "@mui/material";
import Title from "../Title";
import Grid from "@mui/material/Grid";

export default function OzoneOverSolar({ width }) {
  const theme = useTheme();

  const mayData = myData.filter(
    (obj) => moment(obj.Date).format("MM") === "05"
  );

  const junData = myData.filter(
    (obj) => moment(obj.Date).format("MM") === "06"
  );

  const julData = myData.filter(
    (obj) => moment(obj.Date).format("MM") === "07"
  );

  const augData = myData.filter(
    (obj) => moment(obj.Date).format("MM") === "08"
  );

  const sepData = myData.filter(
    (obj) => moment(obj.Date).format("MM") === "09"
  );

  return (
    <Grid item xs={12} md={8} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 500,
        }}
      >
        <React.Fragment>
          <Title>Ozone over Solar</Title>
          <ResponsiveContainer width={width}>
            <ScatterChart
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="Solar"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
                unit=" μm"
              ></XAxis>
              <YAxis
                type="number"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
                dataKey="Ozone"
              >
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: "middle",
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1,
                  }}
                >
                  Ozone (Dobsons)
                </Label>
              </YAxis>
              <Tooltip />
              <Legend />
              <Scatter
                name="May"
                type="monotone"
                data={mayData}
                fill={theme.palette.primary.main}
              />
              <Scatter
                name="June"
                type="monotone"
                data={junData}
                fill={theme.palette.secondary.main}
              />
              <Scatter
                name="July"
                type="monotone"
                data={julData}
                fill={theme.palette.success.main}
              />
              <Scatter
                name="Aug "
                type="monotone"
                data={augData}
                fill={theme.palette.warning.main}
              />
              <Scatter
                name="Sep "
                type="monotone"
                data={sepData}
                fill={theme.palette.error.main}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </React.Fragment>
      </Paper>
    </Grid>
  );
}
