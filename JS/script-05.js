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
// Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції
// registerGuest за допомогою круглих дужок.

// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.

// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest.
// Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.


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
  
  // Колбек-функція eatPizza
//   function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   }
  
  // Виклик makePizza з анонімною функцією
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
  // Виклик makePizza з eatPizza як колбеком
//   makePizza("Ultracheese", eatPizza);

//? Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// array.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
// });

// Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array. Зверни увагу, що імена параметрів довільні, але дуже важлива їх послідовність(!). Також не всі параметри обов’язково оголошувати. Якщо тобі потрібен тільки перший параметр element (це найчастіший випадок), то наступні параметри index та array можна не оголошувати.
// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Метод forEach() — це зручний спосіб перебрати масив, не використовуючи цикли for або for...of. Він дозволяє зосередитися на логіці обробки елементів масиву, а не на механіці перебору.
// Використання forEach() робить код більш читабельним і зрозумілим, оскільки він явно показує нам, що ми перебираємо масив і виконуємо певну дію для кожного елемента.
// Але є деякі нюанси, які варто враховувати при використанні forEach():
// 1. forEach() не підходить для асинхронних операцій, оскільки він не чекає завершення колбек-функції перед переходом до наступного елемента.
// 2. forEach() не можна перервати або вийти з нього, як це можна зробити з циклами for або for...of. Він завжди перебирає весь масив до кінця.
// 3. forEach() не повертає новий масив, а завжди повертає undefined, тому його не можна використовувати для створення нового масиву на основі існуючого.
// 4. forEach() не підходить для випадків, коли потрібно змінити значення елементів масиву, оскільки він не повертає новий масив з оновленими значеннями.
// 5. forEach() не підходить для випадків, коли потрібно перервати перебір масиву на певному етапі, оскільки він завжди перебирає весь масив до кінця.
// 6. forEach() не підходить для випадків, коли потрібно змінити значення елементів масиву, оскільки він не повертає новий масив з оновленими значеннями.
// 7. forEach() не підходить для випадків, коли потрібно перервати перебір масиву на певному етапі, оскільки він завжди перебирає весь масив до кінця.	

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

// До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// Після
// const arrowAdd = (a, b, c) => a + b + c;
// Задача:
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

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочна анонімна функція
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
//   Відбулася мутація вихідних даних - масиву numbers
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
  
  // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
  // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ТЕСТ:
// Вибери всі правильні твердження про чисті функції

//* не змінюють значень вихідних аргументів
// змінюють значення вихідних аргументів
//* повертають один і той самий результат для однакових аргументів
// повертають різний результат для однакових аргументів
// Result

// Давай запам’ятаємо: 1) результат чистої функції не змінює значень переданих аргументів;
// 2) за умови однакових аргументів чиста функція завжди повертає один і той самий результат, тобто вона не має побічних ефектів

// Задача:
// he changeEven(numbers, value) function takes an array of numbers numbers and updates each element whose value is an even number by
// adding the value of the value parameter, which is exactly a number.

// Refactor the function so that it becomes clean — it does not change the array of numbers numbers, but creates, fills and returns a new array with updated values.

// The changeEven(numbers, value) function is declared.
// The changeEven function does not change the value of the numbers parameter.
// Calling changeEven([1, 2, 3, 4, 5], 10) returns a new array [1, 12, 3, 14, 5].
// Calling changeEven([2, 8, 3, 7, 4, 6], 10) returns a new array [12, 18, 3, 7, 14, 16].
// Calling changeEven([17, 24, 68, 31, 42], 100) returns a new array [17, 124, 168, 31, 142].
// Calling changeEven([44, 13, 81, 92, 36, 54], 100) returns a new array [144, 13, 81, 192, 136, 154].
// Calling a function with random but valid arguments returns the correct value.

// function changeEven(numbers, value) {
// 	const newArray = [];
  
// 	numbers.forEach(number => {
// 	  if (number % 2 === 0) {
// 		newArray.push(number + value);
// 	  } else {
// 		newArray.push(number);
// 	  }
// 	});
  
// 	return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

//!  Методи map і flatMap

