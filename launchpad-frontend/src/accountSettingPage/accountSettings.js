import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DeleteIcon } from "../components/navIcons";
import { EditButton } from "../components/editButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SecuritySwitch } from "../components/securitySwitch";
import { transformSettingsData } from "./transformSettingsData";

function ProfileItems(props) {
  const data = props.data;
  const transformedData = props.transformedData;

  if (!data || !data.profile) {
    return null;
  }

  return (
    <React.Fragment>
      <CardContent>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Full Name
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data.profile.full_name || ""}
            </Typography>
            <EditButton data={transformedData.fullname} />
          </Typography>
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Email
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data.profile.email}
            </Typography>
            <EditButton data={transformedData.email} />
          </Typography>
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Password
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data.profile.password}
            </Typography>
            <EditButton data={transformedData.password} />
          </Typography>
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Program
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data.profile.program}
            </Typography>
            <EditButton data={transformedData.program} />
          </Typography>
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Address
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data &&
                data.profile.address &&
                `${data.profile.address.streetAddress}, ${data.profile.address.postalCode}, ${data.profile.address.province}`}
            </Typography>
            <EditButton data={transformedData.address} />
          </Typography>
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Phone
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={AccountSettingStyles.rightText}
          >
            <Typography variant="h5" style={{ paddingTop: "10px" }}>
              {data.profile.phone_number}
            </Typography>
            <EditButton data={transformedData.phone} />
          </Typography>
        </div>
      </CardContent>
    </React.Fragment>
  );
}

function PrivacyItems(props) {
  const data = props.data;

  if (!data || !data.security) {
    return null;
  }

  return (
    <React.Fragment>
      <CardContent>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Two-Factor Authentication
          </Typography>

          <FormControlLabel
            control={
              <SecuritySwitch
                checked={data.security.two_factor}
                sx={{ m: 1 }}
              />
            }
            label={data.security.two_factor ? "Enabled" : "Disabled"}
          />
        </div>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Data Collection
          </Typography>
          <FormControlLabel
            control={
              <SecuritySwitch
                checked={data.security.data_collection}
                sx={{ m: 1 }}
              />
            }
            label={data.security.data_collection ? "Enabled" : "Disabled"}
          />
        </div>
      </CardContent>
    </React.Fragment>
  );
}

function AccountItems() {
  return (
    <React.Fragment>
      <CardContent>
        <div style={AccountSettingStyles.row}>
          <Typography variant="h5" style={AccountSettingStyles.leftText}>
            Delete Account
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{
              ...AccountSettingStyles.rightText,
              ...AccountSettingStyles.deleteButton,
            }}
          >
            <DeleteIcon />
            <Typography variant="h5" style={AccountSettingStyles.deleteButton}>
              Delete
            </Typography>
          </Button>
        </div>
      </CardContent>
    </React.Fragment>
  );
}

export function AccountSettingsItems() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Change 1 to userId when log-in is implemented
    fetch("acc-settings/1")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const transformedData = transformSettingsData(data);

  return (
    <div style={AccountSettingStyles.container}>
      <div style={AccountSettingStyles.pageContainer}>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.mainTitle}
        >
          Account Settings
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.subTitle}
        >
          Profile
        </Typography>
        <Card sx={AccountSettingStyles.cardMargin}>
          <ProfileItems data={data} transformedData={transformedData} />
        </Card>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.subTitle}
        >
          Privacy & Security
        </Typography>
        <Card sx={AccountSettingStyles.cardMargin}>
          <PrivacyItems data={data} />
        </Card>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.subTitle}
        >
          Account
        </Typography>
        <Card sx={AccountSettingStyles.cardMargin}>
          <AccountItems />
        </Card>
      </div>
    </div>
  );
}

export function AccountSettings() {
  return <AccountSettingsItems />;
}

const AccountSettingStyles = {
  container: {
    display: "flex",
    height: "100%",
  },
  pageContainer: {
    width: "100%",
    background: "#F7F7F7",
    minHeight: "100vh",
    padding: "16px",
  },
  mainTitle: {
    color: "#000",
    fontFamily: "League Spartan",
    fontSize: 38,
    fontWeight: 700,
    padding: "16px",
  },
  subTitle: {
    color: "#5E17EB",
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: 700,
    padding: "16px",
  },
  cardText: {
    color: "#393939",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
    padding: "8px",
  },
  cardMargin: {
    marginLeft: "1%",
    marginRight: "1%",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  leftText: {
    display: "flex",
    color: "#393939",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
    padding: "8px",
  },
  rightText: {
    display: "flex",
  },
  deleteButton: {
    borderRadius: "15px",
    background: "#DD111D",
    fontSize: 19,
  },
  enableText: {
    color: "#218F17",
    paddingTop: "10px",
  },
  disableText: {
    color: "#DD111D",
    paddingTop: "10px",
  },
};
