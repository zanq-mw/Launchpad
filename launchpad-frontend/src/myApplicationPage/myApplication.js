import React, { useState, useEffect } from 'react';
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
import { transformJSON } from "./mockData"
import { Dialog, DialogTitle, DialogContent } from '@mui/material';


// top banner
function UserApplicationsInfo(props){
    const jsonData = props.data; 
    const totalApplications = jsonData.data ? jsonData.data.length : 0;
    const interviewRequestedApplications = jsonData.data ? jsonData.data.filter(application => application.Status === 'Interview Requested').length : 0; 
    return(
        <Card sx={{ ...MyApplicationStyles.cardMargin, paddingTop: '15px', paddingBottom: '15px' }}>
            <CardContent>
                <div style={{ marginBottom: '20px', marginLeft:'30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                        <Typography variant="h6" component="div" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                             Application Submitted
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" style={{ fontSize: '17px', marginRight: '520px', color: '#C1C1C1', fontWeight:'bold' }}>
                           { totalApplications } 
                        </Typography>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #ccc' }}></div>

                <div style={{ marginTop: '20px', marginLeft:'30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                        <Typography variant="h6" component="div" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Selected for Interview
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" style={{ fontSize: '17px', marginRight: '520px', color: '#C1C1C1',fontWeight:'bold'  }}>
                            {interviewRequestedApplications}
                        </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}



// bottom banner
function UserApplications(props){
    const [savedExpanded, setSavedExpanded] = useState(false);
    const data = props.data;
    const mockApplicationData = props.transformedData;

    
    const [selectedApplication, setSelectedApplication] = useState(null);

    const handleOpenPopup = (application) => {
       
        setSelectedApplication(application);
    };

    const handleClosePopup = () => {
        setSelectedApplication(null);
    };


    if (!data) {
      return null;
    }

    return(
        <Card sx = {MyApplicationStyles.cardMargin}>
        <div style={{ marginTop: '20px' }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Jobs</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}  align="center">Company</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Date of Application</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Status</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {mockApplicationData
                    .slice(0, savedExpanded ? mockApplicationData.length : 3)
                    .map((item, index) => (
                            <TableRow>
                            <TableCell>
                                <Typography style={MyApplicationStyles.jobTitle}>
                                    {item.title}
                                </Typography>
                                <Typography style={MyApplicationStyles.jobDescription}>
                                {item.duration !== '' ? (
                                    item.duration
                                    ) : (
                                        item.type 
                                    )}
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
                            <Button 
                                variant="contained" 
                                size="small" 
                                sx={MyApplicationStyles.actionButtonComplete} 
                                onClick={() => handleOpenPopup(item)}
                             >
                            <Typography variant="p">
                                Complete
                                {/* TODO: add redirect */}
                                navigate("/");
                            </Typography>
                            </Button>
                            ) : 
                            <Button 
                                variant="contained" 
                                size="small" 
                                sx={MyApplicationStyles.actionButtonPending} 
                                onClick={() => handleOpenPopup(item)}
                            >
                                    <Typography variant="p">
                                    {/* TODO: add redirect */}
                                        view
                                    </Typography>
                                </Button>
                            }
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow
                        key={"end"}
                        sx={{ "&:last-child td, &:last-child th": { border: 0} }}
                    >
                        <TableCell
                            colSpan={5}
                            sx={MyApplicationStyles.see_more}
                            onClick={() => setSavedExpanded(!savedExpanded)}
                        >
                            {savedExpanded ? "See Less" : "See More"}
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <Dialog open={!!selectedApplication} onClose={handleClosePopup}>
            {selectedApplication && (
                <>
                    <DialogTitle>{selectedApplication.title}</DialogTitle>
                    <DialogContent>
                        <Table size="small">
                            <TableBody>
                                {selectedApplication.location && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Location:</TableCell>
                                        <TableCell>{selectedApplication.location}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.workModel && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Work Model:</TableCell>
                                        <TableCell>{selectedApplication.workModel}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.duration && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Duration:</TableCell>
                                        <TableCell>{selectedApplication.duration}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.workterm && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Work Term:</TableCell>
                                        <TableCell>{selectedApplication.workterm}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.status && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Status:</TableCell>
                                        <TableCell>{selectedApplication.status}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.deadline && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Deadline:</TableCell>
                                        <TableCell>{selectedApplication.deadline}</TableCell>
                                    </TableRow>
                                )}

                                {selectedApplication.description && (
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 'bold' }}>Description:</TableCell>
                                        <TableCell>{selectedApplication.description}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </DialogContent>
                </>
            )}
        </Dialog>

        </Card>
        
    );
}

  export function MyApplicationItems(props) {
    const data = props.data;
    const transformedData = props.transformedData;
    return (
        <div style={MyApplicationStyles.pageContainer}>
            <Typography variant="h5" component="div" sx ={MyApplicationStyles.mainTitle}>
                        My Applications
            </Typography>
            <div style={{ margin: '40px' }}></div>
            <UserApplicationsInfo data={data} transformedData={transformedData}/>
            <div style={{ margin: '40px' }}></div>
            <Typography variant="h5" component="div" sx={MyApplicationStyles.subTitle}>
                Applications
            </Typography>
            <UserApplications data={data} transformedData={transformedData}/>
        </div>
);
}
        
// main export 
export function MyApplication({ userId }) {
    
    const [data, setData] = useState({});

    useEffect(() => {
      // Change 1 to userId when log-in is implemented
      fetch("/applications/1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          
        });
    }, []);

    const transformedData = transformJSON(data);
   

    return (
        <MyApplicationItems data={data} transformedData={transformedData} />
        
    );
}

// styles
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
        background: "#5E17EB",
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
      },
      see_more: {
        textAlign: "center",
        color: "White",
        fontSize: "12px",
        padding: 0.5,
        cursor: "pointer",
        backgroundColor: "#5E17EB",
        "&:hover": {
          backgroundColor: "#814AEF",
        },
        "&:focus": {
          backgroundColor: "#814AEF",
        },
      },
}

