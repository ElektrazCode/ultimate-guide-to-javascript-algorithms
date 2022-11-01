/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// function palindromeChecker(text) {
//     return text.toLowerCase() === text.toLowerCase().split('').reverse().join('');
// }

// function palindromeChecker(text) {
//     let size = Math.floor(text.length);
//     for(let i=0; i<size; i++){
//         if (text[i]!==text[text.length-i-1])
//             return false;
//     }
//     return true;        
// }

function palindromeChecker(text){
    let charArray = text.toLowerCase().split('');
    return charArray.every((letter, index)=> letter === charArray[charArray.length - index - 1]);
}


module.exports = palindromeChecker;

/**Performance: fastest = optmizied for loop (1/2) -> .every -> .reverse() 
 * 
 */