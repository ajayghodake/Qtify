import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import "./tab.css";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab-cointainer">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="secondary"
              indicatorColor=""
            >
              <Tab label="All" value="1" />
              <Tab label="Rock" value="2" />
              <Tab label="Pop" value="3" />
              <Tab label="Jazz" value="4" />
              <Tab label="Blues" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">All</TabPanel>
          <TabPanel value="2">Rock</TabPanel>
          <TabPanel value="3">Pop</TabPanel>
          <TabPanel value="4">Jazz</TabPanel>
          <TabPanel value="5">Blues</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
