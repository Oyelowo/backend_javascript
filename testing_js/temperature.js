// You have an array with temperatures: [0, -5, 5, 1, 4, -3]. Return the closest
// temp to 0. If the array is empty: return 0. If the smallest temperature has
// a double in negative (3, and -3 per se), return the positive.

let tempArr =[2, -5, 5, 4,-1, -3]; 


let rem =(arr)=>{
let kk = arr.filter(t=> t>=0);
let mm = Math.min(...kk);

let ll = arr.filter(t=> t<=0);
let nn = Math.max(...ll);
let absn= Math.abs(nn);

return mm===absn ? mm : mm<absn?mm:nn;
}

console.log(rem(tempArr));

// let inverseSign=(num)=>{
//     return num<=0? Math.abs(num): -num;
// }

// let kk = tempArr.map(t=> inverseSign(t));
// let ll =kk.filter(t=>t>0)
// console.log(ll);

// let kk = tempArr.map(t =>{
//     return Math.abs(t)-0;
// })

// ll= tempArr.filter(t=>{
//         return t===Math.min(...kk)
//     })


// console.log('ll', ll);

// let kk =  tempArr.filter(t=>{
//     tp= Math.abs(t);
//     if(t = 0){
//         return 0
//     }else if()
// })