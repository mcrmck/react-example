import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ScatterChart, Scatter, Cell, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import data from './airquality.json';
import moment from 'moment';


export default function Orders() {
  const theme = useTheme();
  const may_data = data.filter(obj => moment(obj.Date).format("MMM") === "May");
  const jun_data = data.filter(obj => moment(obj.Date).format("MMM") === "Jun");
  const jul_data = data.filter(obj => moment(obj.Date).format("MMM") === "Jul");
  const aug_data = data.filter(obj => moment(obj.Date).format("MMM") === "Aug");
  const sep_data = data.filter(obj => moment(obj.Date).format("MMM") === "Sep");

  return (
    <React.Fragment>
      <Title>Ozone over Solar</Title>
      <ResponsiveContainer>
        <ScatterChart
          data={data}
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
          >
          </XAxis>
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
                textAnchor: 'middle',
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
            data={may_data}
            fill={theme.palette.primary.main}
          />
          <Scatter
            name="June"
            type="monotone"
            data={jun_data}
            fill={theme.palette.secondary.main}
          />
          <Scatter
            name="July"
            type="monotone"
            data={jul_data}
            fill={theme.palette.success.main}
          />
          <Scatter
            name="August"
            type="monotone"
            data={aug_data}
            fill={theme.palette.warning.main}
          />
          <Scatter
            name="September"
            type="monotone"
            data={sep_data}
            fill={theme.palette.error.main}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}