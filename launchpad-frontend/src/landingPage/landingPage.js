import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { mock_data } from "./mockData";
import "./landingPage.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function LandingPage() {
  const [data, setData] = useState(mock_data);
  const { first_name, applications, saved_jobs, recommended } = data;
  return (
    <>
      <p style={PageStyles.top_banner}>Welcome Back, {first_name}!</p>
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <p style={PageStyles.headings}>Applications</p>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {applications.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Logo
                    </TableCell>
                    <TableCell>
                      <p style={PageStyles.job_title}>{row.title}</p>
                      <p style={PageStyles.company}>{row.company}</p>
                      <p style={PageStyles.details}>
                        {row.type}, {row.location}
                      </p>
                    </TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <p style={PageStyles.headings}>Saved Jobs</p>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {saved_jobs.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Logo
                    </TableCell>
                    <TableCell>
                      <p style={PageStyles.job_title}>{row.title}</p>
                      <p style={PageStyles.company}>{row.company}</p>
                      <p style={PageStyles.details}>
                        {row.type}, {row.location}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={4}>
          <p style={PageStyles.headings}>Recommended</p>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {recommended.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <p style={PageStyles.job_title}>{row.title}</p>
                      <p style={PageStyles.company}>{row.company}</p>
                      <p style={PageStyles.details}>
                        {row.type}, {row.location}
                      </p>
                    </TableCell>
                    <TableCell align="left">
                      {row.saved ? "Saved" : "Not saved"}
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
  },
  headings: {
    color: "#5E17EB",
    fontSize: "32px",
    fontWeight: "bolder",
  },
  job_title: {
    fontSize: "20px",
    fontWeight: 500,
  },
  company: {
    fontSize: "18px",
    color: "#5E17EB",
  },
  details: {
    fontSize: "14px",
    opacity: 0.5,
  },
};
