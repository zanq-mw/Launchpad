export function transformJSON(jsonData) {
  console.log(jsonData)
  if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
    // Handle the case where jsonData or jsonData.data is undefined
    return [];
  }
  return jsonData.data.map(application => {
    return {
      title: application.additionalInfo.postingTitle ,
      company: "N/A", // You might need to provide a default value or fetch this from another source
      duration: application.additionalInfo.duration ,
      type: application.additionalInfo.type ,
      location: application.additionalInfo.location ,
      status: application.Status ,
      logo: application.logo ,
      description:  application.additionalInfo.postingDescription ,
      workModel: application.additionalInfo.workModel,
      workterm: application.additionalInfo.workterm ,
      workModel: application.additionalInfo.workModel ,
      deadline: application.additionalInfo.deadline ,
      date: "N/A", // You might need to provide a default value or fetch this from another source
      action: "N/A", // You might need to provide a default value or fetch this from another source
      imageText: "N/A", // You might need to provide a default value or fetch this from another source
      redirect: "N/A", // You might need to provide a default value or fetch this from another source
    };
  });
}





/*
export const mockApplicationData = [
    {
      title: "Software Developer, Intern",
      company: "Wealthsimple",
      duration: "4-month Internship",
      location: "Remote",
      status: "Pending",
      logo: "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png",
      date: "2023-10-21",
      action: "Complete",
      imageText:"Wealthsimple Logo",
      redirect:"app_link"
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
      imageText:"Scotiabank Logo",
      redirect:"app_link"
    },
    {
      title: "Software Engineer, Intern",
      company: "Amazon",
      duration: "New Grad",
      location: "Vancouver, BC",
      status: "Pending",
      logo: "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png",
      date: "2023-10-21",
      action: "Complete",
      imageText:"Amazon Logo",
      redirect:"app_link"
    },
    {
      title: "Software Engineer, Junior",
      company: "Microsoft",
      duration: "New Grad",
      location: "Toronto, ON",
      status: "Pending",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      date: "2023-10-21",
      action: "Complete",
      imageText:"Logo",
      redirect:"app_link"
    },
]
*/
