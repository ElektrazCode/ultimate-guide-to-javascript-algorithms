/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function longestWord(text) {
//     let longest = '';
//     text.split(' ').forEach((word) => {
//         if (longest.length < word.length)
//             longest = word;
//     });
//     return longest;
// }

function longestWord(text) {
    const words = text.split(' ').sort((a,b) => a.length - b.length);
    return words[words.length-1];
}


module.exports = longestWord

/**Performance: fastest = forEach & reduce -> .sort()
 * 
 */