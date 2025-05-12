//! Змінні та типи змінних

// const age = 10;

// let totallPrice = 200.5;

// const name = "Vlad"; // String
// const isMarried = false; // Boolean
// const isSingle = true; // Boolean
// const mtssage = "Hello world"; // String

// let totalPrice;

// let userName = null; // null
// let userAge = undefined; // undefined


// console.log(name); // Vlad
// console.log(isMarried); // false
// console.log(age); // 10
// console.log(totalPrice); // undefined
// console.log(mtssage); // Hello world
// console.log(typeof userName); // null=object


//! Арифметичні операції

// const a= 10;
// const b = 5;

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2 
// console.log(a % b); // 0
// console.log(a ** b); //

//! Виведення на екран загальноїкількості товару(яблок та вінограду)
// різниця між яблоками та виноградом

// const apples = 40;
// const grapes = 130;

// const total = apples + grapes;

// console.log(total); // Total fruits: 170

// console.log(apples - grapes); // Difference between apples and grapes: -90


//! Заміни вираз перепризначення комбінованним оператором


// let students = 100;

// students = students + 20; // 120
// students += 20; // 120
// students -= 10; // 110
// students *= 2; // 220
// students /= 2; // 110
// students %= 3; // 1

// console.log(students); 

//!Розбери пріорітет операторів в інструкції привласнення значення змінній.

// const result = 100 + 50 - 2 * 5 / 1; // 100 + 50 - 10 = 140

// console.log(result); // 140


//! Рядки

// const firstName = "Vlad";
// const lastName = "Kovalchuk";
// const fullName = firstName + " " + lastName; // конкатенація рядків

// console.log(fullName); // Vlad Kovalchuk
// console.log("Hello " + fullName); // Hello Vlad Kovalchuk

// const fullName = `${firstName} ${lastName}` // шаблонні рядки

// console.log(fullName); // Vlad Kovalchuk

//! індексовані рядочки
    //   
// const str = "Hello world";

// console.log(str[0]); // H

// const strLength = str.length; // довжина рядка

// console.log(str [strLength - 1]); // d

//! Склади фразу за допомогою шаблонних рядків
// * A has B boats in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Boston Dynamics";
// const repairBoats = 150;
// const defenceBoats = 50;

// const message = companyName + " has " + totalBoats + " boats in stock"; // конкатенація рядків

// const message = `${companyName} has ${repairBoats + defenceBoats} boats in stock`; // шаблонні рядки

// console.log(message); // Boston Dynamics has 200 boats in stock


//! Перетворення типів даних: рядки 

//?Явне перетворення типів.

// console.log(String(5));
// console.log(String(5.5)); // "5.5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(typeof String(undefined)); // "undefined"

//? Неявне перетворення типів

// console.log("5" + 3); // "53"
// console.log("5" + true); // "5true"
// console.log("5" + null); // "5null" 
// console.log("5" + undefined); // "5undefined"
// console.log(null + "5"); // "null5"
// console.log(5 + "5"); // "55"
// console.log(5 + 5 + "5"); // "105"
// console.log(5 + 5 + true); // 11

//! Перетворення типів: числа

//? Явне перетворення типів

// console.log(Number("5")); // 5
// console.log(Number("5.5")); // 5.5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("")); // 0
// console.log(Number("Hello")); // NaN
// console.log(Number("5.5px")); // NaN
// console.log(Number("5px")); // NaN  
// console.log(Number("5.5 5")); // NaN
// console.log(Number("5.5 5px")); // NaN

//? Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.

// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4

//? У разі використання операторів порівняння (<, >, <=, >=) також виконується неявне перетворення типів. 
// Якщо операнди різних типів, то перед порівнянням вони приводяться до числа.

// console.log("10" > 5); // true
// console.log(10 > "5"); // true
// console.log(5 > true); // true
// console.log(5 < true); // false
// console.log("5" < true); // false
// console.log("5" > true); // true
// console.log("5" == true); // false
// console.log("5" == 5); // true
// console.log("5" === 5); // false Результат false тут зумовлений тим, що оператор === (сувора рівність) не виконує автоматичне приведення типів.
// console.log(5 != "5"); // false // порівняння по значенню
// console.log(5 !== "5"); // true // порівняння по значенню та типу
// console.log("2" > "12"); // true    // порівняння по значенню читає першу ціфру 2, а потім 1, тому 2 більше ніж 1
// console.log("2" < "12"); // false   // порівняння по значенню
// console.log("Alice" < "alice"); // true  // порівняння по значенню a is bigger then A


