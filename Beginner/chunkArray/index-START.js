/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function chunkArray(array, size) {
//     let chunksNum = Math.ceil(array.length/size);
//     let chunks = [];
//     for(let i=0; i<chunksNum; i++){
//         chunks.push(array.slice(i*size, size+i*size));
//     }
//     return chunks;
// }
//Refactor
// function chunkArray(array, size) {
//     let chunks = [];
//     for(let i=0; i<array.length; i+=size){
//         chunks.push(array.slice(i, size+i));
//     }
//     return chunks;
// }


//Looping through elements approach
// function chunkArray(array, size) {
//     let result = []
//     for (value of array){
//         let lastArray = result[result.length -1 ]
//         if(!lastArray || lastArray.length == size){
//             result.push([value])
//         } else{
//             lastArray.push(value);
//         }
//     }
//     return result
// }

//Recursive approach
function chunkArray(array, size){
    if (array.length <= size)
        return [array];
    return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}

module.exports = chunkArray