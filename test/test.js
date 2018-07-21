import test from 'ava';
import ago from '../';

const timestamp = new Date();

test('just now', (t) => {
  t.is(ago(timestamp), 'just now');
});

test('minute', (t) => {
  const minute = new Date(timestamp - (60 * 1000));
  const minute2 = new Date(timestamp - ((60 * 1000) + 5000));
  t.is(ago(minute), 'a minute ago');
  t.is(ago(minute2), 'a minute ago');
});

test('minutes', (t) => {
  const minutes = new Date(timestamp - (2 * 60 * 1000));
  const minutes2 = new Date(timestamp - (20 * 60 * 1000));
  const minutes3 = new Date(timestamp - (45 * 60 * 1000));
  t.is(ago(minutes), '2 minutes ago');
  t.is(ago(minutes2), '20 minutes ago');
  t.is(ago(minutes3), '45 minutes ago');
});

test('hour', (t) => {
  const underHour = new Date(timestamp - (50 * 60 * 1000));
  const hour = new Date(timestamp - (60 * 60 * 1000));
  t.is(ago(underHour), 'an hour ago');
  t.is(ago(hour), 'an hour ago');
});

test('hours', (t) => {
  const hours = new Date(timestamp - (2 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp - (19 * 60 * 60 * 1000));
  t.is(ago(hours), '2 hours ago');
  t.is(ago(hours2), '19 hours ago');
});

test('yesterday', (t) => {
  const yesterday = new Date(timestamp - (20 * 60 * 60 * 1000));
  t.is(ago(yesterday), 'yesterday');
});

test('days', (t) => {
  const days = new Date(timestamp - (2 * 24 * 60 * 60 * 1000));
  const days2 = new Date(timestamp - (5 * 24 * 60 * 60 * 1000));
  t.is(ago(days), '2 days ago');
  t.is(ago(days2), '5 days ago');
});

test('week', (t) => {
  const week = new Date(timestamp - (6 * 24 * 60 * 60 * 1000));
  t.is(ago(week), 'last week');
});

test('weeks', (t) => {
  const weeks = new Date(timestamp - (2 * 7 * 24 * 60 * 60 * 1000));
  const weeks2 = new Date(timestamp - (3 * 7 * 24 * 60 * 60 * 1000));
  t.is(ago(weeks), '2 weeks ago');
  t.is(ago(weeks2), '3 weeks ago');
});

test('month', (t) => {
  const month = new Date(timestamp - (4 * 7 * 24 * 60 * 60 * 1000));
  const month2 = new Date(timestamp - (30 * 24 * 60 * 60 * 1000));
  t.is(ago(month), 'last month');
  t.is(ago(month2), 'last month');
});

test('months', (t) => {
  const months = new Date(timestamp - (2 * 30 * 24 * 60 * 60 * 1000));
  const months2 = new Date(timestamp - (10 * 30 * 24 * 60 * 60 * 1000));
  t.is(ago(months), '2 months ago');
  t.is(ago(months2), '10 months ago');
});

test('year', (t) => {
  const year = new Date(timestamp - (350 * 24 * 60 * 60 * 1000));
  const year2 = new Date(timestamp - (1.5 * 360 * 24 * 60 * 60 * 1000));
  t.is(ago(year), 'last year');
  t.is(ago(year2), 'last year');
});

test('years', (t) => {
  const years = new Date(timestamp - (2 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp - (20 * 365 * 24 * 60 * 60 * 1000));
  const years3 = new Date(timestamp - (100 * 365 * 24 * 60 * 60 * 1000));
  const years4 = new Date(timestamp - (100000 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(years), '2 years ago');
  t.is(ago(years2), '20 years ago');
  t.is(ago(years3), '100 years ago');
  t.is(ago(years4), '100000 years ago');
});

test('boundaries', (t) => {
  const minutes = new Date(timestamp - (1.8 * 60 * 1000));
  const minutes2 = new Date(timestamp - (14.7 * 60 * 1000));
  const hours = new Date(timestamp - (1.8 * 60 * 60 * 1000));
  const hours2 = new Date(timestamp - (18.8 * 60 * 60 * 1000));
  const years = new Date(timestamp - (1.8 * 365 * 24 * 60 * 60 * 1000));
  const years2 = new Date(timestamp - (14.7 * 365 * 24 * 60 * 60 * 1000));
  t.is(ago(minutes), '2 minutes ago');
  t.is(ago(minutes2), '15 minutes ago');
  t.is(ago(hours), '2 hours ago');
  t.is(ago(hours2), '19 hours ago');
  t.is(ago(years), '2 years ago');
  t.is(ago(years2), '15 years ago');
});
