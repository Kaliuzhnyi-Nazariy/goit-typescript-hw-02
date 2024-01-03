/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

function isWeekend(days: Week) {
  if (Week.Saturday || Week.Sunday) {
    return true
  }
  return false
}

isWeekend(Week.Sunday)

// type DaysOfWeek = Record<Week, boolean>;

// const isWeekend: DaysOfWeek = {
//   [Week.Monday]: false,
//   [Week.Tuesday]: false,
//   [Week.Wednesday]: false,
//   [Week.Thursday]: false,
//   [Week.Friday]: false,
//   [Week.Saturday]: true,
//   [Week.Sunday]: true,
// };