import * as React from "react";

export function HomeIcon() {
  return (
    <img src={require("../images/house.png")} height={"30px"} alt="Home"></img>
  );
}

export function MessageIcon() {
  return (
    <img
      src={require("../images/message.png")}
      height={"30px"}
      alt="Messages"
    ></img>
  );
}

export function JobIcon() {
  return (
    <img
      src={require("../images/briefcase.png")}
      height={"30px"}
      alt="Jobs"
    ></img>
  );
}

export function ProfileIcon() {
  return (
    <img
      src={require("../images/contacts.png")}
      height={"30px"}
      alt="Profile"
    ></img>
  );
}

export function ApplicationsIcon() {
  return (
    <img
      src={require("../images/pages.png")}
      height={"30px"}
      alt="Applications"
    ></img>
  );
}

export function SettingsIcon() {
  return (
    <img
      src={require("../images/settings.png")}
      height={"30px"}
      alt="Settings"
    ></img>
  );
}

export function LogoutIcon() {
  return (
    <img
      src={require("../images/logout.png")}
      height={"30px"}
      alt="Logout"
    ></img>
  );
}

export function DeleteIcon() {
  return (
    <div style={{marginRight: "10px", marginTop: "10px"}}>
      <img
        src={require("../images/delete.png")}
        height={"30px"}
        alt="Delete"
      ></img>
    </div>
  );
}

export function EnabledIcon() {
  return (
    <div style={{marginRight: "10px"}}>
      <img
        src={require("../images/enabled.png")}
        height={"30px"}
        alt="enabled"
      ></img>
    </div>
  );
}

export function DisabledIcon() {
  return (
    <div style={{marginRight: "10px"}}>
      <img
        src={require("../images/disabled.png")}
        height={"30px"}
        alt="disabled"
      ></img>
    </div>
  );
}

export function AccountEditIcon() {
  return (
    <div style={{marginLeft: "20px"}}>
      <img
        src={require("../images/accountEdit.png")}
        height={"35px"}
        alt="edit"
      ></img>
    </div>
  );
}
