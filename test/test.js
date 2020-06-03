import test from 'ava';
import ago from '../';

const timestamp = new Date();

test('just now', (t) => {
  t.is(ago(timestamp), 'just now');
});

test('minute', (t) => {
  const minute = new Date(timestamp.valueOf() - (60 * 1000));
  const minute2 = new Date(timestamp.valueOf() - ((60 * 1000) + 5000));
  t.is(ago(minute), 'a minute ago');
  t.is(ago(minute2), 'a minute ago');
});

test('minute future', (t) => {
  const timestamp = new Date();
  const minute = new Date(timestamp.valueOf() + (60 * 1000));
  const minute2 = new Date(timestamp.valueOf() + ((60 * 1000) + 5000));
  t.is(ago(minute), 'in a minute');
  t.is(ago(minute2), 'in a minute');
});

test('minutes', (t) => {
  const minutes = new Date(timestamp.valueOf() - (2 * 60 * 1000));
  const minutes2 = new Date(timestamp.valueOf() - (20 * 60 * 1000));
  const minutes3 = new Date(timestamp.valueOf() - (45 * 60 * 1000));
  t.is(ago(minutes), '2 minutes ago');
  t.is(ago(minutes2), '20 minutes ago');
  t.is(ago(minutes3), '45 minutes ago');
});

test('minutes future', (t) => {
  const timestamp = new Date();
  const minutes = new Date(timestamp.valueOf() + (2 * 60 * 1000));
  const minutes2 = new Date(timestamp.valueOf() + (20 * 60 * 1000));
  const minutes3 = new Date(timestamp.valueOf() + (45 * 60 * 1000));
  t.is(ago(minutes), 'in 2 minutes');
  t.is(ago(minutes2), 'in 20 minutes');
  t.is(ago(minutes3), 'in 45 minutes');
});

test('hour', (t) => {
  const underHour = new Date(timestamp.valueOf() - (50 * 60 * 1000));
  const hour = new Date(timestamp.valueOf() - (60 * 60 * 1000));
  t.is(ago(underHour), 'an hour ago');
  t.is(ago(hour), 'an hour ago');
});

test('hour future', (t) => {
  const timestamp = new Date();
  const withinHour = new Date(timestamp.valueOf() + (50 * 60 * 1000));
  const hour = new Date(timestamp.valueOf() + (60 * 60 * 1000));
  t.is(ago(withinHour), 'in an hour');
  t.is(ago(hour), 'in an hour');
});

