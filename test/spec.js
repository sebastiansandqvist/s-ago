// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var ago = require('../index');

const timestamp = new Date();

// ----- tests
// ---------------------------------------
describe('ago', function() {

	it('should return "just now" if under 1 minute', function() {
		expect(ago(timestamp)).to.equal('just now');
		expect(ago(new Date(timestamp + 10000))).to.equal('just now');
	});

	it('minute', function() {
		var minute = new Date(timestamp - (60 * 1000));
		var minute2 = new Date(timestamp - ((60 * 1000) + 5000));
		expect(ago(minute)).to.equal('a minute ago');
		expect(ago(minute2)).to.equal('a minute ago');
	});

	it('minutes', function() {
		var minutes = new Date(timestamp - (2 * 60 * 1000));
		var minutes2 = new Date(timestamp - (20 * 60 * 1000));
		var minutes3 = new Date(timestamp - (45 * 60 * 1000));
		expect(ago(minutes)).to.equal('2 minutes ago');
		expect(ago(minutes2)).to.equal('20 minutes ago');
		expect(ago(minutes3)).to.equal('45 minutes ago');
	});

	it('hour', function() {
		var underHour = new Date(timestamp - (50 * 60 * 1000));
		var hour = new Date(timestamp - (60 * 60 * 1000));
		var hourPlus = new Date(timestamp - (90 * 60 * 1000));
		expect(ago(underHour)).to.equal('an hour ago');
		expect(ago(hour)).to.equal('an hour ago');
		expect(ago(hourPlus)).to.equal('an hour ago');
	});

	it('hours', function() {
		var hours = new Date(timestamp - (2 * 60 * 60 * 1000));
		var hours2 = new Date(timestamp - (3.5 * 60 * 60 * 1000));
		var hours3 = new Date(timestamp - (19 * 60 * 60 * 1000));
		expect(ago(hours)).to.equal('2 hours ago');
		expect(ago(hours2)).to.equal('3 hours ago');
		expect(ago(hours3)).to.equal('19 hours ago');
	});

	it('yesterday', function() {
		var yesterday = new Date(timestamp - (20 * 60 * 60 * 1000));
		var yesterday2 = new Date(timestamp - (40 * 60 * 60 * 1000));
		var yesterday3 = new Date(timestamp - (47 * 60 * 60 * 1000));
		expect(ago(yesterday)).to.equal('yesterday');
		expect(ago(yesterday2)).to.equal('yesterday');
		expect(ago(yesterday3)).to.equal('yesterday');
	});

	it('days', function() {
		var days = new Date(timestamp - (2 * 24 * 60 * 60 * 1000));
		var days2 = new Date(timestamp - (5 * 24 * 60 * 60 * 1000));
		expect(ago(days)).to.equal('2 days ago');
		expect(ago(days2)).to.equal('5 days ago');
	});

	it('week', function() {
		var week = new Date(timestamp - (6 * 24 * 60 * 60 * 1000));
		var week2 = new Date(timestamp - (13 * 24 * 60 * 60 * 1000));
		expect(ago(week)).to.equal('last week');
		expect(ago(week2)).to.equal('last week');
	});

	it('weeks', function() {
		var weeks = new Date(timestamp - (2 * 7 * 24 * 60 * 60 * 1000));
		var weeks2 = new Date(timestamp - (3 * 7 * 24 * 60 * 60 * 1000));
		expect(ago(weeks)).to.equal('2 weeks ago');
		expect(ago(weeks2)).to.equal('3 weeks ago');
	});

	it('month', function() {
		var month = new Date(timestamp - (4 * 7 * 24 * 60 * 60 * 1000));
		var month2 = new Date(timestamp - (30 * 24 * 60 * 60 * 1000));
		var month3 = new Date(timestamp - (50 * 24 * 60 * 60 * 1000));
		expect(ago(month)).to.equal('last month');
		expect(ago(month2)).to.equal('last month');
		expect(ago(month3)).to.equal('last month');
	});

	it('months', function() {
		var months = new Date(timestamp - (2 * 30 * 24 * 60 * 60 * 1000));
		var months2 = new Date(timestamp - (10 * 30 * 24 * 60 * 60 * 1000));
		expect(ago(months)).to.equal('2 months ago');
		expect(ago(months2)).to.equal('10 months ago');
	});

	it('year', function() {
		var year = new Date(timestamp - (350 * 24 * 60 * 60 * 1000));
		var year2 = new Date(timestamp - (1.5 * 360 * 24 * 60 * 60 * 1000));
		expect(ago(year)).to.equal('last year');
		expect(ago(year2)).to.equal('last year');
	});

	it('years', function() {
		var years = new Date(timestamp - (2 * 365 * 24 * 60 * 60 * 1000));
		var years2 = new Date(timestamp - (20 * 365 * 24 * 60 * 60 * 1000));
		var years3 = new Date(timestamp - (100 * 365 * 24 * 60 * 60 * 1000));
		var years4 = new Date(timestamp - (100000 * 365 * 24 * 60 * 60 * 1000));
		expect(ago(years)).to.equal('2 years ago');
		expect(ago(years2)).to.equal('20 years ago');
		expect(ago(years3)).to.equal('100 years ago');
		expect(ago(years4)).to.equal('100000 years ago');
	});

});