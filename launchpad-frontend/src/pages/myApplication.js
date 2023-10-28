import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./myApplication.css";

// NOTE: mock data will be delete once data connected to db
// mock data for dropdowns 
const mockJobTypeMenu = [
    {"name": "Intern", "value": "Intern"},
    {"name": "Full-Time", "value": "Full-Time"},
]
const mockDurationMenu = [
    {"name": "Remote", "value": "Remote"},
    {"name": "Toronto, ON", "value": "Toronto, ON"},
]
const mockLocationMenu = [
    {"name": "4 Months", "value": "4 Months"},
    {"name": "8 Months", "value": "8 Months"},
]

// mock data for app rows. 
const mockApplicationData = [
      {
        title: "Software Developer, Intern",
        company: "Wealthsimple",
        duration: "4-month Internship",
        location: "Remote",
        status: "Pending",
        logo: "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png",
        date: "2023-10-21",
        action: "Complete",
        imageText:"Wealthsimple Logo"
      },
      {
        title: "Data Scientist, Intern",
        company: "Scotiabank",
        duration: "8-months Internship",
        location: "Toronto, ON",
        status: "Pending",
        logo: "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
        date: "2023-10-21",
        action: "pending",
        imageText:"Scotiabank Logo"
      },
      {
        title: "title",
        company: "company",
        duration: "duration",
        location: "location",
        status: "Pending",
        logo: "logo",
        date: "2023-10-21",
        action: "Complete",
        imageText:"Logo"
      },
]

function SearchBar(){
    return (
        <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <IconButton>
                    <SearchIcon sx={MyApplicationStyles.searchIcon}></SearchIcon>

                </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: 10,
            height: "25px",
            width: "32vw"
          },
        }}
        placeholder="Ex. Job Name"
      />
    )
}


function SelectDropdown({defaultValue, items}) {
    const [selectedValue, setSelectedValue] = useState("default");
  
    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <FormControl>
  
        <Select
        defaultValue="default"
          value={selectedValue}
          onChange={handleSelectChange}
          sx ={MyApplicationStyles.selectDropDown}
          classes={{ icon: 'dropdown-arrow' }}

        >
<MenuItem value="default" disabled>
          {defaultValue}
        </MenuItem>

          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
                {item.name}
            </MenuItem>
           ))}
          
        </Select>
      </FormControl>
    );
  }

export function MyApplicationItems() {
    return (
        <div style={MyApplicationStyles.pageContainer}>
            <Typography variant="h5" component="div" sx ={MyApplicationStyles.mainTitle}>
                        My Applications
            </Typography>
            <SearchBar/>
            <SelectDropdown defaultValue="Job Type" items={mockJobTypeMenu}/>
            <SelectDropdown defaultValue="Duration"items={mockDurationMenu}/>
            <SelectDropdown defaultValue="Location" items={mockLocationMenu}/>

            <Typography variant="h5" component="div" sx ={MyApplicationStyles.subTitle}>
                        Applications 
            </Typography>
            <Card sx = {MyApplicationStyles.cardMargin}>
                <CardContent>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx ={MyApplicationStyles.tableHeader}>Jobs</TableCell>
                                    <TableCell sx ={MyApplicationStyles.tableHeader}>Company</TableCell>
                                    <TableCell sx ={MyApplicationStyles.tableHeader}>Date of Application</TableCell>
                                    <TableCell sx ={MyApplicationStyles.tableHeader}>Status</TableCell>
                                    <TableCell sx ={MyApplicationStyles.tableHeader}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {mockApplicationData.map((item) => (
                                 <TableRow>
                                 <TableCell>
                                     <Typography style={MyApplicationStyles.jobTitle}>
                                         {item.title}
                                     </Typography>
                                     <Typography style={MyApplicationStyles.jobDescription}>
                                            {item.duration}
                                         <Typography variant = "span">
                                             , {item.location}
                                         </Typography>
                                     </Typography>
                                    
                                 </TableCell>
                                 <TableCell>
                                     <Typography style={MyApplicationStyles.jobTitle} align="center">
                                         <img
                                             src={item.logo}
                                             height={"40px"}
                                             alt={item.imageText}
                                         ></img>
                                     </Typography>
                                     <Typography style={MyApplicationStyles.companyName} align="center">
                                         {item.company}
                                     </Typography>
                                 </TableCell>
                                 <TableCell>
                                     <Typography style={MyApplicationStyles.dateOfApplication}>
                                         {item.date}
                                     </Typography>
                                 </TableCell>
                                 <TableCell>
                                     <Typography style={MyApplicationStyles.status}>
                                         {item.status}
                                     </Typography>
                                 </TableCell>
                                 <TableCell>
                                     <Typography style={MyApplicationStyles.jobTitle}>
                                     {item.action.toLowerCase() === "complete" ? (
                                    <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonComplete} >
                                    <Typography variant="p">
                                        {item.action} 
                                    </Typography>
                                    </Button>
                                    ) : 
                                    <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonPending} >
                                         <Typography variant="p">
                                             {item.action} 
                                         </Typography>
                                     </Button>
                                    }
                                     </Typography>
                                 </TableCell>
                             </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
            
            <Card sx = {MyApplicationStyles.cardMargin}>
            </Card>
        </div>
);
}


export function MyApplication() {
    return (
        <MyApplicationItems/>
    )
}

const MyApplicationStyles = {

    pageContainer: {
        width: '100%', 
        background: '#F7F7F7',
        minHeight: '100vh', 
        padding: '16px'

      },
    mainTitle: {
        color: '#000',
        fontFamily: 'League Spartan',
        fontSize: 38,
        fontWeight: 700,
        padding: '16px'
    },
    subTitle: {
        color: '#5E17EB',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 700,
        padding: '16px'
    },
    tableHeader :{
        color: '#5E17EB',
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'Roboto',
    },
    jobTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Roboto',
    },
    jobDescription: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'Roboto',
        opacity: 0.4,
    },
    companyName: {
        color: '#5E17EB',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    dateOfApplication: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    status: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    action: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    actionButtonComplete: {
        background: "#5E17EB;",
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 400,
        borderRadius: 10
    },
    actionButtonPending: {
        background: "#c1c1c1",
        opacity: 0.9,
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 400,
        borderRadius: 10
    },
    searchIcon: {
        color: '#5E17EB',
    },
    selectDropDown: {
        borderRadius: 10, 
        minWidth: '120px', 
        height: "25px",
        color: '#5E17EB',
        marginLeft: "10px",
        width: "11vw",
      }
}
