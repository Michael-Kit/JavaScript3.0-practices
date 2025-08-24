//! Змінні та типи змінних

// const age = 10;

// let totallPrice = 200.5;

// const name = "Vlad"; // String
// const isMarried = false; // Boolean
// const isSingle = true; // Boolean
// const message = "Hello world"; // String

// let totalPrice;

// let userName = null; // null
// let userAge = undefined; // undefined


// console.log(name); // Vlad
// console.log(isMarried); // false
// console.log(age); // 10
// console.log(totalPrice); // undefined
// console.log(message); // Hello world
// console.log(typeof userName); // null=object

//todo :   NB

// У JavaScript, const означає, що змінна не може бути перевизначена (тобто їй не можна присвоїти нове значення). 
// Однак якщо змінна містить об'єкт або масив, то її властивості або елементи можна змінювати. Тобто сама змінна user чи book залишається незмінною,
// але її внутрішній стан можна оновлювати.
// const user = { name: "Alice", age: 25 };

// // Це дозволено, бо ми змінюємо властивість об'єкта
// user.age = 30;

// console.log(user.age); // 30

// // Але це НЕ дозволено - перевизначення змінної повністю
// user = { name: "Bob", age: 40 }; // Виникне помилка!
// Отже, const запобігає зміні самої змінної, але не її внутрішнього вмісту, якщо це об'єкт чи масив.
// Цей запис у фігурних дужках ({}) у JavaScript означає об'єкт.

// Об'єкти—це структури даних, які дозволяють зберігати пари "ключ-значення", де:

// name та age — ключі (або "властивості").

// "Alice" та 25 — значення, що належать цим ключам.

// Щоб отримати значення певної властивості, можна використовувати крапкову нотацію:

// const person = { name: "Alice", age: 25 };

// console.log(person.name); // Виведе "Alice"
// console.log(person.age);  // Виведе 25
// Або квадратні дужки:
// console.log(person["name"]); // Виведе "Alice"
// console.log(person["age"]);  // Виведе 25

// Об'єкти дозволяють зберігати більше даних всередині, наприклад:

// const user = {
//     name: "Bob",
//     age: 30,
//     skills: ["JavaScript", "HTML", "CSS"],
//     address: {
//       city: "Kyiv",
//       country: "Ukraine"
//     }
//   };
  
//   console.log(user.skills[0]);    // Виведе "JavaScript"
//   console.log(user.address.city); // Виведе "Kyiv"
  

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

//!  Порівняння конкатенації та шаблонних рядків

// Код з конкатенацією, де

// "Welcome " ", your room number is " та "!" — це статичний текст
// guestName та roomNumber — імена змінних.

//? const guestName = "Mango";
//? const roomNumber = 207;
//? const greeting =
//?   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
//? console.log(greeting); // "Welcome Mango, your room number is 207!"


// const guestName = "Lyuba";
// const roomNumber = 102;
// const greeting = "Welcome " + guestName + ", your room number is " + roomNumber + "!";

// console.log(greeting);

// const guestName = "Lyuba";
// const roomNumber = 102;
// const greeting = `Welcome ${guestName} , your room number is ${roomNumber} !`;

// console.log(greeting);



// Код, де значення цих змінних підставляються у шаблонний рядок.

// *    const guestName = "Mango";
// *    const roomNumber = 207;
// *    const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// *    console.log(greeting); // "Welcome Mango, your room number is 207!"

//? Task practice:

// Declare the  message  variable and write the purchase message to it.

// It will be a string in the format: "You picked <product name>, price per item is <price per item> credits", where

// <product name> is the value of the variable productName.
// <product price> is the value of the variable pricePerItem.
// Use the syntax of template strings. Avoid unnecessary characters (spaces, commas, or periods not required by the string content).

// The productName variable is declared.
// The value of the productName variable is the string "Droid".
// The pricePerItem variable is declared.
// The value of the pricePerItem variable is the number 3500.
// The message variable is declared.
// The value of the message variable is a string "You picked Droid, price per item is 3500 credits".

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `Your picked ${productName}, price per item is ${pricePerItem} credits.`;

