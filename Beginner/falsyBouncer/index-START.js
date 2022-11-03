/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    return array.filter(element => element)
}


module.exports = falsyBouncer

/**Performance: a for..of loop pushing truthy values to a new array would be slightly faster than the .filter method */