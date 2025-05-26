// !  Розгалуження
// **Інструкція if

// ? Інструкція if дозволяє виконати певний блок коду тільки в тому випадку, якщо задана умова істинна
// (тобто приймає значення true).
// Загальний синтаксис інструкції if виглядає так:

// if (condition) {
    // код, який виконується, якщо умова (condition) істинна
    // }
  
//     Коли інтерпретатор зустрічає інструкцію if, він обчислює вказану умову в круглих дужках(condition), перетворюючи її до
//     логічного типу(boolean).
//     Якщо умова (condition) перетворюється до true, виконується блок коду, написаний у фігурних дужках {} — (statement).
// ? Якщо умова (condition) є хибною (false), то код, що міститься в блоці if, не виконується.
// ? Якщо умова (condition) є істинною (true), то код, що міститься в блоці if, виконується.

// У наведених нижче прикладах код перевіряє значення змінної subscription і залежно від нього встановлює значення змінної price.
// Якщо умова перетворюється до true, тобто subscription — це "pro", price встановлюється 100.

//? Приклад 1
// Уяви онлайн-сервіс, що дозволяє завантажувати книги з бібліотеки.
// Відвідувачі можуть користуватися сервісом безкоштовно(з обмеженням швидкості завантажень).Якщо людина бажає завантажувати
// книги без обмежень, вона повинна купити підписку “pro” за 100$ на рік.
// Це простий приклад розгалуження, у якому наявність підписки “pro” — це умова, а різні варіанти завантажень
// (з обмеженням чи без) — це розгалуження подальших сценаріїв.

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// ? Приклад 2
//? Напишемо функцію яка отримує обраний тарифний план у параметрі subscription та повертає його вартість.


// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === "pro") {
//     price = 100;
//   }

//   return price;
// }

// console.log(getPrice("free")); // 0
// console.log(getPrice("pro")); // 100

// ? Приклад 3
// Enhance the checkAge(age) function code so that the function returns the string "You are an adult" if the value of the
// age parameter is greater than or equal to 18. Use an if statement in the function body to check the value of age.

// The checkAge(age) function is declared.
// The call checkAge(20) returns the string "You are an adult".
// The call checkAge(17) returns undefined.
// The call checkAge(10) returns undefined.
// The call checkAge(30) returns the string "You are an adult".
// A call to the function with random but valid arguments returns the correct value.

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }

// console.log(checkAge(20)); // "You are an adult"
// console.log(checkAge(17)); // undefined
// console.log(checkAge(10)); // undefined
// console.log(checkAge(30)); // "You are an adult"

// ? Приклад 4

// Функція checkAccess(role) Розроби функцію, яка приймає рядок role та перевіряє, чи користувач має доступ.Якщо role
//  дорівнює "admin", поверни "Access granted",
//   інакше поверни "Access denied".

// function checkAccess(role) {
//   if (role === "admin") {
//     return "acceess granted";
//   }
//   return "access denied";
// }

//   console.log(checkAccess("admin")); // "access granted"
//   console.log(checkAccess("user")); // "access denied"

// ? Приклад 5 Функція isEven(number) Створи функцію, яка перевіряє, чи передане число парне. Якщо число парне, поверни
// "Even number", інакше "Odd number".

// function isEven(number) {
//   if (number % 2 === 0) {
//     return "Even number";
//   }
//   return "Odd number";

// }

// console.log(isEven(4)); // "Even number"
// console.log(isEven(7)); // "Odd number"
// console.log(isEven(0)); // "Even number"
// console.log(isEven(-2)); // "Even number"

// !  Інструкція if...else
// ? Синтаксис інструкції if можна доповнити блоком else для визначення альтернативних варіантів виконання коду.

// if (condition) {
  // код, який виконується, якщо умова істинна
// } else {
  // код, який виконується, якщо умова хибна
// }

// У наступному прикладі умова перетворюється до true, тому виконується код у тілі (фігурних дужках) блоку if, а тіло блоку else ігнорується.

// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }

// Якщо умова перетворюється до false, код із тіла блоку if буде пропущений, і виконається код із тіла блоку else.

// const grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }
// Створимо функцію яка отримує бал студента, та повертає рішення про результат.

// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }

// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

// Task:
// The checkStorage(available, ordered) function checks the feasibility of placing an order and returns a message about the result.It declares two parameters,
//   the values of which will be provided during its invocation:

// available — the available quantity of goods in stock.
// ordered — quantity of units of goods in the order.
// Using branching, enhance the function code so that:
// f the order quantity exceeds the available stock, the function returns the string "Not enough goods in stock!".
// Otherwise, the function returns the string "Order is processed, our manager will contact you".
// The checkStorage(available, ordered) function is declared.

// function checkStorage(available, ordered) {
//   if (available >= ordered) {
//     return "Order is processed, our manager will contact you";
//   } else {
//     return "Not enough goods in stock!";
//   }
// }


// console.log(checkStorage(100, 50));// "Order is processed, our manager will contact you".
// console.log(checkStorage(100, 130))// "Not enough goods in stock!"
// console.log(checkStorage(200, 20));// "Order is processed, our manager will contact you".
// console.log(checkStorage(200, 150));// "Order is processed, our manager will contact you".
// console.log(checkStorage(150, 180));// "Not enough goods in stock!"


// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
    
//   }
//   return "Order is processed, our manager will contact you.";

//     }

// console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
// console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(150, 0)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(200, 150)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(150, 180)); // "Not enough goods in stock!"

// ? Приклад 6

// Функція checkBudget(budget, price) Функція приймає два аргументи: budget(доступний бюджет користувача)
// та price(вартість товару).Якщо бюджет більше або дорівнює ціні товару, поверни "Purchase successful!",
//   інакше поверни "Insufficient funds".

// function checkBudget(budget, price) {
//   if (budget >= price) {
//     return "Purchase successful!";
//   } else {
//     return "Insufficient funds";
//   }

  // console.log(checkBudget(100, 50)); // "Purchase successful!"
  // console.log(checkBudget(30, 50)); // "Insufficient funds"
  // console.log(checkBudget(50, 50)); // "Purchase successful!"
//?Прклад 7
// Функція checkDiscount(price, discountThreshold) Функція приймає два аргументи: price(ціна товару) та discountThreshold
//   (мінімальна ціна для отримання знижки).Якщо price більше або дорівнює discountThreshold, поверни "Discount applied!",
//   інакше "No discount available".

// function checkDiscount(price, discountThreshold) {
//   if (price >= discountThreshold) {
//     return "Discount applied!";
//   } else {
//     return "No discount available";
//   }
// }

// console.log(checkDiscount(100, 50)); // "Discount applied!"
// console.log(checkDiscount(30, 50)); // "No discount available"
  
//? Приклад 8
// Функція checkSpeed(speed, speedLimit) Функція приймає два аргументи: speed(швидкість авто) та speedLimit(допустима швидкість).
//  Якщо speed перевищує speedLimit, поверни "Speeding violation!", інакше "Speed is within limit".


// function checkSpeed(speed, speedLimit) {
//   if (speed > speedLimit) {
//      return "Speeding violation!"
//   }
//   return "Speed is within limit";
// }

// console.log(checkSpeed(80, 60)) // "Speeding violation!"
// console.log(checkSpeed(100, 120)) // "Speed is within limit"

//!  Блок else...if

//! Конструкція else...if розширює конструкцію if...else і дозволяє перевірити та зреагувати на виконання або невиконання
//!  кількох умов.Це корисно, коли ми маємо більше однієї умови.

// if (condition_1) {
//   // код, який виконується, якщо умова (condition_1) істинна
// } else if (condition_2) {
//   // код, який виконується, якщо умова (condition_2) істинна
// } else if (condition_3) {
//   // код, який виконується, якщо умова (condition_3) істинна
// } else {
// 	// код, який виконується, якщо всі умови хибні
// }

// У цьому прикладі спочатку перевіряється умова grade >= 90.

// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// }
// else if (grade >= 80) {
//   console.log("Good");
// }
// else if (grade >= 70) {
//   console.log("Satisfactorily");
// }
// else {
//   console.log("Unsatisfactorily");
// }

// console.log(grade(85)); // "Good"
// console.log(grade(90)); // "Perfectly"
// console.log(grade(70)); // "Satisfactorily"
// console.log(grade(60)); // "Unsatisfactorily"
// Task:
// The checkStorage(available, ordered) function checks the feasibility of placing an order and returns a message about the result.It declares two parameters,
// the values of which will be provided during its invocation.

