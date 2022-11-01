/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let counter = 0;
    let size = Math.max(stringA.length, stringB.length);
    for (let i=0; i<size; i++){
        if(stringA[i] !== stringB[i])
            counter++;
    }
    return counter;
}



module.exports = hammingDistance