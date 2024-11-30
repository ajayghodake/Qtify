import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';

function a11ytabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ handleChangeIndex}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    //setting the "value" state of this component so that the position of active tab and its indicator can change
    setValue(newValue);
    //to pass the index of freshly selected tab to app.js
    handleChangeIndex(newValue);
  };

  const tabStyle = {
    color: 'white',
    fontSize: '14px',  // Font size for the tab label
    padding: '10px 10px',  // Padding inside the tab
    margin: '0 0px',  // Margin between tabs
    minWidth: '50px',  // Minimum width for each tab
  };

// All rock pop jazz blues
  return (
    <Box sx={{ width: '100%', marginBottom: '30px', marginLeft: '30px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs" 
         TabIndicatorProps={{
            style: { backgroundColor: "#34c94b" }
        }} textColor='#34c94b' >
          <Tab label="All" {...a11ytabProps(0)} sx={tabStyle}/>
          <Tab label="Rock" {...a11ytabProps(1)} sx={tabStyle}/>
          <Tab label="Pop" {...a11ytabProps(2)} sx={tabStyle}/>
          <Tab label="Jazz" {...a11ytabProps(3)} sx={tabStyle}/>
          <Tab label="Blues" {...a11ytabProps(4)} sx={tabStyle}/>
        </Tabs>
      </Box>
    </Box>
  );
}


// git config --global --unset user.name
// git config --global --unset user.email


// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// // import "./tab.css";

// export default function BasicTabs() {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//       <Box sx={{ width: "100%", typography: "body1" }}>
//         <TabContext value={value}>
//           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//             <TabList
//               onChange={handleChange}
//               aria-label="lab API tabs example"
//               textColor="secondary"
//               indicatorColor=""
//             >
//               <Tab label="All" value="1" />
//               <Tab label="Rock" value="2" />
//               <Tab label="Pop" value="3" />
//               <Tab label="Jazz" value="4" />
//               <Tab label="Blues" value="5" />
//             </TabList>
//           </Box>
//           <TabPanel value="1">All</TabPanel>
//           <TabPanel value="2">Rock</TabPanel>
//           <TabPanel value="3">Pop</TabPanel>
//           <TabPanel value="4">Jazz</TabPanel>
//           <TabPanel value="5">Blues</TabPanel>
//         </TabContext>
//       </Box>

//   );
// }

