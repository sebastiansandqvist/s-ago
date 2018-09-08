# s-ago

[![NPM version](https://img.shields.io/npm/v/s-ago.svg)](https://www.npmjs.com/package/s-ago) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-ago.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-ago.svg)](https://travis-ci.org/sebastiansandqvist/s-ago) [![NPM license](https://img.shields.io/npm/l/s-ago.svg)](https://www.npmjs.com/package/s-ago)

This is the smallest, fully unit tested module (25 SLOC) to convert Date objects into human readable relative timestamps, such as '4 minutes ago' or 'yesterday'.

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
