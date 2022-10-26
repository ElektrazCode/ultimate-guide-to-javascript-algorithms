/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // return text.split('').reverse().join('');
//     // return [...text].reverse().join('');   //ES6
//     return text.split('').reduce((acc, char)=> char + acc, '');
// }

// function reverseString(text) {
//     let revStr = '';
//     // for(let i=text.length-1; i>=0; i--){
//     //     revStr += text[i];
//     // }
//     for(letter of text){
//         revStr = letter + revStr;
//     }
//     return revStr;
// }

// function reverseString(text) {
//     let size = Math.floor(text.length/2);
//     let arr = text.split('');
//     for(let i=0; i<size; i++){
//         let temp = arr[i];
//         arr[i] = arr[arr.length-i-1];
//         arr[arr.length-i-1]= temp;
//     }
//     return arr.join('');
// // }
// console.log(reverseString('algorithms'));

function reverseString(text) {
    if(!text)
        return '';
    return reverseString(text.substr(1)) + text[0];
}


module.exports = reverseString