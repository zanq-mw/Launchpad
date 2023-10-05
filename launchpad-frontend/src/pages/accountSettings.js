import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProfileItems() {
    return (
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Full Name
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Email
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Password
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Date of Birth
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Address
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Phone
            </Typography>
            
            </CardContent>
            
        </React.Fragment>
    )
}

function PrivacyItems() {
    return (
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Two-Factor Authentication
            </Typography>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Data Collection
            </Typography>
            </CardContent>
        </React.Fragment>
    )
}

function AccountItems() {
    return (
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div" sx ={NavStyles.cardText} >
                Delete Account
            </Typography>
            </CardContent>
        </React.Fragment>
    )
}

export function AccountSettingsItems() {
    return (
        <div style={NavStyles.container}> 
        {/* this div is just a placeholder for the nav bar */}
            <div style={NavStyles.sidePanel}></div>
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
        width: '80%', 
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
    // below is a placeholder for the nav bar
    sidePanel: {
      width: '20%', 
      minHeight: '100vh', 
      backgroundColor: '#5E17EB', 
      fontFamily: 'League Spartan', 
      gap: '8px', 
      overflow: 'hidden', 
      padding: '16px'
    }
}