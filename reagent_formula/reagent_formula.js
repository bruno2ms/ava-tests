const verify = arr => {
  if (
    (arr.includes(1) && arr.includes(2)) ||
    (arr.includes(3) && arr.includes(4)) ||
    (
      (arr.includes(5) && !arr.includes(6)) ||
      (arr.includes(6) && !arr.includes(5))
    ) ||
    !(arr.includes(7) || arr.includes(8))
  ) {
    return false;
  } else {
    return true;
  }
}

export { verify };