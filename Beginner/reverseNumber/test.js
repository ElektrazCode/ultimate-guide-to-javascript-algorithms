const reverseNum = require('./index-START');

test('reverseNum is a function', () => {
    expect(typeof reverseNum).toEqual('function');
});

test('Works with positive values', () => {
    expect(reverseNum(321)).toEqual(123);
})

test('Works with negative values', () => {
    expect(reverseNum(-123)).toEqual(-321);
})




