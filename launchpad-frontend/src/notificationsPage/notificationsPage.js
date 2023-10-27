import React from "react";
import { useState } from "react";
import "./notificationsPage.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E17EB",
    },
  },
  typography: {
    tabLabel: {
      fontFamily: "Times New Roman", // Replace with the desired font family
      fontSize: "4px", // Set the desired font size
      fontWeight: "bold", // Set the desired font weight
    },
  },
});

export function NotificationsPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <p style={PageStyles.top_banner}>Notifications</p>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{ "& .MuiTab-label": { textTransform: "none" } }}
              >
                <Tab
                  label={
                    <Typography variant="tabLabel1" sx={PageStyles.tabs}>
                      All
                    </Typography>
                  }
                  value="1"
                />
                <Tab
                  label={
                    <Typography variant="tabLabel1" sx={PageStyles.tabs}>
                      Unread{" "}
                      {
                        <Typography
                          variant="tabLabel1"
                          sx={{
                            borderRadius: "6px", // Adjust the radius for rounded edges
                            backgroundColor:
                              value === "2" ? "#5E17EB" : "#00000099",
                            color: "white",
                            paddingTop: 0.25,
                            paddingBottom: 0.25,
                            paddingLeft: 0.65,
                            paddingRight: 0.65,
                            fontSize: 12,
                          }}
                        >
                          1
                        </Typography>
                      }
                    </Typography>
                  }
                  value="2"
                />
                <Tab
                  label={
                    <Typography variant="tabLabel1" sx={PageStyles.tabs}>
                      Saved
                    </Typography>
                  }
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
}

const PageStyles = {
  top_banner: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: 5,
  },
  tabs: {
    fontSize: "16px",
    textTransform: "none",
  },
  job_title: {
    fontSize: "20px",
    fontWeight: 500,
    marginTop: "4px",
    marginBottom: "0px",
  },
  company: {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "18px",
    color: "#5E17EB",
  },
  details: {
    marginTop: "0px",
    marginBottom: "4px",
    fontSize: "14px",
    color: "Gray",
  },
  table: {
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "white",
  },
  tableRow: {
    height: "50px",
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    borderColor: "#bcbcbc",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#D3D3D3",
    },
    "&:focus": {
      backgroundColor: "#D3D3D3",
    },
  },
  see_more: {
    textAlign: "center",
    color: "White",
    fontSize: "12px",
    padding: 0.5,
    cursor: "pointer",
    backgroundColor: "#5E17EB",
    "&:hover": {
      backgroundColor: "#814AEF",
    },
    "&:focus": {
      backgroundColor: "#814AEF",
    },
  },
};