// console.log(message);

// The repair droid shop is ready to open; the only thing left is to write the order script.Declare the variables and assign them
// the appropriate values:

// pricePerDroid is the price of one droid, value is 800.
// orderedQuantity is the number of droids in the order, value is 6.
// deliveryFee is a shipping cost, value is 50.
// totalPrice is the total amount due for the order (the price of one droid multiplied by the number of droids in the order, plus the delivery cost).
// message is a notification of the order status in the format "You ordered droids worth <total price> credits".
// The orderedQuantity variable is declared.
// The value of the orderedQuantity variable is the number 6.
// The pricePerDroid variable is declared.
// The value of the pricePerDroid variable is the number 800.
// The deliveryFee variable is declared.
// The value of the deliveryFee variable is the number 50.
// The totalPrice variable is declared.
// The value of the totalPrice variable is the number 4850.
// The message variable is declared.
// The value of the message variable is a string "You ordered droids worth 4850 credits"

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = 4850;
// const message = `You ordered droids worth ${totalPrice} credits`;

// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;

// console.log(message);


//! індексовані рядочки
    //   
// const str = "Hello world";

// console.log(str[0]); // H

// Add code that assigns the following values to the variables:

// courseTopicLength — a length of a string.
// firstElement — a first character of the string.
// lastElement — the last character of the string (use the courseTopicLength variable).
// The courseTopic variable is declared.
// The value of the courseTopic variable is the string ".
// The courseTopicLength variable is declared.
// The value of the courseTopicLength variable is the number 21.
// The firstElement variable is declared.
// The value of the firstElement variable is the string "J".
// The lastElement variable is declared.

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic. length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic. length-1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// const strLength = str.length; // довжина рядка

// console.log(str [strLength - 1]); // d

// Task:
// The username variable stores a string with the user's name. Declare a variable message and use template string syntax
// to enhance the code so that it stores a string in the following format: "Username <name> is <length> characters long",
// where < name > is the username from the username variable, and < length > is its length.

// The username variable is declared.
// The message variable is declared.
// If the value of username is "Poly", the value of message will be "Username Poly is 4 characters long".
// If the value of username is "Harambe", the value of message will be "Username Harambe is 7 characters long".
// If the value of username is "Billy", the value of message will be "Username Billy is 5 characters long".
// If the value of username is "Joe", the value of message will be "Username Joe is 3 characters long".
// The syntax of template strings is applied. 

// const username = "Poly";
// const message =`Username ${username} is ${username.length} characters long`;

// console.log(message);


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

// 

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

// Task:
// The value variable contains a quantity as a string consisting of a numerical part and a unit of measurement. For example, 24.5px, 14cm, 20.3vh,  and so on.

// Declare the numerical variable and complete the code so that:

// If possible, the value of the numerical variable will be a floating-point number formed from the string in the value variable.
// Otherwise, the value of numerical will be NaN.
// The value variable is declared.
// The numerical variable is declared.
// If the value of value is "24.5px", the value of numerical will be 24.5.
// If the value of value is "14cm", the value of numerical will be 14.
// If the value of value is "20.3vh", the value of numerical will be 20.3.
// If the value of value is "Poly16", the value of numerical will be

// const value = "24.5px";
// const numirical = parseFloat(value);

// console.log(numirical);


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

// Task:
// Declare the ‘sayHi’ function. In the body of the sayHi function, add a console.log() with the string "Hello, this is my first function!".

// After the declaration, call the sayHi function.

// A function declaration is pending.
// The function is assigned the name sayHi.
// In the body of the sayHi function, there is console.log("Hello, this is my first function!").
// After the declaration, there is a call to the sayHi function.

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// add(5, 3); // 8 цей результат жіве тільки в тілі функції він не виводиться в глобальну область видимості

//?   Параметри та аргументи

