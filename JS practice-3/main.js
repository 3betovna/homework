// function sum(num1, num2) {
//     return num1 + num2;
// }


// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(sum(30, 10)));

// const getFactorial = num => {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }


// const factorial = getFactorial(1);

// const isOdd = num => num % 2 !== 0;

// console.log(isOdd(factorial));

// (function log() {
//     console.log("LOG!");
// })();


// Задача 1.

function calculateFinalPrice(basePrice, discount, tax) {
    const discountSum = basePrice * (discount / 100);
    const priceAftDiscount = basePrice - discountSum;
    const taxSum = priceAftDiscount * tax;
    const finalPrice = priceAftDiscount + taxSum;
    return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));


// Задача 2.

function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

const username = prompt("Введите имя пользователя:");
const password = prompt("Введите пароль:");
const result = checkAccess(username, password);
console.log(result);



function getTimeOfDay(hour) {
    if (hour >= 0 && hour < 6) return "Ночь";
    if (hour >= 6 && hour < 12) return "Утро";
    if (hour >= 12 && hour < 17) return "День";
    return "Вечер";
}

const userInput = prompt("Введите время (час) от 0 до 23:");
const hourNumber = Number(userInput);

console.log(getTimeOfDay(hourNumber));

