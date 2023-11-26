export function transformJSON(jsonData) {
  if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
    // Handle the case where jsonData or jsonData.data is undefined
    return [];
  }
  return jsonData.data.map(application => {
    return {
      title: application.additionalInfo.postingTitle ,
      companyName: application.additionalInfo.companyName, // You might need to provide a default value or fetch this from another source
      duration: application.additionalInfo.duration ,
      type: application.additionalInfo.type ,
      location: application.additionalInfo.location ,
      status: application.Status ,
      logo: application.additionalInfo.logo ,
      description:  application.additionalInfo.postingDescription ,
      workModel: application.additionalInfo.workModel,
      workterm: application.additionalInfo.workterm ,
      deadline: application.additionalInfo.deadline ,
      date: application.date, // You might need to provide a default value or fetch this from another source
      action: "", // You might need to provide a default value or fetch this from another source
      imageText: "", // You might need to provide a default value or fetch this from another source
      redirect: "", // You might need to provide a default value or fetch this from another source
    };
  });
}

