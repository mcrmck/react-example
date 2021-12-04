import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { Paper, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Title from "../elements/Title";
import myData from "../../data/airquality.json";

export default function OzoneOverTime({ width }) {
  const theme = useTheme();

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
        <Title>Wind and Temp Over Time</Title>
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
            <CartesianGrid />
            <XAxis
              dataKey="Date"
              tickFormatter={(date) => moment(date).format("MMM Do")}
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            />
            <YAxis
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
              yAxisId="left"
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
                Temperature (°F)
              </Label>
            </YAxis>
            <YAxis yAxisId="right" orientation="right">
              <Label
                angle={90}
                position="right"
                style={{
                  textAnchor: "middle",
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
                Wind Speed (mph)
              </Label>
            </YAxis>
            <Tooltip />
            <Legend />
            <Line
              yAxisId="right"
              connectNulls
              type="monotone"
              dataKey="Wind"
              stroke={theme.palette.primary.main}
            />
            <Line
              yAxisId="left"
              connectNulls
              type="monotone"
              dataKey="Temp"
              stroke={theme.palette.secondary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}
