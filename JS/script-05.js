//!   Функція як значення
// ? Значення функції (посилання на неї) можна зберігати у змінній або передавати в якості аргументу в іншу функцію. У цьому сенсі функції не
// відрізняються від чисел, рядків або масивів.
// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"
// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}
// У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання.
// У другому лозі передається посилання на функцію, а не результат її виклику(відсутні круглі дужки),
// тому в консоль виводиться внутрішнє представлення нашої функції.Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.
// Функція як значення
// У JavaScript функції — це об'єкти, тому вони можуть:

// Зберігатися у змінних

// Передаватися як аргументи в інші функції

// Виводитися у консоль без виклику

// Різниця між console.log(greet("Mango")) і console.log(greet)
// 🔹 Перший випадок:
// console.log(greet("Mango"));
// Викликаємо greet("Mango") (за допомогою круглих дужок).
// Функція повертає "Welcome Mango!", і цей результат виводиться в консоль.

// 🔹 Другий випадок:

// javascript
// console.log(greet);
// Тут НЕ викликаємо функцію, а просто передаємо посилання на неї.

// В консоль виводиться її внутрішня структура (тобто визначення самої функції).

// Що це нам дає?
// Оскільки ми можемо передавати функцію як значення, її можна: ✔️ Зберігати у змінній:

// javascript
// const sayHello = greet;
// console.log(sayHello("Alice")); // "Welcome Alice!"

// Передавати в іншу функцію як колбек:

// javascript
// function processUser(name, callback) {
//     return callback(name);
// }
// console.log(processUser("Bob", greet)); // "Welcome Bob!"
// Тут greet передається без виклику(greet без()), і потім processUser вже викликає її.
// Чому це важливо?
// Ця особливість дозволяє нам будувати гнучкий та функціональний код.Завдяки цьому можна створювати колбек - функції,
// обробники подій, асинхронні операції та багато іншого.
// Задача:
// The makePizza function returns a string with a message to the client.

// Complete the code so that the result variable contains the result of the makePizza function, and the pointer variable contains
// a reference to the makePizza function.

// The makePizza function is declared.
// The variable result is declared.
// The value of the result variable is the string ‘Your pizza is being prepared, please wait.’.
// The value of the result variable is obtained by calling the function.
// The variable pointer is declared.
// The value of the pointer variable is a reference to the makePizza function.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Викликаємо функцію і зберігаємо результат у змінній result
// const result = makePizza();

// // Зберігаємо посилання на функцію у змінній pointer
// const pointer = makePizza;

// console.log(result);  // "Your pizza is being prepared, please wait."
// console.log(pointer); // ƒ makePizza() { return "Your pizza is being prepared, please wait."; }

//?  Колбек-функції
// Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення.

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// // Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри.

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// name — ім’я користувача
// callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувач

// Тепер використовуємо оголошені функції під час виклику registerGuest.

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
																// "Dear Mango, your room will be ready in 30 minutes"
// Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.

// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.

// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.

// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.

//* Вибери правильний синтаксис передачі колбек-функції `updateEmail` для функції `makeAction`

// makeAction(updateEmail())
// updateEmail(makeAction)
//*  makeAction(updateEmail)
// updateEmail(makeAction())
// Result
// І це правильна відповідь! Посилання на колбек-функцію updateEmail має передатись як аргумент у виклик функції вищого порядку makeAction. Отже,
// makeAction(updateEmail) є правильним варіантом.

// Задача:
// The function makeMessage takes one parameter, the name of the pizza being delivered, pizzaName, and returns a string with a
// message for the customer.

// Enhance the makeMessage function so that it expects a second parameter(the callback parameter) as a callback function and returns the result of its
// invocation.The functions deliverPizza or makePizza will be passed as callbacks to makeMessage and will expect the name of the delivered pizza as an argument.

// The function deliverPizza is declared.
// The function makePizza is declared.
// The function makeMessage is declared.
// The function makeMessage takes two parameters, named according to the task, pizzaName and callback.
// The call makeMessage("Royal Grand", makePizza) returns the string "Pizza Royal Grand is being prepared, please wait...".
// The call makeMessage("Ultracheese", deliverPizza) returns the string "Delivering Ultracheese pizza.".

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
    
// }
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."

