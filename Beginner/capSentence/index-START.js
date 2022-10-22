/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




// function capSentence(text) {
//    return text.split(' ')
//               .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())  //can also use .slice(1)
//               .join(' ');
// }
function capSentence(text) {
  let sentence = text.toLowerCase().split(' ');
   return sentence.map(word => word.replace(word[0], word[0].toUpperCase()))
                  .join(' ');
}

// function capSentence(text) {
//   let output = '';
//   let i = 0;
//   while(text[i]){
//     let space = text.indexOf(' ', i+1) || text.length;
//     output += text[i].toUpperCase() + text.substring(i+1, space).toLowerCase();
//     i = space + 1;
//   }
//   return output;
// }
console.log(capSentence('the lion king'));

module.exports = capSentence

/**Performance: .map & .slice is the fastest solution -> forEach -> .map & .replace
 * 
*/