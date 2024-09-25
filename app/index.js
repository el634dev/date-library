// Testing date-library
const { Day } = require('../src/index');
const currentDate = new Day();

// Show the year first
const year = currentDate.yearFirst();
console.log(`Current date in year first format: ${year}`)

// Show current minutes (ex: 9:01pm, 1)
const minutes = currentDate.currentMinutes;
console.log(`Current minutes: ${minutes}`);

// Show current seconds (ex: 9:03pm, 42 seconds)
const seconds = currentDate.currentSeconds;
console.log(`Current seconds: ${seconds}`);

// Show the month first
const month = currentDate.monthFirst();
console.log(`Current date in month first format: ${month}`)