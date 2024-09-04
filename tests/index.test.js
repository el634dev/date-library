const { Day } = require('../src/index');

test('Should be current year', ()  => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.year).toBe(myDate.getFullYear())
})

// ---------------------------------------
test('Should be the abbreviated year', ()  => {
    const myDay = new Day();
    const myDate = new Date();

    const shortYear = myDate.getFullYear() % 100
    expect(myDay.shortYear).toBe(shortYear)
})

// ---------------------------------------
test('Should be current month', () =>  {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.month).toBe(myDate.getMonth())
})

// ---------------------------------------
test('Should be the abbreviated day', ()  => {
    const myDay = new Day();
    const myDate = new Date();

    const currentDay = myDate.getDay() % 100
    expect(myDay.shortDay).toBe(currentDay + 1)
})

// ---------------------------------------
test('Should be the current day', () => {
    const myDay = new Day();
    const myDate = new Date();

    expect(myDay.day).toBe(myDate.getDay())
})

// ---------------------------------------
test('Should be the abbreviated month', () => {
    const myDay = new Day();
    const myDate = new Date();

    const myMonth = myDate.getMonth() % 100
    expect(myDay.shortMonth).toBe(myMonth + 1)
})

// ---------------------------------------
test('Should be the current date', () => {
    const myDay = new Day();
    const myDate = new Date();

    expect(myDay.date).toBe(myDate.getDate())
})

// ---------------------------------------
test('Should have the current hours', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.hours).toBe(myDate.getHours())
})

// ---------------------------------------
test('Should have the current seconds', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.seconds).toBe(myDate.getSeconds())
})

// ---------------------------------------
test('Should have the current minutes', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.minutes).toEqual(myDate.getMinutes())
})