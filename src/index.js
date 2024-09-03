class Day {
    constructor(...args) {
        this._date = new Date(...args)
    }

    /**
     * Formates the day either starting with the full year
     * @param {Date} day
     * @returns {Date} the current full year

    */
    get year() {
        return this._date.getFullYear()
    }

    /**
     * Formates the day either starting with getting the full year
     * @param {Date} day
     * @returns {Date} formatted as getting the current full year mod 100
    */
    get shortYear() {
        // Get the abbreviated year
        return this._date.getFullYear() % 100
    }

    /**
     * Formates the day either starting with the month first
     * @param {Date} day
     * @returns {Date} formatted as month first
    */
    get month() {
        return this._date.getMonth()
    }

    /**
     * Formates the month by shorting the month to two digits
     * @param {Date} day
     * @returns {Date} formatted as month mod 100
    */
    get shortMonth() {
        return this._date.getMonth() % 100 
    }

    /**
     * Formates the month by getting the current day
     * @param {Date} day
     * @returns {Date} the current day
    */
    get day() {
        return this._date.getDay()
    }

    /**
     * Formates the month by getting the current day
     * @param {Date} day
     * @returns {Date} the current day mod 100 to shorten the day to two digits
    */
    get shortDay() {
        return this._date.getDay() % 100
    }

    /**
     * Formates the month by getting the current date
     * @param {Date} day
     * @returns {Date} the current date
    */
    get date() {
        return this._date.getDate()
    }

    /**
     * Formates the month by getting the current hour
     * @param {Date} day
     * @returns {Date} the current hour
    */
    get hours() {
        return this._date.getHours()
    }

    /**
     * Formates the month by getting the current hour
     * @param {Date} day
     * @returns {Date} the current hour
    */
    get minutes() {
        return this._date.getMinutes()
    }

     /**
     * Formates the month by getting the seconds
     * @param {Date} day
     * @returns {Date} the seconds
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