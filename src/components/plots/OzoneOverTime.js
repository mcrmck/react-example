import myData from "../../data/airquality.json";
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
import { Paper } from "@mui/material";
import Title from "../Title";

export default function OzoneOverTime({ width }) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 500,
      }}
    >
      <React.Fragment>
        <Title>Ozone Over Time</Title>
        <ResponsiveContainer width={width}>
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
    </Paper>
  );
}
