import React from "react";
import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { mock_data } from "./mockData";
import "./landingPage.css";
import { SubmittedIcon, ViewedIcon } from "../components/landingIcons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Bookmark from "@mui/icons-material/Bookmark";

function StatusIcon(status) {
  if (status == "Applied") {
    return <SubmittedIcon />;
  } else if (status == "Viewed") {
    return <ViewedIcon />;
  }
}

export function LandingPage() {
  const [data, setData] = useState(mock_data);
  const [appsExpanded, setAppsExpanded] = useState(false);
  const [savedExpanded, setSavedExpanded] = useState(false);
  const { first_name, applications, saved_jobs, recommended } = data;

  function handleSave(i) {
    let temp = { ...data };
    temp.recommended[i].saved = !temp.recommended[i].saved;
    setData(temp);
  }

  return (
    <>
      <p style={PageStyles.top_banner}>Welcome Back, {first_name}!</p>
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <p style={PageStyles.headings}>Applications</p>
          <TableContainer>
            <Table aria-label="simple table" style={PageStyles.table}>
              <TableBody>
                {applications
                  .slice(0, appsExpanded ? applications.length : 3)
                  .map((row, i) => (
                    <TableRow key={i} sx={PageStyles.tableRow}>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        style={{ paddingRight: 0 }}
                      >
                        <img
                          src={row.logo}
                          height={"40px"}
                          alt={row.company}
                        ></img>
                      </TableCell>
                      <TableCell style={{ paddingLeft: 0 }}>
                        <p style={PageStyles.job_title}>{row.title}</p>
                        <p style={PageStyles.company}>{row.company}</p>
                        <p style={PageStyles.details}>
                          {row.type}, {row.location}
                        </p>
                      </TableCell>
                      <TableCell align="center">
                        {StatusIcon(row.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow
                  key={"end"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    colSpan={3}
                    sx={PageStyles.see_more}
                    onClick={() => setAppsExpanded(!appsExpanded)}
                  >
                    {appsExpanded ? "See Less" : "See More"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <p style={PageStyles.headings}>Saved Jobs</p>
          <TableContainer>
            <Table aria-label="simple table" style={PageStyles.table}>
              <TableBody>
                {saved_jobs
                  .slice(0, savedExpanded ? saved_jobs.length : 3)
                  .map((row, i) => (
                    <TableRow key={i} sx={PageStyles.tableRow}>
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        style={{ paddingRight: 0 }}
                      >
                        <img
                          src={row.logo}
                          height={"40px"}
                          alt={row.company}
                        ></img>
                      </TableCell>
                      <TableCell style={{ paddingLeft: 0 }}>
                        <p style={PageStyles.job_title}>{row.title}</p>
                        <p style={PageStyles.company}>{row.company}</p>
                        <p style={PageStyles.details}>
                          {row.type}, {row.location}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow
                  key={"end"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    colSpan={3}
                    sx={PageStyles.see_more}
                    onClick={() => setSavedExpanded(!savedExpanded)}
                  >
                    {savedExpanded ? "See Less" : "See More"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={4}>
          <p style={PageStyles.headings}>Recommended</p>
          <TableContainer>
            <Table aria-label="simple table" style={PageStyles.table}>
              <TableBody>
                {recommended.slice(0, 6).map((row, i) => (
                  <TableRow key={i} sx={PageStyles.tableRow}>
                    <TableCell style={{ paddingLeft: 30, paddingRight: 20 }}>
                      <p style={PageStyles.job_title}>{row.title}</p>
                      <p style={PageStyles.company}>{row.company}</p>
                      <p style={PageStyles.details}>
                        {row.type}, {row.location}
                      </p>
                    </TableCell>
                    <TableCell align="center" style={{ paddingRight: 20 }}>
                      <IconButton onClick={() => handleSave(i)}>
                        {row.saved ? (
                          <Bookmark
                            height={"90px"}
                            sx={{ color: "#ffa500", fontSize: "35px" }}
                          />
                        ) : (
                          <Bookmark
                            height={"90px"}
                            sx={{ color: "#B8B8B8", fontSize: "35px" }}
                          />
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

const PageStyles = {
  top_banner: {
    fontFamily: "League Spartan",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: 5,
  },
  headings: {
    color: "#5E17EB",
    fontSize: "32px",
    fontWeight: "bolder",
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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "400px",
//     maxHeight: "288px",
//   },
//   head1: {
//     paddingBottom: "10px",
//   },
//   topGrid: {
//     textAlign: "center",
//     paddingTop: "56px",
//     backgroundColor: "#DBE9F5",
//     paddingBottom: "56px",
//     width: "100.2%",
//   },
//   bottomGrid: {
//     backgroundColor: "#E8E8E8",
//     padding: 18,
//   },
//   button: {
//     height: 32,
//     width: 48,
//     fontSize: "12px",
//   },
//   backButton: {
//     height: 32,
//     width: 48,
//     marginRight: 12,
//     fontSize: "12px",
//     color: "black",
//     backgroundColor: "white",
//     "&:hover": {
//       backgroundColor: "LightGray",
//     },
//   },
// }));
