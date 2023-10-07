import { useState } from "react";
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
} from "./components/navIcons";
import "@fontsource/league-spartan";
import "@fontsource/open-sans";
import { LaunchPadLogo } from "./components/logoIcon";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function NavItems({ open }) {
  return (
    <React.Fragment>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <HomeIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Home"}</LPListItemText>}
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <MessageIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Messages"}</LPListItemText>}
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <ApplicationsIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Applications"}</LPListItemText>}
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <JobIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Job Postings"}</LPListItemText>}
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <ProfileIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Account"}</LPListItemText>}
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <LPListItemIcon open={open}>
          <SettingsIcon />
        </LPListItemIcon>
        {open && <LPListItemText>{"Settings"}</LPListItemText>}
      </ListItemButton>
    </React.Fragment>
  );
}

export function NavBar() {
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
      <NavItems open={navOpen} />
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
