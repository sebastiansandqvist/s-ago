'use strict';

function format(diff, divisor, name, prev) {
	var val = Math.floor(diff / divisor);
	return val <= 1 ? prev : val + ' ' + name + 's ago';
}

function ago(date) {

	var diff = Math.abs(Date.now() - date.getTime());
	
	if (diff < 60000) { // less than a minute
		return 'just now';
	}

	for (var i = 0; i < ago.units.length; i++) {
		if (diff < ago.units[i].max) {
			return format(diff, ago.units[i].value, ago.units[i].name, ago.units[i].prev);
		}
	}

}

ago.units = [
	{ max: 2760000, value: 60000, name: 'minute', prev: 'a minute ago' }, // max: 46 minutes
	{ max: 72000000, value: 3600000, name: 'hour', prev: 'an hour ago' }, // max: 20 hours
	{ max: 518400000, value: 86400000, name: 'day', prev: 'yesterday' }, // max: 6 days
	{ max: 2419200000, value: 604800000, name: 'week', prev: 'last week' }, // max: 28 days
	{ max: 28512000000, value: 2592000000, name: 'month', prev: 'last month' }, // max: 11 months
	{ max: Infinity, value: 31536000000, name: 'year', prev: 'last year' }
];

module.exports = ago;