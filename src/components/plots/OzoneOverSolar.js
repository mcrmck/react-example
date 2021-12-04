import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { Paper, Grid } from "@mui/material";
import {
  Scatter,
  ScatterChart,
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
      </Paper>
    </Grid>
  );
}
