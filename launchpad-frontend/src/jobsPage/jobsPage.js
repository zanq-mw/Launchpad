import React, { useCallback } from "react";
import "./jobsPage.css";
import "@fontsource/league-spartan";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { postings } from "./mockData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Bookmark from "@mui/icons-material/Bookmark";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ClockIcon, PinIcon, LaptopIcon } from "../components/jobsIcons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

export function JobPostings() {
  const [value, setValue] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState(null);
  const [durationFilter, setDurationFilter] = React.useState(null);
  const [locationFilter, setLocationFilter] = React.useState(null);

  console.log(typeFilter, durationFilter, locationFilter);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `jobs-tab-${index}`,
      "aria-controls": `jobs-tabpanel-${index}`,
    };
  }

  return (
    <div className="page-contents">
      <h1>Job Postings</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginBottom: "1rem",
          gap: "8px",
        }}
      >
        <SearchBar value={searchValue} handleChange={setSearchValue} />
        <Dropdown
          title="Job Type"
          options={jobTypeOptions}
          value={typeFilter}
          handleChange={setTypeFilter}
        />
        <Dropdown
          title="Duration"
          options={durationOptions}
          value={durationFilter}
          handleChange={setDurationFilter}
        />
        <Dropdown
          title="Location"
          options={locationOptions}
          value={locationFilter}
          handleChange={setLocationFilter}
        />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Postings" {...a11yProps(0)} />
              <Tab label="Saved" {...a11yProps(1)} />
            </Tabs>
          </ThemeProvider>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Postings
            searchValue={searchValue}
            typeFilter={typeFilter}
            durationFilter={durationFilter}
            locationFilter={locationFilter}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Postings
            saved
            searchValue={searchValue}
            typeFilter={typeFilter}
            durationFilter={durationFilter}
            locationFilter={locationFilter}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

const jobTypeOptions = ["Internship", "New Grad"];

const durationOptions = ["4 Months", "8 Months", "12 Months", "16 Months"];

