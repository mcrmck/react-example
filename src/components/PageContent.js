import React from "react";
import { Box, Toolbar, Container, Grid } from "@mui/material/";
import Plots from "./Plots";

function PageContent({ width }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Plots />
        </Grid>
      </Container>
    </Box>
  );
}

export default PageContent;