// available — the available quantity of goods in stock.
// ordered — quantity of units of goods in the order.
// Using branching, enhance the function code so that:

// If there are no items in the order, meaning the value of the ordered parameter is 0, the function returns the string "There are no products in the order!".
// If the quantity of items in the order exceeds the available stock, the function returns the string "Your order is too large, there are not enough items in stock!".
// Otherwise, the function returns the string "The order is accepted, our manager will contact you".
// The checkStorage(available, ordered) function is declared.

// The call checkStorage(100, 50) returns "The order is accepted, our manager will contact you".
// The call checkStorage(100, 130) returns "Your order is too large, We haven't enough items in stock!".
// The call checkStorage(70, 0) returns "There are no products in the order!".
// The call checkStorage(200, 20) returns "The order is accepted, our manager will contact you".
// The call checkStorage(200, 250) returns "Your order is too large. We haven't enough items in stock!".
// The call checkStorage(150, 0) returns "There are no products in the order!".
// The call checkStorage(80, 80) returns "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//       return "There are no products in the order!";
//   } else if (ordered > available) {
//       return "Your order is too large, there are not enough items in stock!";
//   } else {
//       return "The order is accepted, our manager will contact you";
//   }
// }

// console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(70, 0)); // "There are no products in the order!"
// console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(150, 0)); // "There are no products in the order!"
// console.log(checkStorage(80, 80)); // "The order is accepted, our manager will contact you"

// Функція checkTemperature(temp) Функція приймає температуру temp і повертає "It's hot" якщо вона більше або дорівнює 30,
// "It's cold" якщо вона менше 15, і "It's moderate" в інших випадках.

// function checkTemperature(temp) {
//   if (temp >= 30) {
//     return "It's hot";
//   } else if (temp < 15) {
//     return "It's cold";
//   } else {
//     return "It's moderate";
//   }
// }

// console.log(checkTemperature(35)); // "It's hot"
// console.log(checkTemperature(10)); // "It's cold"
// console.log(checkTemperature(20)); // "It's moderate"
// console.log(checkTemperature(15)); // "It's moderate"


// ! Тернарний оператор
// Тернарний оператор — це коротша синтаксична заміна інструкції if...else. Тернарний оператор дозволяє виконувати
// певну частину коду залежно від умови.
// ?<condition> ? <expression if condition is true> : <expression if condition is false>
// Він працює таким чином:
// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

// Завдяки тому, що тернарний оператор повертає значення обчисленого виразу, його можна застосовувати для задавання
// різних значень для однієї змінної залежно від умови.
// Ось приклад, як би це виглядало з використанням інструкції if...else
// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'

// ? Той самий код можна переписати з використанням тернарного оператора:

// function type(age) {
//   return age >= 18 ? "adult" : "child";
// }

// console.log(type(20));
// console.log(type(10));


// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

// ? Використовуючи тернарний оператор, код вище можна спростити:

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10


// *Тернарний оператор рекомендується використовувати у найпростіших випадках операції присвоєння чи повернення.
// * Однак не рекомендується використовувати його для складних розгалужень, оскільки це може ускладнити читання та розуміння коду.


// *Ось приклад з фукнцією яка порівнює два числа.

// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }

// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7



// Як працює ця функція:

// 1) Приймає два параметри – a і b.

// 2) Використовує тернарний оператор (? :), який працює так:

// Умова: a > b
// Якщо true → повертає a
// Якщо false → повертає b
// 3) Повертає більший із двох чисел.



// Покрокове виконання:

// Виклик getBiggerNumber(5, 10): 5 > 10 → false, повертається b = 10.
// Виклик getBiggerNumber(20, 15): 20 > 15 → true, повертається a = 20.
// Виклик getBiggerNumber(7, 7): 7 > 7 → false, повертається b = 7 (немає різниці, що повертати, бо числа рівні).

// * Приклад 9
// todo The checkPassword(password) function compares the provided password(parameter password) with the stored administrator password
// todo (correctPassword) and returns a message indicating the result. Using the ternary operator, enhance the function so that:
// todo If the values of password and correctPassword match, the function returns the string "Access granted".
// todo Otherwise, the function returned the string "Access denied, wrong password!".

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
//   }
//   console.log(checkPassword("jqueryismyjam")); // "Access granted"
//   console.log(checkPassword("angul4r1sl1f3")); // "Access denied, wrong password!"
//   console.log(checkPassword("r3actsux")); // "Access denied, wrong password!"

//! Оператор switch
// Оператор switch дозволяє виконувати різні дії залежно від значення виразу.Використання switch є більш компактним і зручним
// способом для порівняння виразів з кількома варіантами, ніж інструкції if...else та else...if.

// Ось загальний синтаксис оператора switch:

//* switch (expression) {
//*     case value1:
//*       // код, що виконується, якщо вираз (expression) дорівнює value1
//*       break;
//*     case value2:
//*       // код, що виконується, якщо вираз (expression) дорівнює value2
//*       break;
//*    // ...
//*    default:
//*      // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
//*  }
  
//?   Як це працює:

//   Вираз (expression) в операторі switch обчислюється.
//   Значення виразу порівнюється з кожним блоком case зверху вниз.
//   Якщо значення виразу відповідає значенню в блоці case, виконується код цього блоку.
//   Коли виконання коду блоку case завершено, необхідно використовувати оператор break, щоб вийти зі switch. Це запобігає виконанню коду в наступних блоках case.
//   Якщо жодне значення не відповідає виразу, виконається код у блоці default (якщо він є).
// ? Приклад

// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }


// ! Оператор break

// Після виконання коду в одному з випадків потрібно використовувати оператор break, щоб вийти з оператора switch.
// Якщо break не вказано, виконання коду продовжиться в наступному case і далі. Така поведінка називається "провалюванням"
// (fall-through). Якщо потрібно, щоб кілька блоків case виконували той самий код, можна опустити оператор break між ними.

// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }

// У цьому прикладі кілька блоків(case 1, case 2, case 3, case 4, case 5) провалюються і у випадку їх рівності виразу
//  виконається один і той самий код, тому що між ними немає операторів break.
 
// todo Приклад 10
//todo The getSubscriptionPrice(type) function receives a string representing the user's subscription type (parameter type), checks it against three possible types of monthly subscriptions, and returns the price or a message indicating an incorrect subscription type.

//todo If the value of the type parameter is a string, then:

//todo "starter" is a subscription price of 0 credits.
//todo todo"professional" is a subscription price of 20 credits.
//todo "organization" is a subscription price of 50 credits.
//todo For any other value of the type parameter, the string "Invalid subscription type!" is returned.

//todo Use the switch operator to solve this task!

// function getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//       case 'starter':
//         price = 0;
//       break;
//       case "professional":
//         price = 20;
//         break;
//       case "organization":
//         price = 50;
//         break;
//       default:
//         price = "Invalid subscription type!";
//     }
//     return price;
//   }

//! Алтернатива використувати оператор return
// function getSubscriptionPrice(type) {
//     switch (type) {
//       case "starter":
//         return 0;
//       case "professional":
//         return 20;
//       case "organization":
//         return 50;
//       default:
//         return "Invalid subscription type!";
//     }
//   }
  
//   console.log(getSubscriptionPrice("professional")); // 20
//   console.log(getSubscriptionPrice("organization")); // 50
//   console.log(getSubscriptionPrice("starter")); // 0
//   console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"
  
//!   У цьому випадку break не потрібен, тому що кожен case повертає значення за допомогою return.Коли JavaScript виконує
// return, функція завершує свою роботу, і ніякий додатковий код(включаючи наступні case) не виконується.

//? Пам’ятка під час використання розгалужень
//? Наразі тобі знайомі кілька способів, як зробити розгалуження. Під час вибору слід пам’ятати:
//? Інструкція if є універсальною.Інструкції if…else і else…if використовуються, коли потрібно прописати декілька умов.
//? Отже, ці інструкції зазвичай довші, ніж інші способи розгалужень.
//? Тернарний оператор краще використовувати для присвоєння або повернення значення з тіла функції.В умові тернарного оператора
//? може бути все що завгодно: перевірка рівності / нерівності, на більше / менше, просто перевірка на будь чого.
//? Пам’ятай про обмеження: у нього має бути рівно 2 сценарії, не більше.
//? Оператор switch перевіряє тільки на сувору рівність.
//? Використовуючи оператор switch, завжди:
//?— пам’ятай про оператор break;
//? — використовуй тільки 1 default, він завжди має бути останнім.

// ! Блокова область видимості

