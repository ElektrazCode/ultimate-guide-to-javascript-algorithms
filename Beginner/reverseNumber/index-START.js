// function reverseNum(num){
//     let sign = (num<0) ? -1 : 1;
//     let newNum = 0;
//     num = Math.abs(num);
    
//     while(num>0){
//         newNum = newNum*10 + num % 10;
//         num = Math.floor(num/10);
//     }
//     return sign*newNum;
// }

function reverseNum(num){
    let sign = Math.sign(num);
    num = Math.abs(num);
    return Number(num.toString().split('').reverse().join(''))*sign;
}

module.exports = reverseNum;