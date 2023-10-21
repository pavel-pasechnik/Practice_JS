// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Iryna";
// const age = 47;
// const hobby = "JS";
// let massege = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
// console.log(massege);


// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

const userName = prompt("Введіть своє ім'я");
const userMail = prompt("Введіть Вашу пошту");
const userPhone = prompt("Введіть Ваш номер телефону");

let message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ  ${userMail} ПОЧТУ І ${userPhone} ТЕЛЕФОН`

console.log(message);
alert(message);