// ? Чисті функції
// Функція з побічними ефектами — це функція, яка в процесі виконання може:
// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.

// Чиста функція(pure function) — це функція, результат якої залежить тільки від значень переданих аргументів.За умови однакових аргументів
// вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
// Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Вибери всі правильні твердження про чисті функції

// * не змінюють значень вихідних аргументів
// змінюють значення вихідних аргументів
// * повертають один і той самий результат для однакових аргументів
// повертають різний результат для однакових аргументів
// Result

// Давай запам’ятаємо: 1) результат чистої функції не змінює значень переданих аргументів; 2) за умови
// однакових аргументів чиста функція завжди повертає один і той самий результат, тобто вона не має побічних ефектів

// Задача:
// The changeEven(numbers, value) function takes an array of numbers numbers and updates each element whose value is an even number by adding the value of the value parameter, which is exactly a number.

// Refactor the function so that it becomes clean — it does not change the array of numbers numbers, but creates, fills and returns a new array with updated values.

// The changeEven(numbers, value) function is declared.
// The changeEven function does not change the value of the numbers parameter.
// Calling changeEven([1, 2, 3, 4, 5], 10) returns a new array [1, 12, 3, 14, 5].
// Calling changeEven([2, 8, 3, 7, 4, 6], 10) returns a new array [12, 18, 3, 7, 14, 16].
// Calling changeEven([17, 24, 68, 31, 42], 100) returns a new array [17, 124, 168, 31, 142].
// Calling changeEven([44, 13, 81, 92, 36, 54], 100) returns a new array [144, 13, 81, 192, 136, 154].
// Calling a function with random but valid arguments returns the correct value.

// function changeEven(numbers, value) {
// 	const newArray = [];
  
// 	numbers.forEach(number => {
// 	  if (number % 2 === 0) {
// 		newArray.push(number + value);
// 	  } else {
// 		newArray.push(number);
// 	  }
// 	});
  
// 	return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

//?  Перебираючі методи

// У JavaScript є методи масивів, які прийшли з функціональних мов.Більшість із перебираючих методів масивів — це чисті функції. 
// Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек - функцію, після чого повертають цей новий масив.
// Усі перебираючі методи масивів мають схожий синтаксис.На вихідному масиві array викликається перебираючий метод method, у який аргументом передається
// колбек - функція callback.

//   array.method(callback(currentValue, index, array))

// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:
// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array

// array.method((item, idx, arr) => {
  // логіка, яка буде виконуватися на кожній ітерації
// });

// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові. Назви параметрів можуть бути будь-які, головне, щоб вони були зрозумілі 
// тобі та іншим розробникам.

// array.method(item => {
  // логіка, яка буде виконуватися на кожній ітерації
// });

// Яким по порядку параметром буде в колбек-функції лічильник (індекс) поточної ітерації?

// Першим
//*  Другим
// Третім
// Result

// Саме так! Лічильник буде у другому параметрі.

//!  Метод map()
// Більшість перебираючих методів масиву — це чисті функції.Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного 
// елемента зазначену колбек - функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву.Він викликає колбек - функцію для кожного елемента вихідного масиву, а результат її 
// роботи записує в новий масив, який і буде результатом виконання методу.

// array.map((element, index, array) => {
  // Тіло колбек-функції
// });

// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// Його можна використовувати для того, щоб змінити кожен елемент масиву.Оригінальний масив використовується як еталон,
// на основі якого можна зробити іншу колекцію.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек - функції, що робить код
// чистішим і простішим для сприйняття.

// Що повертає метод map(callback)?

//* Масив
// Об’єкт
// Довільне значення
// Result

//*  Правильно! Метод map(callback) повертає новий масив, що буде складатися з результатів роботи колбек-функції для кожного елемента вихідного масиву.

// Масив якої довжини повертає метод map(callback)?

// На одиницю менше за довжину масиву, до якого він був застосований
//* Завжди такої самої, як і в масиву, до якого він був застосований
// Довільної довжини, залежить від розробника
// Result

//* Абсолютно точно! Метод map(callback)повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований.

// Метод map змінює масив до якого застосовується?

