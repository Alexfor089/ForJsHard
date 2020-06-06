let num = 266219;
num = num.toString();
let arr = num.split("");
console.log(arr);

//Умножаем каждый элмент массива на следующий !

let result = arr.reduce(function (i, current) {
  return i * current;
});
console.log(result);

// Функция с возведение полученного числа на 3

function finish() {
  let result2 = result ** 3;
  console.log(result2);
  //Делаем результат строкой,и через параметр slice выводим первые два значения!
  result2 = String(result2).slice(0, 2);
  alert(result2);
}
finish();
