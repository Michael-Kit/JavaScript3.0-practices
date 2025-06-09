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
// Extend the getUserWithEmail(users, email) function so that it returns a user object whose email (property email) matches the value of the second parameter email.

// The function getUserWithEmail is declared.
// The variable getUserWithEmail is assigned an arrow function with parameters (users, email).
// The find() method is used to iterate over the users parameter.
// If the value of the email parameter is "shereeanthony@kog.com", the function returns the user object with the name Sheree Anthony.
// If the value of the email parameter is "elmahead@omatom.com", the function returns the user object with the name Elma Head.
// If the value of the email parameter is "blackburndotson@furnigeer.com", the function returns the user object with the name Blackburn Dotson.
// If there is no user in the users array with the email from the email parameter, the function returns undefined.
// Calling the function with random, but valid, arguments returns the correct value.

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// { name: "Sheree Anthony", email: "shereeanthony@kog.com", ... }
// { name: 'Sheree Anthony', email: '
 
//!   Методи every, some і reduce

// ? Метод every()

// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

// array.every((element, index, array) => {
  // Тіло колбек-функції
// });

//*  Не змінює оригінальний масив
//*  Поелементно перебирає оригінальний масив
//*  Повертає true, якщо всі елементи масиву задовольняють умову
//*  Повертає false, якщо хоча б один елемент масиву не задовольняє умову
//*  Перебирання масиву припиняється, якщо колбек повертає false


// Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості. Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити,
// чи всі товари є в наявності.
// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false


// Що повертає метод every()?

//* true, якщо всі елементи масиву задовольняють умову, і false, якщо хоча б один елемент масиву не задовольняє умову
// false, якщо всі елементи масиву задовольняють умову, і true, якщо хоча б один елемент масиву не задовольняє умову
// Result

//* Так, усе правильно! Метод every() повертає true, тільки якщо всі елементи масиву задовольняють умову, і false, якщо хоча б один елемент масиву цього не робить.

// Чи змінює метод every масив, до якого застосовується?

// Так
//* Ні
// Result

//* І це правильна відповідь! Метод every(callback) не змінює оригінальний масив.

//todo     Задача:

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
// Extend the isEveryUserActive(users) function so that it checks whether all users are currently active (the isActive property) and returns either true or false.

// The variable isEveryUserActive is declared.
// An arrow function with the (users) parameter is assigned to the isEveryUserActive variable.
// To iterate over the users parameter, the every() method is used.
// Calling the function with the specified array of users returns false.

// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
// };

// console.log(isEveryUserActive(users)); // false

//?    Метод some()

// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// array.some((element, index, array) => {
  // Тіло колбек-функції
// });

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо хоча б один елемент масиву задовольняє умову
// Повертає false, якщо жоден елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//* [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//* [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
//* [1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
//* [1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє, чи задовольняють усі елементи умову колбек - функції. 
// Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек - функції.

// Що повертає метод some() ?

//* true, якщо хоча б один елемент масиву задовольняє умову, та false, якщо жоден елемент масиву не задовольняє умову
// true, якщо всі елементи масиву задовольняють умову, і false, якщо хоча б один елемент масиву не задовольняє умову
// Result

//* Чудово! Ти дуже уважний/-а! Метод some() дійсно повертає true, якщо хоча б один елемент масиву задовольняє умову, та false, якщо жоден елемент масиву не задовольняє умову

// Чи змінює метод some() масив, до якого застосовується?

// Так
//*  Ні
// Result

//* Це легко, чи не так? Як і методи, розглянуті раніше, метод some() не змінює масив, до якого застосовується.

//todo     Задача:
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
// Enhance the isAnyUserActive(users) function so that it checks for at least one active user (the isActive property) and returns either true or false.

// The isAnyUserActive function is declared.
// The isAnyUserActive variable is assigned an arrow function with the (users) parameter.
// To iterate over the users parameter, the some() method is used.
// Calling the function with the specified array of users returns true.

// const isAnyUserActive = (users) => {
//   return users.some(user => user.isActive);
// };
// console.log(isAnyUserActive(users)); // true

//?    Метод reduce()

// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату. 
// Трохи складніший за інші методи для засвоєння, але результат вартий того.

  // array.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
// }, initialValue);


//*  Не змінює оригінальний масив
//*  Поелементно перебирає оригінальний масив
//*  Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
//*  Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек - функція з параметра редьюса очікує в свою чергу чотири параметри.Ці параметри, так само як і в колбеках інших перебираючих методів масиву,
// можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:

