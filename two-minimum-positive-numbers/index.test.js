import test from 'ava';
import { sumTwoSmallestNumbers } from './index';

test('Sum should be 13', t => {
    t.is(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13)
});

test('Sum should be 6', t => {
    t.is(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6)
});

test('Sum should be 10', t => {
    t.is(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10)
});

test('Sum should be 24', t => {
    t.is(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24)
});

test('Sum should be 16', t => {
    t.is(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16)
});
