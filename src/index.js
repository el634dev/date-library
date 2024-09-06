var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Day = /** @class */ (function () {
    function Day() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
    }
    Object.defineProperty(Day.prototype, "year", {
        /**
         * Returns the current year
         * @param {Date} year - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current year not in abbreviated form
        */
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "shortYear", {
        /**
         * Returns the year in abbreviated form
         * @param {Date} abbrYear - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current full year in abbreviated form
        */
        get: function () {
            // Get the abbreviated year
            return this._date.getFullYear() % 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "month", {
        /**
         * Formates the day either starting with the month first
         * @param {Date} month - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current month
        */
        get: function () {
            return this._date.getMonth();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "shortMonth", {
        /**
         * Returns the current month in abbreviated form
         * @param {Date} abbrMonth - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current month in abbreviated form, + 1 is to change to
         one-based system
        */
        get: function () {
            return this._date.getMonth() % 100 + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "currentDay", {
        /**
         * Returns the current day by getting the current day from getDay()
         * @param {Date} current - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current day
        */
        get: function () {
            return this._date.getDay();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "shortDay", {
        /**
         * Returns the current day in abbreviated form
         * @param {Date} abbrDay - This is not used as input but as anchor to attach methods
         * @returns {Date} the current day in abbreviated form, + 1 is to change to
         one-based system
        */
        get: function () {
            return this._date.getDay() % 100 + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "currentDate", {
        /**
         * Returns the current date
         * @param {Date} day - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current date
        */
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "currentHours", {
        /**
         * Returns current hour such as 7 or 8 hours by getting the date from getHours()
         * @param {Date} hour - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current hour
        */
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "currentMinutes", {
        /**
         * Returns the current minutes by getting the minutes from getMinutes()
         * @param {Day} minute - This is not used as input but as anchor to attach methods
         * @returns {Date} - the current minutes
        */
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "currentSeconds", {
        /**
         * Returns the current seconds by getting the seconds from getSeconds()
         * @param {Date} second - This is not used as input but as anchor to attach methods
         * @returns {Date}  - the current seconds such as 30
        */
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    Day.prototype.futureDate = function (date) {
        if (date === void 0) { date = new Date(); }
        var difference = this._date.getTime() - date.getTime();
        // Days difference, number of days that have pasted or in the future
        var daysDifference = difference / 86400 / 1000;
    };
    Day.prototype.monthFirst = function () {
        return this._date.toLocaleDateString('m/d/y');
    };
    Day.prototype.yearFirst = function () {
        return this._date.toLocaleDateString('y/m/d');
    };
    return Day;
}());
module.exports.Day = Day;
