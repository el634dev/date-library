class Day {
    constructor(...args) {
        this._date = new Date(...args)
    }

    /**
     * Returns the current year
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current year not in abbreviated form

    */
    get year() {
        return this._date.getFullYear()
    }

    /**
     * Returns the year in abbreviated form
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current full year in abbreviated form
    */
    get shortYear() {
        // Get the abbreviated year
        return this._date.getFullYear() % 100
    }

    /**
     * Formates the day either starting with the month first
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month
    */
    get month() {
        return this._date.getMonth()
    }

    /**
     * Returns the current month in abbreviated form
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current month in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortMonth() {
        return this._date.getMonth() % 100 + 1
    }

    /**
     * Returns the current day by getting the current day from getDay()
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current day
    */
    get day() {
        return this._date.getDay()
    }

    /**
     * Returns the current day in abbreviated form
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} the current day in abbreviated form, + 1 is to change to
     one-based system
    */
    get shortDay() {
        return this._date.getDay() % 100 + 1
    }

    /**
     * Returns the current date
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current date
    */
    get date() {
        return this._date.getDate()
    }

    /**
     * Returns current hour such as 7 or 8 hours by getting the date from getHours()
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current hour
    */
    get hours() {
        return this._date.getHours()
    }

    /**
     * Returns the current minutes by getting the minutes from getMinutes()
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date} - the current minutes
    */
    get minutes() {
        return this._date.getMinutes()
    }

    /**
     * Returns the current minutes by getting the seconds from getSeconds()
     * @param {Date} day - This is not used as input but as anchor to attach methods
     * @returns {Date}  - the current seconds such as 30
    */
    get seconds() {
        return this._date.getSeconds()
    }
}

class Date_Format extends Day {
    constructor(_date) {
        super(_date);
        this._date = _date;
    }

    get MonthFirst() {
        return this._date.format('m/d/y')
    }

    get YearFirst() {
        return this._date.format('y/m/d')
    }
}

module.exports.Day = Day;
