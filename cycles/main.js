// const hello = "Hello"

// for (let i = 0; i <= 5; i++) {
//     console.log("Пробежали круг:", i);
//     if (i % 2 === 0) {
//         console.log(hello)
//     }
// }

// for (let i = 10; i >= 0; i--) {
//     console.log("Старт через:", i);
// }

// let count = 1;

// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// let number = 10;

// do {
//     number = +prompt("Введите число > 10", 10);
// } while (number < 11)

// let i = 5;

// while (i > 0) {
//     console.log(i);
//     i--;
// }

// const number = +prompt("Введите число:", 0);

// for (let i = 1; i <= number; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// Задача 1.

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

// Задача 2.

const number = +prompt("Введите число:", 0);
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(`Факториал числа ${number} равен ${factorial}`);

// Задача 3.

let board = "";

for (let i = 1; i <= 8; i++) {
    let row = "";
    for (let j = 1; j <= 8; j++) {
        if ((i + j) % 2 === 0) {
            row += "# ";
        } else {
            row += "  ";
        }
    }
    row += "\n";
    board += row;
}
console.log(board);