//?   Інлайн-колбеки

// Якщо колбек - функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.
// Такі функції називаються інлайн - колбеки.Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// ЗАДАЧА:
// The function makePizza has two parameters: pizzaName — the name of the pizza, and callback — the callback function. During execution, makePizza calls this callback,
// passing pizzaName as an argument.

// Complete the second call to the function makePizza(pizzaName, callback) by passing the inline callback function eatPizza(pizzaName) as the second argument.
// he callback eatPizza logs the string "Eating pizza <pizza name>", where < pizza name > is the value of the parameter pizzaName.

// The function makePizza has been declared.
// The function makePizza accepts two parameters.
// The function eatPizza with a single parameter pizzaName has been passed as the second argument during the call makePizza("Ultracheese").

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   // Колбек-функція eatPizza
//   function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   }
  
//   // Виклик makePizza з анонімною функцією
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
//   // Виклик makePizza з eatPizza як колбеком
//   makePizza("Ultracheese", eatPizza);

//? Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array. Зверни увагу, що імена параметрів довільні, але дуже важлива їх послідовність(!). Також не всі параметри обов’язково оголошувати. Якщо тобі потрібен тільки перший параметр element (це найчастіший випадок), то наступні параметри index та array можна не оголошувати.
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });



// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
// Що повертає метод forEach?

// Новий масив
//* Повертає undefined
// Те, що вказано в колбек-функції
// Result

// Варто запам’ятати: метод `forEach(callback)` : 1) поелементно перебирає масив, 2) викликає колбек-функцію для кожного елемента масиву, * 3) повертає `undefined`.

// Задача:
// The calculateTotalPrice(orderedItems) function takes one parameter orderedItems — an array of numbers, and calculates the total sum of its elements, which is stored in
//     the variable totalPrice and returned as the result of the function.

// Complete the call to the forEach method by passing it a callback function that adds the value of the current item of the orderedItems array to totalPrice at each iteration.

// The calculateTotalPrice(orderedItems) function is declared.
// Calling the calculateTotalPrice([12, 85, 37, 4]) function returns 138.
// Calling the calculateTotalPrice([164, 48, 291]) function returns 503.
// Calling the calculateTotalPrice([412, 371, 94, 63, 176]) function returns 1116.
// Calling a function with random but valid arguments returns the correct value.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//         totalPrice += item;
//     });
  
//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// Задача:
// The function filterArray(numbers, value) takes an array of numbers numbers as its first parameter and returns a new array containing only those elements
// of the original array that are greater than the value of the second parameter value.If no such values are found, the function returns an empty array.

// Refactor the function so that instead of using a for loop, it uses the forEach method.

// A function filterArray(numbers, value) is declared.
// The forEach method is used to iterate over the array numbers.
// Calling filterArray([1, 2, 3, 4, 5], 3) returns [4, 5].
// Calling filterArray([1, 2, 3, 4, 5], 4) returns [5].
// Calling filterArray([1, 2, 3, 4, 5], 5) returns [].
// Calling filterArray([12, 24, 8, 41, 76], 38) returns [41, 76].
// Calling filterArray([12, 24, 8, 41, 76], 20) returns [24, 41, 76].
// Calling the function with random but valid arguments returns the correct value.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
    
//     numbers.forEach(number => {
//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//     });
    
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // returns [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // returns [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // [].
// console.log(filterArray([12, 24, 8, 41, 76],38));// [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20));// returns [24, 41, 76].


// ? Стрілочні функції

// Стрілочні функції: синтаксис
// Стрілочні функції(сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона
// використовується як колбек.
// Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// Ключове слово function не використовується
// Одразу зазначається оголошення параметрів
// Після параметрів використовується символ => і тіло функції у фігурних дужках

// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };

// Якщо параметр один, його можна оголошувати без круглих дужок.
// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Hello!");
// };

// Задача:

// Кefactor the calculateTotalPrice() function so that it is declared as an arrow function.

// The variable calculateTotalPrice is declared.
// An arrow function with parameters is assigned to the calculateTotalPrice variable. (quantity, pricePerItem).
// Calling calculateTotalPrice(5, 100) returns 500.
// Calling calculateTotalPrice(8, 60) returns 480.
// Calling calculateTotalPrice(3, 400) returns 1200.
// Calling a function with random but valid arguments returns the correct value.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

