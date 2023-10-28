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
    {"name": "4-month", "value": "4-month"},
    {"name": "8-month", "value": "8-month"},
]

// can make mock data for rows too but this is not a high priority
// as mock data will be deleted once db connection is done. Only do mock data if
// we have time or if you want to be 100% with testing and less future work
// delete these type of comment before merging 

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
          classes={{ icon: 'custom-icon' }}

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
                                {/* TODO: make mock data instead of copy and paste row data (like above with the dropdowns) Only if there's time */}
                                {/* this is not high priority because mock data will be deleted once we do database connection delete commebnt before merge*/}
                            <TableRow>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                        Software Developer, Intern
                                    </Typography>
                                    <Typography style={MyApplicationStyles.jobDescription}>
                                        4-months Internship
                                        <Typography variant = "span">
                                            , Remote
                                        </Typography>
                                    </Typography>
                                   
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle} align="center">
                                        <img
                                            src={"https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png"}
                                            height={"40px"}
                                            alt={"Wealthsimple Logo"}
                                        ></img>
                                    </Typography>
                                    <Typography style={MyApplicationStyles.companyName} align="center">
                                        Wealthsimple
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.dateOfApplication}>
                                        2023-10-21
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.status}>
                                        Pending
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                    <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonComplete} >
                                        <Typography variant="p">
                                            Complete 
                                        </Typography>
                                    </Button>
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                        Data Scientist, Intern
                                    </Typography>
                                    <Typography style={MyApplicationStyles.jobDescription}>
                                        8-months Internship
                                        <Typography variant = "span">
                                            , Toronto, ON
                                        </Typography>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle} align="center">
                                        <img
                                            src={"https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png"}
                                            height={"40px"}
                                            alt={"Scotiabank Logo"}
                                        ></img>
                                    </Typography>
                                    <Typography style={MyApplicationStyles.companyName} align="center">
                                        Scotiabank
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.dateOfApplication}>
                                        2023-10-21
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.status}>
                                        Pending
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                    <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonPending} >
                                        <Typography variant="p">
                                            Complete 
                                        </Typography>
                                    </Button>
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                        Software Developer, Intern
                                    </Typography>
                                    <Typography style={MyApplicationStyles.jobDescription}>
                                        4-months Internship
                                        <Typography variant = "span">
                                            , Remote
                                        </Typography>
                                    </Typography>
                                   
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                        Logo
                                    </Typography>
                                    <Typography style={MyApplicationStyles.companyName}>
                                        Wealthsimple
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.dateOfApplication}>
                                        2023-10-21
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.status}>
                                        Pending
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography style={MyApplicationStyles.jobTitle}>
                                    <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonComplete} >
                                        <Typography variant="p">
                                            Complete 
                                        </Typography>
                                    </Button>
                                    </Typography>
                                </TableCell>
                            </TableRow>
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
