"use strict";

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");
// console.log(styles);

// styles.splice(1, 1, "Классика");
// console.log(styles);

// const deLete = styles.shift();
// console.log(deLete);

// styles.unshift("Рэп", "Регги");
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];

// function logItems(array = []) {
//   for (let index = 0; index < users.length; index++) {
//     console.log(index, users[index]);
//   }
// }

// logItems();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
//  2) перепишіть функцією

  
 
// function findSmallestNumber(numbers) {
//   let smallNumber = numbers[0];

//   for (const number of numbers) {
//     if (smallNumber > number) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber
//   }



// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));


// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом


// const str = "ротатор";//true
// const newString = "Hello";//false

// const newStr = str.split("").reverse().join("");
// console.log(str === newStr);

// const secondStr = newString.split("").reverse().join("");
// console.log(newString === secondStr);
