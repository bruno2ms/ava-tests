import test from 'ava';
import { findEvenIndex, getLeftSumBeforeIndex, getRightSumAfterIndex } from './index';


test('Existe a função', t => {
  t.is(typeof(findEvenIndex), 'function');
});

test('Obtem soma da esquerda para index no meio', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(3, getLeftSumBeforeIndex(arr, 2));
});

test('Obtem soma da esquerda para index no inicio', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(0, getLeftSumBeforeIndex(arr, 0));
});

test('Obtem soma da esquerda para index no fim', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(15, getLeftSumBeforeIndex(arr, 6));
});

test('Obtem soma da direita para index no meio', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(13, getRightSumAfterIndex(arr, 1));
});

test('Obtem soma da direita para index no inicio', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(15, getRightSumAfterIndex(arr, 0));
});

test('Obtem soma da direita para index no fim', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(0, getRightSumAfterIndex(arr, 6));
});

test('The array [1,2,3,4,3,2,1] should get index 3', t => {
  let arr = [1,2,3,4,3,2,1];
  t.is(findEvenIndex(arr), 3);
});

test('The array [1,100,50,-51,1,1] should get index 1', t => {
  let arr = [1, 100, 50, -51, 1, 1];
  t.is(findEvenIndex(arr), 1);
});

test('The array [1,2,3,4,3,2,1] should get index 3', t => {
  let arr = [1, 2, 3, 4, 3, 2, 1];
  t.is(findEvenIndex(arr), 3);
});

test('The array [1,100,50,-51,1,1] should get index 1', t => {
  let arr = [1, 100, 50, -51, 1, 1];
  t.is(findEvenIndex(arr), 1);
});

test('The array [1,2,3,4,5,6] should get index -1', t => {
  let arr = [1, 2, 3, 4, 5, 6];
  t.is(findEvenIndex(arr), -1);
});

test('The array [20,10,30,10,10,15,35] should get index 3', t => {
  let arr = [20, 10, 30, 10, 10, 15, 35];
  t.is(findEvenIndex(arr), 3);
});
