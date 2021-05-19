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
    case "OxygenCylinderContacts":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "BreathingSessions":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "HospitalBeds":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "MedicalStores":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "HomeCare":
      return checkVariables(getDatabaseVariables(database), inputCols);
    case "Ambulance":
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
      return ["name", "phone", "waitTime", "resultTime", "location", "charges"];
    case "OxygenCylinderContacts":
      return ["name", "phone", "location"];
    case "BreathingSessions":
      return ["name", "phone", "location", "age", "stressed", "timeSlot"]
    case "HospitalBeds":
      return ["name", "phone", "bedsInfo", "streetNumber", "location"]
    case "MedicalStores":
      return ["name", "phone", "medicines", "streetNumber", "location"]
    case "HomeCare":
      return ["name", "phone", "facility", "streetNumber", "location"]
    case "Ambulance":
      return ["name", "phone", "services", "location", "charges"];

    default:
      break;
  }
};

export const checkVariables = (dbCols, inputCols) => {
  return JSON.stringify(dbCols.sort()) === JSON.stringify(inputCols.sort());
};