const locationOptions = ["Remote", "Hybrid", "In-Person"];

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#C1C1C1",
          "&.Mui-selected": {
            color: "#5e17eb",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          "&.MuiTabs-indicator": {
            backgroundColor: "#5e17eb",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#D3D3D3",
            ":hover": {
              backgroundColor: "#D3D3D3",
            },
          },
        },
      },
    },
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`jobs-tabpanel-${index}`}
      aria-labelledby={`jobs-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Postings({
  saved,
  searchValue,
  typeFilter,
  durationFilter,
  locationFilter,
}) {
  const [postingsExpanded, setPostingsExpanded] = React.useState(false);

  const savedPostings = postings
    .map((row, i) => ({ ...row, index: i }))
    .filter((row) => row.saved);

  const [postingSelected, setPostingSelected] = React.useState(
    saved ? savedPostings[0].index : 0
  );

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <TableContainer>
          <Table aria-label="simple table" style={PageStyles.table}>
            <TableBody>
              {postings
                .filter(
                  (row) =>
                    row.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    row.company
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                )
                .filter((row) => {
                  return (
                    (typeFilter ? row.type === typeFilter : true) &&
                    (durationFilter ? row.duration === durationFilter : true) &&
                    (locationFilter
                      ? locationFilter === "Remote"
                        ? row.location === locationFilter
                        : row.location !== "Remote"
                      : true)
                  );
                })
                .slice(0, postingsExpanded ? postings.length : 5)
                .map((row, i) => ({ ...row, index: i }))

                .filter((row) => (saved ? row.saved : true))
                .map((row, i) => (
                  <ThemeProvider theme={theme}>
                    <TableRow
                      key={i}
                      sx={PageStyles.tableRow}
                      onClick={() => setPostingSelected(row.index)}
                      selected={postingSelected === row.index}
                    >
                      <TableCell component="th" scope="row" align="center">
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
                          {row.duration} {row.type}, {row.location}
                        </p>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ paddingRight: 20, paddingLeft: 0 }}
                      >
                        {row.saved && (
                          <Bookmark
                            height={"90px"}
                            sx={{ color: "#ffa500", fontSize: "35px" }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  </ThemeProvider>
                ))}
              <TableRow
                key={"end"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  colSpan={3}
                  sx={PageStyles.see_more}
                  onClick={() => setPostingsExpanded(!postingsExpanded)}
                >
                  {postingsExpanded ? "See Less" : "See More"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={8}>
        <JobExpanded
          postingSelected={postingSelected}
          updateList={forceUpdate}
        />
      </Grid>
    </Grid>
  );
}

function JobDescription({ posting }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={PageStyles.job_description}>Job Description</h2>
      {postings[posting].description.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}

function JobExpanded({ postingSelected, updateList }) {
  const [save, setSave] = React.useState(postings[postingSelected].saved);
  const handleSave = () => {
    postings[postingSelected].saved = !save;
    setSave(!save);
    updateList();
  };
  return (
    <TableContainer>
      <Table style={PageStyles.table}>
        <TableBody>
          <TableRow>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <TableCell sx={PageStyles.no_border}>
                  <img
                    src={postings[postingSelected].logo}
                    height={"75px"}
                    alt={postings[postingSelected].company}
                  ></img>
                </TableCell>
                <TableCell sx={PageStyles.no_border}>
                  <p style={PageStyles.job_title_large}>
                    {postings[postingSelected].title}
                  </p>
                  <p style={PageStyles.company}>
                    {postings[postingSelected].company}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "4px",
                    }}
                  >
                    {postings[postingSelected].duration && (
                      <>
                        <ClockIcon />
                        <p style={PageStyles.descriptor_text}>
                          {postings[postingSelected].duration}
                        </p>
                      </>
                    )}
                    <PinIcon />
                    <p style={PageStyles.descriptor_text}>
                      {postings[postingSelected].location}
                    </p>
                    <LaptopIcon />
                    <p style={PageStyles.descriptor_text}>
                      {postings[postingSelected].type}
                    </p>
                  </div>
                </TableCell>
              </div>
              <TableCell align="right" sx={PageStyles.no_border}>
                <div
                  style={{
                    display: "inline-grid",
                    height: "100%",
                    alignContent: "space-evenly",
                  }}
                >
                  <Button variant="contained" sx={PageStyles.apply}>
                    Apply
                  </Button>
                  <Button
                    variant="outlined"
                    sx={PageStyles.saved}
                    onClick={handleSave}
                  >
                    {postings[postingSelected].saved ? "Unsave" : "Save"}
                  </Button>
                </div>
              </TableCell>
            </div>
          </TableRow>
          <hr style={{ color: "#c1c1c1", width: "90%" }} />
          <JobDescription posting={postingSelected} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SearchBar({ value, handleChange }) {
  const onChange = useCallback(
    (event) => handleChange(event.target.value),
    [handleChange]
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <img
        src={require("../images/search.png")}
        className="search-logo"
        alt="search"
      />
    </div>
  );
}

function Dropdown({ title, options, value, handleChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [type, setType] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = useCallback(
    (newValue) => {
      setAnchorEl(null);
      handleChange(newValue);
    },
    [handleChange, setAnchorEl]
  );

  const handleClear = useCallback(() => handleChange(null), [handleChange]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        endIcon={
          value === null ? (
            <ExpandMoreIcon />
          ) : (
            <CloseIcon onClick={handleClear} />
          )
        }
        sx={PageStyles.dropdown}
      >
        {value ? value : title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(value)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((value) => (
          <MenuItem
            onClick={() => handleClose(value)}
            sx={PageStyles.dropdown_item}
          >
            {value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const PageStyles = {
  top_banner: {
    fontFamily: "League Spartan",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: 5,
  },
  apply: {
    backgroundColor: "#5e17eb",
    boxShadow: "none",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#D3D3D3",
      boxShadow: "none",
    },
  },
  saved: {
    color: "#5e17eb",
    borderRadius: "15px",
    borderColor: "#5e17eb",
    "&:hover": {
      backgroundColor: "#D3D3D3",
      borderColor: "#5e17eb",
    },
  },
  dropdown: {
    backgroundColor: "#c1c1c17a",
    boxShadow: "none",
    borderRadius: "15px",
    color: "#5e17eb",
    fontSize: "12px",
    padding: "2px 10px",
    "&:hover": {
      backgroundColor: "#c1c1c1",
      borderColor: "#5e17eb",
      boxShadow: "none",
    },
  },
  dropdown_item: {
    color: "#5e17eb",
    fontSize: "12px",
  },
  job_description: {
    marginTop: "0px",
  },
  no_border: {
    borderBottom: "none",
  },
  headings: {
    color: "#5E17EB",
    fontSize: "32px",
    fontWeight: "bolder",
  },
  job_title: {
    fontSize: "18px",
    fontWeight: 500,
    marginTop: "4px",
    marginBottom: "0px",
  },
  job_title_large: {
    fontSize: "28px",
    fontWeight: 500,
    marginTop: "0px",
    marginBottom: "0px",
  },
  company: {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "16px",
    color: "#5E17EB",
  },
  descriptor_text: {
    fontSize: "14px",
    color: "#c1c1c1",
    marginBottom: "0px",
    marginTop: "0px",
    marginRight: "8px",
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
