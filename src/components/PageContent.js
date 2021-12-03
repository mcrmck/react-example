import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
        {/* Chart */}
        <Grid item xs={12} md={8} lg={12}>
          <OzoneOverSolar />
        </Grid>
        <Grid item xs={12} md={8} lg={12}>
          <OzoneOverTime />
        </Grid>
      </Grid>
      {/* <Copyright sx={{ pt: 4 }} /> */}
    </Container>
  </Box>
  );
}

export default PageContent;
