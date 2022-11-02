const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('piglatin translates words beginning with consonants', () => {
  expect(pigLatin("pig")).toEqual("igpay");
});

test('piglatin translates words beginning with consonant clusters', () => {
  expect(pigLatin("glove")).toEqual("oveglay");
});

test('piglatin translates words beginning with vowels', () => {
  expect(pigLatin("explain")).toEqual("explainway");
});
