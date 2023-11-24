import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EditButton } from "../components/editButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SecuritySwitch } from "../components/securitySwitch";
import { transformSettingsData } from "./transformSettingsData";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

function ProfileItems(props) {
  const data = props.data;
  const transformedData = props.transformedData;
  const updateData = props.updateData;
  const userId = props.userId;

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
            <EditButton
              data={transformedData.fullname}
              updateData={updateData}
              userId={userId}
            />
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
            <EditButton
              data={transformedData.email}
              updateData={updateData}
              userId={userId}
            />
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
              ***********
            </Typography>
            <EditButton
              data={transformedData.password}
              updateData={updateData}
              userId={userId}
            />
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
            <EditButton
              data={transformedData.program}
              updateData={updateData}
              userId={userId}
            />
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
            <EditButton
              data={transformedData.address}
              updateData={updateData}
              userId={userId}
            />
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
            <EditButton
              data={transformedData.phone}
              updateData={updateData}
              userId={userId}
            />
          </Typography>
        </div>
      </CardContent>
    </React.Fragment>
  );
}

function PrivacyItems(props) {
  const data = props.data;
  const updateData = props.updateData;

  if (!data || !data.security) {
    return null;
  }

  const clickedSwitch = async (security_type) => {
    const formData = {};

    formData["security_type"] = security_type;
    // switch the switch
    formData["twoFactor"] = !data.security.two_factor;
    formData["dataCollection"] = !data.security.data_collection;
    // update data on backend/db side
    const response = await fetch(`/edit_security/${props.userId}`, {
      method: "PUT",
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Security updated successfully");
    } else {
      console.log("Error: could not update security settings");
    }

    // update switch/states on frontend
    if (props.updateData) {
      updateData();
    }
  };

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
                onClick={() => {
                  clickedSwitch("twoFactor");
                }}
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
                onClick={() => {
                  clickedSwitch("dataCollection");
                }}
              />
            }
            label={data.security.data_collection ? "Enabled" : "Disabled"}
          />
        </div>
      </CardContent>
    </React.Fragment>
  );
}

function AccountItems({ userId, setUserId }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`/api/delete-account/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Account deletion confirmed. Deleting account");
        setDeleteConfirmation("Account deletion successful.");
        setDialogOpen(false);
        setUserId(null);
        sessionStorage.setItem("userId", null);
        navigate("/");
      } else {
        console.error("Error deleting account:", response.statusText);
        setDeleteConfirmation("Error deleting account. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      setDeleteConfirmation("Error deleting account. Please try again.");
    }
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
            onClick={handleDeleteClick}
          >
            <DeleteIcon />
            <Typography
              variant="h5"
              style={AccountSettingStyles.deleteButtonText}
            >
              Delete
            </Typography>
          </Button>
        </div>

        {/* Render the confirmation dialog */}
        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <div>
            <DialogTitle id="logout-confirmation">
              {"Are you sure you want to delete your account?"}
            </DialogTitle>
            <DialogActions>
              <Button
                sx={AccountSettingStyles.cancelButton}
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
              <Button
                sx={AccountSettingStyles.logoutButton}
                onClick={handleDeleteConfirm}
              >
                Delete
              </Button>
            </DialogActions>
          </div>
        </Dialog>

        {/* Render the confirmation message if available */}
        {deleteConfirmation && (
          <div>
            <p>{deleteConfirmation}</p>
          </div>
        )}
      </CardContent>
    </React.Fragment>
  );
}

export default AccountItems;

export function AccountSettingsItems({ userId, setUserId }) {
  const [data, setData] = useState({});

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    fetch(`acc-settings/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
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
          <ProfileItems
            data={data}
            transformedData={transformedData}
            updateData={updateData}
            userId={userId}
          />
        </Card>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.subTitle}
        >
          Privacy & Security
        </Typography>
        <Card sx={AccountSettingStyles.cardMargin}>
          <PrivacyItems data={data} updateData={updateData} userId={userId} />
        </Card>
        <Typography
          variant="h5"
          component="div"
          sx={AccountSettingStyles.subTitle}
        >
          Account
        </Typography>
        <Card sx={AccountSettingStyles.cardMargin}>
          {/* Pass setUserId directly to AccountItems */}
          <AccountItems userId={userId} setUserId={setUserId} />
        </Card>
      </div>
    </div>
  );
}

export function AccountSettings({ userId, setUserId }) {
  return <AccountSettingsItems userId={userId} setUserId={setUserId} />;
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

  cancelButton: {
    color: "#5e17eb",
    borderRadius: "15px",
    borderColor: "#5e17eb",
    "&:hover": {
      backgroundColor: "#D3D3D3",
      borderColor: "#5e17eb",
    },
  },
  logoutButton: {
    backgroundColor: "#5e17eb",
    boxShadow: "none",
    borderRadius: "15px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#D3D3D3",
      boxShadow: "none",
    },
  },
};
