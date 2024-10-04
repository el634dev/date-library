// Testing date-library, remove "type": "module" before running and after just add in the package.json
const { Day } = require('../src/index');
const currentDate = new Day();

// -------------------------
// Show the year first
const year = currentDate.yearFirst();
console.log(`Current date in year first format: ${year}`)

// -------------------------
// Show current minutes (ex: 9:01pm, 1)
const minutes = currentDate.currentMinutes;
console.log(`Current minutes: ${minutes}`);

// -------------------------
// Show current seconds (ex: 9:03pm, 42 seconds)
const seconds = currentDate.currentSeconds;
console.log(`Current seconds: ${seconds}`);

// -------------------------
// Show the current hour
const hours = currentDate.currentHours;
console.log(`Current hour: ${hours}`);

// -------------------------
// Show the month first
const month = currentDate.monthFirst();
console.log(`Current date in month first format: ${month}`)

// -------------------------
// Show the future day
const future = currentDate.futureDate();
console.log(`The future date is ${future}`)

// -------------------------
// Show the abbreviated day
const abbreviatedDay = currentDate.shortDay;
console.log(`AbbreviatedDay Format: ${abbreviatedDay}`)

// -------------------------
// Show the abbreviated year
const abbreviatedYear = currentDate.shortYear;
console.log(`Abbreviated Year Format: ${abbreviatedYear}`)
