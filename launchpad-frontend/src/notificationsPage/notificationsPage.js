import React from "react";
import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import "./notificationsPage.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { mock_data } from "./mockData";
import Bookmark from "@mui/icons-material/Bookmark";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E17EB",
    },
  },
});

export function Notifications(props) {
  const { filteredData, data, setData } = props;
  const [selected, setSelected] = useState(null);
  const [filtered] = useState(filteredData);

  function handleSave(index) {
    let temp = [...data];
    const i = temp.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    temp[i].saved = !temp[i].saved;
    setData(temp);
  }

  function checkRead(index) {
    const i = data.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    return data[i].read;
  }

  function checkSaved(index) {
    const i = data.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    return data[i].saved;
  }

  const handleRowClick = (index) => {
    setSelected(index);
    if (filtered[index].read === false) {
      let temp = [...data];
      const i = temp.findIndex(
        (item) => item.notificationId === filtered[index].notificationId
      );
      temp[i].read = true;
      setData(temp);
    }
  };

  if (filtered.length === 0) {
    return (
      <>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box style={PageStyles.table}>
              <p
                style={{
                  ...PageStyles.leftSubject,
                  padding: 10,
                  paddingLeft: 30,
                }}
              >
                No Notifications
              </p>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div style={PageStyles.table}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  {filtered.map((row, i) => (
                    <TableRow
                      key={1}
                      sx={{
                        ...PageStyles.tableRow,
                        backgroundColor: selected === i ? "#D3D3D3" : "white",
                      }}
                      onClick={() => handleRowClick(i)}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ paddingLeft: 4 }}
                      >
                        <p style={PageStyles.leftSubject}>{row.subject}</p>
                        <p style={PageStyles.date}>
                          {`${row.dateTime.toLocaleString("en-us", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })} ${row.dateTime.toLocaleString("en-us", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}`}
                        </p>
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ paddingRight: 4, paddingBottom: 4 }}
                      >
                        {checkRead(i) ? (
                          ""
                        ) : (
                          <img
                            src={require("../images/unreadNotification.png")}
                            height={"12px"}
                            alt="Viewed"
                          ></img>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        {selected !== null && (
          <Grid item xs={8}>
            <Box sx={PageStyles.description_box}>
              <Grid container style={{ paddingTop: 18, paddingBottom: 18 }}>
                <Grid item xs={11}>
                  <p style={PageStyles.rightSubject}>
                    {filtered[selected].subject}
                  </p>

                  <Grid container style={PageStyles.date}>
                    <Grid item>
                      <img
                        src={require("../images/clock.png")}
                        height={"16px"}
                        alt="Viewed"
                        style={{ paddingRight: 4, paddingTop: 1 }}
                      ></img>
                    </Grid>
                    <Grid item>
                      {` ${filtered[selected].dateTime.toLocaleString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })} ${filtered[selected].dateTime.toLocaleString(
                        "en-us",
                        {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }
                      )}`}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    sx={{
                      paddingTop: "25%",
                      paddingBottom: "25%",
                    }}
                    onClick={() => handleSave(selected)}
                  >
                    {checkSaved(selected) ? (
                      <Bookmark
                        height={"40px"}
                        sx={{
                          color: "#ffa500",
                          fontSize: "40px",
                        }}
                      />
                    ) : (
                      <Bookmark
                        height={"40px"}
                        sx={{
                          color: "#B8B8B8",
                          fontSize: "40px",
                        }}
                      />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <p style={{ paddingTop: 18, paddingBottom: 18 }}>
                {filtered[selected].body}
              </p>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export function NotificationsPage() {
  const [data, setData] = useState(mock_data);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const countUnread = () => {
    return data.filter((item) => item.read === false).length;
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
                      {countUnread() > 0 && (
                        <Typography
                          variant="tabLabel1"
                          sx={{
                            borderRadius: "6px",
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
                          {countUnread()}
                        </Typography>
                      )}
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
            <TabPanel value="1" sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Notifications
                filteredData={data}
                data={data}
                setData={setData}
              />
            </TabPanel>
            <TabPanel value="2">
              <Notifications
                filteredData={data.filter((item) => item.read === false)}
                data={data}
                setData={setData}
              />
            </TabPanel>
            <TabPanel value="3">
              {" "}
              <Notifications
                filteredData={data.filter((item) => item.saved === true)}
                data={data}
                setData={setData}
              />
            </TabPanel>
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
  description_box: {
    backgroundColor: "white",
    borderRadius: "20px",
    overflow: "hidden",
    minHeight: "76vH",
    paddingLeft: 5,
    paddingRight: 5,
  },
  leftSubject: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "5px",
    marginBottom: "0px",
  },
  rightSubject: {
    fontSize: "30px",
    fontWeight: "500",
    marginTop: "5px",
    marginBottom: "0px",
  },
  company: {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "18px",
    color: "#5E17EB",
  },
  date: {
    marginTop: "0px",
    marginBottom: "5px",
    fontSize: "14px",
    color: "Gray",
  },
  table: {
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "white",
    maxHeight: "76vH",
    overflowY: "auto",
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
  noNotifications: {
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "white",
    overflowY: "auto",
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
