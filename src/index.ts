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
     * @param {Date} date - This is not used as input but as anchor to attach methods
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
     * @returns {Date} - the current seconds such as 30
    */
    get currentSeconds(): number {
        return this._date.getSeconds()
    }

    /**
     * Returns the difference between days to tell if a date is in the future or past
     * @param {Date} date - Used to create a new Date object
     * @returns {Date} - the difference bewteen the days
    */
    futureDate(date = new Date()): number | string {
        // const currentDay = new Date();
        // const pastDay = new Date(date);

        const difference: number = this._date.getTime() - date.getTime();
        if (difference < 0) {
            return `${difference} days in the future`
        } 
    
        // Days difference is the number of days that have pasted or in the future
        const daysDifference: number = difference / 86400 / 1000;
        
        return daysDifference;
    }

    // -------------------------------
    monthFirst(date = new Date()): string {
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        // Get an abbreivated year without using the above function
        const year = date.getFullYear().toString().slice(-2);

        return `${month}/${day}/${year}`
    }

    // -------------------------------
    yearFirst(date = new Date()): string {
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        // Get a abbreivated year without using the above function
        const year = date.getFullYear().toString().slice(-2);

        return `${year}/${day}/${month}`
    }
}

module.exports.Day = Day;
