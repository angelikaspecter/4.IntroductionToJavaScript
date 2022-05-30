// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

// function sortNum(num1, num2) {
//     if (num1 < num2) {
//         console.log('-1');
//         return;
//     }
//     if (num1 > num2) {
//         console.log('1');
//         return;
//     }
//     if (num1 === num2) {
//         console.log('0');
//         return;
//     }
// };
// sortNum(15, 25);

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(num) {
//     var result = 1;
//     while (num) {
//         result *= num--;
//     }
//     return result;
// }
// console.log(factorial(5));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

// function oneNum(num1, num2, num3) {
//     console.log('' + num1 + num2 + num3);
// };
// oneNum(15, 4, 92);

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

// function sqr(w, h = w) {
//     console.log(w * h);
// };
// sqr(4, 16);

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.

// function perfectNum(num) {
//     let sum = 1;
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) {
//             sum += i;
//         }
//     }
//     return sum == num ? true : false;
// }
// console.log(perfectNum(6));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать,
//     совершенное число или нет.

// function perfectRange(min, max) {
//     let result = " ";
//     for (let j = min; j <= max; j++) {
//         if (perfectNum(j) == true) {
//             result += j + " ";
//         }
//     }
//     console.log(result);
// };
// perfectRange(6, 400);

// 7. Написать функцию, которая принимает время(часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс».
// Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00.

// function time(hour, min = "00", sec = "00") {
//     console.log(hour + ":" + min + ":" + sec);
// }
// time(14);
// time(14, 28);
// time(14, 28, 44);

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function secondsTime(hour, min, sec) {
    // let result = ((hour * 3600) + (min * 60) + sec);
    // console.log(result);
    /* for 10 */
    return ((hour * 3600) + (min * 60) + sec);
}
// secondsTime(2, 14, 28);

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч: мм: сс».

function reverseSecondsTime(sec) {
    let hour = parseInt(sec / 3600);
    let min = parseInt((sec - hour * 3600) / 60);
    sec = sec - hour * 3600 - min * 60;
    // let result = ((hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec));
    // console.log(result);
    /* for 10 */
    return ((hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec));
}
// reverseSecondsTime(8068);

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч: мм: сс». При выполнении задания используйте функции из предыдущих
// 2 - х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч: мм: сс».

function differenceTime(hour1, min1, sec1, hour2, min2, sec2) {
    let time1 = ((hour1 * 3600) + (min1 * 60) + sec1);
    let time2 = ((hour2 * 3600) + (min2 * 60) + sec2);
    let sec = time1 > time2 ? time1 - time2 : time2 - time1;
    console.log('Difference in time' + ':' + ' ' + reverseSecondsTime(sec));
}
differenceTime(18, 30, 24, 4, 31, 25);