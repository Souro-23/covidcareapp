export const checkAvailability = (docArr) => {
  var currTime = new Date();
  var currHour = currTime.getHours();

  var newArr = docArr.map((doc, index) => {
    var isAvailable = false;
    let timeAvailable = [];
    doc.consultTime.split(",").forEach((t, index) => {
      timeAvailable.push(t);
      if (
        t.substring(0, 2) >= "12" &&
        t.substring(0, 2) === currHour.toString()
      ) {
        isAvailable = true;
        return true;
      }
      if (
        t.substring(0, 2) <= "12" &&
        t.substring(0, 2) === "0" + currHour.toString()
      ) {
        isAvailable = true;
        return true;
      }
    });
    // Converts time from 24Hr format to 12Hr formal
    let timeSlots = convertTimeAvailable(timeAvailable);
    return {
      ...doc,
      isAvailable,
      timeSlots,
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

const convertTimeAvailable = (timeSlotArray) => {
  return timeSlotArray.map((time, index) => {
    let preMeridiem = "am";
    let postMeridiem = "am";
    let preTime = time.substring(0, 4);
    let postTime = time.substring(5, 9);

    if (preTime >= "1200" && preTime !== "2300") {
      preMeridiem = "pm";
      postMeridiem = "pm";
      preTime = "0" + (preTime - "1200").toString();
      postTime = "0" + (postTime - "1200").toString();
    }
    if (preTime === "1100") {
      preMeridiem = "am";
      postMeridiem = "pm";
      preTime = "1100";
      postTime = "1200";
    }
    if (preTime === "2300") {
      preMeridiem = "pm";
      postMeridiem = "am";
      preTime = "1100";
      postTime = "1200";
    }

    return (
      preTime.substring(0, 2) +
      // ":00" +
      preMeridiem +
      " - " +
      postTime.substring(0, 2) +
      // ":00" +
      postMeridiem
    );
  });
};

export const checkVerified = (arr, type) => {
  var sortedArray = [];
  if (type === "food" || type === "ocl") {
    arr.forEach((a, index) => {
      if (a.verified === "yes") sortedArray.push(a);
    });
    arr.forEach((a, index) => {
      if (a.verified === "no") sortedArray.push(a);
    });
  } else if (type === "lab") {
    arr.forEach((a, index) => {
      if (a.homeTest === "yes") sortedArray.push(a);
    });
    arr.forEach((a, index) => {
      if (a.homeTest === "no") sortedArray.push(a);
    });
  }
  return sortedArray;
};

export const timeDifference = (timestamp) => {
  var difference = new Date() - timestamp.toDate();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);

  if (daysDifference) return daysDifference + "d ago";
  if (hoursDifference) return hoursDifference + "h ago";
  if (minutesDifference) return minutesDifference + "m ago";
  if (secondsDifference) return "Just now";
};
