class Day {
    private _date: Date;
    
    constructor(...args: []) {
        this._date = new Date(...args);
    }

    /**
     * Returns the current year
     * @param {Date} year - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current year not in abbreviated form
    */
    get year(): number {
        return this._date.getFullYear()
    }

    /**
     * Returns the year in abbreviated form
     * @param {Date} abbrYear - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current full year in abbreviated form
    */
    get shortYear(): number {
        // Get the abbreviated year
        return this._date.getFullYear() % 100
    }

    /**
     * Formates the day either starting with the month first
     * @param {Date} month - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month
    */
    get month(): number {
        return this._date.getMonth()
    }

    /**
     * Returns the current month in abbreviated form
     * @param {Date} abbrMonth - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortMonth(): number {
        return this._date.getMonth() % 100 + 1
    }

    /**
     * Returns the current day by getting the current day from getDay()
     * @param {Date} current - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current day
    */
    get currentDay(): number {
        return this._date.getDay()
    }

    /**
     * Returns the current day in abbreviated form
     * @param {Date} abbrDay - This is not used as input but as anchor to attach methods
     * @returns {Date} the current day in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortDay(): number {
        return this._date.getDay() % 100 + 1
    }

    /**
     * Returns the current date
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current date
    */
    get currentDate(): number {
        return this._date.getDate()
    }

    /**
     * Returns current hour such as 7 or 8 hours by getting the date from getHours()
     * @param {Date} hour - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current hour
    */
    get currentHours(): number {
        return this._date.getHours()
    }

    /**
     * Returns the current minutes by getting the minutes from getMinutes()
     * @param {Day} minute - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current minutes
    */
    get currentMinutes(): number {
        return this._date.getMinutes()
    }

    /**
     * Returns the current seconds by getting the seconds from getSeconds()
     * @param {Date} second - This is not used as input but as anchor to attach methods
     * @returns {Date}  - the current seconds such as 30
    */
    get currentSeconds(): number {
        return this._date.getSeconds()
    }

    futureDate(date = new Date()) {
        const difference: number = this._date.getTime() - date.getTime();
        // Days difference, number of days that have pasted or in the future
        const daysDifference: number = difference / 86400 / 1000;
    }

    monthFirst(): string {
        return this._date.toLocaleDateString('m/d/y')
    }

    yearFirst(): string {
        return this._date.toLocaleDateString('y/m/d')
    }
}

module.exports.Day = Day;