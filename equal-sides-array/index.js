const findEvenIndex = arr => {
  let i,
    len = arr.length;

  for (i = 0; i< len; i++)  {
    if (getLeftSumBeforeIndex(arr, i) === getRightSumAfterIndex(arr, i)) {
      return i;
    }
  }
  return -1;
}

const getLeftSumBeforeIndex = (arr, idx) => {
  return arr.slice(0, idx).reduce((x, y) => {
    return x + y;
  }, 0)
}

const getRightSumAfterIndex = (arr, idx) => {
  let len = arr.length;
  return arr.slice(idx + 1, len).reduce((x, y) => {
    return x + y;
  }, 0)
}

export { findEvenIndex, getLeftSumBeforeIndex, getRightSumAfterIndex };