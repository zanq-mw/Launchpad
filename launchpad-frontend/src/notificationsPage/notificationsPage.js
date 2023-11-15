import React from "react";
import { useState, useEffect } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import Bookmark from "@mui/icons-material/Bookmark";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E17EB",
    },
  },
});

const formatDate = (inputString) => {
  const inputDate = new Date(inputString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = inputDate.getUTCDate();
  const month = months[inputDate.getUTCMonth()];
  const year = inputDate.getUTCFullYear();
  const hours = inputDate.getUTCHours();
  const minutes = inputDate.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedDate = `${month} ${day}, ${year} ${
    hours % 12 === 0 ? 12 : hours % 12
  }:${minutes.toString().padStart(2, "0")} ${ampm}`;

  return formattedDate;
};

function Notifications(props) {
  const { updateFlag, filteredData, data, setData } = props;
  const [selected, setSelected] = useState(null);
  const [filtered, setFiltered] = useState(filteredData);

  useEffect(() => {
    setFiltered(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFlag]);

  async function handleSave(index) {
    let temp = [...data];
    const i = temp.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    temp[i].saved = !temp[i].saved;
    setData(temp);
    // Call the mark_notification_as_read endpoint
    try {
      const response = await fetch(
        `/notifications/${filtered[index].notificationId}/toggle-saved`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        console.log(
          `Notification ${filtered[index].notificationId} save toggled.`
        );
      } else {
        console.error(
          `Failed to toggle save status of notification. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function checkRead(index) {
    const i = data.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    if (data[i] && "read" in data[i]) {
      return data[i].read;
    }
    return true;
  }

  function checkSaved(index) {
    const i = data.findIndex(
      (item) => item.notificationId === filtered[index].notificationId
    );
    if (data[i] && "saved" in data[i]) {
      return data[i].saved;
    }
    return data[i].false;
  }

  const handleRowClick = async (index) => {
    setSelected(index);
    if (filtered[index].read === false) {
      let temp = [...data];
      const i = temp.findIndex(
        (item) => item.notificationId === filtered[index].notificationId
      );
      temp[i].read = true;
      setData(temp);
      // Call the mark_notification_as_read endpoint
      try {
        const response = await fetch(
          `/notifications/${filtered[index].notificationId}/mark-as-read`,
          {
            method: "PUT",
          }
        );

        if (response.ok) {
          console.log(
            `Notification ${filtered[index].notificationId} marked as read.`
          );
        } else {
          console.error(
            `Failed to mark notification as read. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
                          {formatDate(row.dateTime)}
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
                    <Grid item>{formatDate(filtered[selected].dateTime)}</Grid>
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
              <div style={{ paddingTop: 18, paddingBottom: 18 }}>
                {filtered[selected].body.split("\n").map((text) => (
                  <p style={{ marginTop: 0 }}>{text}</p>
                ))}
              </div>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export function NotificationsPage({ userId }) {
  const [data, setData] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/notifications/${userId}`)
      .then((res) => res.json())
      .then((data1) => {
        setData(data1.data);
        setUpdateFlag((prevFlag) => !prevFlag);
        setLoading(false);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const countUnread = () => {
    return data.filter((item) => item.read === false).length;
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

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
                updateFlag={updateFlag}
                filteredData={data}
                data={data}
                setData={setData}
              />
            </TabPanel>
            <TabPanel value="2" sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Notifications
                updateFlag={updateFlag}
                filteredData={data.filter((item) => item.read === false)}
                data={data}
                setData={setData}
              />
            </TabPanel>
            <TabPanel value="3" sx={{ paddingLeft: 0, paddingRight: 0 }}>
              {" "}
              <Notifications
                updateFlag={updateFlag}
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