// 1 - й параметр(previousValue) — це акумулятор, тобто проміжний результат.Значення, яке поверне колбек - функція на поточній ітерації, буде значенням 
// цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.

// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// Розгляньмо детальніше роботу редьюса у прикладі вище:

// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12

// Результатом коду вище буде 12.

// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

// Що повертає метод reduce()?

// Тільки масив
// Тільки об’єкт
//*  Будь-яке необхідне значення
// Result

//*  Точно! Метод reduce() повертає будь-яке необхідне значення.

// Чи змінює метод reduce() масив, до якого застосовується?

// Так
//* Ні
// Result

//* Саме так! Метод reduce() поелементно перебирає оригінальний масив, але не змінює його.

//todo     Задача:

// The gaming service requires functionality to calculate the average time spent in games by a single player.
// The players variable stores an object where the key is the player's name and the value is their playing time.
// The playtimes variable stores an array of values from the players object, meaning an array of playing times for all players.
// The value of the averagePlayTime variable will be the average time spent by a single player in games.

// Complete the code so that the totalPlayTime variable holds the total playing time from the playtimes array. Use the reduce() method.

// The variable players is declared.
// The value of the players variable is an object of players with each player's playing time.
// The variable playtimes is declared.
// The value of the playtimes variable is the array [1270, 468, 710, 244].
// The variable totalPlayTime is declared.
// The value of the totalPlayTime variable is the number 2692.
// The reduce() method is used to iterate over the playtimes array.
// The variable averagePlayTime is declared.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime); // 2692
// console.log(averagePlayTime); // 673

//! Нотатки:
// В цьому коді `Object.values(players)` використовується для отримання масиву значень з об'єкта `players`.

// Об'єкт `players` містить ключі (імена гравців) і відповідні значення (час гри). `Object.values()` - це вбудований метод в JavaScript, який повертає масив значень всіх властивостей об'єкта.
// Ось що він робить у цьому випадку:
// ```js
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// ```
// Це означає, що він бере всі значення (`1270`, `468`, `710`, `244`) і формує масив. Сам `Object` - це глобальний об'єкт JavaScript,
// який містить методи для роботи з об'єктами, включаючи `Object.values()`.

//?  Метод reduce() і масив об'єктів

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. 
// Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(totalScore); // 337
// console.log(averageScore); // 67.4

// У прикладі вище метод reduce() використовується для обчислення суми значень властивості score для всіх об'єктів масиву students.
// Починаючи зі значення 0, колбек - функція обчислює суму значень властивості score для кожного об'єкта масиву students. 
// Результат(сума) зберігається у змінній totalScore.
// const averageScore обчислює середнє значення score для всіх об'єктів масиву students, шляхом ділення суми всіх балів на кількість студентів.

//todo  Задача:

// In the variable players, there is an array of objects, each of which has the properties name, playtime, and gamesPlayed.

// Our service needs to calculate the average time spent in a single game for each player and obtain the total sum of these time values in the variable totalAveragePlaytimePerGame. The time for each player can be calculated by dividing their time (the playtime property) by the number of games (the gamesPlayed property).

// Tips:

// Use the reduce() method to iterate over the players array and compute the total sum of the average time per game.
// Inside the callback function of reduce(), divide the player's playtime by gamesPlayed to obtain the average time spent on a single game by each player.
// Accumulate the result in the variable acc and return it at the end of each iteration.
// Initialize the acc parameter of the reduce() method with an initial value of 0 to avoid getting NaN during calculations.
// As a result, the variable totalAveragePlaytimePerGame will contain the total sum of the average time per game for all players.
// The variable players is declared.
// The value of the players variable is an array of player objects.
// The variable totalAveragePlaytimePerGame is declared.
// The value of the variable totalAveragePlaytimePerGame is the number 1023.
// To iterate over the players array, the reduce() method is used.

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame); // 1023
//! Нотатки:
// У цьому коді ми використовуємо метод `reduce()` для обчислення загальної суми середнього часу, проведеного в грі, для кожного гравця.
// Метод `reduce()` перебирає масив `players`, де кожен елемент є об'єктом з властивостями `name`, `playtime` та `gamesPlayed`.
// На кожній ітерації ми ділимо `playtime` на `gamesPlayed`, щоб отримати середній час, проведений в грі для кожного гравця, і додаємо цей результат до акумулятора `acc`.
// Після завершення перебору масиву, `reduce()` повертає загальну суму середнього часу, проведеного в грі для всіх гравців, яка зберігається в змінній `totalAveragePlaytimePerGame`. 
// Це дозволяє нам отримати загальний показник середнього часу, проведеного в грі для всіх гравців у масиві `players`.

