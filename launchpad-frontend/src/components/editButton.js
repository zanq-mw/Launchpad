import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export function EditButton (){

  const [isClicked, setisClicked] = useState(false);

  const clickedOpen = () => {
    setisClicked(true);
 };

  const clickedClose = () => {
    setisClicked(false);
  };

    return (
        <div>
          <Button onClick={clickedOpen} >
            <img
            src={require("../images/accountEdit.png")}
            height={"35px"}
            alt="edit"
            ></img>
          </Button>

          {/* popup code below */}
          <Dialog open={isClicked} onClose={clickedClose} sx ={EditButtonStyles.popup} >
            <Typography variant="h5" component="div" sx ={EditButtonStyles.popupContainer}>

              <DialogTitle sx = {EditButtonStyles.mainTitle}>Address</DialogTitle>

              <DialogContent>
                <DialogContentText sx = {EditButtonStyles.subTitle}>
                  Edit the address, postal code, and province/state you currently reside at
                </DialogContentText>
              </DialogContent>

              <DialogContent sx ={EditButtonStyles.popupForm}>

                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  InputLabelProps={{
                    style: {
                      color: 'black',    
                      fontSize: '20px',
                      fontWeight: 'bold',
                    },
                    shrink: true, // move the label to the top
                  }}
                  label="Address"
                  placeholder="123 Nevada Street"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="postal"
                  InputLabelProps={{
                    style: {
                      color: 'black',    
                      fontSize: '20px',
                      fontWeight: 'bold',
                    },
                    shrink: true, // move the label to the top
                  }}
                  label="Postal Code"
                  placeholder="M5K 2K9"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  InputLabelProps={{
                    style: {
                      color: 'black',    
                      fontSize: '20px',
                      fontWeight: 'bold',
                    },
                    shrink: true, // move the label to the top
                  }}
                  label="Province/State"
                  placeholder="ON"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              
              </DialogContent>
              <DialogActions>
                <Button variant="contained" size="small" sx={EditButtonStyles.cancelButton} onClick={clickedClose}>Cancel</Button>
                <Button variant="contained" size="small" sx={EditButtonStyles.saveButton} onClick={clickedClose}>Save</Button>
              </DialogActions>
            </Typography>
          </Dialog>
        </div>
      );
}

const EditButtonStyles = {

  popupContainer:{
      background: "#FFF",
      height: "100%"
  },
  popupForm: {
      background: '#F7F7F7',
    },
  mainTitle: {
      color: '#5E17EB',
      fontFamily: 'League Spartan',
      fontSize: 32,
      fontWeight: 700,
      paddingBottom: "0",
      marginBottom: "0"
    },
  subTitle: {
    color: '#393939',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
  },
  saveButton: {
    background: '#5E17EB'
  },
  cancelButton: {
    color: '#5E17EB',
    background: '#F7F7F7',
    border: '2px solid #5E17EB'
  }
}