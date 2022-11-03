const rangeSum = require('./index-START');

test('rangeSum is a function', () => {
    expect(typeof rangeSum).toEqual('function');
});

test('Range starting at 1', () => {
    expect(rangeSum([1,5])).toEqual(15);
})

test('Range starting at different number', () => {
    expect(rangeSum([3,7])).toEqual(25);
})