//* Область видимості визначає, чи будуть змінні та функції доступними в певних областях коду.Під час оголошення змінної або функції, вона стає "видимою"
// * тільки в певній частині коду.Це впливає на те, де і як можна використовувати ці змінні та функції в коді.
// * Змінні або функції, які оголошені поза будь - якими блоками коду — тобто в глобальній області видимості — будуть доступні в будь - якій частині коду.
//* Вони є глобальними змінними.




//! Логічні оператори
//? Перетворення типів: логічне
// Логічне перетворення типів означає приведення значення будь - якого типу даних у логічне(булеве) значення true або false.
// Існує кілька правил, які визначають, які значення перетворюються на true, а які на false. Ці правила працюють:

// як для явного перетворення типів за допомогою функції Boolean(),
// так і для неявного в умовних операціях, наприклад, у конструкціях if чи логічних операторах.

//? Логічні значення

// Логічні значення true та false залишаються незмінними.
// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

//? Числа

//* Число 0, значення NaN, null і undefined завжди перетворюються на false. Усі інші числа перетворюються на true.

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true

// Розгляньмо ці приклади.
// Який блок коду буде виконуватися?

// if(null) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

// if(0) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

//* Значення в умові інструкцій if приводиться до false .

//* Отже, виконується код із блоку else.

//? А в цьому прикладі який код виконується?

// if(5) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

// Значення в умові інструкції if приводиться до true .

// Отже, виконується код із блоку if.

//?  Рядки

//todo:  Порожній рядок ("") приводиться до false. Будь-які інші не пусті рядки приводяться до true.

//todo^  console.log(Boolean("")); // false
//todo^  console.log(Boolean("hello")); // true
//todo^  console.log(Boolean("false")); // true

// Прочитай приклад нижче.
// Код із якого блоку буде виконано?

// if("") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

//todo^ У прикладі в умові інструкції if вказаний порожній рядок.
//todo^ Порожній рядок приводиться до false. Отже, виконується код із блоку else.

//* А в цьому прикладі?

//* Який саме блок коду буде виконано?

// if("batman") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }


// В умові інструкції — рядок "batman".
// Отже, if наводиться до true. Виконується код із блоку if.



// todo^ Запам’ятай 6 випадків, які приводяться до false:
//todo^   1. 0
// todo^  2. ""
//todo^   3. Nan
//todo^   4. null
//todo^   5. undefined
//todo^   6. false

//* Прочитай приклад коду


// Boolean("false")

// Яким буде результат виразу?

// true
// false
// Result

//* О, тут є нюанс! Зверни увагу, що "false" у подвійних лапках.Отже, це не логічне значення false,
//* а рядок зі словом "false".А будь - які не пусті рядки приводяться до true.

//!  Логічне «І»

//* Логічні оператори використовуються для перевірки умов з кількома виразами, наприклад, в інструкції if.
//* Оператор "І"(&&) наводить усі операнди до логічного типу(true або false) і повертає значення одного з них.Дозволяє перевірити,
//* чи виконані всі умови у виразі.

//*Обчислення оператора відбувається зліва направо.
// ? expression1 && expression2
// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.
// Давай розглянемо це на простому прикладі. Уяви: якщо людина п’є каву з цукром і молоком, то її не влаштує кава хоча б без одного з цих компонентів. Усі компоненти є обов’язковими, інакше людина її пити не буде.
// У наступних прикладах обидва операнди перетворюються на true. Обчислення відбуваються зліва направо, тому результатом буде значення правого операнда.

//* console.log("hello" && 5); // 5
//* console.log(5 && "hello"); // "hello"
//* console.log("mango" && "poly"); // "poly"
//* console.log("poly" && "mango"); // "mango"
//* console.log(3 && true); // true
//* console.log(true && 3); // 3

//? А ось у цьому прикладі один із операндів буде приведений до false, отже, результатом буде хибний операнд.

//*  console.log("hello" && 0); // 0
//*  console.log(0 && "hello"); // 0
//*  console.log(3 && false); // false
//*  console.log(false && 3); // false
//*  console.log(0 && ""); // 0
//*  console.log("" && 0); // ""

// У прикладі “hello” && 0 лівий операнд приводиться до true, а правий до false, тому результатом виразу буде значення правого операнда, який першим був приведений до false, тобто 0.
// У приклад 0 && “hello” лівий операнд приводиться до false, тому правий операнд не буде обчислюватися. Результатом виразу буде значення лівого операнда, який першим був приведений до false, тобто 0.

// На практиці логічні операції застосовуються для перевірки множинних умов.

// Варто зазначити, що якщо операндами є вирази, то спочатку вони обчислюються, а потім їх результати будуть
// порівнюватися оператором &&.

//*   const a = 20;
//*   console.log(a > 10 && a < 30); // true && true -> true
//*   const b = 50;
//*   console.log(b > 10 && b < 30); // true && false -> false
//*   console.log(b > 80 && b < 120); // false && true -> false
//? У прикладі вище змінна a має одночасно задовольняти дві умови: бути 1) більшою за 10, але 2) меншою за 30.
//  Перевірку одночасного виконання двох умов ми робимо за допомогою оператора &&. Спочатку обчислюємо вирази в операндах.
// todo   Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов, наприклад, в умові
// інструкції if

// Як працює код:

// 1) Перевіряється перша умова:
// if (700 < 320)
// Число 700 не менше 320, тому вираз false.
// Блок if пропускається.
// 2) Переходимо до else if:
// else if (screenWidth > sm && screenWidth ≤ md)
// Перевіряється перша частина: 700 > 320 // true
// Потім друга частина: 700 <= 768 // true
// Вираз має оператор && (логічне "і"), який повертає true, тільки якщо обидві частини true.У нашому випадку обидві true, тому true && true дає true.
// 3) Оскільки умова else if спрацювала (true), виконується її код:
// console.log("Tablet screen");

//? Якщо б ми створювали функцію для перевірки типу екрану, то вона виглядала би наступним чином:

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700));  // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320));  // "Mobile screen"

// Як працює функція:

// 1) Приймає screenWidth – ширину екрану як аргумент.

// 2) Перевіряє умови по черзі:

// ﻿Якщо screenWidth <= 320, повертає "Mobile screen".
// Якщо screenWidth більше 320, але не більше 768, повертає "Tablet screen".
// Якщо screenWidth більше 768, але не більше 1200, повертає "Desktop screen".
// Якщо ширина більша за 1200, повертає "Godzilla screen".
// 3) Використовує return, щоб функція могла повертати значення, а не просто виводити в консоль.

// Прочитай приклад коду

// null && true

// Яким буде результат виразу?

// true
// false
// null
// Result

// На жаль, ні. У теорії вище зазначалося, якщо хоча б один із операндів буде приведений до false, результатом буде
// значення хибного операнда. Маємо операнди null і true. Ще з теми Перетворення типів: логічне знаємо, що null — перетворюються на false, тобто є хибним. Саме це значення буде результатом виразу.

// Прочитай приклад коду
// "false" && 0
// Яким буде результат виразу?
// 0
// false
// “false”
// Result
// Чудово! Це правильна відповідь. У прикладі вище є рядок зі словом “false”, що перетворюється на true, і число 0,
// що перетворюється false. Результатом виразу буде хибний операнд, тобто 0.
// Прочитай приклад коду

// "Mango" && "Poly"
// Яким буде результат виразу?
// “Mango”
// “Poly”
// true
// Result

// Абсолютно точно! У прикладі обидва операнди перетворюються на true. Обчислення відбувається зліва направо, отже, результатом буде значення правого операнда — “Poly”.
// ? Приклад коду
    
// The isNumberInRange(start, end, number) function checks if the number is within the range.It declares three parameters,
// the values of which will be provided during its invocation:
// number is a number whose inclusion is being verified.
// start is the beginning of the numeric range.
// end is the ending of the numeric range.
// Using the && operator, complete the isNumberInRange function so that it returns the result of checking whether number
// is within the numerical range from start to end inclusive.That is, the number must be both greater than or equal to start
// and less than or equal to end.The result of the function call should be a boolean true or false.
    
//*    function isNumberInRange(start, end, number) {
//*        return number >= start && number <= end;
//*      }
  
//*      console.log(isNumberInRange(10, 30, 17)); // true
//*      console.log(isNumberInRange(10, 30, 5)); // false
//*      console.log(isNumberInRange(20, 50, 24)); // true
//*      console.log(isNumberInRange(20, 50, 76)); // false
    
//! Логічне «АБО»

