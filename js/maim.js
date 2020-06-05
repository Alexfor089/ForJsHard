const num = 266219;
let arr = [2, 6, 6, 2, 1, 9];
//Умножаем каждый элмент массива на следующий !
let result = arr.reduce((i, current) => i * current);
console.log(result);

// Функция с возведение полученного числа на 3

function finish() {
   let result2 = result ** 3;
   console.log(result2);
   //Делаем результат строкой,и через параметр slice выводим первые два значения!
   result2 = String(result2).slice(0, 2);
   alert(result2)
}
finish();














// arr.forEach(function (num, i, nums) {
//    console.log(num * ++i) // 2 4 6 8 10
// });



// arr = [2, 6, 6, 2, 1, 9].forEach(function (num, i, nums) {
//    console.log(num * ++i); // 2 4 6 8 10
// });


// arr = arr.map(function (element) {
//    if () {
//       operator = x * y * z * p * f * g;
//       console.log(arr[2, 6, 6, 2, 1, 9]);
//    }
// })

// [1, 2, 3, 4, 5].forEach(function (num, i, nums) {
//    console.log(i++ * ++i); // 2 4 6 8 10
// });


// arr = [2, 6, 6, 2, 1, 9].forEach(function () {
//    number = 2 * 6 * 6 * 2 * 1 * 9;
//    console.log(number);
//    alert(number ** 3[0, 1]);

//    function pow() {
//       for (let i = 1; i < n; i++) {
//          if (n < 1) {
//             number ** 3;
//          }
//          alert([0, 1]);
//          console.log(pow);
//       }

//    }
//    pow();
// });



// let = arr.forEach(function () {
//    x = arr[0],
//       y = arr[1],
//       z = arr[2],
//       f = arr[3],
//       g = arr[4],
//       h = arr[5];
//    console.log(x * y * z * f * g * h);
// });