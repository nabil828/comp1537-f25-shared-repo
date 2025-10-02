// console.log(Math.random() * 5 + 10);
// // console.log(Math.random() * 5); // [0, 4.9999999]
// // console.log(Math.random() * 5  + 10); // [10, 14.9999999]
// console.log(Math.floor(Math.random() * 5 + 10)); // [10, 14] // 10, 11, 12, 13, 14


console.log(Math.floor(Math.random() * 5 - 5)); // [-5,5) ❗
console.log(Math.floor(Math.random() * 11 - 5)); // [-5,5) ❗
console.log(Math.floor(Math.random() * 10 + -5)); // [-5,5) ✅
