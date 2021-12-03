import OzoneOverTime from "./components/OzoneOverTime";
import {Paper} from "@mui/material";

function App() {
  return (
    <div>
      <h1>Oh Yea</h1>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 500,
          }}
        >
          <OzoneOverTime />
        </Paper>
        
    </div>
  );
}

export default App;