// У круглих дужках після імені функції вказуються параметри. Параметри є перерахуванням даних, які очікує функція під час виклику.

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// Параметри — це локальні змінні, доступні лише всередині тіла функції.
// Параметри розділяються комами. Функція може мати будь-яку кількість параметрів або не мати їх взагалі, у такому випадку вказуються просто порожні круглі дужки.
// Під час виклику функції в круглих дужках можна передати аргументи, які є значеннями для оголошених параметрів функції.

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"

// Отже, у прикладі вище маємо параметри x, y, z.
// Під час кожного виклику функції параметр може отримувати нове значення з аргументів. Наприклад, параметр x спочатку отримав значення 2, потім 4, потім 17.


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

// Task: 
// The add function should be able to add three numbers and output the result to the console. Declare three parameters for the add function: a, b, and c, which will receive values from the arguments when it is called.

// Enhance console.log() so that it logs the string "Addition result equals <result>", where <result> is the sum of the passed numbers.

// The add(a, b, c) function is declared.
// The call add(15, 27, 10) outputs "Addition result equals 52" to the console.
// The call add(10, 20, 30) outputs "Addition result equals 60" to the console.
// The call add(5, 10, 15) outputs "Addition result equals 30" to the console.

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//? Повернення значення
// Оператор return використовується для повернення значення з тіла функції назад у код, у місце її виклику.Коли інтерпретатор зустрічає оператор return,
// він негайно виходить із функції(припиняє її виконання) і повертає вказане після return значення в місце виклику функції.

// function multiply(x, y, z) {
// 	const product = x * y * z;
//   // Повертаємо результат виразу множення
//   return product;
// }

// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 3, 5);
// console.log(result); // 30

// Щоб уникнути оголошення зайвої змінної в тілі функції, можна відразу ж повертати результат виразу.Так, немає необхідності створювати окрему змінну 
// для зберігання результату виразу.

// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // 30

// Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення, функція поверне спеціальне значення undefined.

// function multiply(x, y, z) {
// 	const product = x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined

// При використанні оператора return всі інструкції, які йдуть на рядках після нього, в тілі функції не виконуються, оскільки виконання функції 
// припиняється відразу після зустрічі оператора return.

// function multiply(x, y, z) {
//   console.log('The code before return is executed as usual');

//   return x * y * z;

//   console.log('This code is never executed because it is after return');
// }

// console.log(multiply(2, 3, 5)); // 30

//* Прочитай приклад коду

//*     function makeMessage(username) {
//*     	console.log(`Hello ${username}`); 
//*     }

//*     makeMessage("Jacob");

//*      const result = makeMessage("Jacob"); //Але оскільки в тілі функції немає оператора return, вона формально повертає undefined. Якщо спробувати зберегти її 
 //*     результат у змінну, отримаємо:
//*     console.log(result); // Виведе: undefined

//*     Яке значення поверне виклик функції в коді вище?

//*     undefined
//          “Hello Jacob”
//          null
//          “Hello username”
//          Result

//*     Звісно, так і є! У тілі функції відсутній оператор return, і функція поверне значення undefined.

//Функція може повертати значення, яке можна використовувати в інших частинах програми.
//Функція може приймати параметри, які є змінними, що передаються в функцію під час її виклику.

// Task ^
// The makeMessage(name, price) function creates and returns a purchase message.It declares two parameters, the values of which will be provided during its invocation.

// name — the name of the product.
// price — the price of the product.
// Enhance the function code so that it returns the string "You picked <product name>, price per item is <product price> credits", where <product name> and <product price> are the values of the name and price parameters. It is very convenient to make this string using a template string syntax.

// Pay Attention!
// Note that the code is missing a call to the makeMessage function. From this task onwards, we will call your functions and check how they work. You will see the results of our checks in the Results section below the code editor.

// The makeMessage(name, price) function is declared.
// The call makeMessage('Radar', 6150) returns "You picked Radar, price per item is 6150 credits".
// The call makeMessage('Scanner', 3500) returns "You picked Scanner, price per item is 3500 credits".
// The call makeMessage('Reactor', 8000) returns "You picked Reactor, price per item is 8000 credits".
// The call makeMessage('Engine', 4070) returns "You picked Engine, price per item is 4070 credits".

