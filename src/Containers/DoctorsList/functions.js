export const checkAvailability = (docArr) => {
  var currTime = new Date();
  var currHour = currTime.getHours();

  var newArr = docArr.map((doc, index) => {
    var isAvailable = false;
    console.log(doc.consultTime);
    doc.consultTime.split(',').forEach((t, index) => {
      if (t.substring(0, 2) === currHour.toString()) {
        isAvailable = true;
        return true;
      }
    });
    return {
      ...doc,
      isAvailable,
    };
  });

  return sortAvailabilty(newArr);
};

const sortAvailabilty = (arr) => {
  var sortedArray = [];
  arr.forEach((a, index) => {
    if (a.isAvailable) sortedArray.push(a);
  });
  arr.forEach((a, index) => {
    if (!a.isAvailable) sortedArray.push(a);
  });
  return sortedArray;
};

export const checkVerified = (arr) => {
  var sortedArray = [];
  arr.forEach((a, index) => {
    if (a.verified) sortedArray.push(a);
  });
  arr.forEach((a, index) => {
    if (!a.verified) sortedArray.push(a);
  });
  return sortedArray;
};
