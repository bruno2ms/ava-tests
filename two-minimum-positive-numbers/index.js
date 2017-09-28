const sumTwoSmallestNumbers = (x) => {
    let [a, b] = x.sort((a, b) => a - b);
    return a + b;
}

export { sumTwoSmallestNumbers };