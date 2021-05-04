export const databaseVariableValidation = (database, inputCols) => {
  switch (database) {
    case "OxygenCylinders":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Doctors":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Patients":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Donors":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Recipients":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Food":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "LabTestCenters":
      return checkVariables(getDatabaseVariables(database), inputCols);
    default:
      break;
  }
};

export const getDatabaseVariables = (database) => {
  switch (database) {
    case "OxygenCylinders":
      return ["name", "phone", "streetNumber", "location", "verified"];
    case "Food":
      return [
        "name",
        "phone",
        "streetNumber",
        "location",
        "verified",
        "isFree",
      ];
    case "Doctors":
      return [
        "name",
        "phone",
        "whatsappNo",
        "MCINumber",
        "specialization",
        "consultTime",
      ];
    case "Patients":
      return ["name", "phone", "saturationLevel"];
    case "Donors":
      return [
        "name",
        "phone",
        "gender",
        "bloodGroup",
        "screeningDate",
        "location",
      ];
    case "Recipients":
      return [
        "name",
        "phone",
        "gender",
        "bloodGroup",
        "screeningDate",
        "location",
      ];
    case "LabTestCenters":
      return ["name", "phone", "homeTest", "charges", "location"];
    case "OxygenCylinderContacts":
      return ["name", "phone", "location"];
    case "BreathingSessions":
      return ["name", "phone", "location", "age", "stressed", "timeSlot"];



    default:
      break;
  }
};

export const checkVariables = (dbCols, inputCols) => {
  return JSON.stringify(dbCols.sort()) === JSON.stringify(inputCols.sort());
};
