import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  HomeIcon,
  MessageIcon,
  ApplicationsIcon,
  JobIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from "./components/navIcons";
import "@fontsource/league-spartan";
import "@fontsource/open-sans";
import { LaunchPadLogo } from "./components/logoIcon";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { pages } from ".";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export function NavItems({ open, page, setPage }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Link to={pages.landing} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.landing), [setPage])}
            selected={page === pages.landing}
          >
            <LPListItemIcon open={open}>
              <HomeIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Home"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Link to={pages.notifications} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.notifications), [setPage])}
            selected={page === pages.notifications}
          >
            <LPListItemIcon open={open}>
              <MessageIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Notifications"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Link to={pages.applications} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.applications), [setPage])}
            selected={page === pages.applications}
          >
            <LPListItemIcon open={open}>
              <ApplicationsIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Applications"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Link to={pages.jobs} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.jobs), [setPage])}
            selected={page === pages.jobs}
          >
            <LPListItemIcon open={open}>
              <JobIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Job Postings"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Link to={pages.account} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.account), [setPage])}
            selected={page === pages.account}
          >
            <LPListItemIcon open={open}>
              <ProfileIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Account"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Link to={pages.settings} style={{ textDecoration: "none" }}>
          <ListItemButton
            sx={NavStyles.navOption}
            onClick={useCallback(() => setPage(pages.settings), [setPage])}
            selected={page === pages.settings}
          >
            <LPListItemIcon open={open}>
              <SettingsIcon />
            </LPListItemIcon>
            {open && <LPListItemText>{"Settings"}</LPListItemText>}
          </ListItemButton>
        </Link>
      </ThemeProvider>

      <ListItemButton sx={NavStyles.navOptionLogout}>
        <LPListItemIcon open={open}>
          <LogoutIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Log Out"}</LPListItemText>}
      </ListItemButton>
    </React.Fragment>
  );
}

export function NavBar({ page, setPage }) {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div style={NavStyles.sidePanel}>
      <div style={navOpen ? NavStyles.logo : NavStyles.logoCollapsed}>
        <LaunchPadLogo />
        {navOpen && <p style={NavStyles.logoText}>{"LaunchPad"}</p>}
        <IconButton onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <ChevronLeftIcon sx={{ color: "white" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </div>
      <NavItems open={navOpen} page={page} setPage={setPage} />
    </div>
  );
}

const LPListItemIcon = styled(ListItemIcon)`
  display: ${(p) => (p.open ? "block" : "flex")};
  justify-content: ${(p) => (p.open ? "none" : "center")};
`;

const LPListItemText = styled("p")`
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: bold;
`;

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#814AEF",
            ":hover": {
              backgroundColor: "#814AEF",
            },
          },
        },
      },
    },
  },
});

const NavStyles = {
  sidePanel: {
    minHeight: "100vh",
    backgroundColor: "#5E17EB",
    fontFamily: "League Spartan",
    overflow: "hidden",
    padding: "16px",
    position: "sticky",
    top: "0",
  },
  logoText: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    marginTop: "0px",
    marginBottom: "0px",
  },
  navOption: {
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#814AEF",
    },
    "&:focus": {
      backgroundColor: "#814AEF",
    },
  },
  navOptionLogout: {
    borderRadius: "10px",
    position: "absolute",
    bottom: "5%",
    "&:hover": {
      backgroundColor: "#814AEF",
    },
    "&:focus": {
      backgroundColor: "#814AEF",
    },
  },
  logo: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    paddingBottom: "16px",
  },
  logoCollapsed: {
    alignItems: "center",
    paddingBottom: "16px",
    display: "flex",
    flexDirection: "column",
  },
};