//!  Task-1 from mentor
// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;

// ? 1. a + d = 6 + 1 = 7
//? 2. 7 + c = 7 + "12" = "712" (число 7 перетворюється в рядок конкатенація)
//?3. "712" + b = "712" + false = "712false" конкатенація рядків
//? 4. Результат: "712false"

// //! Пертворення рядків у числа 

// Метод Number.parseInt()

// let width = "50px";
// width = Number.parseInt(width); // перетворення рядка в число
// console.log(width); // 50
// console.log(Number.parseInt("5")); // 5 
// console.log(Number.parseInt("5.5"));
// console.log(Number.parseInt("5cm")); 5
// console.log(Number.parseInt("12qwe74")); // 12 
// console.log(Number.parseInt("12.46qwe79")); // 12 
// console.log(Number.parseInt("cm5")); // NaN 
// console.log(Number.parseInt("")); // NaN 
// console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat()
// let height = "200.5px";
// height = Number.parseFloat(height); // перетворення рядка в число з плаваючою комою
// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN



// !Арифметичні функціі
//! Class "Math"
//
// Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num.
// Наприклад:

// const volume = 5.7;

// console.log(Math.floor(volume)); // 5

// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num.
// Наприклад:
// const volume = 27.5;

// console.log(Math.ceil(volume)); // 28

// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// Math.round(num): повертає найближче ціле число до вказаного числа num.
// Наприклад:
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.4)); // 1

// Math.random(): повертає випадкове число в діапазоні від 0 до 1 (не включаючи 1).
// Наприклад:
// console.log(Math.random()); // 0.123456789
// console.log(Math.random()); // 0.987654321

// Math.max(...args): повертає найбільше число з переданих аргументів.
// Наприклад:

// console.log(Math.max(1, 2, 3)); // 3
// console.log(Math.max(1, 2, 3, 4, 5)); // 5

// Math.min(...args): повертає найменше число з переданих аргументів.
// Наприклад:

// console.log(Math.min(1, 2, 3)); // 1
// console.log(Math.min(1, 2, 3, 4, 5)); // 1

//! Дробове число.  При виконанні операцій з дробовими числами можуть
//  виникати неточності через внутрішнє представлення чисел у пам'яті комп'ютера.Наприклад, результат 0.1 + 0.2 не дорівнює 0.3.
//  Число 0.1 у двійковій системі числення, яку використовує комп'ютер — це нескінченний дріб. Двійкове значення нескінченних
// дробів зберігається лише до певного знака, тому виникає неточність. При додаванні 0.1 і 0.2 дві неточності складаються,
// виходить незначна,але все ж таки помилка в обчисленнях.

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2 == 0.3); // true

// ? Як виправити цю проблему?Залежно від необхідної точності, можна використовувати різні підходи.

// 1. Використовувати метод toFixed() для округлення числа до певної кількості знаків після коми.
// console.log((0.1 + 0.2).toFixed(1)); // 0.3

// 2. Використовувати множення на 10, щоб перетворити дроби в цілі числа, а потім ділити результат на 10.
// const a = 0.1;
// const b = 0.2;
// const result = (a * 10 + b * 10) / 10;
// console.log(result); // 0.3
// 3. Використовувати бібліотеки для роботи з числами з плаваючою комою, такі як Decimal.js або Big.js, які забезпечують точні обчислення з дробами.

//! Функції
//? Функція - це блок коду, який виконує певну задачу. Функції дозволяють організувати код, робити його більш читабельним і
// повторно використовувати.

// function add() {
//     console.log("Hello world"); // Hello world
// }

// add(); // Hello world

// function add(x, y) {
//     console.log(x + y);
// }

// add(5, 3);// 8
// add(10, 20); // 30
// add(100, 200); // 300

// function add(x, y) {
//     const total = x + y;
//     console.log(total);
// }
// add(5, 3); // 8 цей результат живе жіве тільки в тілі функції він не виводиться в глобальну область видимості

// function add(x, y) {
//     const total = x + y;
//     return total; // повертає значення з функції
    
// }

