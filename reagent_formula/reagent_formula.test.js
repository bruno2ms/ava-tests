import test from 'ava';
import { verify } from './reagent_formula';

test('Function verify exists', t => {
  t.is(typeof(verify), 'function');
});

test('[1, 3, 7] should be true', t => {
  var arr = [1, 3, 7];
  t.is(verify(arr), true);
});

test('[7, 1, 2, 3] should be false', t => {
  var arr = [7, 1, 2, 3];
  t.is(verify(arr), false);
});

test('[1,3,7], The output should be true.', t => {
  var arr = [1,3,7];
  t.is(verify(arr), true);
});

test('[7,1,2,3], The output should be false.', t => {
  var arr = [7,1,2,3];
  t.is(verify(arr), false);
});

test('[1,3,5,7], The output should be false.', t => {
  var arr = [1,3,5,7];
  t.is(verify(arr), false);
});

test('[1,5,6,7,3], The output should be true.', t => {
  var arr = [1,5,6,7,3];
  t.is(verify(arr), true);
});

test('[5,6,7], The output should be true.', t => {
  var arr = [5,6,7];
  t.is(verify(arr), true);
});

test('[5,6,7,8], The output should be true.', t => {
  var arr = [5,6,7,8];
  t.is(verify(arr), true);
});

test('[6,7,8], The output should be false.', t => {
  var arr = [6,7,8];
  t.is(verify(arr), false);
});

test('[7,8], The output should be true.', t => {
  var arr = [7,8];
  t.is(verify(arr), true);
});