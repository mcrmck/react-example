import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material/";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </div>
);
