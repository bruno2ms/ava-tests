const longest = (s1, s2) => {
    return sortString(sortString(s1) + sortString(s2));
}

const sortString = s => {
    return [...new Set(s.split('').sort())].join('');
}

// Best Solution
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

export { longest, sortString };