// const a = add(5, 3);
// console.log(a); // 8
// const petya = 20 *

// function add(a, b, c) {
//     return a + b + c
// }
  
// add(15, 27, 10);// 52
// console.log(add(15, 27, 10)); // 52

//Функція може повертати значення, яке можна використовувати в інших частинах програми.
//Функція може приймати параметри, які є змінними, що передаються в функцію під час її виклику.

//? Умова до задачі.Є три працівника і вони працюють 8 годин на день.
//? 1. Створити функцію, яка приймає три параметри: кількість працівників, кількість годин роботи на день і ставку за годину.
//? 2. Функція повинна повертати загальну суму заробітної плати за день. І плюсувати до перміальні 20%.
// const petya = 20 * 8 * 20;
// const alise = 20 * 8 * 15;
// const yura = 15 * 8 * 21;

// console.log("petya", petya); // 3200
// console.log("alise", alise); // 2400
// console.log("yura", yura); // 2520

//? 1. Створити функцію, яка приймає три параметри: кількість працівників, кількість годин роботи на день і ставку за годину.
//? 2. Функція повинна повертати загальну суму заробітної плати кожного працівника за місяць. І плюсувати до перміальні 20%.

// function foo(x, y) {
//     const daytotal = x * 8;
//     return daytotal * y;
    
// }
// const petya = foo(20, 20);
// const alise = foo(20, 15);
// const yura = foo(15, 21);

// console.log("petya", petya); // 3200
// console.log("alise", alise); // 2400
// console.log("yura", yura); // 2520

//? Плюсуємо премію 20% до кожного працівника

// function foo(x, y) {
//         const daytotal = x * 8 * 1.2; // 1.2 - це 20% премії
//     return daytotal * y;
        
//     }
//     const petya = foo(20, 20);
//     const alise = foo(20, 15);
//     const yura = foo(15, 21);
    
//     console.log("petya", petya); // 3840
//     console.log("alise", alise); // 2880
//     console.log("yura", yura); // 3024

//! Області видимості

//? Глобальна область видимості - це область, в якій доступні всі змінні, функції та об'єкти, оголошені в глобальному контексті.

// const str = "Hello world"; // глобальна змінна

// function foo(params) {
    
// }

// console.log(str); // Hello world

//? Локальна область видимості - це область, в якій доступні змінні, функції та об'єкти, оголошені в локальному контексті.

// const str = "Hello world"; // глобальна змінна

// function foo() {
//     const str = "Hello"; // локальна змінна
//     console.log(str); // Hello
    
// }

// foo(); // Hello

// const str = "Hello world"; // глобальна змінна

// function foo() {
//     const msg = "Hello"; // локальна змінна
//     function lalala() {
//         const a = "lalala";
//         console.log(a);// lalala
//         console.log(msg); // Hello
//         console.log(str); // Hello world
//     }
//     lalala();
    
// }

// foo();/ // Hello world

//! Task 2
//  Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.Для цього потрібно вагу розділити на квадрат висоти.
//  Вага та висота будуть спеціально передані в рядки.Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7.тобто як роздільник дробової частини
//  може бути кома.
//  Індекс маси тіла необхідно округлити до однієї ціфри після коми.

// function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", "."); // заміна коми на крапку
//     numWeight = Number.parseFloat(numWeight); // перетворення рядка в число з плаваючою комою
//     const numHeight = Number.parseFloat(height); // перетворення рядка в число з плаваючою комою
//     const bmi = numWeight / (numHeight ** 2); // розрахунок індексу маси тіла
//     return bmi. toFixed(1); // округлення до однієї цифри після коми

// }   


// const bms = calcBMI("88,3", "1.75"); 
// console.log(bms); 

//! Task 3

// console.log(typeof typeof 1);// string

//! JavaScript виконує вирази зліва направо, але typeof — це унарний оператор, який застосовується до одного операнда. 
//! Ось що відбувається у прикладі:

//! typeof 1 — спочатку виконується ця частина, і результатом буде рядок "number".

//! typeof "number" — потім typeof застосовується до отриманого "number", і результатом буде "string".

//!Тобто, справа наліво не читається, просто один typeof виконується перед наступним, бо він вже отримує результат
//! попередньої операції.

//! В результаті, typeof typeof 1 повертає "string", оскільки тип рядка є результатом другого виклику typeof.







