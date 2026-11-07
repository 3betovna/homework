// Задача 1.

const person = {
    name: "Анна",
    age: 29,
    isDeveloper: true,

    greeting: function() {
        console.log(`Привет, я ${this.name} — веб-разработчик!`);
    }
};
person.greeting();

// Задача 2.

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
};

console.log(isEmpty({})); 

// Задача 3.

const task = {
    title: "Сделать домашнее задание по JS",
    description: "Разобраться с темой объектов",
    isCompleted: false,
};

function cloneAndModify(object, modifications) {
    const object2 = {...object, ...modifications};
    for (let key in object2) {
        console.log(`${key}: ${object2[key]}`);
    }
}

cloneAndModify(task, {isCompleted: true});

// Задача 4.

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

const callAllMethods = (object) => {
    for (let key in object) {
        if (typeof object[key] === "function") {
            object[key]();
        } else {
            console.log(object[key]);
        }
    }
};

callAllMethods(myObject);