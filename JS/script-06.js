//!    Контекст виконання функції

//? Ключове слово this

// Контекст функції у JavaScript подібний до контексту в реченні.
// Розглянемо наступні приклади для кращого розуміння:

// Віктор біжить швидко, тому що Віктор намагається зловити поїзд.
// Віктор біжить швидко, тому що він намагається зловити поїзд.

// Друге речення звучить більш лаконічно та природньо, чи не так?

// Використання займенника "він" дозволяє уникнути повторення підмета "Віктор".
// Речення задає контекст, у якому Віктор — це об’єкт у центрі уваги, який виконує дії.
// Немає жодних сумнівів, що займенник "він" у рамках цього речення вказує саме на підмет “Віктор”, отже, немає сенсу повторювати ім’я ще раз.

// Так само об'єкт може бути поточним контекстом під час виконання функції.
// Використання імені самого об'єкта для доступу до його властивостей усередині методів є поганим підходом.
// Це те ж саме, що й кожен раз повторювати "Віктор" замість "він" у реченні.


// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };

// user.showName();

// Замість імені об'єкта, ми використовуємо зарезервоване ключове слово this.

// Під час виклику функції у this записується посилання на об'єкт, у контексті якого вона була викликана.
// Таким чином, у тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.



// const user = {
//   username: "Victor",
//   showName() {
	// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

// Метод showName — це функція, яка викликається в контексті об'єкта user. Під час її виклику в this записується посилання на об'єкт user,
// і ми можемо звертатися до його властивостей і методів.

//* Нотатки:
    
//* Так, ти все правильно зрозумів! Використовуючи`console.log(this.username)`, ми перевіряємо, чи`this` коректно посилається на об'єкт `user`.
//* Після того, як переконалися, що все працює, можна прибрати`console.log()`.

// *Що залишиться? Метод усе ще буде існувати, але не виконуватиме явного виводу. Його можна змінити, щоб він повертав значення (`return`), яке можна використати пізніше.
// *Ось порівняння:
// *    const user = {
//*       username: "Victor",
// *      showName() {
// *        return this.username; // Тепер метод повертає значення, а не друкує його
// *      },
// *    };
    
    //* Виклик методу без консольного виводу
// *    const name = user.showName();
// *    console.log(name); // Victor

//* У цьому варіанті `showName()` повертає `this.username`, щоб його можна було використати далі.
//* Якщо `console.log()` прибрати, метод усе ще буде працювати, але не буде безпосередньо друкувати результат.Це корисно, якщо ти хочеш використати значення
//* в іншому місці коду!

//? Яким буде значення this під час виклику методу user.showName()?

// Посилання на масив, який ми передаємо їй аргументом
// Посилання на об'єкт, який ми передаємо їй аргументом
// * Посилання на об'єкт, у контексті якого вона була викликана
// Result

// * Точнісінько так! Під час виклику методу user.showName() значенням this буде посилання на об’єкт user, у контексті якого вона була викликана.

//todo    Задача:

// Refactor the methods of the pizzaPalace object by placing the missing this in the places where the properties and methods of the object are accessed.

// The checkPizza method of the pizzaPalace object uses this.
// The order method of the pizzaPalace object uses this.
// Calling pizzaPalace.order("Smoked") returns the string "Order accepted, preparing «Smoked» pizza".
// Calling pizzaPalace.order("Four meats") returns the string "Order accepted, preparing «Four meats» pizza".
// Calling pizzaPalace.order("Big Mike") returns the string "Sorry, there is no pizza named «Big Mike»".
// Calling pizzaPalace.order("Viennese") returns the string "Sorry, there is no pizza named «Viennese»".

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);// Додаємо this для доступу до властивості pizzas
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };
  
// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"

//!  Глобальний контекст

// У визначенні значення this є важливий нюанс.Значення this визначається не на момент оголошення функції(за винятком стрілкових функцій),
// а на момент її виклику.Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.

// function foo() {
//   console.log(this);
// }

// foo(); // window



// У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window.
// Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.
// У суворому режимі значення this у глобальному контексті завжди буде undefined.

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

//* Нотатки:
// Коли ти викликаєш`foo()`, вона виконується у ** глобальному контексті **.У браузері глобальний контекст — це`window`, тому`this` всередині`foo()`
// посилається на`window`.

// ### **Чому так відбувається?**
// У JavaScript:
// - Якщо **функція викликається без об'єкта**, `this` всередині неї в **"strict mode"** буде `undefined`, а в звичайному режимі — `window`.
// - `window` — це глобальний об'єкт у браузері, тому `console.log(this);` просто друкує його.

