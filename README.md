# s-ago

[![NPM version](https://img.shields.io/npm/v/s-ago.svg)](https://www.npmjs.com/package/s-ago) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-ago.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-ago.svg)](https://travis-ci.org/sebastiansandqvist/s-ago) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-ago/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-ago/coverage) [![NPM license](https://img.shields.io/npm/l/s-ago.svg)](https://www.npmjs.com/package/s-ago)

This is the smallest, fully unit tested module (26 SLOC) to convert Date objects into human readable relative timestamps, such as '4 minutes ago' or 'yesterday'.

## Usage
```javascript
var ago = require('s-ago');

var now = new Date();
var yesterday = new Date(now - (24 * 60 * 60 * 1000));
var hoursAgo = new Date(now - (6 * 60 * 60 * 1000));

ago(now); // 'just now'
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'
```

Output is as follows:

Time | Output
--- | ---
Less than 1 minute | `just now`
1-2 minutes | `a minute ago`
2-46 minutes | # `minutes ago`
46 minutes - 2 hours | `an hour ago`
2-20 hours | # `hours ago`
20-48 hours | `yesterday`
2-6 days | `last week`
7-28 days | # `weeks ago`
28 days - 2 months | `last month`
2-11 months | # `months ago`
11-23 months | `last year`
2+ years | # `years ago`

Don't like the thresholds or output? You can customize them. Thresholds are set via each object's `max` key, and the output format for the previous 1 unit of time (eg. `yesterday` or `last week`) is set in each object's `prev` key.

The default is as follows:
```javascript
ago.units = [
	{ max: 2760000, value: 60000, name: 'minute', prev: 'a minute ago' }, // max: 46 minutes
	{ max: 72000000, value: 3600000, name: 'hour', prev: 'an hour ago' }, // max: 20 hours
	{ max: 518400000, value: 86400000, name: 'day', prev: 'yesterday' }, // max: 6 days
	{ max: 2419200000, value: 604800000, name: 'week', prev: 'last week' }, // max: 28 days
	{ max: 28512000000, value: 2592000000, name: 'month', prev: 'last month' }, // max: 11 months
	{ max: Infinity, value: 31536000000, name: 'year', prev: 'last year' }
];
```

If you want it to display `a week ago` instead of `last week` (and do the same for months and years), you would set ago.units to the following before running `ago`.

```javascript
ago.units = [
	{ max: 2760000, value: 60000, name: 'minute', prev: 'a minute ago' }, // max: 46 minutes
	{ max: 72000000, value: 3600000, name: 'hour', prev: 'an hour ago' }, // max: 20 hours
	{ max: 518400000, value: 86400000, name: 'day', prev: 'yesterday' }, // max: 6 days
	{ max: 2419200000, value: 604800000, name: 'week', prev: 'a week ago' }, // max: 28 days
	{ max: 28512000000, value: 2592000000, name: 'month', prev: 'a month ago' }, // max: 11 months
	{ max: Infinity, value: 31536000000, name: 'year', prev: 'a year ago' }
];
```

## License (ISC)
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.