test('hours', (t) => {
  const hours = new Date(timestamp.valueOf() - (2 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp.valueOf() - (19 * 60 * 60 * 1000));
  t.is(ago(hours), '2 hours ago');
  t.is(ago(hours2), '19 hours ago');
});

test('yesterday', (t) => {
  const yesterday = new Date(timestamp.valueOf() - (20 * 60 * 60 * 1000));
  t.is(ago(yesterday), 'yesterday');
});

test('day future', (t) => {
  const timestamp = new Date();
  const yesterday = new Date(timestamp.valueOf() + (20 * 60 * 60 * 1000));
  t.is(ago(yesterday), 'tomorrow');
});

test('days', (t) => {
  const days = new Date(timestamp.valueOf() - (2 * 24 * 60 * 60 * 1000));
  const days2 = new Date(timestamp.valueOf() - (5 * 24 * 60 * 60 * 1000));
  t.is(ago(days), '2 days ago');
  t.is(ago(days2), '5 days ago');
});

test('days future', (t) => {
  const timestamp = new Date();
  const days = new Date(timestamp.valueOf() + (2 * 24 * 60 * 60 * 1000));
  const days2 = new Date(timestamp.valueOf() + (5 * 24 * 60 * 60 * 1000));
  t.is(ago(days), 'in 2 days');
  t.is(ago(days2), 'in 5 days');
});

test('week', (t) => {
  const week = new Date(timestamp.valueOf() - (6 * 24 * 60 * 60 * 1000));
  t.is(ago(week), 'last week');
});

test('week future', (t) => {
  const timestamp = new Date();
  const week = new Date(timestamp.valueOf() + (6 * 24 * 60 * 60 * 1000));
  t.is(ago(week), 'in a week');
});

test('weeks', (t) => {
  const weeks = new Date(timestamp.valueOf() - (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp.valueOf() - (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks), '2 weeks ago');
  t.is(ago(weeks2), '3 weeks ago');
});

test('weeks future', (t) => {
  const timestamp = new Date();
  const weeks = new Date(timestamp.valueOf() + (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp.valueOf() + (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks), 'in 2 weeks');
  t.is(ago(weeks2), 'in 3 weeks');
});

test('month', (t) => {
  const month = new Date(timestamp.valueOf() - (4 * 7 * 24 * 60 * 60 * 1000));
  const month2 = new Date(timestamp.valueOf() - (30 * 24 * 60 * 60 * 1000));
  t.is(ago(month), 'last month');
  t.is(ago(month2), 'last month');
});

test('month future', (t) => {
  const timestamp = new Date();
  const month = new Date(timestamp.valueOf() + (4 * 7 * 24 * 60 * 60 * 1000));
  const month2 = new Date(timestamp.valueOf() + (30 * 24 * 60 * 60 * 1000));
  t.is(ago(month), 'in a month');
  t.is(ago(month2), 'in a month');
});

test('months', (t) => {
  const months = new Date(timestamp.valueOf() - (2 * 30 * 24 * 60 * 60 * 1000));
  const months2 = new Date(timestamp.valueOf() - (10 * 30 * 24 * 60 * 60 * 1000));
  t.is(ago(months), '2 months ago');
  t.is(ago(months2), '10 months ago');
});

test('months future', (t) => {
  const timestamp = new Date();
  const months = new Date(timestamp.valueOf() + (2 * 30 * 24 * 60 * 60 * 1000));
  const months2 = new Date(timestamp.valueOf() + (10 * 30 * 24 * 60 * 60 * 1000));
  t.is(ago(months), 'in 2 months');
  t.is(ago(months2), 'in 10 months');
});

test('year', (t) => {
  const year = new Date(timestamp.valueOf() - (350 * 24 * 60 * 60 * 1000));
  const year2 = new Date(timestamp.valueOf() - (1.5 * 360 * 24 * 60 * 60 * 1000));
  t.is(ago(year), 'last year');
  t.is(ago(year2), 'last year');
});

test('year future', (t) => {
  const timestamp = new Date();
  const year = new Date(timestamp.valueOf() + (350 * 24 * 60 * 60 * 1000));
  const year2 = new Date(timestamp.valueOf() + (1.5 * 360 * 24 * 60 * 60 * 1000));
  t.is(ago(year), 'in a year');
  t.is(ago(year2), 'in a year');
});

test('years', (t) => {
  const years = new Date(timestamp.valueOf() - (2 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp.valueOf() - (20 * 365 * 24 * 60 * 60 * 1000));
  const years3 = new Date(timestamp.valueOf() - (100 * 365 * 24 * 60 * 60 * 1000));
  const years4 = new Date(timestamp.valueOf() - (100000 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(years), '2 years ago');
  t.is(ago(years2), '20 years ago');
  t.is(ago(years3), '100 years ago');
  t.is(ago(years4), '100000 years ago');
});

test('years future', (t) => {
  const timestamp = new Date();
  const years = new Date(timestamp.valueOf() + (2 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp.valueOf() + (20 * 365 * 24 * 60 * 60 * 1000));
  const years3 = new Date(timestamp.valueOf() + (100 * 365 * 24 * 60 * 60 * 1000));
  const years4 = new Date(timestamp.valueOf() + (100000 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(years), 'in 2 years');
  t.is(ago(years2), 'in 20 years');
  t.is(ago(years3), 'in 100 years');
  t.is(ago(years4), 'in 100000 years');
});

test('max param', (t) => {
  const weeks = new Date(timestamp.valueOf() - (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp.valueOf() - (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks, 'day'), '14 days ago');
  t.is(ago(weeks2, 'day'), '21 days ago');
});

test('max param future', (t) => {
  const timestamp = new Date();
  const weeks = new Date(timestamp.valueOf() + (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp.valueOf() + (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks, 'day'), 'in 14 days');
  t.is(ago(weeks2, 'day'), 'in 21 days');
});

test('boundaries', (t) => {
  const minutes = new Date(timestamp.valueOf() - (1.8 * 60 * 1000));
  const minutes2 = new Date(timestamp.valueOf() - (14.7 * 60 * 1000));
  const hours = new Date(timestamp.valueOf() - (1.8 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp.valueOf() - (18.8 * 60 * 60 * 1000));
  const years = new Date(timestamp.valueOf() - (1.8 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp.valueOf() - (14.7 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(minutes), '2 minutes ago');
  t.is(ago(minutes2), '15 minutes ago');
  t.is(ago(hours), '2 hours ago');
  t.is(ago(hours2), '19 hours ago');
  t.is(ago(years), '2 years ago');
  t.is(ago(years2), '15 years ago');
});

test('boundaries future', (t) => {
  const timestamp = new Date();
  const minutes = new Date(timestamp.valueOf() + (1.8 * 60 * 1000));
  const minutes2 = new Date(timestamp.valueOf() + (14.7 * 60 * 1000));
  const hours = new Date(timestamp.valueOf() + (1.8 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp.valueOf() + (18.8 * 60 * 60 * 1000));
  const years = new Date(timestamp.valueOf() + (1.8 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp.valueOf() + (14.7 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(minutes), 'in 2 minutes');
  t.is(ago(minutes2), 'in 15 minutes');
  t.is(ago(hours), 'in 2 hours');
  t.is(ago(hours2), 'in 19 hours');
  t.is(ago(years), 'in 2 years');
  t.is(ago(years2), 'in 15 years');
});
