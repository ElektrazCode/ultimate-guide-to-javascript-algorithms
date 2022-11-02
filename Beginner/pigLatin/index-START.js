/* CHALLENGE
Translate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

//Imperative Approach

function pigLatin(text){
    let result = '';
    let vowels = new RegExp(/[aeiou]/, 'i');
    let startingVowel = text.match(vowels)[0];
    let index = text.indexOf(startingVowel);

    if (index === 0)
        result = text + 'way';
    else
        result = text.slice(index) + text.slice(0, index) + 'ay';
    return result;
}

//Declarative Approach

// function pigLatin(str) {
//     return str
//     .replace(/^([aeiouy])(._)/, '$1$2way')
//     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')  //^aeiouy is for negation _ should be stars and first _ should be ignored ??????? needs testing
// }

module.exports = pigLatin;

/**Performance:  Imperative Approach is faster
 * 
 */