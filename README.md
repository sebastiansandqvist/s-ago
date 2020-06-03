# s-ago

[![NPM version](https://img.shields.io/npm/v/s-ago.svg)](https://www.npmjs.com/package/s-ago) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-ago.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-ago.svg)](https://travis-ci.org/sebastiansandqvist/s-ago) [![NPM license](https://img.shields.io/npm/l/s-ago.svg)](https://www.npmjs.com/package/s-ago)

This is the smallest, fully unit tested module to convert Date objects into human readable relative timestamps, such as `'4 minutes ago'`, `'yesterday'`, `'tomorrow'`, or `'in 3 months'`. All in 22 lines of TypeScript.

You can optionally specify the maximum unit (eg. `hour`, `day`, `week`) so instead of outputting `'2 weeks ago'` you will see `'14 days ago'`.

## Usage
```javascript
var ago = require('s-ago');

var now = new Date();
var yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
var hoursAgo = new Date(now.getTime() - (6 * 60 * 60 * 1000));
var yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
var tomorrow = new Date(now.getTime() + (6 * 60 * 60 * 1000));
var inSixHours = new Date(now.getTime() + (6 * 60 * 60 * 1000));
var inTwoWeeks = new Date(now.getTime() + (2 * 7 * 24 * 60 * 60 * 1000));

// present
ago(now); // 'just now'

// past
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'

// future
ago(inSixHours); // 'in 6 hours'
ago(tomorrow); // 'tomorrow'

// max unit
ago(inTwoWeeks);  // 'in 2 weeks'
ago(inTwoWeeks, 'day'); // 'in 14 days'
```

Output is as follows:

Time | Output | Future output
--- | --- | ---
Less than 1 minute | `just now` | `just now`
1-2 minutes | `a minute ago` | `in a minute`
2-46 minutes | `# minutes ago` | `in # minutes`
46 minutes - 2 hours | `an hour ago` | `in an hour`
2-20 hours | `# hours ago` | `in # hours`
20-48 hours | `yesterday` | `tomorrow`
2-6 days | `last week` | `in a week`
7-28 days | `# weeks ago` | `in # weeks`
28 days - 2 months | `last month` | `in a month`
2-11 months | `# months ago` | `in # months`
11-23 months | `last year` | `in a year`
2+ years | `# years ago` | `in # years`