// Оператор "АБО" (||) перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них.
// Дозволяє перевіряти, чи є хоча б один із операндів "істинним”.
// Обчислення оператора відбувається зліва направо.

//     expression1 || expression2
    
//     Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.


// console.log(true || false); // true
// console.log(false || true); // true
// console.log(5 || false); // 5
// console.log(false || 5); // 5
// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"


// Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється на true, він зупиняється та повертає його значення. Якщо до істини було перетворено перший операнд, то другий навіть не буде оцінюватися. Це може мати практичне застосування, особливо коли другий операнд є виразом, який має високу вартість обчислення.


// console.log(5 || 3); // 5
// console.log(3 || 5); // 3

// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"

// Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.

// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null


// Оператор "АБО" замикається на вірному операнді і повертає значення операнда, на якому запнувся, або значення крайнього правого операнда. Якщо лівий операнд був перетворений на true, правий операнд не обчислюється.

// На практиці оператор «АБО» також використовується для перевірки множинних умов.

// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true
// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

//!? Приклад коду

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }
  
// console.log(checkAccess("free")); // false
// console.log(checkAccess("pro")); // true
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("starter")); // false


//!   Логічне «НІ» (!)

// Усі оператори, які ми розглядали раніше, були бінарними. Бінарні оператори містять два операнди: лівий і правий.
// Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.

// !expression

// Логічне «НІ» приводить операнд до логічного значення(true або false) і потім заперечує(інвертує) його, тобто заміняє на
// протилежне: true —> false, а false —> true.


// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

// На практиці логічне заперечення використовується для перевірки від зворотного. Наприклад, можна дозволити написати повідомлення в чаті, лише якщо користувач не заблокований.

// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }

// У прикладі вище бачимо, що значення змінної isBlocked — false . Користувач не заблокований. Результатом canChat буде true .
// Якщо значення змінної isBlocked — true, користувач заблокований.У такому разі результат обчислення canChat буде false.
//   Отже, умова if заборонить користувачеві писати в чаті.

// const isBlocked = true;
// const canChat = !isBlocked; // !true -> false

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }

// Логічне заперечення можна поєднувати з іншими логічними операторами.Наприклад, якщо умова можливості писати в чаті залежить
//  від статусу онлайн і блокування.

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }

// Тепер створимо функцію:

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }

// console.log(canUserChat(true, false));  // "Can type in chat!"
// console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));  // "Blocked from typing in chat!"

// Як працює функція:

// 1) Приймає два параметри:

// ﻿isOnline – чи користувач онлайн (true або false).
// isBlocked – чи користувач заблокований (true або false).
// 2) Обчислює змінну const canChat = isOnline && !isBlocked;

// isOnline має бути true, інакше чат недоступний.
// isBlocked має бути false, тому використовується !isBlocked (заперечення).
// 3) Перевіряє значення canChat:

// Якщо true, повертає "Can type in chat!".
// Якщо false, повертає "Blocked from typing in chat!".

// Прочитай приклад коду

// !0

// Яким буде результат виразу?

// true
// false
// 1
// Result

// На жаль, ні.Давай розбиратися ? У прикладі 0 перетворюється на false.Але оператор "НІ" змінює значення на протилежне.Отже,
// маємо true як результат.

// Прочитай приклад коду

// !"Poly"

// Яким буде результат виразу?

// true
// false
// 0
// Result

// Так, усе правильно! Рядок "Poly" перетворюється на true, а оператор “НІ” змінює true на false.

// ?Приклад коду
//todo:  The toggleModalVisibility(isVisible) function toggles the display state of the modal window.The parameter isVisible expects
//todo: a boolean true or false.Enhance the code of the function so that it returns the opposite value of this parameter.

//todo: The toggleModalVisibility(isVisible) function is declared.
//todo: A call to the toggleModalVisibility(true) function returns false.
//todo: A call to the toggleModalVisibility(false) function returns true.
  
//todo: The! operator is used.

//   function toggleModalVisibility(isVisible) {
//     return !isVisible;
//   }
  
//   console.log(toggleModalVisibility(true));  // false
//   console.log(toggleModalVisibility(false)); // true


// Що відбувається в коді?
// Якщо isVisible === true, тоді !true → false, тобто модальне вікно стає невидимим.

// Якщо isVisible === false, тоді !false → true, тобто модальне вікно стає видимим.

// Тобто, цей код перемикає стан модального вікна між видимістю (true) та невидимістю (false), виконавши логічне заперечення (!).

// Якщо уявити це у фізичній аналогії, то ! працює як вимикач світла:

// true → Світло увімкнене 💡

// false → Світло вимкнене 🌑

// !isVisible → Перемикає стан!

// Запустити **toggleModalVisibility()** разом із HTML дуже просто! Тобі потрібно створити модальне вікно в HTML та змінювати його **видимість** за допомогою JavaScript.

// ### 🔹 Приклад інтеграції:
// ```html
// <!DOCTYPE html>
// <html lang="uk">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Модальне вікно</title>
//     <style>
//         .modal {
//             display: none; /* Початково приховане */
//             position: fixed;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             background: white;
//             padding: 20px;
//             border: 1px solid black;
//         }
//     </style>
// </head>
// <body>
//     <button id="toggleBtn">Перемкнути модальне вікно</button>
//     <div id="modal" class="modal">Це модальне вікно!</div>

//     <script>
//         function toggleModalVisibility(isVisible) {
//             return !isVisible; // Перемикаємо стан
//         }

//         const modal = document.getElementById("modal");
//         const toggleBtn = document.getElementById("toggleBtn");

//         let isVisible = false; // Початковий стан

//         toggleBtn.addEventListener("click", function() {
//             isVisible = toggleModalVisibility(isVisible);
//             modal.style.display = isVisible ? "block" : "none"; // Змінюємо видимість
//         });
//     </script>
// </body>
// </html>


// ### 🔎 Як працює цей код?
// 1. **HTML**:
//    - Є кнопка `Перемкнути модальне вікно`.
//    - Є `div` із класом `.modal`, який спочатку **прихований** (`display: none`).
  
// 2. **JavaScript**:
//    - Використовуємо `toggleModalVisibility()`, щоб **перемикати стан** між `true` і `false`.
//    - Після натискання кнопки змінюється значення `isVisible`, і модальне вікно **показується / ховається**.

// ✅ **Результат**: Натискання кнопки **показує / ховає** модальне вікно!

// Тепер ти знаєш, як це працює в HTML! 🚀 */


// !!  Методи рядків

// Уяви автомат із продажу кави.Клієнт може обрати каву з цукром або без, з молоком, шоколадом або апельсиновим соком — усе
// це властивості кави.
// Залежно від необхідної властивості, кава буде готуватися різними методами — певні рецепти вимагатимуть операції
// “додати цукор” або “додати молоко”, інші — ні.Це різні методи.
// Так само у програмуванні.
// Дані мають набір властивостей і методів, до яких можна звертатися в коді.Цей набір називається інтерфейсом.Використання
// властивостей і методів дозволяє нам отримувати інформацію про сутності та виконувати операції з ними.

// ? Властивості
// У попередніх розділах ми вже познайомилися з властивостями.
// Щоб добре розрізняти властивості та методи, варто згадати, що властивості — це описові характеристики сутності.
// У прикладі з кавою — це колір, кількість цукру, температура.Наприклад, у програмуванні рядок має властивість length,
//   яка повертає кількість символів у рядку.Для доступу до властивості використовується синтаксис із крапкою:

//*  objectName.property

// Щоб отримати довжину рядка, використовується властивість length:

//*    const message = "JavaScript is awesome";
//*    console.log(message.length); // 21

//?    Методи

// Методи — це дії, які можна виконати із сутністю, такі як додати цукор чи підігріти.У програмуванні дані також заздалегідь
// мають певні методи, які дозволяють виконувати різні операції, наприклад, перетворення рядка в різний регістр.
// Виклик методу дуже схожий на доступ до властивості, але наприкінці додаються круглі дужки, як при виклику функції:

//*     objectName.method()

// Ось приклад використання (виклику) методу toUpperCase() для перетворення рядка у верхній регістр:

//*   const message = "JavaScript is awesome";
//*   console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// Методи та властивості не можуть існувати самостійно без сутності, частиною якої вони є.Не можна викликати метод рядка
// trim() без рядка, не можна отримати значення властивості length без рядка або масиву.
// Вибери правильний синтаксис виклику методу з іменем `trim` для змінної `name`

// name.trim
// name.trim()
// trim()
// Result

// Чудово — це правильна відповідь! Для виклику методу використовується такий синтаксис: objectName.method()

