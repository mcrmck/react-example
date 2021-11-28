import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import moment from 'moment'
import Title from './Title';
import data from './airquality.json'


export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Ozone over Time</Title>
      <ResponsiveContainer>
        <LineChart
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
            dataKey="Date"
            tickFormatter = {(date) => moment(date).format('MMM Do')}
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
                textAnchor: 'middle',
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