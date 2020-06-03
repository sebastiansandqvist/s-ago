/*

Usage:

var ago = require('s-ago');

var now = new Date();
var yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
var hoursAgo = new Date(now.getTime() - (6 * 60 * 60 * 1000));

ago(now); // 'just now'
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'

*/

function format(diff: number, divisor: number, unit: string, past: string, future: string, isInTheFuture: boolean) {
  var val = Math.round(Math.abs(diff) / divisor);
  if (isInTheFuture) return val <= 1 ? future : 'in ' + val + ' ' + unit + 's';
  return val <= 1 ? past : val + ' ' + unit + 's ago';
}

const units = [
  { max: 2760000, value: 60000, name: 'minute', past: 'a minute ago', future: 'in a minute' }, // max: 46 minutes
  { max: 72000000, value: 3600000, name: 'hour', past: 'an hour ago', future: 'in an hour' }, // max: 20 hours
  { max: 518400000, value: 86400000, name: 'day', past: 'yesterday', future: 'tomorrow' }, // max: 6 days
  { max: 2419200000, value: 604800000, name: 'week', past: 'last week', future: 'in a week' }, // max: 28 days
  { max: 28512000000, value: 2592000000, name: 'month', past: 'last month', future: 'in a month' } // max: 11 months
];

export = function ago(date: Date, max?: string): string {
  const diff = Date.now() - date.getTime();

  // less than a minute
  if (Math.abs(diff) < 60000) return 'just now';

  for (var i = 0; i < units.length; i++) {
    if (Math.abs(diff) < units[i].max || (max && units[i].name === max)) {
      return format(diff, units[i].value, units[i].name, units[i].past, units[i].future, diff < 0);
    }
  }

  // `year` is the final unit.
  // same as:
  //  {
  //    max: Infinity,
  //    value: 31536000000,
  //    name: 'year',
  //    past: 'last year'
  //  }
  return format(diff, 31536000000, 'year', 'last year', 'in a year', diff < 0);

};
