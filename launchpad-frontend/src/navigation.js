import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  HomeIcon,
  MessageIcon,
  ApplicationsIcon,
  JobIcon,
  ProfileIcon,
  SettingsIcon,
} from "./components/navIcons";
import "@fontsource/league-spartan";

export function NavItems() {
  return (
    <React.Fragment>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" sx={NavStyles.navText} />
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" sx={NavStyles.navText} />
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <ApplicationsIcon />
        </ListItemIcon>
        <ListItemText primary="Applications" sx={NavStyles.navText} />
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <JobIcon />
        </ListItemIcon>
        <ListItemText primary="Job Postings" sx={NavStyles.navText} />
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <ProfileIcon />
        </ListItemIcon>
        <ListItemText primary="Account" sx={NavStyles.navText} />
      </ListItemButton>
      <ListItemButton sx={NavStyles.navOption}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" sx={NavStyles.navText} />
      </ListItemButton>
    </React.Fragment>
  );
}

export function NavBar() {
  return (
    <div style={NavStyles.sidePanel}>
      <p style={NavStyles.logoText}>{"LaunchPad"}</p>
      <NavItems />
    </div>
  );
}

const NavStyles = {
  sidePanel: {
    width: "20%",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "#5E17EB",
    fontFamily: "League Spartan",
    gap: "8px",
    overflow: "hidden",
    padding: "16px",
  },
  logoText: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    paddingTop: "16px",
    marginTop: "0px",
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
  navText: {
    color: "#FFFFFF",
  },
};
