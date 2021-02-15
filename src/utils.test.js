import { getDayName, getTime, getDate } from "./utils";

it("should return correct day name when given a date", () => {
  const value = getDayName(1613736000);
  expect(value).toBe("Friday");
});

it("should return correct time when given a date and timezone offset", () => {
  const value = getTime(1613736000, 0);
  expect(value).toBe(12);
});

it("should return correct date when given a date in UTC", () => {
  const mockDate = new Date(1613736000 * 1000);
  const value = getDate(mockDate);
  expect(value).toBe("Friday 19 February 2021");
});
