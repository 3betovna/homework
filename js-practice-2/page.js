// Задача 4.

const weight = +prompt("Укажите вес", 0);
const delivery = prompt("Укажите тип доставки", "Стандарт", "Экспресс", "Премиум");

// if (weight <= 0) {
//     console.log("Некорректный вес посылки");
// } else if (delivery !== "Стандарт" && delivery !== "Экспресс" && "Премиум") {
//     console.log("Неверный тип доставки");
// }

switch (true) {
    case (weight <= 0):
        alert("Некорректный вес посылки");
        break;
    case (delivery !== "Стандарт" && delivery !== "Экспресс" && delivery !== "Премиум"):
        alert("Неверный тип доставки");
        break;
    default: {
            let price = 0;
    if (weight < 1) {
        price = 5;
    } else if ( weight <= 5) {
        price = 10;
    }
    else {
        price = 15;
    }
    
    let coefficient = 1;
    switch (delivery) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
    }
    let finalPrice = price * coefficient;
    alert(`Итоговая стоимость доставки: ${finalPrice}$`);
    }
}