// Так
//*  Ні
// Result

//*  Чудово! Метод map не змінює оригінальний масив.

  // Задача:
  // Еhe planets array contains the names of the planets.Modify the code so that the variable planetsLengths will contain an array consisting of the lengths 
  // of the names of each planet in the planets array.Be sure to use the map() method.

  // The variable planets is declared.
  // The value of the planets variable is an array ["Earth", "Mars", "Venus", "Jupiter"].
  // The variable planetsLengths is declared.
  // The value of the variable planetsLengths is an array [5, 4, 5, 7].
  // The map() method is used to iterate over the array of planets.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
  
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths); // [5, 4, 5, 7]

//? Масив об'єктів
// Ми вже знаємо, що типове завдання — це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. 
// У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Використовуючи метод map(), можна перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.
// Задача:
// The books array contains a collection of book objects, each of which contains the title, author, rating properties.Using the map() method,
// make the variable titles contain an array of titles of all books(property title) from the array books.

// The variable books is declared.
// The value of the variable books is an array.
// The variable titles is declared.
// The value of the variable titles is an array ["The Last Kingdom", "Beside Still Waters", "The Fault in Our Stars", "Redder Than Blood", "Enemy of God"].
// To iterate over the books array, the map() method is used as a pure function.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Rid

//!  Метод flatMap()
// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».

// array.flatMap((element, index, array) => {
  // Тіло колбек-функції
// });

// У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses.Кілька студентів можуть відвідувати 
// один і той самий предмет.Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що навіть повторюваних.


// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];



// Метод flatMap викликає колбек - функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив.Відмінність 
// від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці(одна вкладеність).Цей розгладжений(плоский) масив і 
// є результатом роботи flatMap().

// Задача:
// The books array contains a collection of book objects, each of which contains the genres property, whose value is an array of genres.Using the flatMap() method,
// make the variable genres contain an array of genres of all books(the genres property) from the books array.

// The variable books is declared.
// The value of the books variable is an array of objects.
// The variable genres is declared.
// The value of the genres variable is an array ["adventure", "history", "fiction", "horror", "mysticism"].
// To iterate over the books array, the flatMap() method is used.

// ["adventure", "history", "fiction", "horror", "mysticism"]
// 
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);// ["adventure", "history", "fiction", "horror", "mysticism"]

// Задача:

// А тепер давай розглянемо задачу «Пошти користувачів» ?

// We will pass this array of objects as the users parameter when calling the function from the task.
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Enhance the arrow function getUserEmails(users) so that it returns an array of user email addresses(the email property) from the array of objects in the users
// parameter.

// The variable getUserEmails has been declared.
// The variable getUserEmails has been assigned an arrow function with the parameter (users).
// The map() method is used to iterate over the users parameter.
// The function call with the specified array of users returns the array["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com",
//   "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"].

// const getUserEmails = users => users.map(user => user.email);


// Test the function with the provided array of user objects 
// console.log(getUserEmails(users));
// ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com",
//  "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com",
//  "shereeanthony@kog.com"]

//!           Методи filter і find
//?       Метод filter()

// Метод filter(callback) використовується для єдиної операції — фільтрації масиву.Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції
// за певним критерієм.

// array.filter((element, index, array) => {
  // Тіло колбек-функції
// });

// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// Якщо колбек повернув true, елемент додається в масив, що повертається.
// Якщо колбек повернув false, елемент не додається в масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

// Отже, метод filter викликає колбек - функцію для кожного елемента вихідного масиву.Якщо результат її виконання true, поточний елемент додається в новий масив.

// Що повертає метод filter()?

// Об'єкт
//*  Масив
// Довільне значення
// Result

//* Точнісінько так! Метод filter() повертає новий масив.

// Масив якої довжини повертає метод filter()?

// Завжди такої самої, як і масив, до якого він був застосований
//* Довільної, залежить від умови колбек-функції
// На одиницю менший за довжину масиву, до якого він був застосований
// Result

//* Саме так! Метод filter() додає в масив, що повертається, елементи, які задовольняють умову колбек - функції.Кількість цих елементів залежить від завдання
//  і може бути будь - якою.

