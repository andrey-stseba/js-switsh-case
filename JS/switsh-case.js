"use strict";

// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num = 4;
let result;
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "лето";
    break;
  case 4:
    result = "осень";
    break;

  default:
    console.log(`введите число от 1 до 4`);
    break;
}
console.log(result);

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const month = 8;
switch (true) {
  case !month:
    console.log(`Нет такого месяца в году`);
    break;
  case month <= 2 || month === 12:
    console.log(`Это зимний месяц`);
    break;
  case month <= 5:
    console.log(`Это весений месяц`);
    break;
  case month <= 8:
    console.log(`Это летний месяц`);
    break;
  case month <= 11:
    console.log(`Это осений месяц`);
    break;

  default:
    console.log(`Нет такого месяца в году`);
    break;
}

// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const dayWeek = 2;

switch (dayWeek) {
  case 1:
    console.log(`Понедельник`);
    break;
  case 2:
    console.log(`вторник`);
    break;
  case 3:
    console.log(`среда`);
    break;
  case 4:
    console.log(`четверг`);
    break;
  case 5:
    console.log(`пятница`);
    break;
  case 6:
    console.log(`суббота`);
    break;
  case 7:
    console.log(`воскресенье`);
    break;
  default:
    console.log(`нет такого дня недели`);
    break;
}
// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = 25;

switch (true) {
  case !day:
    console.log(`нет такого числа в мецяце`);
    break;
  case day <= 10:
    console.log(`первая декада месяца`);
    break;
  case day <= 20:
    console.log(`вторая декада месяца`);
    break;
  case day <= 31:
    console.log(`третья декада месяца`);
    break;
  default:
    console.log(`нет такого числа в мецяце`);
    break;
}
