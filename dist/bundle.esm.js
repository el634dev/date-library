/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
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
         * @param {Date} date - This is not used as input but as anchor to attach methods
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
         * @returns {Date} - the current seconds such as 30
        */
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the difference between days to tell if a date is in the future or past
     * @param {Date} date - Used to create a new Date object
     * @returns {Date} - the difference bewteen the days
    */
    Day.prototype.futureDate = function (date) {
        if (date === void 0) { date = new Date(); }
        var difference = this._date.getTime() - date.getTime();
        if (difference < 0) {
            return "".concat(difference, " days in the future");
        }
        // Days difference is the number of days that have pasted or in the future
        var daysDifference = difference / 86400 / 1000;
        return daysDifference;
    };
    // -------------------------------
    Day.prototype.monthFirst = function (date) {
        if (date === void 0) { date = new Date(); }
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        // Get an abbreivated year without using the above function
        var year = date.getFullYear().toString().slice(-2);
        return "".concat(month, "/").concat(day, "/").concat(year);
    };
    // -------------------------------
    Day.prototype.yearFirst = function (date) {
        if (date === void 0) { date = new Date(); }
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        // Get a abbreivated year without using the above function
        var year = date.getFullYear().toString().slice(-2);
        return "".concat(year, "/").concat(day, "/").concat(month);
    };
    return Day;
}());

export { Day as default };
//# sourceMappingURL=bundle.esm.js.map
