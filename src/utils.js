let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDayName = (date) => {
  const convertedDate = new Date(date * 1000);
  let dayName = days[convertedDate.getDay()];
  return `${dayName} `;
};

export const getDayNum = (date) => {
  let dayNum = date.getDate();
  return `${dayNum} `;
};

export const getDate = (date) => {
  let dayName = days[date.getDay()];
  let dayNum = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${dayName} ${dayNum} ${month} ${year}`;
};
