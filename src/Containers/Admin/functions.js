export const databaseVariableValidation = (database, inputCols) => {
  switch (database) {
    case "OxygenCylinders":
      return checkVariables(getDatabaseVariables(database), inputCols);
    default:
      break;
  }
};

export const getDatabaseVariables = (database) => {
  switch (database) {
    case "OxygenCylinders":
      return ["name", "phone", "streetNumber", "location", "verified"];
    default:
      break;
  }
};

export const checkVariables = (dbCols, inputCols) => {
  return JSON.stringify(dbCols.sort()) === JSON.stringify(inputCols.sort());
};
