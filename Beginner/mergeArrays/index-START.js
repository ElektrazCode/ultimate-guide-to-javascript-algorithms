/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        // jointArray = [...jointArray, ...array]
        jointArray.concat(array);
    });
    //return joinArray.filter((item, index) => jointArray.indexOf(item) === index) //will only keep the first occurence of an element
    
    //return jointArray.reduce((newArray, item) =>{
    //     if (newArray.includes(item)){
    //         return newArray
    //     } else {
    //         return [...newArray, item]
    //     }
    // }, [])
    return [...new Set([...jointArray])]  //Array.from(new Set([...jointArray]))
    
}
/**Performance: .filter -> set -> .reduce */

module.exports = mergeArrays