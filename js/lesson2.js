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

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// function calculateAverage() {
//   console.log(arguments);
//   const numbers = Array.from(arguments);
//   console.log(numbers);
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum / numbers.length;
// }
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// function greet(name = "гість") {
//   return `Привіт, ${name}`;
// }

// ЗАДАЧА 7
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '

// function capitalize(string = "") {
//   const split = string.split(" ");

//   const words = [];

//   for (const element of split) {
//     const firstLater = element[0].toUpperCase();
//     const string = element.slice(1);
//     const finalString = `${firstLater}${string}`;
//     words.push(finalString);
//   }
//   return words.join(" ");
// }

// console.log(capitalize("the quick brown fox"));

// ЗАДАЧА 8
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression // function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = function (a, b) {
//   const numbers = a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;
//   return numbers;
// };

// const checkNumbers = (a, b) => (a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`);

// console.log(checkNumbers(1, 2));

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);
