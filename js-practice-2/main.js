// Задача 1.

const x = +prompt("Введите число", 0);

if (x % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

// Задача 2.

const age = 29;
let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Ваша скидка ${discount}%`);


let _discount;

switch (true) {
    case (age < 18):
        _discount = 10;
        console.log(`Ваша скидка ${_discount}%`);
    break;
    case ( age <= 65):
        _discount = 20;
        console.log(`Ваша скидка ${_discount}%`);
    break;
    default:
        _discount = 30;
        console.log(`Ваша скидка ${_discount}%`);
}

// Это черновик:
// if (age < 18) {
//     discount = 0.1;
//     console.log("Для вас скидки 10%", discount);
// } else if (age >= 18 && age <= 65) {
//     discount = 0.2;
//     console.log("Для вас скидка 20%", discount);
// } else {
//     discount = 0.3;
//     console.log("Для вас скидка 30%", discount);
// }


// Задача 3.

const userName = prompt("Введите имя пользователя", "admin" || "user");
const password = +prompt("Введите пароль", 123456);

if ((userName === "admin" || userName === "user") && password === 123456) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}