// ### **Як уникнути цього?**
// 1️⃣ **Викликати функцію як метод об'єкта**:
// ```js
// const obj = {
//   foo() {
//     console.log(this);
//   }
// };

// obj.foo(); // obj, бо метод викликано в контексті obj
// ```

// 2️⃣ **Використати `use strict` для уникнення `window`**:
// ```js
// "use strict";
// function foo() {
//   console.log(this);
// }
// foo(); // undefined (бо `use strict` забороняє автоматичне прив’язування до window)
// ```

// 3️⃣ **Зв’язати `this` вручну через `bind()`**:
// ```js
// function foo() {
//   console.log(this);
// }

// const boundFoo = foo.bind({ name: "Mykhaylo" });
// boundFoo(); // { name: "Mykhaylo" }
// ```

// Отже, якщо ти просто викликаєш`foo()`, вона працює в глобальному контексті, який у браузері — це`window`.Але ти можеш контролювати`this`,
// якщо викликаєш функцію в контексті конкретного об'єкта! 🚀

// Зрозуміло, чи ще є питання? 😊

// Test:
// Чим визначається this у НЕ стрілочних функціях?

//* Тим, як функцію було викликано
// Тим, де функцію було оголошено
// Тим, коли функцію було викликано
// Result

//* Правильно! Значення this визначається на момент виклику функції, тобто this визначається тим, як саме функцію викликали.

// Яке буде значення this під час виклику функції в суворому режимі?

// window
// null
//* undefined
// Result

//* Саме так! У суворому режимі значення this у глобальному контексті завжди буде undefined.

// Приклад від ментора:
// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };
// console.log(object.getMessage());// 'Hello, World'
// У цьому прикладі, коли ми викликаємо object.getMessage(), this посилається на об'єкт object.
// Тому метод getMessage повертає значення властивості message об'єкта object, тобто 'Hello, World'.
// Ні, викликати `"Hello, Earth"` напряму не вийде!

// Давай розберемося:
// ```js
// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth'; // Локальна змінна
//     return this.message; // Посилається на властивість об'єкта
//   },
// };

// console.log(object.getMessage()); // 'Hello, World'
// ```

// 🔹 **Чому не `"Hello, Earth"`?**
// - У функції `getMessage()` створюється **локальна змінна** `message = "Hello, Earth"`.
// - Але ця змінна **існує тільки** у межах функції `getMessage()` та **не змінює** `this.message`.
// - `this.message` **належить об'єкту** `object`, тому функція повертає `'Hello, World'`.

// 🔹 **Як отримати `"Hello, Earth"`?**
// Якщо хочеш повернути `"Hello, Earth"`, треба **повернути локальну змінну**, ось так:
// ```js
// getMessage() {
//   const message = 'Hello, Earth';
//   return message; // Повертає локальну змінну
// }
// ```
// Тоді виклик `console.log(object.getMessage());` покаже **`"Hello, Earth"`**.

//? Контекст методу об'єкта

// Якщо функція була викликана як метод об'єкта, то контекст вказуватиме на сам об'єкт, якому належить цей метод.

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   }
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

// Розглянемо складніший приклад.
// Спочатку створюємо функцію в глобальному контексті і викликаємо її. Зверни увагу на використання суворого режиму.

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// Потім присвоюємо цю функцію властивості об'єкта і викликаємо її як метод цього об'єкта.

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

// Створили об'єкт user з властивістю username
// Об'єкту user методу showContext присвоїли значення функції showThis. Зверни увагу, що це не виклик — немає ()
// Тепер викликаємо метод showContext, у якому знаходиться посилання на функцію showThis, тобто ми викликаємо функцію в контексті об'єкта.
// this вказуватиме на поточний об'єкт, у якому здійснюється виклик

// Цей приклад ілюструє, що контекст виконання функції (this) визначається в момент її виклику, а не в момент оголошення.

//todo Прочитай приклад коду
//?  1)
// "use strict";

// const book = {
// 	updateAuthor(newAuthor) {
 		// ...
// 	}
// };

// book.updateAuthor("Jacob");

// Яким буде значення this всередині функції updateAuthor під час її виклику в цьому коді?

//* Об'єкт book
// Об'єкт window
// Рядок "Jacob"
// undefined
// Result

//* Давай розбиратися? У прикладі метод updateAuthor в об'єкті book. Значення this всередині цієї функції визначається контекстом виклику
// цього методу book.updateAuthor("Jacob"); Ключове слово this у методі updateAuthor вказує на сам об'єкт book.

//*  Нотатки:

// У цьому коді `updateAuthor`—це ** метод ** об'єкта `book`. Коли викликається `book.updateAuthor("Jacob")`, ключове слово **`this`** у методі `updateAuthor`
// вказує ** саме на об'єкт `book`**, тому що метод викликається через цей об'єкт.

// Ось як можна чітко побачити `this`:

// "use strict";

// const book = {
//   updateAuthor(newAuthor) {
//     console.log("this всередині updateAuthor:", this);
//   }
// };

// book.updateAuthor("Jacob");

// Результат у консолі буде:

// this всередині updateAuthor: { updateAuthor: ƒ }


// Тобто **`this`—це об'єкт `book`**, який містить метод `updateAuthor`.

// ✅ **Головне правило**: якщо функція викликається **як метод об'єкта**, то `this` вказує на **цей об'єкт**.

//?  2)
// Прочитай приклад коду

// const book = {
// 	updateTitle(newTitle) {
// 		// ...
// 	}
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");

// Яким буде значення this всередині функції update під час її виклику в цьому коді?

// Об'єкт book
// undefined
//* Об'єкт window
// Рядок "Lord Of The Rings"
// Result

//* Давай з’ясуємо чому. У прикладі функція update викликається як окрема функція, а не як метод об'єкта book.
// Оскільки функція update була витягнута з контексту об'єкта book і збережена в окремій змінній, контекст (this) вже не вказуватиме на об'єкт book.
// Отже, у цьому випадку this у функції updateTitle буде визначатися згідно зі звичайними правилами, що стосуються глобального об'єкта (такий як window у браузері).

//!  Метод call()

// Бувають ситуації, коли функцію потрібно викликати в контексті об'єкта, навіть якщо функція не є методом цього об'єкта.
// Для цього у JavaScript існують спеціальні методи: call, apply і bind, які дозволяють вказати контекст виклику функції.

// Вивчимо сигнатуру цього методу. Сигнатура — це ім'я методу і його параметри.

// Сигнатура методу call**()** виглядає так:

// foo.call(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.

// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"
// Тести:

// ? Що робить метод call?
//     1-1
// Викликає функцію, передаючи їй аргументи через масив
//* Викликає функцію в певному контексті і передає перелік аргументів
// Видаляє всі об'єкти в масиві
// Визначає кількість елементів у масиві
// Result

//* Правильно! Метод call дозволяє викликати функцію в контексті об'єкта, навіть якщо функція не є методом цього об'єкта, а також передає функції певні аргументи.

  //   2-2
//?  Як правильно за допомогою методу call викликати функцію showName в контексті об’єкта user?
// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// user.call(showName)
// * showName.call(user)
// call(showName, user)
// showName().call(user)
  // Result

// * Метод call слід викликати на функції, передаючи аргументом об'єкт, який буде встановлювати контекст (this) для цієї функції. У цьому випадку showName є функцією, і ми встановлюємо контекстом об'єкт user, щоб вона могла отримати доступ до його властивості name.

  //    3-3
// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice"
// };

// greet.call(context, "Bob");

// Яким буде результат, якщо викликати код вище?

// "Hello, Bob! I am John"
// "Hello, Bob! I am Bob"
//* "Hello, Bob! I am Alice"
// TypeError: Cannot read property 'person' of undefined
// Result

//* І це правильна відповідь! Функція greet виводить "Hello, Bob!", де "Bob" — це значення name,
// і "I am Alice", де "Alice" — це значення this.person, встановлене в контексті.

//!    Метод apply()

// Метод apply є аналогом методу call.Відмінність у тому, що в методі apply() синтаксис
// передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

// Сигнатура методу apply**()** виглядає так:

// foo.apply(thisArg, [arg1, arg2, ...])

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.


// Метод apply викликає функцію foo таким чином, що значення this у функції буде посилатися
// на об'єкт obj і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// Розгляньмо приклад, де використаємо раніше оголошену нами функцію greet.
// Цього разу викликаємо її, використовуючи метод apply замість call.

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Тобто різниця між call і apply полягає лише у формі передачі аргументів.
// Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції
// в конкретній ситуації.У всіх інших аспектах вони працюють ідентично: викликають функцію
// в контексті зазначеного об'єкта і передають їй аргументи.

//! Метод bind() і втрата контексту

// Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// Сигнатура методу bind() виглядає так:

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику
// Давай спробуємо зберегти посилання на метод об'єкта у змінну і викликати його в глобальному контексті.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')


// Зберегли посилання на метод sayHello у змінну greet
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті,
// тому значення this буде undefined


