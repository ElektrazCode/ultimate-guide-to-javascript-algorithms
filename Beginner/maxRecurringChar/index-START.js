/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



// function maxRecurringChar(text) {
//     let letters = {};
//     let maxChar;
//     let max=0;
//     for (let letter of text){
//         if (letter in letters)  //if (letter.hasOwnProperty(letter)) or if (letters[letter])
//             letters[letter]++;
//         else
//             letters[letter] = 1; 
//     }
//     for(let letter in letters){
//         if(letters[letter]>max){
//             max = letters[letter];
//             maxChar = letter;
//         }
//     }
//     return maxChar;
// }

function maxRecurringChar(text) {
    let letters = {};

    for (let letter of text){
        if (letter in letters)  //if (letter.hasOwnProperty(letter)) or if (letters[letter])
            letters[letter]++;
        else
            letters[letter] = 1; 
    }

    let chars = Object.keys(letters);
    let values = Object.values(letters);
    let max = Math.max(...values);
    return chars[values.indexOf(max)];
}


module.exports = maxRecurringChar;

/**Performance-- Best to worst: for..in -> converting object into arrays methods
 * 
 */