// function makeMessage(name, price) {

//     return `You picked ${name}, price per item is ${price} credits`;
    
// }

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// Task:
// Declare the calculateTotalPrice function, which calculates the total amount of the purchase. It accepts two parameters, the values of which will be provided during its invocation.

// orderedQuantity is the first parameter, representing the number of units of the product in the order;
// pricePerItem is the second parameter, representing the unit price.
// The function should return the total amount of the purchase — the result of multiplying the quantity of products by the price of one.

// The calculateTotalPrice (orderedQuantity, pricePerItem) function is declared.
// The call calculateTotalPrice(5, 100) returns 500.
// The call calculateTotalPrice(8, 60) returns 480.
// The call calculateTotalPrice(3, 400) returns 1200.
// The call calculateTotalPrice(1, 3500) returns 3500.
// The call calculateTotalPrice(12, 70) returns 840.
// A call to the function with random but valid arguments returns the correct value.

// function calculateTotalPrice(orderedQuantity, pricePerItem) {

//     return orderedQuantity * pricePerItem;
    
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//? Умова до задачі.Є три працівника і вони працюють 8 годин на день.

//? 1. Створити функцію, яка приймає три параметри: кількість працівників, кількість годин роботи на день і ставку за годину.
//? 2. Функція повинна повертати загальну суму заробітної плати за день. І плюсувати до перміальні 20%.

            //   d   h    $/h
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


// Задача 1. Замовлення дроїдів

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: 
// • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число,
// що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!",
// де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

//     function makeTransaction(quantity, pricePerDroid ) {
//         const totallPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totallPrice} credits!`;
    
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Задача 2. Доставка товару

// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр,
// рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що 
// містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits",
// де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

//     function getShippingMessage(country, price, deliveryFee) {
//          const totalPrice = price + deliveryFee;
//         return `Shipping to ${country} will cost ${totalPrice} credits`
// }


// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Задача 3. Ширина елемента

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр,
// ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для 
// кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює
// border - box.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getElementWidth(content, padding, border) {
//     const widthContent = parseFloat(content);
//     const widthPadding = parseFloat(padding);
//     const widthBorder = parseFloat(border);
//     const totalWidth = widthContent + (widthPadding * 2) + (widthBorder * 2);
//     return totalWidth;
    
    
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:
// Оголошена функція getElementWidth(content, padding, border)
// Виклик getElementWidth("50px", "8px", "4px") повертає число 74
// Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
// Виклик getElementWidth("200px", "0px", "0px") повертає число 200
// Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення

// todo  Задача - Приклад розрахунку BMI разом з категоріями

// function calcBMI(weight, height) {

//  let numberweight = weight.replace(",", ".");//заміняємо кому на крапку
//  numberweight = Number.parseFloat(numberweight);//  перетворюємо в число
//  const numberheight = Number.parseFloat(height);// перетворюємо в число
//  console.log(numberheight);

//  const bmi = numberweight / (numberheight ** 2);//(маса тіла ділиться на квадрат росту)
//  const roundedBMI = bmi.toFixed(2);
// //  return bmi.toFixed(2);  Залишаємо дві цифри за крапкою і виводиов чосло 

//   // Визначення категорії
//     let category = "";
//     if (bmi < 18.5) {
//         category = "Недостатня вага";
//     } else if (bmi < 25) {
//         category = "Нормальна вага";
//     } else if (bmi < 30) {
//         category = "Надмірна вага";
//     } else if (bmi < 35) {
//         category = "Ожиріння I ступеня";
//     } else if (bmi < 40) {
//         category = "Ожиріння II ступеня";
//     } else {
//         category = "Ожиріння III ступеня";
//     }

//     // Повернення результату
//     return `Yours BMI: ${roundedBMI} — ${category}`;

// }


// const bmi = calcBMI("135,5", "1.8");
// console.log(bmi);