// При спробі звернутися до властивості this.username під час виклику функції greet(),
// виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// Коли ми використовуємо bind(), ми створюємо нову функцію greet.Ця нова функція завжди
// матиме правильний контекст і може використовувати властивість username об'єкта customer.
// Тест:
// Що робить метод bind ?

// Викликає функцію одразу ж і повертає результат
//* Створює і повертає нову функцію з прив'язаним контекстом
// Видаляє функцію
// Result

//* І це правильно! Метод bind створює і повертає нову функцію, яка має заздалегідь
// встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими
// ргументами.

// Який синтаксис використовується для виклику методу bind, де function — це функція, а context — це об'єкт?

// *function.bind(context)
// context.bind(function)
// context.function.bind()
// Result

//* Правильно! Для виклику методу bind використовується function.bind(context),
// де function — це функція, для якої треба створити прив'язану версію, context — це об'єкт,
// який потрібно встановити як новий контекст(значення this) для цієї функції.
//   3-3
// Прочитай приклад коду

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice"
// };

// const greet = sayHello.bind(user);

// greet("Hello");

// Який результат буде в тебе, якщо викликати код вище?

// "this, Alice!"
//* "Hello, Alice!"
// "Hello, this!"
// Result

//* Саме так! Метод bind створює нову функцію greet, прив'язану до об'єкта user як контексту.
// Після цього, коли функція greet викликається з аргументом "Hello", вона виводить рядок
// "Hello, Alice!", де this.name вказує на властивість name об'єкта user.

//!  Метод bind() і колбеки

// Метод bind() є дуже корисним.Особливо важливо його використовувати в колбек - функціях і
// ситуаціях, де можлива втрата контексту під час виклику функції.
// Розглянемо приклад втрати контексту, коли ми передаємо метод об'єкта як колбек-функцію:

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined
// // (reading 'firstName')

// У цьому випадку метод getFullName передається як колбек - функція callback і втрачає
// контекст об'єкта customer. Це призводить до помилки, оскільки значення this у методі
// getFullName, коли він викликається як колбек у глобальному контексті, є undefined.
// Звертаючись до властивостей firstName і lastName, ми отримаємо помилку,
// оскільки undefined — це не об'єкт.
// Щоб уникнути цієї втрати контексту, можна використати метод bind().Замість передачі
// оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'
// єкта customer.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
//   Тест:

// 1 - 1

// Прочитай приклад коду
// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });
// showBooks();

// Що буде виведено в консоль під час виконання коду вище?

// 1923
//* 724
// undefined
// TypeError: Cannot read properties of undefined (reading 'books')
// Result

// * Функція logBookCount викликається через метод bind, який прив'язує контекст 
// до об'єкта { books: 724 }. Після того, як функція showBooks викликається, вона викликає метод logBookCount з контекстом { books: 724 }, і тому виводиться значення властивості books цього контексту, тобто 724.
  // 2-2 
// Прочитай приклад коду

// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount);

// Що буде виведено в консоль під час виконання коду вище?

// 1923
// window
// undefined
//* TypeError: Cannot read properties of undefined (reading 'books')
// Result

//*  Функція showBooks викликається з аргументом library.logBookCount, який є методом об'єкта library. 
// Коли в тілі showBooks викликається callback(), тобто метод logBookCount без прив’язаного контексту,
// то значенням this у суворому режимі буде undefined.Відповідно спроба знайти на ньому властивість books 
// викличе помилку.
//  3-3 
// Прочитай приклад коду

// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount);

// Як потрібно змінити останній рядок коду, щоб зберегти контекст під час передачі колбека?

// library.logBookCount.bind(library)
// showBooks(logBookCount.bind(library))
//*  showBooks(library.logBookCount.bind(library))
// bind(library, showBooks, logBookCount)
// Result

//*Код showBooks(library.logBookCount.bind(library)) використовує метод bind 
// для прив'язки контексту library до функції logBookCount перед передачею її в якості колбека 
// функції showBooks. Таким чином, контекст буде збережений і функція logBookCount буде викликана 
// з правильним контекстом і виведе значення властивості books об'єкта library.

//!!  Стрілочні функції

// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// Стрілочні функції також ігнорують наявність суворого режиму.

// Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі."use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// Розгляньмо приклад, який добре ілюструє, як працює контекст для стрілочних функцій.

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.
// Можливо, це не часто використовується на практиці. Але такі кейси досить типові для співбесіди.
// На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Mango" }); 
// boundShowThis(); // this in showThis: window
// Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.

// Що треба запам’ятати про this у стрілочних функціях?
// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.