//? Неявне повернення

// У стрілочної функції після символу => знаходиться її тіло. Існує два способи запису: з фігурними дужками і без них.
// Запис із фігурними дужками
// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return).
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення.
// Запис без фігурних дужок
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>.Це називається неявне повернення(implicit return). У прикладі
// повернеться результат виразу додавання параметрів a, b і c.

// const add = (a, b, c) => a + b + c;
// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається. Тим не менш, він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, окрім повернення значення.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;
// // Задача:
// Refactor the calculateTotalPrice() function so that it uses an implicit return.

// The variable calculateTotalPrice is declared.
// The variable calculateTotalPrice is assigned an arrow function with parameters (quantity, pricePerItem).
// The function uses an implicit return.
// Calling calculateTotalPrice(5, 100) returns 500.
// Calling calculateTotalPrice(8, 60) returns 480.
// Calling calculateTotalPrice(3, 400) returns 1200.
// Calling a function with random but valid arguments returns the correct value.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

//? Псевдомасив arguments

// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// Задача:
// Чи можна використовувати змінну arguments у стрілочній функції?

// Так
//* Ні
// Result

//* Саме так! У стрілочних функцій немає локальної змінної arguments.

// ? Колбеки
// Анонімні стрілочні функції відмінно підходять для колбеків перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо якщо код у
// тілі функції не громіздкий.

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочну колбек - функцію також можна оголошувати окремо й передавати на неї посилання.Це варто робити, якщо одна функція використовується в декількох
// місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// Чому стрілочні функції зручні для використання як колбеки?

//* Завдяки їхньому коротшому синтаксису
// Тому що вони працюють швидше, ніж звичайні
// Result

// * Звісно, так! Анонімні стрілочні функції зручно використовувати як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення.

// Задача:

// Refactor the calculateTotalPrice(orderedItems) function by replacing its declaration with an arrow function. Also, replace the callback function passed to the forEach() method with an arrow function.

// The variable calculateTotalPrice is declared.
// The variable calculateTotalPrice is assigned an arrow function with the parameter (orderedItems).
// To iterate over the orderedItems array, the forEach method is used.
// The callback for the forEach method is an arrow function.
// Calling the calculateTotalPrice([12, 85, 37, 4]) function returns 138.
// Calling the calculateTotalPrice([164, 48, 291]) function returns 503.
// Calling the calculateTotalPrice([412, 371, 94, 63, 176]) function returns 1116.
// Calling a function with random but valid arguments returns the correct value.

//
// Задача: А тепер давай розглянемо задачу «Фільтр чисел»?

// Replace the declaration of the filterArray() function and callbacks for the forEach() method with arrow functions.

// The variable filterArray is declared.
// The filterArray variable is assigned an arrow function with parameters (numbers, value).
// The forEach method is used to iterate over the numbers array.
// The callback for the forEach method is an arrow function.
// Calling the filterArray([1, 2, 3, 4, 5], 3) function returns [4, 5].
// Calling the filterArray([1, 2, 3, 4, 5], 4) function returns [5].
// Calling the filterArray([1, 2, 3, 4, 5], 5) function returns [].
// Calling the filterArray([12, 24, 8, 41, 76], 38) function returns [41, 76].
// Calling the filterArray([12, 24, 8, 41, 76], 20) function returns [24, 41, 76].
// A function call with random but valid arguments returns the correct value.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }

// // !  Методи map і flatMap
// //?   Чисті функції
//   Функція з побічними ефектами — це функція, яка в процесі виконання може:
//    змінювати або використовувати глобальні змінні
//   змінювати значення аргументів посилального типу
//   виконувати операції введення-виведення тощо
  
//    const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
//   // Відбулася мутація вихідних даних - масиву numbers
//   console.log(numbers); // [2, 4, 6, 8, 10]
  
// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.
// Чиста функція(pure function) — це функція, результат якої залежить тільки від значень переданих аргументів.За умови однакових аргументів вона
// завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
//   Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.
  
//   const pureMultiply = (array, value) => {
//     const newArray = [];
  
//     array.forEach(element => {
//       newArray.push(element * value);
//     });
  
//     return newArray;
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
  
//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 