//!   Метод slice()

// Метод slice() використовується для створення копії частини або всього рядка без зміни оригінального рядка.Він дозволяє
// витягувати підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси.
// Синтаксис методу slice() виглядає так:

//*      str.slice(startIndex, endIndex)

// де:

// str — вихідний рядок, з якого робитиметься копія.
// startIndex — індекс, з якого починається копіювання елементів рядка.
// endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка.


// Метод slice() копіює підрядок із вихідного рядка, починаючи з індексу startIndex і до(не включаючи) індексу endIndex,
// і повертає цю копію як новий рядок.

//*   const fullName = "Jacob Mercer";
//*   console.log(fullName.slice(0, 5)); // 'Jacob'
//*   console.log(fullName.slice(6, 12)); // 'Mercer'
//*   console.log(fullName.slice(0, 4)); // 'Jaco'
//*   console.log(fullName.slice(3, 9)); // 'ob Mer'
//*   console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

// Параметр endIndex є необов'язковим.
// Якщо endIndex не вказаний, витягуються всі елементи до кінця рядка.

//*   const fullName = "Jacob Mercer";
//*   console.log(fullName.slice(1)); // 'acob Mercer'
//*   console.log(fullName.slice(3)); // 'ob Mercer'

// Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.

//*      const fullName = "Jacob Mercer";
//*      console.log(fullName.slice()); // 'Jacob Mercer'

// Результат виклику методу slice() можна зберігати в змінній для подальшого використання.

//*      const fullName = "Jacob Mercer";
//*      const firstName = fullName.slice(0, 5);
//*      const lastName = fullName.slice(6);

//*      console.log(fullName); // "Jacob Mercer"
//*      console.log(firstName); // "Jacob"
//*      console.log(lastName); // "Mercer"

// Метод slice() корисний, коли потрібно отримати певну частину рядка або створити копію для подальшого використання,
// не змінюючи вихідний рядок.

//? Задача: 
// 
// The function getSubstring(string, length) takes a string and returns a new substring (a partial copy of it). 
// It declares two parameters, the values of which will be provided during its invocation:

  // string is an original string.
  // length stands for the length of the new substring.
  // Complete the function code so that it returns a new substring starting from the beginning of string and having a length 
  // of length.
  
  // The getSubstring(string, length) function is declared.
  // Calling the function getSubstring("Hello world", 3) returns "Hel".
  // Calling the function getSubstring("Hello world", 5) returns "Hello".
  // Calling the function getSubstring("Hello world", 8) returns "Hello wo".
  // Calling the function getSubstring("Hello world", 11) returns "Hello world".
  // Calling the function getSubstring("Hello world", 0) returns ""
  
  //*   function getSubstring(string, length) {
  //*     return string.slice(0, length);
  //*   }
  
  //*   // Test cases : 
  //*   console.log(getSubstring("Hello world", 3));  // "Hel"
  //*   console.log(getSubstring("Hello world", 5));  // "Hello"
  //*   console.log(getSubstring("Hello world", 8));  // "Hello wo"
  //*   console.log(getSubstring("Hello world", 11)); // "Hello world"
  //*   console.log(getSubstring("Hello world", 0));  // ""
    
//! Методи toLowerCase() і toUpperCase()

// Методи рядків toLowerCase() та toUpperCase() використовуються для зміни регістру символів у рядку.Обидва методи
// не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі.
//? Метод toLowerCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені в нижній регістр.

//*     const message = "Welcome to Bahamas!";
//*     console.log(message.toLowerCase()); // "welcome to bahamas!"
//*     console.log(message); // "Welcome to Bahamas!"

//? Метод toUpperCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені у верхній регістр.

//*     const message = "Welcome to Bahamas!";
//*     console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
//*     console.log(message); // "Welcome to Bahamas!"

//? Розгляньмо ситуацію:
// При пошуку за ключовим словом, користувач вводить рядок 'saMsUng', а його треба порівняти з рядком 'samsung' або 'SAMSUNG'.

//*  console.log('saMsUng' === 'samsung'); // false
//*  console.log('saMsUng' === 'SAMSUNG'); // false

// Щоб не вимагати абсолютно точного введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити
// всі його символи у верхній або нижній регістр.
// Для цього використовуються методи toLowerCase() або toUpperCase().

//*     const brandName = 'samsung';
//*     const userInput = 'saMsUng';
//*     const lowercaseInput = userInput.toLowerCase();

//*     console.log(brandName); // 'samsung'
//*     console.log(userInput); // 'saMsUng'
//*     console.log(userInput === brandName); // false
//*     console.log(lowercaseInput); // 'samsung'
//*     console.log(lowercaseInput === brandName); // true

//? Задача:
// The normalizeInput(input, to) function declares two parameters:

// input — a string that needs to be set to a specific case.
// to — a string with two possible values: "upper" or "lower", indicating to which case the input value should be converted.
// Enhance the code of the function so that:

// If the value of the to parameter was the string upper, then the function returned a copy of the input string, but in uppercase.
// Otherwise, the function returned a lowercase copy of the input string.
// The normalizeInput(input, to) function is declared.
// Calling the function normalizeInput("This ISN'T SpaM", "lower") returns "this isn't spam".
// Calling the function normalizeInput("This ISN'T SpaM", "upper") returns "THIS ISN'T SPAM".
// Calling the function normalizeInput("Big SALE", "lower") returns "big sale".
// Calling the function normalizeInput("Big SALE", "upper") returns "BIG SALE".
// Calling the function normalizeInput("Stay Awhile and Listen", "lower") returns "stay awhile and listen".
// Calling the function normalizeInput("Stay Awhile and Listen", "upper") returns "STAY AWHILE AND LISTEN".

//*      function normalizeInput(input, to) {
//*        return to === "upper" ? input.toUpperCase() : input.toLowerCase();
//*      }

//*      // Приклади використання:
//*      console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
//*      console.log(normalizeInput("Big SALE", "upper")); // "BIG SALE"
//*      console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN"
//*      console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
//*      console.log(normalizeInput("Big SALE", "lower")); // "big sale"

//!   Метод includes()

// Метод рядків includes() використовується для перевірки наявності підрядка у рядку.Він повертає логічне значення true,
// якщо підрядок знайдено, і false, якщо підрядок відсутній.
// Синтаксис методу includes() виглядає так:

//*    str.includes(substring)
// де:

// str — вихідний рядок, у якому ми шукаємо підрядок;
// substring — підрядок, який ми хочемо знайти у вихідному рядку.

// Приклад використання методу includes():

//*     const username = 'Jacob Mercer';

//*     console.log(username.includes('Jacob')); // true
//*     console.log(username.includes('John')); // false
//*     console.log(username.includes('Mercer')); // true
//*     console.log(username.includes('Doe')); // false

//NOTE : Регістр символів у рядку й підрядку має значення. Літера a, наприклад, не дорівнює літері A.

//*     const username = 'Jacob Mercer';

//*     console.log(username.includes('Jacob')); // true
//*     console.log(username.includes('jacob')); // false
//*     console.log(username.includes('Mercer')); // true
//*     console.log(username.includes('mercer')); // false

// Метод includes() корисний, коли нам необхідно виконати зазначені дії за умови, коли рядок містить певний підрядок.

//*    const message = "Please buy our stuff!";
//*    const hasSpam = message.includes("buy");

//*    if (hasSpam) {
//*      console.log("Warning: This message contains forbidden words.");
//*    } else {
//*      console.log("You can safely open this message.");
//*    }

// У цьому прикладі ми перевіряємо, чи містить змінна message підрядок "buy".
// Якщо це так, виводиться повідомлення з попередженням про вміст заборонених слів. В іншому разі відображається повідомлення про те, що повідомлення можна відкривати безпечно.

//? Задача:
// The function checkForName(fullName, firstName) takes two parameters and returns a boolean true or false based on whether the substring firstName is found within the string fullName.

// fullName is a string containing the full name.
// firstName is a string containing the name to check its presence in the full name.
// Enhance the body of the function so that it returns the result of checking whether the name (parameter firstName) is contained within the full name (parameter fullName). Keep in mind that the case of characters in the parameters fullName and firstName is unknown in advance. Before checking for inclusion, ensure they are converted to the same case.

// The checkForName(fullname, firstName) function is declared.
// The call to checkForName("Jason Neis", "Jason") function returns true.
// The call to checkForName("Jason Neis", "jAsOn") function returns true.
// The call to checkForName("Jason Neis", "Jacob") function returns false.
// The call to checkForName("Caty Stars", "Caty") function returns true.
// The call to checkForName("Caty Stars", "cAtY") function returns true.
// The call to checkForName("Caty Stars", "Andromeda") function returns false.

