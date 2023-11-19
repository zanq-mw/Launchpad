import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

export function EditButton(props) {
  const data = props.data;
  const [isClicked, setisClicked] = useState(false);

  const clickedOpen = () => {
    setisClicked(true);
  };

  const clickedClose = () => {
    setisClicked(false);
  };

  const clickedSave = async () => {
    setisClicked(false);

    const formData = {};
    formData["title"] = data.title;

    // get updated user information 
    data.fields.forEach((field) => {
      const textField = document.getElementById(field.label);
      formData[field.id] = textField.value;
      // console.log("field", field.label);
      // console.log("value", textField.value);
    });

    // update data on backend/db side
    const response = await fetch(`/edit_profile/${props.userId}`, {
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

    if(response.ok){
      console.log("Data updated successfully");
    }
    else{
      console.log("Error: could not update data");
    }

    // update data/states on frontend 
    if (props.updateData) {
      props.updateData();
    }
  };

  return (
    <div>
      <Button onClick={clickedOpen}>
        <img
          src={require("../images/accountEdit.png")}
          height={"35px"}
          alt="edit"
          fullWidth={true}
        ></img>
      </Button>

      {/* popup code below */}
      <Dialog
        open={isClicked}
        onClose={clickedClose}
        sx={EditButtonStyles.popup}
        maxWidth="sm"
        fullWidth={true}
      >
        <Typography
          variant="h5"
          component="div"
          sx={EditButtonStyles.popupContainer}
        >
          <DialogTitle sx={EditButtonStyles.mainTitle}>
            {data && data.title}
          </DialogTitle>

          <DialogContent>
            <DialogContentText sx={EditButtonStyles.subTitle}>
              {data && data.subtitle}
            </DialogContentText>
          </DialogContent>

          <DialogContent sx={EditButtonStyles.popupForm}>
            {data &&
              data.fields.map((field) => (
                <TextField
                  autoFocus
                  margin="dense"
                  id={field.label}
                  InputLabelProps={{
                    style: {
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "bold",
                    },
                    shrink: true, // move the label to the top
                  }}
                  label={field.label}
                  placeholder={field.placeholder}
                  type="text"
                  fullWidth
                  variant="standard"
                />
              ))}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              size="small"
              sx={EditButtonStyles.cancelButton}
              onClick={clickedClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={EditButtonStyles.saveButton}
              onClick={clickedSave}
            >
              Save
            </Button>
          </DialogActions>
        </Typography>
      </Dialog>
    </div>
  );
}

const EditButtonStyles = {
  popupContainer: {
    background: "#FFF",
    height: "100%",
    width: "100%",
  },
  popupForm: {
    background: "#F7F7F7",
  },
  mainTitle: {
    color: "#5E17EB",
    fontFamily: "League Spartan",
    fontSize: 32,
    fontWeight: 700,
    paddingBottom: "0",
    marginBottom: "0",
  },
  subTitle: {
    color: "#393939",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 700,
  },
  saveButton: {
    background: "#5E17EB",
  },
  cancelButton: {
    color: "#5E17EB",
    background: "#F7F7F7",
    border: "2px solid #5E17EB",
  },
};
