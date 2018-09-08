"use strict";
/*

Usage:

var ago = require('s-ago');

var now = new Date();
var yesterday = new Date(now - (24 * 60 * 60 * 1000));
var hoursAgo = new Date(now - (6 * 60 * 60 * 1000));

ago(now); // 'just now'
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'

*/
exports.__esModule = true;
function format(diff, divisor, unit, prev) {
    var val = Math.round(diff / divisor);
    return val <= 1 ? prev : val + ' ' + unit + 's ago';
}
var units = [
    { max: 2760000, value: 60000, name: 'minute', prev: 'a minute ago' },
    { max: 72000000, value: 3600000, name: 'hour', prev: 'an hour ago' },
    { max: 518400000, value: 86400000, name: 'day', prev: 'yesterday' },
    { max: 2419200000, value: 604800000, name: 'week', prev: 'last week' },
    { max: 28512000000, value: 2592000000, name: 'month', prev: 'last month' } // max: 11 months
];
function ago(date) {
    var diff = Math.abs(Date.now() - date.getTime());
    // less than a minute
    if (diff < 60000)
        return 'just now';
    for (var i = 0; i < units.length; i++) {
        if (diff < units[i].max) {
            return format(diff, units[i].value, units[i].name, units[i].prev);
        }
    }
    // `year` is the final unit.
    // same as:
    //  {
    //    max: Infinity,
    //    value: 31536000000,
    //    name: 'year',
    //    prev: 'last year'
    //  }
    return format(diff, 31536000000, 'year', 'last year');
}
exports["default"] = ago;