// todo   Задача:
// We will pass this array of objects to the users parameter when calling the function from the task.
//  const users =
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
// Enhance the calculateTotalBalance(users) function so that it calculates and returns the sum of all funds(property balance) 
// that are stored by users from the users array.

// The variable calculateTotalBalance is declared.
// The calculateTotalBalance variable is assigned an arrow function with the (users) parameter.
// To iterate over the users parameter, the reduce() method is used.
// Calling the function with the specified array of users returns the number 20916.

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916
// //! Нотатки:
// У цьому коді ми використовуємо метод `reduce()` для обчислення загальної суми балансу всіх користувачів.
// Метод `reduce()` перебирає масив `users`, де кожен елемент є об'єктом з властивістю `balance`.
// На кожній ітерації ми додаємо значення `balance` поточного користувача до акумулятора `total`.
// Після завершення перебору масиву, `reduce()` повертає загальну суму балансу всіх користувачів, яка зберігається в змінній `calculateTotalBalance`.
// Це дозволяє нам отримати загальний баланс всіх користувачів у масиві `users`.

//!    Метод toSorted
//?  Метод toSorted()

// Метод toSorted() сортує елементи масиву.

//   array.toSorted();

// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням

//*  Масив чисел

// Розгляньмо приклад, де потрібно відсортувати масив scores.
// Вихідний масив scores залишається незмінним. Новий масив ascendingScores містить масив чисел, що відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки,
// тобто на основі їхніх значень у таблиці Unicode.Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло, якщо знати,
// що числа були перетворені на рядки.

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// При такому сортуванні рядки порівнюються за символами зліва направо, тобто спочатку порівнюються рядки 2 і 27. Перший символ 2 у них однаковий,
// але рядок 2 містить лише 1 символ, тому він менший, ніж рядок 27, і йде першим.
// Потім порівнюються рядки 27 і 3. Перший символ у рядку 3 більший за перший символ 2 у рядку 27, тому 3 йде після 27.

//*  Способи задати власний порядок сортування розглянемо в наступному розділі.

//?   Масив рядків

// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];

// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// Що повертає метод toSorted()?

// Об’єкт
//* Масив
// Довільне значення
// Result

//* І це правильна відповідь! Метод toSorted() повертає відсортований масив.

// Чи змінює метод toSorted() масив, до якого застосовується?

// Так
//* Ні
// Result

//* Саме так! Метод toSorted() не змінює вихідний масив.

//todo     Задача:

// Еhe variable releaseDates is an array of numbers representing the years of publication of books.
// The variable authors is an array of strings representing the authors of the books.

// Complete the code in such a way that the variable ascendingReleaseDates becomes a copy of the releaseDates array sorted in ascending order, 
// while the variable alphabeticalAuthors becomes a copy of the authors array sorted in alphabetical order.Use the toSorted() method.

// The variable releaseDates is declared.
// The value of the releaseDates variable is an array [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// The variable authors is declared.
// The value of the authors variable is an array ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "John Green"].
// The variable ascendingReleaseDates is declared.
// The value of the ascendingReleaseDates variable is an array [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// The variable alphabeticalAuthors is declared.
// The value of the alphabeticalAuthors variable is an array ["Bernard Cornwell", "John Green", "Robert Sheckley", "Tanith Lee"].
// The toSorted() method was used.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]

//?  Свій порядок сортування чисел

// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод toSorted() буде викликати її для двох довільних елементів.

// array.toSorted((a, b) => {
  // Callback function body
// });
// Параметри колбек-функції compareFunction(a, b):
// a — перший елемент для порівняння.
// b — другий елемент для порівняння.
// Повертає:
// 0, якщо a і b рівні;
//* Сортування за зростанням

// Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//* Сортування за спаданням

// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]


// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.
// const scores = [61, 19, 74, 35, 92, 56];
// const sameScores = scores.toSorted((a, b) => { 
//   if (a === b) {
//     return 0;
//   }
//   return a - b;  
// });
// console.log(sameScores); // [19, 35, 56, 61, 74, 92]

