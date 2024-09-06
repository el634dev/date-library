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

    expect(myDay.currentDay).toBe(myDate.getDay())
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

    expect(myDay.currentDate).toBe(myDate.getDate())
})

// ---------------------------------------
test('Should have the current hours', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.currentHours).toBe(myDate.getHours())
})

// ---------------------------------------
test('Should have the current seconds', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.currentSeconds).toBe(myDate.getSeconds())
})

// ---------------------------------------
test('Should have the current minutes', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.currentMinutes).toEqual(myDate.getMinutes())
})

// ---------------------------------------
test('Should have the difference between days', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.currentDay - myDate.getDay()).toBe(0)
})

// ---------------------------------------
test('Should have the month first', () => {
    const myDay = new Day();
    const myDate = new Date('2024/09/03');
    expect(myDay.monthFirst(myDate)).toEqual('09/03/24')
})

// ---------------------------------------
test('Should have the year first', () => {
    const myDay = new Day();
    const myDate = new Date('09/03/2024');
    expect(myDay.yearFirst(myDate)).toEqual('24/03/09')
})