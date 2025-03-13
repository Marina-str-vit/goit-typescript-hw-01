enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}


const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Monday || day === DayOfWeek.Sunday;
}



  