declare class Day {
    private _date;
    constructor(...args: []);
    /**
     * Returns the current year
     * @param {Date} year - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current year not in abbreviated form
    */
    get year(): number;
    /**
     * Returns the year in abbreviated form
     * @param {Date} abbrYear - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current full year in abbreviated form
    */
    get shortYear(): number;
    /**
     * Formates the day either starting with the month first
     * @param {Date} month - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month
    */
    get month(): number;
    /**
     * Returns the current month in abbreviated form
     * @param {Date} abbrMonth - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortMonth(): number;
    /**
     * Returns the current day by getting the current day from getDay()
     * @param {Date} current - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current day
    */
    get currentDay(): number;
    /**
     * Returns the current day in abbreviated form
     * @param {Date} abbrDay - This is not used as input but as anchor to attach methods
     * @returns {Date} the current day in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortDay(): number;
    /**
     * Returns the current date
     * @param {Date} date - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current date
    */
    get currentDate(): number;
    /**
     * Returns current hour such as 7 or 8 hours by getting the date from getHours()
     * @param {Date} hour - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current hour
    */
    get currentHours(): number;
    /**
     * Returns the current minutes by getting the minutes from getMinutes()
     * @param {Day} minute - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current minutes
    */
    get currentMinutes(): number;
    /**
     * Returns the current seconds by getting the seconds from getSeconds()
     * @param {Date} second - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current seconds such as 30
    */
    get currentSeconds(): number;
    /**
     * Returns the difference between days to tell if a date is in the future or past
     * @param {Date} date - Used to create a new Date object
     * @returns {Date} - the difference bewteen the days
    */
    futureDate(date?: Date): number | string;
    monthFirst(date?: Date): string;
    yearFirst(date?: Date): string;
}
