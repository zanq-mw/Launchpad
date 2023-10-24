import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    DeleteIcon,
    EnabledIcon,
    DisabledIcon,
    AccountEditIcon
} from "../components/navIcons";
function ProfileItems() {
    return (
        <React.Fragment>
            <CardContent>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Full Name
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    Bob Smith
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Email
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    bob.smith@gmail.com
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Password
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    ********
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Date of Birth
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    April 1, 2000
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Address
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    742 Evergreen Terrace, M9V 186, ON
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Phone
                </Typography>
                <Typography variant="h5" style={NavStyles.rightText}>
                    (416) 905-1800
                    <AccountEditIcon/>
                </Typography>
            </div>
            </CardContent>
            
        </React.Fragment>
    )
}

function PrivacyItems() {
    return (
        <React.Fragment>
            <CardContent>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Two-Factor Authentication
                </Typography>
                <Typography variant="h5" style={{...NavStyles.rightText, ...NavStyles.enableText}}>
                    <EnabledIcon/>
                    Enabled
                    <AccountEditIcon/>
                </Typography>
            </div>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Data Collection
                </Typography>
                <Typography variant="h5" style={{...NavStyles.rightText, ...NavStyles.disableText}}>
                    <DisabledIcon/>
                    Disabled
                    <AccountEditIcon/>

                </Typography>
            </div>
            </CardContent>
        </React.Fragment>
    )
}

function AccountItems() {
    return (
        <React.Fragment>
            <CardContent>
            <div style={NavStyles.row}>
                <Typography variant="h5" style={NavStyles.leftText}>
                    Delete Account
                </Typography>
                <Button variant="contained" size="large" style={{...NavStyles.rightText, ...NavStyles.deleteButton}}>
                    <DeleteIcon/>
                    <Typography variant="h5" style={NavStyles.deleteButton}>
                        Delete 
                    </Typography>
                </Button>
            </div>
            </CardContent>
        </React.Fragment>
    )
}

export function AccountSettingsItems() {
    return (
        <div style={NavStyles.container}> 

                <div style={NavStyles.pageContainer}>
                    
                    <Typography variant="h5" component="div" sx ={NavStyles.mainTitle}>
                                Account Settings
                    </Typography>

                    <Typography variant="h5" component="div" sx ={NavStyles.subTitle}>
                                Profile 
                    </Typography>
                    
                    <Card sx = {NavStyles.cardMargin}>
                        <ProfileItems/>
                    </Card>

                    <Typography variant="h5" component="div" sx ={NavStyles.subTitle}>
                                Privacy & Security  
                    </Typography>

                    <Card sx = {NavStyles.cardMargin}>
                        <PrivacyItems/>
                    </Card>

                    <Typography variant="h5" component="div" sx ={NavStyles.subTitle}>
                                Account 
                    </Typography>
                    
                    <Card sx = {NavStyles.cardMargin}>
                        <AccountItems/>
                    </Card>
                </div>
        </div>
    );
}


export function AccountSettings() {
    return (
        <AccountSettingsItems/>
    )
}

const NavStyles = {
    container:{
        display: "flex",
        height: "100%"
    },
    pageContainer: {
        width: '100%', 
        background: '#F7F7F7',
        minHeight: '100vh', 
        padding: '16px'

      },
    mainTitle: {
        color: '#000',
        fontFamily: 'League Spartan',
        fontSize: 42,
        fontWeight: 700,
        padding: '16px'
    },
    subTitle: {
        color: '#5E17EB',
        fontFamily: 'Roboto',
        fontSize: 36,
        fontWeight: 700,
        padding: '16px'
    },
    cardText: {
        color: '#393939',
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 700,
        padding: '8px'
    },
    cardMargin: {
        marginLeft: "1%",
        marginRight: "1%"
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px'
      },
    leftText: {
        display: "flex",
        color: '#393939',
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 700,
        padding: '8px'
      },
    rightText: {
        display: "flex",
    },
    deleteButton: {
        borderRadius: "15px",
        background: "#DD111D",
        fontSize: 23,
    },
    enableText: {
        color: "#218F17",
        paddingTop: "10px"
    },
    disableText: {
        color: "#DD111D",
        paddingTop: "10px"
    },
  
}