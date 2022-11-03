// function rangeSum(arr){
//     let start = arr[0];
//     let end = arr[1];
//     let sum = 0;
//     for(let i=start; i<=end; i++) {
//         sum +=i;
//     }
//     return sum;
// }

function rangeSum(arr){
    let numbers = new Array(arr[1]-arr[0]+1).fill(arr[0]);
    return numbers.map((num, index)=> num + index).reduce((acc, num) => acc + num);
}

// function rangeSum(arr){
//     let start = arr[0];
//     let end = arr[1];

//     return (end*(end+1)/2) - ((start-1)*start/2);   //Arithmetic Progressive Formula: ((end - start +1) * (start + end)) / 2;
// }

// function rangeSum(arr){
//     let sum = (min, max) => (max<min) ? 0 : max + sum(min, max-1);
//     return sum(arr[0], arr[1]);
// }

module.exports = rangeSum;

/**Performance: optimal: for loop -> least: recursion */