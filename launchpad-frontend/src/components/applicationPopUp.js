import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import "@fontsource/league-spartan";




export function ApplyButton ({ companyName }){

  const [open, setOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState('pending'); // 'pending', 'success'
  const [resumeUploadDate, setResumeUploadDate] = useState(null);
  const [coverLetterUploadDate, setCoverLetterUploadDate] = useState(null);
  const [displayResume, setDisplayResume] = useState(false);
  const [displayCoverLetter, setDisplayCoverLetter] = useState(false);

  

  const handleFileChange = (event, fileType) => {
    const fileInput = event.target;
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toLocaleString(); // Format the date as a string
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      // Set the corresponding file state based on the fileType
      fileType === 'resume' ? setResumeFile(file) && setResumeUploadDate(currentDate) : setCoverLetterFile(file) && setCoverLetterUploadDate(currentDate); 
      

    } else {
      // If no files are selected, reset the corresponding file state
      fileType === 'resume' ? setResumeFile(null) && setResumeUploadDate(null) : setCoverLetterFile(null) && setCoverLetterUploadDate(null); ;
    }
  };

  const handleUploadButtonClick = (fileType) => {
    const fileInput = document.getElementById(`${fileType}Input`);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSubmission = async () => {
    // Check if both resume and cover letter files are uploaded
    if (resumeFile && coverLetterFile) {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('coverLetter', coverLetterFile);

      try 
      {
        const response = await fetch('/upload-pdf', {
          method: 'POST',
          body: formData,
        });

        // Update the submission status to indicate success
        if (response.ok)
        {
          setSubmissionStatus('success');
          console.log('Submission successful');
          console.log('Resume URL:', response.resume_url);
          console.log('Cover Letter URL:', response.cover_letter_url);
        }
        else
        {
          console.error('Submission failed:', response.status);
        }
      } 

      catch (error) 
      {
        console.error('Error during submission:', error);
      }

    } else {
      // Display an error or prompt the user to upload both files
      console.error('Please upload both resume and cover letter files.');
    }
  };

  // WIP function to display the submitted pdf
  const handleDisplayResume = async () => {
    try {
      const response = await fetch('/get-resume');
      const resumeBlob = await response.blob();
      const url = URL.createObjectURL(resumeBlob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error fetching resume:', error);
    }
  };


  const handleOpen = () => {
    resetForm();
    setOpen(true);
 };

  const handleClose = () => {
    setOpen(false);
  };
  const resetForm = () => {
    setResumeFile(null);
    setCoverLetterFile(null);
    setSubmissionStatus('pending');
  };
  
    return (
        <div>
          <Button  onClick={handleOpen} variant='contained' sx={ApplyButtonStyles.apply} >
            Apply
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'lg'}sx={ApplyButtonStyles.popupSize} >
          {submissionStatus === 'pending' ? (
            <>
            <div style={{ marginTop: '60px' }}/>
              <Typography sx={ApplyButtonStyles.header}>
                Apply to {companyName}
              </Typography>
              <div style={{ marginBottom: '10px' }} />
              <Typography sx={ApplyButtonStyles.heading2}>
                  Please upload your resume and cover letter
              <div style={{ marginBottom: '45px' }} />
              <div style={{ clear: 'both' }} />
                  <div style={ApplyButtonStyles.greyBox}>
                      <div style={ApplyButtonStyles.greyBoxText}>
                          Resume
                      </div>
                      <div style={{ marginBottom: '10px' }} />
                      <div style={ApplyButtonStyles.buttonStyles}>
                      <div style={ApplyButtonStyles.buttonContainerStyles}>
                          <span style={ApplyButtonStyles.labelStyles}>PDF</span>
                          <span style={ApplyButtonStyles.fileNameStyles}>{resumeFile ? resumeFile.name : 'No file selected'}</span>
                          <p style={ApplyButtonStyles.descriptionStyles}>
                              Uploaded on {resumeUploadDate || 'No date available'}
                          </p>

                      </div>
                      
                  </div>
                  <div style={ApplyButtonStyles.uploadContainer}>
                      <input type="file" id="resumeInput" accept=".pdf" style={{ display: 'none' }} onChange={(event) => handleFileChange(event, 'resume')} />
                      <button style={ApplyButtonStyles.uploadbuttonStyles} onClick={() => handleUploadButtonClick('resume')}>
                          Upload Resume
                      </button>
                      
                  </div>
                  <div style={ApplyButtonStyles.greyBox}>
                      <div style={ApplyButtonStyles.greyBoxText}>
                          Cover Letter
                      </div>
                      <div style={{ marginBottom: '10px' }} />
                      <div style={ApplyButtonStyles.buttonStyles}>
                      <div style={ApplyButtonStyles.buttonContainerStyles}>
                          <span style={ApplyButtonStyles.labelStyles}>PDF</span>
                          <span style={ApplyButtonStyles.fileNameStyles}> {coverLetterFile ? coverLetterFile.name : 'No file selected'}</span>
                          <p style={ApplyButtonStyles.descriptionStyles}>
                              Uploaded on {coverLetterUploadDate || 'No date available'}
                          </p>
                      </div>        
                  </div>
                  <div style={ApplyButtonStyles.uploadContainer}>
                      <input type="file" id="coverLetterInput" accept=".pdf" style={{ display: 'none' }} onChange={(event) => handleFileChange(event, 'coverLetter')} />
                      <button style={ApplyButtonStyles.uploadbuttonStyles} onClick={() => handleUploadButtonClick('coverLetter')}>
                          Upload Cover Letter
                      </button>
                  </div>
                  </div>
              </div>
              <div style={{ marginBottom: '45px' }} />              
                <DialogActions>
                  <Button variant="contained" size="small" sx={ApplyButtonStyles.cancelButton} onClick={handleClose}>Cancel</Button>
                  <Button variant="contained" size="small" sx={ApplyButtonStyles.saveButton} button onClick={handleSubmission} disabled={!resumeFile || !coverLetterFile}>Submit</Button>
                </DialogActions>
              </Typography>
            </>
          ): (
            <>
            <div style={{ marginTop: '60px' }}/>
            <Typography sx={ApplyButtonStyles.header}>
                  Apply to {companyName}
            </Typography>
            <div style={{ marginBottom: '10px' }} />
            <Typography sx={ApplyButtonStyles.heading2}>
                  Your application has succesfully been submitted!
            </Typography>
            <div style={{ marginBottom: '45px' }} />
            <div style={{ clear: 'both' }} />
            <div>
              <Button onClick={handleDisplayResume}>View Resume</Button>
            </div>           
          </>
        )}
          </Dialog>
        </div>
      );
}

const ApplyButtonStyles = {
    
    apply: {
        backgroundColor: "#5e17eb",
        boxShadow: "none",
        borderRadius: "15px",
        "&:hover": {
          backgroundColor: "#D3D3D3",
          boxShadow: "none",
        },
      },


  header:{
    fontFamily: 'League Spartan', 
    fontSize: '38px', 
    color: '#5E17EB', 
    marginLeft: '50px', 
    fontWeight: 'bold'
  },
  heading2:{
    fontFamily: 'League Spartan', 
    fontSize: '18px', 
    color: '#393939', 
    marginLeft: '50px',
    marginBottom: '45px',
    fontWeight: 'bold' 
  },

  greyBox:{
    background: '#F7F7F7',
    padding: '10px 0',
    margin: '-10px 0',
    height: '90%',
    width: '90%',
    
  },
  greyBoxText:{
    paddingLeft: '20px'
  },

  subTitle:{
    fontFamily: 'League Spartan', 
    fontSize: '18px',
     fontWeight: 'bold', 
     color: '#00000', 
     marginLeft: '100px'
  },

  popupForm: {
      background: '#F7F7F7',
    },
 
  saveButton: {
    background: '#5E17EB'
  },
  cancelButton: {
    color: '#5E17EB',
    background: '#F7F7F7',
    border: '2px solid #5E17EB'
  },
   buttonStyles: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
    marginBottom: '10px',
    cursor: 'pointer', // Add cursor style to indicate it's clickable
  },
  
  buttonContainerStyles: {
    borderRadius: '20px',
    padding: '10px',
    backgroundColor: 'white',
    width: '700px',
    border: '1px solid black',
    background: 'linear-gradient(to right, #5E17EB 8%, white 8%)',
    position: 'relative',
    overflow: 'hidden', // Hide overflowing content
  },
  
   labelStyles: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '4px',
    position: 'relative',
    top: '16px',
  },
  
  fileNameStyles: {
    marginLeft: '23px',
    fontWeight: 'bold',
    position: 'relative',
    top: '10px',
    overflow: 'hidden', // Hide overflowing content
    whiteSpace: 'nowrap', // Prevent wrapping
    textOverflow: 'ellipsis', // Show ellipsis (...) for long filenames
  },
  
descriptionStyles: {
    fontSize: '12px',
    marginTop: '5px',
    color: 'rgba(0, 0, 0, 0.42)',
    marginLeft: '60px',
    position: 'relative',
    top: '5px',
  },

  uploadbuttonStyles:{
    fontFamily: 'League Spartan',
    fontWeight: 'bold',
    fontSize: '16px',
    backgroundColor: '#F7F7F7',
    color: '#5E17EB',
    border: '2px solid #5E17EB',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '20px',
  },
  uploadContainer:{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
  }
}