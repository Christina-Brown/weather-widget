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

export const getApi = {
  // eslint-disable-next-line no-undef
  key: process.env.REACT_APP_WEATHER_WIDGET,
  base: "https://api.openweathermap.org/data/2.5/",
};

export const getDayName = (date) => {
  const convertedDate = new Date(date * 1000);
  const dayName = days[convertedDate.getDay()];
  return `${dayName}`;
};

export const getTime = (date, time) => {
  const convertedDate = new Date(date * 1000 - time);
  const convertedHour = convertedDate.getUTCHours();
  return convertedHour;
};

export const getDate = (date) => {
  let dayName = days[date.getDay()];
  let dayNum = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${dayName} ${dayNum} ${month} ${year}`;
};

export const getImage = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};
