import moment from 'moment';
import { parseTimeExpression } from '../src/moment-query.lib';

// write some test cases

test('should add 1 hour', () => {
    expect(parseTimeExpression('now+1h').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 hour', () => {
    expect(parseTimeExpression('now-1h').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 day', () => {
    expect(parseTimeExpression('now+1d').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 day', () => {
    expect(parseTimeExpression('now-1d').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 month', () => {
    expect(parseTimeExpression('now+1M').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 month', () => {
    expect(parseTimeExpression('now-1M').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 year', () => {
    expect(parseTimeExpression('now+1y').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 year', () => {
    expect(parseTimeExpression('now-1y').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 quarter', () => {
    expect(parseTimeExpression('now+1Q').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'quarter').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 quarter', () => {
    expect(parseTimeExpression('now-1Q').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'quarter').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 second', () => {
    expect(parseTimeExpression('now+1s').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'second').format('YYYY-MM-DD HH:mm:ss'));
});

test('should substract 1 second', () => {
    expect(parseTimeExpression('now-1s').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'second').format('YYYY-MM-DD HH:mm:ss'));
});

test('should add 1 month and substract 2 minutes', () => {
    expect(parseTimeExpression('now+1M-2m').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'month').subtract(2, 'minutes').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get the previous month', () => {
    expect(parseTimeExpression('month.start-1M').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get the next month', () => {
    expect(parseTimeExpression('month.start+1M').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get the previous year', () => {
    expect(parseTimeExpression('year.start-1y').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get the next year', () => {
    expect(parseTimeExpression('year.start+1y').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().add(1, 'year').startOf('year').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get end of the month', () => {
    expect(parseTimeExpression('month.end').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().endOf('month').format('YYYY-MM-DD HH:mm:ss'));
});

test('should get end of the year', () => {
    expect(parseTimeExpression('year.end').format('YYYY-MM-DD HH:mm:ss')).toBe(moment().endOf('year').format('YYYY-MM-DD HH:mm:ss'));
});