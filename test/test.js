import test from 'ava';
import ago from '../';

const timestamp = new Date();

test('just now', function(t) {
  t.is(ago(timestamp), 'just now');
});

test('minute', function(t) {
  const minute = new Date(timestamp - (60 * 1000));
  const minute2 = new Date(timestamp - ((60 * 1000) + 5000));
  t.is(ago(minute), 'a minute ago');
  t.is(ago(minute2), 'a minute ago');
});

test('minutes', function(t) {
  const minutes = new Date(timestamp - (2 * 60 * 1000));
  const minutes2 = new Date(timestamp - (20 * 60 * 1000));
  const minutes3 = new Date(timestamp - (45 * 60 * 1000));
  t.is(ago(minutes), '2 minutes ago');
  t.is(ago(minutes2), '20 minutes ago');
  t.is(ago(minutes3), '45 minutes ago');
});

test('hour', function(t) {
  const underHour = new Date(timestamp - (50 * 60 * 1000));
  const hour = new Date(timestamp - (60 * 60 * 1000));
  const hourPlus = new Date(timestamp - (90 * 60 * 1000));
  t.is(ago(underHour), 'an hour ago');
  t.is(ago(hour), 'an hour ago');
  t.is(ago(hourPlus), 'an hour ago');
});

test('hours', function(t) {
  const hours = new Date(timestamp - (2 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp - (3.5 * 60 * 60 * 1000));
  const hours3 = new Date(timestamp - (19 * 60 * 60 * 1000));
  t.is(ago(hours), '2 hours ago');
  t.is(ago(hours2), '3 hours ago');
  t.is(ago(hours3), '19 hours ago');
});

test('yesterday', function(t) {
  const yesterday = new Date(timestamp - (20 * 60 * 60 * 1000));
  const yesterday2 = new Date(timestamp - (40 * 60 * 60 * 1000));
  const yesterday3 = new Date(timestamp - (47 * 60 * 60 * 1000));
  t.is(ago(yesterday), 'yesterday');
  t.is(ago(yesterday2), 'yesterday');
  t.is(ago(yesterday3), 'yesterday');
});

test('days', function(t) {
  const days = new Date(timestamp - (2 * 24 * 60 * 60 * 1000));
  const days2 = new Date(timestamp - (5 * 24 * 60 * 60 * 1000));
  t.is(ago(days), '2 days ago');
  t.is(ago(days2), '5 days ago');
});

test('week', function(t) {
  const week = new Date(timestamp - (6 * 24 * 60 * 60 * 1000));
  const week2 = new Date(timestamp - (13 * 24 * 60 * 60 * 1000));
  t.is(ago(week), 'last week');
  t.is(ago(week2), 'last week');
});

test('weeks', function(t) {
  const weeks = new Date(timestamp - (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp - (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks), '2 weeks ago');
  t.is(ago(weeks2), '3 weeks ago');
});

test('month', function(t) {
  const month = new Date(timestamp - (4 * 7 * 24 * 60 * 60 * 1000));
  const month2 = new Date(timestamp - (30 * 24 * 60 * 60 * 1000));
  const month3 = new Date(timestamp - (50 * 24 * 60 * 60 * 1000));
  t.is(ago(month), 'last month');
  t.is(ago(month2), 'last month');
  t.is(ago(month3), 'last month');
});

test('months', function(t) {
  const months = new Date(timestamp - (2 * 30 * 24 * 60 * 60 * 1000));
  const months2 = new Date(timestamp - (10 * 30 * 24 * 60 * 60 * 1000));
  t.is(ago(months), '2 months ago');
  t.is(ago(months2), '10 months ago');
});

test('year', function(t) {
  const year = new Date(timestamp - (350 * 24 * 60 * 60 * 1000));
  const year2 = new Date(timestamp - (1.5 * 360 * 24 * 60 * 60 * 1000));
  t.is(ago(year), 'last year');
  t.is(ago(year2), 'last year');
});

test('years', function(t) {
  const years = new Date(timestamp - (2 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp - (20 * 365 * 24 * 60 * 60 * 1000));
  const years3 = new Date(timestamp - (100 * 365 * 24 * 60 * 60 * 1000));
  const years4 = new Date(timestamp - (100000 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(years), '2 years ago');
  t.is(ago(years2), '20 years ago');
  t.is(ago(years3), '100 years ago');
  t.is(ago(years4), '100000 years ago');
});

