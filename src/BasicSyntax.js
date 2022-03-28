export function romanToInteger(str) {
    const valueRoman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    let prevValue = valueRoman[str[0]];
    for (let romanNumber of str) {
        let value = valueRoman[romanNumber];
        result += value;
        if (prevValue < value) {
            result -= prevValue * 2;
        }
        prevValue = value;
    }
    return result;
}