//* Щоб показати, як елементи, які є рівними, залишаються на своїх позиціях один відносно одного, давай додамо повторювані значення до масиву:

//* const scores = [61, 19, 74, 35, 92, 56, 35];

//* const sameScores = scores.toSorted((a, b) => { 
//*  if (a === b) {
//*     return 0; // Якщо числа рівні, їх порядок між собою не зміниться
//*  }
//*  return a - b;  
//* });

//* console.log(sameScores);//[19, 35, 35, 56, 61, 74, 92]

// Ось ключовий момент:
// - Два `35` залишилися один відносно одного у тому ж порядку, як були в початковому масиві. Це забезпечує умова `return 0;`, яка гарантує, що рівні значення не змінюють порядок між собою.
// - Решта чисел сортуються у звичному порядку через `a - b`.
// Таким чином, якщо масив містить повторювані значення, вони залишаються на своїх позиціях **один відносно одного**, але загальна схема сортування працює як зазвичай. 😊 
  
// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек - функції, числа вже не будуть приводитися до рядків, тобто їх 
// сортування буде очікуваним і звичним.

//todo   Задача :  

// The variable releaseDates is an array of numbers representing the years of publication of books.

// The online library needs to display books sorted by their release date, either in ascending or descending order. 
// Update the code so that the variable ascendingReleaseDates contains a copy of the releaseDates array sorted in ascending order, 
// while the variable descendingReleaseDates contains a copy sorted in descending order.

// Here’s the translation in native British English:

// The variable releaseDates is declared.
// The value of the variable releaseDates is the array
// [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// The variable ascendingReleaseDates is declared.
// The value of the variable ascendingReleaseDates is the array
// [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// The variable descendingReleaseDates is declared.
// The value of the variable descendingReleaseDates is the array
// [2016, 2012, 2008, 1997, 1984, 1973, 1967].

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

//?   Свій порядок сортування рядків

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

// Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// Який із колбеків використовується для сортування чисел?

// (a, b) => a.localeCompare(b)
//*  (a, b) => a - b
// Result

//* для зазначення свого порядку сортування чисел методу toSorted(compareFunction) потрібно передати колбек-функцію формату (a, b) => a - b

// Який із колбеків використовується для сортування рядків?

//* (a, b) => a.localeCompare(b)
// (a, b) => a - b
// Result

//* Дуже добре! Для зазначення свого порядку сортування рядків методу toSorted(compareFunction) потрібно передати колбек-функцію формату (a, b) => a.localeCompare(b)

//todo     Задача:

// The variable authors is an array of strings representing book authors.

// The online library needs to display books sorted by author in both alphabetical and reverse alphabetical order. Complete the code so that the variable authorsInAlphabetOrder contains a copy of the authors array sorted alphabetically, and the variable authorsInReversedOrder contains a copy sorted in reverse alphabetical order.

// The variable authors is declared.
// The value of the variable authors is an array
// ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "John Green", "Howard Lovecraft"].
// The variable authorsInAlphabetOrder is declared.
// The value of the variable authorsInAlphabetOrder is an array
// ["Bernard Cornwell", "John Green", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"].
// The variable authorsInReversedOrder is declared.
// The value of the variable authorsInReversedOrder is an array
// ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "John Green", "Bernard Cornwell"].
// The method toSorted() is used.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare.b);

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare.a);

// console.log(authorsInReversedOrder); // ["Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft", "Bernard Cornwell"]  
// console.log(authorsInAlphabetOrder); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]

//?  Сортування об'єктів

// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості. 
// Наприклад, у нас є група студентів з балами за тест.Необхідно відсортувати масив об'єктів за трьома різними сценаріями:

// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);

// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);
//! Нотатки:
// У цьому коді ми використовуємо метод `toSorted()` для сортування масиву об'єктів `students` за різними критеріями:
// 1. `inAscendingScoreOrder` - сортує студентів за зростанням їхніх балів, використовуючи різницю між `score` першого і другого студента.
// 2. `inDescendingScoreOrder` - сортує студентів за спаданням їхніх балів, використовуючи різницю між `score` другого і першого студента.
// 3. `inAlphabeticalOrder` - сортує студентів в алфавітному порядку за їхніми іменами, використовуючи метод `localeCompare()` для порівняння рядків.

//todo    Задача:

// The array books contains an array of book objects, each of which has properties title, author, and rating.
// Enhance the code in such a way that:

// The variable sortedByAuthorName contains an array of books sorted by the author's name in alphabetical order.
// The variable sortedByReversedAuthorName contains an array of books sorted by the author's name in reverse alphabetical order.
// The variable sortedByAscendingRating contains an array of books sorted by ascending rating.
// The variable sortedByDescendingRating contains an array of books sorted by descending rating.
// The variable books is declared.
// The value of the variable books is the original array of book objects.
// The variable sortedByAuthorName is declared.
// The value of the variable sortedByAuthorName is an array of books sorted by the author's name in alphabetical order.
// The variable sortedByReversedAuthorName is declared.
// The value of the variable sortedByReversedAuthorName is an array of books sorted by the author's name in reverse alphabetical order.
// The variable sortedByAscendingRating is declared.
// The value of the variable sortedByAscendingRating is an array of books sorted by ascending rating.
// The variable sortedByDescendingRating is declared.
// The value of the variable sortedByDescendingRating is an array of books sorted by descending rating.
// The method toSorted() is used to iterate through the array books.

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
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);


// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//!       Ланцюжки методів

// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.


// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.

// Для цього:

// Відсортуємо масив методом toSorted(),
// Після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(sortedByAscendingScore); // [{name: "Ajax", score: 37}, {name: "Poly", score: 59}, {name: "Mango", score: 83}, {name: "Kiwi", score: 94}]
// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]


// Проблема в тому, що в нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore — зайва. 
// Вона необхідна тільки для зберігання проміжного результату.
// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. 
// Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

//*   const names = students
//*     .toSorted((a, b) => a.score - b.score)
//*     .map(student => student.name);

//*   console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]



// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// *    Цей рядок **видаляє дублікати** з масиву `courses`. Давай розглянемо його детальніше:

// *    const courses = ["biology", "science", "literature", "science", "mathematics", "biology", "physics"];
// *    const uniqueCourses = courses.filter((course, index, array) => array.indexOf(course) === index);
// *    console.log(uniqueCourses);
// *    ### Як це працює:
// *    1. **array.indexOf(course)** повертає **перший** індекс, де з'являється курс у масиві.
// *    2. Якщо поточний `index` збігається з `indexOf(course)`, курс залишається.
// 3. Якщо курс уже зустрічався раніше, тобто його `indexOf(course)` **не дорівнює** поточному `index`, він **відфільтровується**.
// *    ### Що видаляється:
// *    - У початковому масиві були повтори `"science"` та `"biology"`.
// *    - Після фільтрації вони **залишилися тільки один раз**.

// *    Результат:
// *    ["biology", "science", "literature", "mathematics", "physics"]
// *    Тепер масив містить **тільки унікальні значення**! 😊
// *    Якщо хочеш побачити, які елементи були видалені, можна зробити окремий масив дублікатів:
// *    const duplicateCourses = courses.filter((course, index, array) => array.indexOf(course) !== index);
// *    console.log(duplicateCourses); // ["science", "biology"]
// *    Цей код покаже саме **те, що було видалено**. Сподіваюся, це прояснило логіку! 🚀

// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

// Ланцюжок методів може бути довільної довжини, але зазвичай не більше 2-3 операцій.
// По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією.
// По-друге, виклик кожного наступного методу — це додаткове перебирання масиву, що за великої кількості може позначитися на продуктивності.

//todo    Задача: 

// The array books contains an array of book objects, each of which has properties title, author, and rating.

// Extend the code in such a way that the variable names contains an array of author names in alphabetical order, whose book ratings are greater 
// than the value of the variable MIN_BOOK_RATING.Use a chain of methods.

// The variable books is declared.
// The value of the variable books is the initial array of objects.
// The variable MIN_BOOK_RATING is declared.
// The value of the variable MIN_BOOK_RATING is the number 8.
// The variable names is declared.
// The value of the variable names is the array
// ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"].
// The variable names should be formed using the method chain filter, map, and toSorted, while no other variables should be declared.
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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
//! Notes:
// In this code, we use a chain of methods to filter, map, and sort the authors of books based on their ratings.
// 1. The `filter()` method filters the books array to include only those books with a rating greater than `MIN_BOOK_RATING`.
// 2. The `map()` method extracts the `author` property from each book object in the filtered array.
// 3. The `toSorted()` method sorts the resulting array of author names in alphabetical order using the `localeCompare()` method.
// This allows us to create a new array `names` that contains the names of authors whose books have a rating greater than 8, sorted alphabetically.
// The final result is logged to the console, showing the sorted array of author names.