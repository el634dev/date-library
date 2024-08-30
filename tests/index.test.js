const { Day } = require('../src/index');

test('Test Year', ()  => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.year).toBe(myDate.getFullYear())
})

test('Test Short Year', ()  => {
    // const myDay = new Day();
    // const myDate = new Date();

    // const shortYear = myDate.getFullYear % 100
    // expect(myDay.shortYear).toBe(shortYear)
})

test('Test Month', () =>  {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.month).toBe(myDate.getMonth())
})

test('Test Short Month', ()  => {
//     const myDay = new Day();
//     const myDate = new Date();

//     const myMonth = myDate.getMonth % 100
//     expect(myDay.shortMonth).toBe(myMonth)
})

test('Test Day', () => {
    const myDay = new Day();
    const myDate = new Date();

    expect(myDay.day).toBe(myDate.getDay)
})

test('Test Short Day', () => {
//     const myDay = new Day();
//     const myDate = new Date();

//     const myMonth = myDate.getMonth % 100
//     expect(myDay.shortMonth).toBe(myMonth)
})

test('Test Date', () => {
    const myDay = new Day();
    const myDate = new Date();

    expect(myDay.date).toBe(myDate.getDate)
})

test('Test Hours', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.hours).toBe(myDate.getHours())
})

test('Test Seconds', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.seconds).toBe(myDate.getSeconds())
})

test('Test Minutes', () => {
    const myDay = new Day();
    const myDate = new Date();
    expect(myDay.minutes).toEqual(myDate.getMinutes())
})