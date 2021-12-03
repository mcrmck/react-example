import myData from "../data/airquality.json";
import React from "react";
import { useTheme } from "@mui/material/styles";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

export default function OzoneOverTime() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <h1>Ozone Over Time</h1>
      <ResponsiveContainer>
        <LineChart
          data={myData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Date"
            tickFormatter={(date) => moment(date).format("MMM Do")}
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
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
          <Line
            connectNulls
            type="monotone"
            dataKey="Ozone"
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