// Чи змінює метод filter() масив, до якого застосовується?

// Так
// * Ні
// Result

// * Правильно! Метод filter() не змінює оригінальний масив, а повертає новий масив.

// Задача:

// Complete the code so that the variable evenNumbers contains an array of even numbers from the array numbers, while the variable oddNumbers contains an array of odd numbers. Be sure to use the filter() method.

// The variable numbers is declared.
// The value of the numbers variable is an array [17, 24, 82, 61, 36, 18, 47, 52, 73].
// The variable evenNumbers is declared.
// The value of the variable evenNumbers is the array [24, 82, 36, 18, 52].
// The variable oddNumbers is declared.
// The value of the variable oddNumbers is the array [17, 61, 47, 73].
// The filter() method is used to iterate over the numbers array.

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ?   Метод filter() на масиві об'єктів

// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку утворюється новий масив відфільтрованих об'єктів.
// Розгляньмо приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:
// високі бали (від 80 (включно)),
// низькі бали (нижче 50),
// середні бали (від 50 (включно) до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// У прикладі вище метод filter() створює новий масив із тими об'єктами з масиву students, які задовольняють умови, встановлені на основі властивості 
// score.Умови визначаються в колбек - функції, яка передається у filter() як аргумент.
// У змінну best відфільтровано об'єкти, в яких значення властивості score більше або дорівнюєHIGH_SCORE. Результатом буде масив об'єктів з іменами "Mango" і "Kiwi".
// У змінну worst — об’єкти, в яких значення властивості score менше LOW_SCORE. Результатом буде масив з одним об'єктом з іменем "Ajax".
// У змінну average — об'єкти, в яких значення властивості score більше або дорівнює LOW_SCORE і менше HIGH_SCORE. Результатом буде масив об'єктів з іменами
// "Poly" і "Houston".

// Задача:

// The array books contains a collection of book objects, each of which has the properties title, author, and rating. Using the filter() method, modify the code so that:

// The variable topRatedBooks becomes an array of books whose rating (the rating property) is greater than or equal to the value of the variable MIN_RATING.
// The variable booksByAuthor becomes an array of books written by an author with the name (the author property) that matches the value in the variable AUTHOR.
// The variable books has been declared.
// The value of the variable books is an array of objects.
// The variable MIN_RATING has been declared.
// The value of the variable MIN_RATING is the number 8.
// The variable AUTHOR has been declared.
// The value of the variable AUTHOR is the string "Bernard Cornwell".
// The variable topRatedBooks has been declared.
// The value of the variable topRatedBooks is an array of books with a rating higher than 8.
// The variable booksByAuthor has been declared.
// The value of the variable booksByAuthor is an array of books whose author is "Bernard Cornwell".
// The filter() method has been used to iterate over the books array

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks); // Масив об'єктів з книгами з рейтингом вище 8
// console.log(booksByAuthor); // Масив об'єктів з книгами автора "Bernard Cornwell"

// Задача:

// А тепер давай розглянемо задачу «Пошук за кольором очей» ?
// We will pass this array of objects to the users parameter when calling the function from the task.
  
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// Enhance the getUsersWithEyeColour(users, colour) function so that it returns an array of users whose eye colour (eyeColour property) matches
// the value of the second colour parameter.

// The variable getUsersWithEyeColor is declared.
// The variable getUsersWithEyeColor is assigned an arrow function with parameters(users, colour).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, "blue")); // [ { name: 'Moore Hensley', email: '

// Задача:

// А тепер давай розглянемо задачу ?
// We will pass this array of objects to the users parameter when calling the function from the task.

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// Enhance the code of the function getUsersWithAge(users, minAge, maxAge) to return an array of users whose age(stored in the age property) falls within
// the specified range from minAge to maxAge.

// Tips:

// Use the filter() method to create a new array that contains only the elements that meet a specific condition.
// Use the operators >= (greater than or equal to) and <= (less than or equal to) to filter users whose age falls within the range between the minimum value of minAge
// and the maximum value of maxAge.
// The variable getUsersWithAge has been declared.
// An arrow function with parameters (users, minAge, maxAge) has been assigned to the variable getUsersWithAge.
// The filter() method is used to iterate over the users parameter.
// If the values of the parameters minAge and maxAge are 20 and 30 respectively, the function returns an array of user objects with the names Ross Vazquez, Elma Head, and Carey Barr.
// If the values of the parameters minAge and maxAge are 30 and 40 respectively, the function returns an array of user objects with the names Moore Hensley, Sharlene Bush, Blackburn Dotson, and Sheree Anthony.
// If the values of the parameters minAge and maxAge are 80 and 100 respectively, the function returns an empty array.
// Calling the function with random but valid arguments returns the correct value.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// }
// console.log(getUsersWithAge(users, 20, 30)); // [ { name: 'Ross Vazquez', email: '
// console.log(getUsersWithAge(users, 30, 40)); // [ { name: 'Moore Hensley', email: '
// console.log(getUsersWithAge(users, 80, 100)); // []
// console.log(getUsersWithAge(users, 20, 30)); // [ { name: 'Ross Vazquez', email: '

// ? Метод find()

// Ти вже знаєш, що метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову.
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється.
// Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

// array.find((element, index, array) => {
//   // Тіло колбек-функції
// });

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined


// Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову.Наприклад, пошук користувача за поштою,
// автомобіля — за серійним номером, книги — за назвою тощо.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined


// Що повертає метод find()?

// Масив
// Об'єкт
//* Елемент, який шукаємо
// Result

//*  Правильна відповідь! На відміну від методу filter(callback), що повертає новий масив, метод find() повертає перший елемент, що задовольняє критерії пошуку.

// Що поверне метод find(), якщо жоден елемент не задовольнить критерій пошуку?

//* undefined
// null
// []
// false
// Result

//* Ти дуже уважний/-а! Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод find() повертає undefined.

// Чи змінює метод find масив, до якого застосовується?

// Так
// * Ні
// Result

//* Абсолютно точно! Метод find не змінює масив до якого застосовується, так само як і метод filter(callback)

// Задача:
// The array books contains a collection of book objects, each of which has properties title, author, and rating.

// Using the find() method, complete the code so that:

// The variable bookWithTitle becomes an object of the book whose title (the title property) matches the value of the variable BOOK_TITLE.
// The variable bookByAuthor becomes an object of the book whose author (the author property) matches the value of the variable AUTHOR.
// The variable books is declared.
// The value of the variable books is an array.
// The variable BOOK_TITLE is declared.
// The value of the variable BOOK_TITLE is the string "The Fault in Our Stars".
// The variable AUTHOR is declared.
// The value of the variable AUTHOR is the string "Robert Sheckley".
// The variable bookWithTitle is declared.
// The value of the variable bookWithTitle is the object of the book with the title "The Fault in Our Stars".
// The variable bookByAuthor is declared.
// The value of the variable bookByAuthor is the object of the book by the author "Robert Sheckley".
// The find() method is used to iterate over the array books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle); // { title: "The Dream of a Rid
// console.log(bookByAuthor); // { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51 }

// Задача:
// А тепер давай розглянемо задачу ?
// We will pass this array of objects to the users parameter when calling the function from the task.

const users =
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Extend the getUserWithEmail(users, email) function so that it returns a user object whose email (property email) matches the value of the second parameter email.

// The function getUserWithEmail is declared.
// The variable getUserWithEmail is assigned an arrow function with parameters (users, email).
// The find() method is used to iterate over the users parameter.
// If the value of the email parameter is "shereeanthony@kog.com", the function returns the user object with the name Sheree Anthony.
// If the value of the email parameter is "elmahead@omatom.com", the function returns the user object with the name Elma Head.
// If the value of the email parameter is "blackburndotson@furnigeer.com", the function returns the user object with the name Blackburn Dotson.
// If there is no user in the users array with the email from the email parameter, the function returns undefined.
// Calling the function with random, but valid, arguments returns the correct value.

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// { name: "Sheree Anthony", email: "shereeanthony@kog.com", ... }
 // { name: 'Sheree Anthony', email: '  