//*      function checkForName(fullName, firstName) {
//*        return fullName.toLowerCase().includes(firstName.toLowerCase());
//*      }

//*      // Приклади використання:
//*      console.log(checkForName("Jason Neis", "Jason")); // true
//*      console.log(checkForName("Jason Neis", "jAsOn")); // true
//*      console.log(checkForName("Jason Neis", "Jacob")); // false
//*      console.log(checkForName("Caty Stars", "Caty")); // true
//*      console.log(checkForName("Caty Stars", "cAtY")); // true
//*      console.log(checkForName("Caty Stars", "Andromeda")); // false

//!   Методи startsWith() і endsWith()

// Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. Вони повертають 
// булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню.
// Метод startsWith()
// Метод startsWith() перевіряє, чи починається рядок із зазначеного підрядка.

//*     str.startsWith(substr)

// substr — це рядок, з якого має починатися вихідний рядок.

// Приклад:

//*     const str = "Hello, world!";

//*     console.log(str.startsWith("Hello")); // true
//*     console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

// Метод endsWith()
// Метод endsWith() перевіряє, чи закінчується рядок вказаним підрядком.

//*   str.endsWith(substr)

// Він також приймає аргументом підрядок, присутність якого потрібно перевірити.

//*     Приклад:

//*     const str = "Hello, world!";

//*     console.log(str.endsWith("world!")); // true
//*     console.log(str.endsWith("World!")); // false (метод чутливий до регістру)


// Зверни увагу! 
// Обидва методи чутливі до регістру символів. Це означає, що під час порівняння підрядка з вихідним рядком регістр символів має збігатися. Якщо в ці методи не передати аргумент, то він повертає false.
 
//? Задача:
// The checkFileExtension(fileName, ext) function takes two parameters:

// fileName — a string that stores the file name with an extension, for example, styles.css, hello.js, etc.
// ext — a string that stores the extension, for example, .css, .js, etc.
// Enhance the code of the function so that:

// If the file name fileName ends with the extension specified in the parameter ext, then the function should return the string "File extension matches".
// Otherwise, the function returned the string "File extension does not match".
// The checkFileExtension(fullname, name) function is declared.
// Calling the function checkFileExtension("styles.css", ".css") returns "File extension matches".
// Calling the function checkFileExtension("styles.css", ".js") returns "File extension does not match".
// Calling the function checkFileExtension("app.js", ".js") returns "File extension matches".
// Calling the function checkFileExtension("app.js", ".html") returns "File extension does not match".
// Calling the function checkFileExtension("index.html", ".html") returns "File extension matches".
// Calling the function checkFileExtension("index.html", ".css") returns "File extension does not match".
// Calling the function checkFileExtension("index.html", ".js") returns "File extension does not match".

//*      function checkFileExtension(fileName, ext) {
//*        return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
//*      }

//*      // Приклади використання:
//*      console.log(checkFileExtension("styles.css", ".css")); // "File extension matches"
//*      console.log(checkFileExtension("styles.css", ".js")); // "File extension does not match"
//*      console.log(checkFileExtension("app.js", ".js")); // "File extension matches"
//*      console.log(checkFileExtension("app.js", ".html")); // "File extension does not match"
//*      console.log(checkFileExtension("index.html", ".html")); // "File extension matches"
//*      console.log(checkFileExtension("index.html", ".css")); // "File extension does not match"
//*      console.log(checkFileExtension("index.html", ".js")); // "File extension does not match"

//!     Метод indexOf()

// Метод indexOf() використовується для пошуку першого входження підрядка в рядок. Він повертає:
// індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або
// -1, якщо підрядок не виявлено

// Синтаксис:

// str.indexOf(substr)

// str — вихідний рядок, у якому потрібно виконати пошук;
// substr — рядок, який потрібно знайти у вихідному рядку.

// Приклад:

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// У цьому прикладі у нас є рядок message. Ми хочемо знайти перше входження підрядка "to". Метод indexOf() виконує пошук у рядку
//  і повертає 8 — індекс першого входження "to".
// Якщо підрядок не знайдено, метод indexOf() поверне -1:


// const message = "Welcome to Bahamas!";
// const index = message.indexOf("hello");
// console.log(index); // -1

// Метод indexOf() корисний, коли тобі потрібно перевірити, чи містить рядок певний підрядок і отримати його індекс,
// якщо його знайдено.Цей метод в аргументи може приймати рядок або число.Якщо в аргументах буде число, то воно автоматично
// перетвориться у рядок.А якщо нічого не передати, то поверне число - 1.
  
//? Задача:

  // The getFileName(file) function takes one parameter:

  // file — a string with the name of the file. The file name can have an extension, such as styles.css or app.js, or it can be without an extension, such as styles or app.
  // Using the indexOf and slice methods, complete the function code so that:

  // It checked for the presence of an extension in the file name (the extension name is separated from the file name by a period).
  // If the file name does not contain an extension, the function returned a new string containing the file name unchanged.
  // Otherwise, the function returned a substring with the file name but without the extension.
  // The getFileName(file) function is declared.
  // Calling the getFileName("styles.css") function returns "styles".
  // Calling the getFileName("app.js") function returns "app".
  // Calling the getFileName("app") function returns "app".
  // Calling the getFileName("index.js") function returns "index".
  // Calling the getFileName("index.html") function returns "index".
  // Calling the getFileName("index.css") function returns "index".
  // Calling the getFileName("index") function returns "index".
  
  // function getFileName(file) {
  //   const index = file.indexOf(".");
  //   return index !== -1 ? file.slice(0, index) : file;
  // }
  
  //*    Приклади використання:
  //*    console.log(getFileName("styles.css")); // "styles"
  //*    console.log(getFileName("app.js")); // "app"
  //*    console.log(getFileName("app")); // "app"
  //*    console.log(getFileName("index.js")); // "index"
  //*    console.log(getFileName("index.html")); // "index"
//*    console.log(getFileName("index.css")); // "index


  
//!     Метод trim()

// Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.
// Це дозволяє "очистити" рядок від зайвих пробілів, наприклад під час обробки введення тексту користувачем в елементи форми,
// видаливши зайві пробіли, які могли бути додані випадково.

  // Синтаксис:

//*  str.trim()

// Приклад:

//*     const input = " JavaScript is awesome!    ";
//*     const trimmedInput = input.trim();
//*     console.log(trimmedInput); // "JavaScript is awesome!"
//*     console.log(input); // " JavaScript is awesome!    "

//  У цьому прикладі метод trim() видаляє пробіли на початку та наприкінці рядка, залишаючи тільки текст "JavaScript is awesome!".

// Зверни увагу!
// Метод trim() не змінює вихідний рядок, а повертає новий рядок без початкових і кінцевих пробілів.

//?  Задача:

// The createFileName(name, ext) function takes two parameters:

// name — a string that stores the file name without the extension entered by the user. It may contain extra spaces at the beginning or end of a string, for example "order ", " finance ", etc.
// ext — a string that stores the extension, for example, "txt", "xml", etc.
// Using template string syntax and the trim() method, complete the function code so that it returns the full (concatenated) file name with the extension specified in the ext parameter in the format name.extension. Also, the full file name should not contain unnecessary spaces at the beginning or end.

// The createFileName(name, ext) function is declared.
// Calling the createFileName(" order ", "txt") function returns "order.txt".
// Calling the createFileName("report ", "csv") function returns "report.csv".
// Calling the createFileName(" presentation", "xml") function returns "presentation.xml".

//*    function createFileName(name, ext) {
//*      return `${name.trim()}.${ext}`;
//*    }

//*     // Приклади використання:
//*     console.log(createFileName(" order ", "txt")); // "order.txt"
//*     console.log(createFileName("report ", "csv")); // "report.csv"
//*     console.log(createFileName(" presentation", "xml")); // "presentation.xml"

//!      Цикли

// Типове завдання у програмуванні — виконання однотипної дії багато разів, наприклад вивести клієнтів зі списку один за
// одним або перебрати суми зарплат і для кожної виконати однаковий код.Саме для багаторазового повторення однієї частини
// коду використовуються цикли.

// Цикл — керуюча конструкція, призначена для організації багаторазового виконання набору інструкцій.
// Тіло циклу — послідовність інструкцій, призначена для багаторазового виконання.
// Ітерація — одиничне виконання тіла циклу.
// Умова виходу — вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.


