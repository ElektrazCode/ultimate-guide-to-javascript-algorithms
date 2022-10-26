/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// function vowelsCounter(text) {
//     let count = 0;
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     for (char of text.toLowerCase()){
//         if (vowels.has(char))
//             count++;
//     }
//     return count;
// }

function vowelsCounter(text) {
    return text.match(/[aeiou]/ig).length || 0;
}

// function vowelsCounter(text){
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     return [...text.toLowerCase()].reduce((acc, char)=> acc += vowels.has(char) ? 1 : 0, 0);
// }

// function vowelsCounter(text){
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     return text.toLowerCase().split('').filter(char=> vowels.has(char)).length || 0;
// }

// console.log(vowelsCounter('bdc'));

module.exports = vowelsCounter;


/** Performance-- Best to worst: RegExp -> for loop 
 * 
 */