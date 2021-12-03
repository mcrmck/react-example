import PageContent from "./components/PageContent";
import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import React from "react";

function App() {
  // const drawerWidth = 240;
  // const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Dashboard />
      <PageContent width="80%" />
    </div>
  );
}

export default App;