//?  Цикл while

// Конструкція while створює цикл, який виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true.

//*    while (condition) {
//*      statement // код, тіло циклу
//*    }

// Умова обчислюється перед кожною ітерацією циклу.
// Якщо умова оцінюється як true, виконується код у тілі циклу (одна ітерація)
// Якщо умова оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу


// Цикл while — це цикл з передумовою, тобто він виконується доки істинна певна умова, зазначена перед його початком.
// Цю умову перевіряють до виконання тіла циклу, тому тіло може бути не виконано жодного разу, якщо умова від самого початку хибна.

// Розгляньмо приклад з лічильником:

//*      let count = 0;

//*      while (count < 10) {
//*        console.log(`Count: ${count}`);
//*        count += 1;
//*      }


// У цьому прикладі у нас є змінна count, яка збільшується з кожною ітерацією.
// Цикл while виконуватиметься доки count менше 10. Щойно count стане рівним або більшим за 10, умова стане хибною,
// і цикл завершиться.

// Задача: Реєстрація у готелі

// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.
// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме
// максимально допустимій.

//*       let clientCounter = 18;
//*       const maxClients = 25;

//*       while (clientCounter < maxClients) {
//*         console.log(clientCounter);
//*         clientCounter += 1;
//*       }

// Цикл while часто використовується, коли точна кількість ітерацій заздалегідь не відома.Отже, цикл має виконуватися до
// виконання певної умови.
// Важливо дбати про те, щоб умова циклу while зрештою стала хибною, щоб уникнути нескінченного виконання.
// Якби нам потрібно було написати функцію:

//*  function countClients(clientCounter, maxClients) {
//*    let counter = clientCounter; // створюємо локальну змінну

//*    while (counter < maxClients) {
//*      console.log(counter);
//*      counter += 1;
//*    }
//*  }

//*   countClients(18, 25);

// Покрокове виконання:

// Виклик countClients(18, 25):

// 1) Перша ітерація:

// counter = 18
// 18 < 25 → true, друкується 18, counter стає 19.
// 2) Друга ітерація:

// counter = 19
// 19 < 25 → true, друкується 19, counter стає 20.
// 3) Цикл триває, поки counter = 25, тоді 25 < 25 → false, і він завершується.


// Скільки разів виконується тіло циклу while?

// Принаймні один раз
// Доти, доки умова прирівнюється до true
// Доти, доки умова прирівнюється до false
// Result

// На жаль, ні. Давай запам’ятаємо: тіло циклу while виконуватиметься, доки умова істинна.

//?   Задача:

// The calculateTotal(number) function takes an integer(parameter number).Complete the function code so that it returns the
// sum of all integers from one to this number included.For example, if number is 3, then the sum is 1 + 2 + 3, i.e., 6.

// The calculateTotal(number) function is declared.
// Calling the calculateTotal(1) function returns 1.
// Calling the calculateTotal(3) function returns 6.
// Calling the calculateTotal(0) function returns 0.
// Calling the calculateTotal(18) function returns 171.
// Calling the calculateTotal(24) function returns 300.
// Calling the function calculateTotal() with a random number returns the correct value.

// function calculateTotal(number) {
//   let total = 0; // Початкова сума

//   for (let i = 1; i <= number; i++) { // Проходимо всі числа від 1 до number
//       total += i; // Додаємо кожне число до загальної суми
//   }

//   return total; // Повертаємо кінцевий результат
// }

// // Тестування:
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(0)); // 0
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

// Пояснення ++
// let i = 5;

// console.log(i++); // Виведе 5, але після цього i стане 6
// console.log(i);   // Вже 6

// let j = 5;
// console.log(j += 1); // Виведе 6, бо j збільшилося перед виводом
// Два плюсики (++) — це унарний оператор інкремента, який збільшує значення змінної на 1.

// 🔹 Як працює i++?
// i++ збільшує i на одиницю після виконання операції.

// Це те саме, що i = i + 1, але коротше.

// Приклад:

// javascript
// let i = 5;
// console.log(i++); // Виведе 5, бо спочатку показує старе значення, потім збільшує
// console.log(i);   // Вже 6
// 🔹 ++i vs i++
// Є дві форми інкремента:

// i++ (постфіксний інкремент) → Збільшує i, але повертає старе значення.

// ++i (префіксний інкремент) → Спочатку збільшує i, потім повертає нове значення.

// Приклад різниці:

// javascript
// let x = 3;
// console.log(x++); // Виведе 3, а потім x стане 4
// console.log(++x); // Спочатку x збільшиться до 5, потім виведе 5
// 📌 Де використовується?

// У циклах (for (let i = 0; i < 5; i++))

// Лічильники дій (clickCount++)

// Анімації або таймери (збільшення секунд)

// Тобто ++ дозволяє ефективно змінювати значення змінних, не пишучи зайвий код! 🚀 Сподіваюся, пояснення допомогло! 😃

// Дивно, теке ми не вчили. Алеж це то саме що й i+= 1 ?
// Так, i++ — це те ж саме, що й i += 1, тільки більш короткий запис!

// 🔹 Розбір:
// i++ → збільшує i на 1, але повертає старе значення.

// i += 1 → збільшує i на 1, але повертає нове значення.

// 🔎 Приклад:
// javascript
// let i = 5;

// console.log(i++); // Виведе 5, але після цього i стане 6
// console.log(i);   // Вже 6

// let j = 5;
// console.log(j += 1); // Виведе 6, бо j збільшилося перед виводом
// 📌 Головна різниця між i++ і i += 1 — це час змінення значення (префіксний або постфіксний запис). Але в більшості випадків i++ використовується для простого лічильника в циклах! 🚀


//?  Логічні оператори в циклах

//*    let str = "";
//*    for (let i = 0; i < 9; i++) {
//*    str += i;
//*    }

//*    console.log(str); // "012345678"

//! Цикл do…while

// У JavaScript існує ще один тип циклу while — це do...while.
// Цикли while і do...while працюють схожим чином, але мають одну ключову відмінність.Під час використання циклу do...while
// код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.

// Синтаксис:
// do {
//    statement // код, який буде виконуватися
// } while (condition);

// Блок коду всередині do виконується в перший раз незалежно від виконання умови.
// Потім, після кожної ітерації, перевіряється умова.Якщо умова оцінюється як true, цикл продовжує виконуватися; якщо — як
// false, цикл завершується.

// Розгляньмо приклад:

//*      let count = 0;

//*      do {
//*      	console.log(`Count: ${count}`);
//*      	count += 1;
//*      } while (count < 5);

// У прикладі код усередині циклу do виконається один раз, навіть якщо count більше або дорівнює 5.
// Після цього умову буде перевірено, і якщо count менше 5, цикл продовжить виконуватися.
// Цикл do...while корисний, коли потрібно, щоб код у блоці виконався хоча б один раз, незалежно від умови.

//? Задача:
// Скільки разів виконується тіло циклу do...while?

// Принаймні один раз на початку виконання циклу. А далі — стільки разів, скільки умова буде перетворюватися на true
// Рівно стільки разів, скільки умова перетворюється на true
// Рівно стільки разів, скільки умова перетворюється на false
// Result

// Правильно! Блок коду всередині do виконується в перший раз незалежно від виконання умови.Отже, тіло циклу do...while
// буде виконано принаймні один раз.А далі вже залежить від умови.

// !  Цикл for

// Цикл for також дозволяє виконувати код, що повторюється, багато разів.На відміну від циклів while і do…while,
// цикл for має змінну - лічильник.Змінна - лічильник оголошується за допомогою ключового слова let
// (оголошення через const видасть помилку).На кожній ітерації після виконання коду з тіла циклу вона змінює своє значення
//  від заданого початкового до кінцевого з певним кроком.
// Синтаксис циклу for:

//*   for (Ініціалізація; Умова; Пост-вираз) {
//*     // Тіло циклу
//*   }

// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією(повторенням) циклу.Якщо умова перетворюється на ** true **,
// то виконується тіло циклу.Якщо умова перетворюється на false, то цикл завершується.
// Пост - вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови.Використовується для оновлення
// значення змінної - лічильника.
// Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.

// Розглянемо приклад:

//*     for (let i = 0; i <= 20; i += 5) {
//*       console.log(i);
//*     }

// У наведеному прикладі циклу for змінна i ініціалізується значенням 0. Цикл виконується доти, доки i менша або дорівнює 20.
// Після кожної ітерації значення i збільшується на 5. У результаті в консоль будуть виведені числа 0, 5, 10, 15 і 20.
// Також можна зробити зворотний відлік, змінивши умову і зменшуючи лічильник на якесь значення після кожної ітерації.

