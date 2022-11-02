/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



// function isAnagram(stringA, stringB) {
//     let letters = {};
//     for (let letter of stringA){
//         if (letters[letter])
//             letters[letter]++;
//         else 
//             letters[letter] = 1;
//     }
//     console.log(letters);
//     for (let letter of Object.keys(letters)){   //filter will cost us o(n2) instead make 2 char maps one for each string and compare them.
//         if ((stringB.split('').filter(l => l===letter).length || 0) !== letters[letter])
//             return false;
//     }
//     return true;
// }

function isAnagram(stringA, stringB) {
    const sanitize = (str) => str.toLowerCase().match(/[a-z]/ig).sort().join('');
    return sanitize(stringA) === sanitize(stringB);
}

module.exports = isAnagram

/**Performance: char Map is faster than direct comparison */