//*     for (let i = 20; i >= 0; i -= 5) {
//*       console.log(i);
//*     }

// У наведеному прикладі циклу for змінна i ініціалізується значенням 20. Цикл виконується доти, доки i більше або дорівнює 0.
// Після кожної ітерації значення i зменшується на 5. У результаті в консоль будуть виведені числа 20, 15, 10, 5 і 0.

// Напишемо фукнцію яка підсумовує всі числа від 0 до заданого числа і повертає результат:

//*       function sumUpTo(number) {
//*         let sum = 0;

//*         for (let i = 0; i <= number; i += 1) {
//*           sum += i;
//*         }

//*         return sum;
//*       }

//*       console.log(sumUpTo(5)); // 15
//*       console.log(sumUpTo(10)); // 55
//*       console.log(sumUpTo(0)); // 0

// Як працює функція:
// 1) Приймає один параметр – number, який визначає, до якого числа потрібно підсумовувати.
// 2) Оголошує змінну sum і встановлює її в 0 – у ній накопичуватиметься сума.
// 3) Запускає цикл for:
  
// for (let i = 0; i <= number; i += 1) {

// i починається з 0.
// Працює, поки i <= number.
// Після кожної ітерації i збільшується на 1.
// 4) Додає поточне значення i до sum:
// sum += i;
// 5) Після завершення циклу повертає підсумоване значення sum у зовнішній код.

//? Коли виконується блок ініціалізації лічильника циклу?

// todo:  Усього один раз на початку виконання циклу
// Перед кожною ітерацією циклу
// Після кожної ітерації циклу
// Result

// Абсолютно точно! Ініціалізація виконується один раз перед початком циклу.У ній оголошується змінна - лічильник і
// вказується її початкове значення.

//?  Коли виконується блок перевірки умови циклу?

// Усього один раз на початку виконання циклу
//todo:  Перед кожною ітерацією циклу
// Після кожної ітерації циклу
// Result

// Правильно! Умова — це вираз, який оцінюється перед кожною ітерацією(повторенням) циклу.Якщо умова перетворюється на true,
// то виконується тіло циклу.Якщо умова перетворюється на false,то цикл завершується.

//? Коли виконується блок пост - виразу циклу ?

// Всього один раз на початку виконання циклу
// Перед кожною ітерацією циклу
// todo:  Після кожної ітерації циклу
// Result

// Саме так! Пост - вираз виконується в кінці кожної ітерації циклу.Перед кожною ітерацією циклу перевіряється умова.
// А ініціалізація виконується один раз перед початком циклу.

//& Коли припиняється виконання циклу?

//todo:   Коли вираз в умові перетворюється на false
// Коли вираз в умові перетворюється на true
// Result

// Так, усе правильно! Виконання коду в циклі for припиняється, коли умова оцінюється як хибна.

//?  Задача:
// The function calculateTotal(number) takes an integer (the parameter number). Using a for loop, complete the function's code so that it returns the sum of all integers from one to this number included. For example, if number is 3, then the sum is 1 + 2 + 3, i.e., 6.

// The calculateTotal(number) function is declared.
// Calling the calculateTotal(1) function returns 1.
// Calling the calculateTotal(0) function returns 0.
// Calling the calculateTotal(7) function returns 28.
// Calling the calculateTotal(18) function returns 171.
// Calling the calculateTotal(24) function returns 300.
// Calling the function calculateTotal() with a random number returns the correct value.

//*        function calculateTotal(number) {
//*          let total = 0; // Початкове значення суми

//*          for (let i = 1; i <= number; i++) { // Перебираємо всі числа від 1 до number
//*              total += i; // Додаємо поточне число до загальної суми
//*          }

//*          return total; // Повертаємо остаточну суму
//*        }

//*        // Перевірка:
//*        console.log(calculateTotal(1));  // 1
//*        console.log(calculateTotal(0));  // 0
//*        console.log(calculateTotal(7));  // 28
//*        console.log(calculateTotal(18)); // 171
//*        console.log(calculateTotal(24)); // 300

//!! Iнкремент і декремент

// Інкремент(++) і декремент(--) — це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю
// і одразу ж зберігають оновлене значення у цій змінній.Існують два види інкременту та декременту: префіксний і постфіксний.
// Інкремент

// Префіксний інкремент (++value) спочатку збільшує значення змінної, а потім використовує нове значення у виразі.

//*    let x = 5;
//*    const y = ++x;
//*    console.log(x); // 6
//*    console.log(y); // 6

// Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення.

//* let x = 5;
//* const y = x++;
//* console.log(x); // 6
//* console.log(y); // 5

// Ти правильно підмітив! **Постфіксний інкремент (`x++`)** спочатку **повертає поточне значення змінної**, а вже потім збільшує її на 1.

// ### 🔍 Як працює `x++` у твоєму коді:
// ```javascript
// let x = 5;
// const y = x++; // Постфіксний інкремент
// console.log(x); // 6 (Змінна x вже збільшена)
// console.log(y); // 5 (Отримала старе значення x)
// ```

// ### 📌 Розбір покроково:
// 1. **`let x = 5;`** → Оголошуємо змінну `x`, її початкове значення — `5`.
// 2. **`const y = x++;`**  
//    - `y` отримує **старе значення `x`** (тобто `5`).
//    - Після цього `x` **збільшується на 1**, стає `6`.
// 3. **`console.log(x);`** → Виводить `6`, бо `x` вже змінився.
// 4. **`console.log(y);`** → Виводить `5`, бо `y` зберегла старе значення `x`.

// ### 🔄 Постфіксний (`x++`) vs Префіксний (`++x`):
// - **`x++`** → повертає **старе значення**, а потім збільшує `x`.
// - **`++x`** → спочатку **збільшує `x`**, а потім повертає нове значення.

// #### 🔎 Приклад різниці:
// ```javascript
// let a = 5;
// console.log(a++); // 5 (старе значення, потім a = 6)
// console.log(a);   // 6

// let b = 5;
// console.log(++b); // 6 (спочатку збільшується, потім повертається)
// console.log(b);   // 6
// ```

// 📌 **Застосування в коді**:
// - `x++` часто використовують у **циклах** (`for (let i = 0; i < 10; i++)`).
// - `++x` може бути зручним, коли треба **миттєво отримати нове значення** після збільшення.

// Ти чудово розбираєшся! 🚀 Сподіваюся, це пояснення допомогло 😃


//?  Декремент

// Префіксний декремент (--value) спочатку зменшує значення змінної, а потім використовує нове значення у виразі.

// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

// Постфіксний декремент (value--) спочатку використовує поточне значення змінної у виразі, а потім виконує зменшення
//  значення.

// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

// Ці операції корисні, коли тобі потрібно змінювати значення змінних одразу на одиницю, що може бути важливо, наприклад,
//  при створенні лічильників у циклах, замість комбінованих операторів += і -=.

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// У прикладі циклу for вище, змінна i ініціалізується значенням 0, і цикл виконується доти, доки i менше або дорівнює 5.
//  Після кожної ітерації значення i збільшується на 1. У результаті в консоль будуть виведені числа від 0 до 5.

//? Тест
// Вибери правильний синтаксис операції постфіксного інкременту над змінною age

//todo   age++
// age+
// ++age
// Result

// І це правильно! age++ — це постфіксний інкремент, який спочатку використовує поточне значення змінної у виразі, а потім 
// виконує збільшення значення.

//? Задача : 

// The calculateEvenTotal(number) function takes an integer(parameter number).Complete the function code so that it returns
// the sum of all even integers from one to this number included.Even numbers are those that can be divided by 2 without
// a remainder(we learned how to do this in the topic Arithmetic Operations in Module 1). For example, if number equals 6,
// then the sum is 2 + 4 + 6, i.e., 12.

// The calculateEvenTotal(number) function is declared.
// Calling the calculateEvenTotal(1) function returns 0.
// Calling the calculateEvenTotal(3) function returns 2.
// Calling the calculateEvenTotal(7) function returns 12.
// Calling the calculateEvenTotal(18) function returns 90.
// Calling the calculateEvenTotal(27) function returns 182.
// Calling the function calculateEvenTotal() with a random number returns the correct value.

// const correctPassword = "jqueryismyjam";
// const userPassword = "jqueryismyjam";
// const isValid = userPassword === correctPassword;

// console.log(isValid);
