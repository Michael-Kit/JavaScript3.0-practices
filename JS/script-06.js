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
// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була 
// оголошена, і ніколи не змінюється.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього 
// об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// Стрілочні функції також ігнорують наявність суворого режиму.

// Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, 
// незалежно від того, чи виконується скрипт у суворому режимі."use strict";

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
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті 
// без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. 
// Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання 
// на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.
// Можливо, це не часто використовується на практиці. Але такі кейси досить типові для співбесіди.
// На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. 
// Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Mango" }); 
// boundShowThis(); // this in showThis: window
// Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від 
// звичайних функцій, значення this яких може бути змінено.

// Що треба запам’ятати про this у стрілочних функціях?
// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this 
// посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind 
// не впливають на значення this у стрілках.

//todo   Tect: 
//  1-1
// Який контекст має this у стрілочних функціях?

// Контекст, що завжди визначається як глобальний, тобто window
// Контекст, що визначається на момент виклику функції
//* Контекст, що визначається на момент оголошення функції
// Контекст, що визначається об'єктом, до якого функція відноситься
// Result

// * Це важливо запам’ятати: контекст this усередині стрілочної функції визначається місцем її оголошення.

// 2-2
// Як можна змінити значення this у стрілочній функції?

//* this завжди має одне й те саме значення в стрілочній функції
// Значення this можна змінити, використовуючи методи call, apply або bind
// Змінити контекст можна лише внутрішньо у функції
// Значення this можна змінити тільки, якщо видалити this із функції
// Result

//* Абсолютно точно! Неможливо змінити значення this усередині стрілочних функцій після її оголошення,
//   this завжди буде посилатись на батьківський контекст
// 3 - 3
// Прочитай приклад коду

// const a = () => {
// 	console.log(this);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" });

// Що буде виведено на консоль в результаті виконання коду вище?

// undefined
// *  window
// об’єкт { user: "Mango" }
// помилка
// Result

// * І це правильна відповідь! Давай звіримо хід міркування: у прикладі оголошена стрілочна функція a, 
// яка логує свій this. Функція a була створена в глобальному контексті, де this вказує на window. 
// Хоча ми намагаємось змінити контекст функції b за допомогою call, стрілочна функція a ігнорує цей контекст. 
// Тому при виклику a виведе window.

//! Алгоритм визначення this
// Ключове слово this — це одна з найзаплутаніших концепцій для новачка.
// Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.
// Але все стає значно простішим, коли є простий алгоритм визначення значення this.

// Крок 1
// Це стрілочна функція?
// Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2

// Крок 2
// Чи використовуються методи call, apply або bind?
// Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3

// Крок 3
// Фукція викликається як метод об’єкта object.method?
// Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4

// Крок 4
// Скрипт виконується в суворому режимі?
// Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window

// Збережи собі цю схему, щоб швидко згадати алгоритм визначення this (дивись в шпаргалках)

//!    Прототипи

//?  Прототип об'єкта
// Звідки беруться вбудовані методи масивів push, map, reduce та інші?
// Чому у функції є методи call і bind?
// Досі ми просто приймали, що вони є і ними можна користуватися. Прийшов час знайти відповіді на ці питання.
// Усе це можливо завдяки механізму прототипного успадкування, який дає змогу організувати об'єкти в ланцюжки таким чином, 
// щоб здійснювався автоматичний пошук властивості в іншому об'єкті, якщо її не знайдено в поточному.
// Схематично це виглядає так:
//       ОБ'ЄКТ "А"            ОБ'ЄКТ "B"
//   ([[Prototype]]) ====> (      )        лапки тут як контейнер 
    
// Сполучною ланкою виступає спеціальна службова властивість[[Prototype]], яку ми не змінюємо явно, вона використовується 
// для автоматичного зв'язку об'єктів.
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Розгляньмо приклад:

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі 
// об'єкт animal — це прототип для об'єкта dog.

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Звернення dog.name працює очевидним чином: повертає властивість name об'єкта dog. Звертаючись до dog.legs, 
// інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з[[Prototype]],
// тобто в цьому випадку в об'єкті animal — його прототипі.
// Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.
// Тест:
// 1-1
// Що робить метод Object.create(obj)?

// Клонує об'єкт obj
// Створює новий об'єкт з властивостями, вказаними у obj
//* Створює новий об'єкт і встановлює йому прототипом obj
// Створює порожній об'єкт без прототипу
// Result

// *  І це правильна відповідь! Метод Object.create(obj) створює новий об'єкт і встановлює йому прототипом obj.
// Такий новий об'єкт матиме прототип obj і буде успадковувати його властивості.

// Як називається властивість, яка зберігає посилання на прототип?

// Prototype
// [Prototype]
//*  [[Prototype]]
// proto
// Result

// *  Саме так! Властивість, яка зберігає посилання на прототип, називається [[Prototype]].

//todo  Задача: 
// Modify the code so that the parent object becomes the prototype for the object in the child variable.

// The variable parent is declared.
// The value of the variable parent is an object.
// The variable child is declared.
// The value of the variable child is an object.
// The method Object.create() is used.
// Calling parent.hasOwnProperty("surname") returns true.
// Calling parent.hasOwnProperty("heritage") returns true.
// Calling child.hasOwnProperty("name") returns true.
// Accessing child.name returns "Jason".
// Calling child.hasOwnProperty("age") returns true.
// Accessing child.age returns 27.
// Calling child.hasOwnProperty("surname") returns false.
// Accessing child.surname returns "Moore".
// Calling child.hasOwnProperty("heritage") returns false.
// Accessing child.heritage returns "Irish".
// Calling parent.isPrototypeOf(child) returns true.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.name);
// console.log(child.age);
// console.log(child.surname);
// console.log(child.heritage);
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(parent.isPrototypeOf(child));

//?  Перевірка прототипу
// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

// objA.isPrototypeOf(objB)
// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false
// Розгляньмо приклад використання методу isPrototypeOf() для перевірки належності прототипу.

// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

// у першому лозі виводиться об'єкт dog із властивістями name і [[Prototype]]. [[Prototype]] вказує на animal як прототип
// у другому — повертається true, оскільки animal є прототипом для dog
// у третьому — повертається false, оскільки прототип не успадковується у зворотному напрямку (від dog до animal)
// у четвертому лозі повертається false, оскільки customer не є прототипом для dog
 
//todo  Тест:
// Що поверне x.isPrototypeOf(y)?

//* true, якщо x — це прототип для y, і false, якщо ні
// true, якщо y — це прототип для x, і false, якщо ні
// true, якщо x і y — це посилання на один і той самий об’єкт
// Result

//* Дуже добре! x.isPrototypeOf(y) поверне true, якщо x є прототипом для y, і false, якщо ні.

//?  Власні і невласні властивості
// Використаємо вже знайомий нам приклад створення об'єкта dog з прототипом animal.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається 
// невласною властивістю об'єкта dog.
// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). 
// Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//todo  Тест:

// Що таке невласна властивість об'єкта obj?

// Властивість будь-якого іншого об'єкта, крім obj
//* Властивість із прототипу об'єкта obj
// Будь-яка властивість об'єкта obj
// Result

//* Абсолютно точно! Невласна властивість об'єкта obj — це властивість його прототипу.
//  2-2

// Який метод перевіряє приналежність властивості до об'єкта?

// hasProperty(key)
// isOwnProperty(key)
//* hasOwnProperty(key)
// Result

//*  Точно! Метод hasOwnProperty(key) перевіряє, чи є властивість власною для об’єкта.

//?  Перебір власних властивостей

// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. 
// Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }
// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key). Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false. Розгляньмо приклад:

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }

// Якщо це власна властивість — виконуємо тіло if
// Якщо це невласна властивість — нічого не робимо
// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей 
// об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }

//?  Ланцюжки прототипів

// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів.

//         objA                  objB                     objC
//   ([[Prototype]]) =====>  ([[Prototype]]) =====>  ([[Prototype]])

// Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// Створюємо об'єкт objC.
// Потім створюємо об'єкт objB і встановлюємо objC як його прототип.
// Після цього створюємо об'єкт objA і встановлюємо objB як його прототип.

// Максимально наочно буде:


// Вивести об'єкт objA у консоль розробника.
// Розгорнути властивості.
// Подивитися на структуру.

// Ця структура точно повторює ланцюжок прототипів.
// На що вказує властивість [[Prototype]] об'єкта objC, ми розглянемо трохи пізніше. Це окрема тема, якій варто приділити увагу.
// Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC,
// а об'єкт objB — до властивостей objC.

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

// Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:
// Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості[[Prototype]], тобто переходить 
// за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.
// Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.

//todo  Тест:
// Прочитай приклад коду



// const apartment = {
// 	rooms: 4,
// 	floor: 2,
// 	taxFree: false
// };

// const condo = Object.create(apartment);
// condo.rooms = 3;

// Яким буде значення при зверненні condo.rooms?

//* 3
// 4
// undefined
// Result

//* Абсолютно точно! Значення при зверненні condo.rooms буде 3, оскільки об'єкт condo має власну властивість rooms, і пошук значення цієї властивості в прототипі не буде здійснюватись.

// Коли буде повернуто значення undefined при доступі до властивості об'єкта?

// Якщо в об'єкті немає такої властивості
// Якщо в прототипі немає такої властивості
//* Якщо в об'єкті та його прототипі немає такої властивості
// Result

// Саме так! Значення undefined буде повернуто при доступі до властивості об'єкта у випадку, коли інтерпретатор 
// не знаходить властивості з таким ім'ям ані в об’єкті, ані в його прототипі.

//todo Задача: 

// Change the code by building a chain of prototypes so that the ancestor object is the prototype for the parent,
// and it, in turn, is the prototype for the child.

// The variable ancestor is declared.
// The value of the variable ancestor is an object.
// The variable parent is declared.
// The value of the variable parent is an object.
// The variable child is declared.
// The value of the variable child is an object.
// Calling ancestor.isPrototypeOf("parent") returns false.
// Calling parent.isPrototypeOf("child") returns false.
// Calling ancestor.hasOwnProperty("surname") returns true.
// Accessing ancestor.surname returns "Dawson".
// Calling parent.hasOwnProperty("surname") returns true.
// Accessing parent.surname returns "Moore".
// Calling child.hasOwnProperty("surname") returns false.
// Accessing child.surname returns "Moore".
// Calling ancestor.hasOwnProperty("heritage") returns true.
// Accessing ancestor.heritage returns "Irish".
// Calling parent.hasOwnProperty("heritage") returns false.
// Accessing parent.heritage returns "Irish".
// Calling child.hasOwnProperty("heritage") returns false.
// Accessing child.heritage returns "Irish".
// The method Object.create() is used.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// // Встановлюємо ancestor як прототип для parent
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// // Встановлюємо parent як прототип для child
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(parent.isPrototypeOf(child)); // true

// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); // "Dawson"

// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); // "Moore"

// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore" (успадковано від parent)

// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); // "Irish"

// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); // "Irish" (успадковано від ancestor)

// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish" (успадковано від ancestor)

//?  Кінець ланцюжка прототипів

// Давай створимо ланцюжок прототипів із двох об'єктів.

// const objB = {
// 	b: "objB prop"
// };

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// Отже, objB — це прототип для об'єкта objA. Розгорнувши вміст ланцюжка прототипів у консолі розробника, 
// ми побачимо таку картину.
// Ти вже знаєш, що у властивості[[Prototype]] об'єкта objA лежить посилання на об'єкт objB.А що знаходиться 
// у властивості[[Prototype]] об'єкта objB?
// Наприкінці ланцюжка прототипів завжди знаходиться посилання на базовий клас, від якого походить тип даних у ланцюжку. 
// У нашому випадку objB — це об'єкт, тому в кінці ланцюжка буде посилання на клас Object.

//!  ООП

// У чому різниця між хорошим і поганим кодом?
//   Досі головним критерієм було: хороший код працює без помилок, а поганий — ні.Але на практиці все складніше. 
// Сучасний продукт рідко має кодову базу, меншу за 100 000 рядків.Те, що він працює — це добре, але недостатньо.
// Важливі також такі критерії:
// Надійність — навіть дуже об'ємне і складне ПЗ має працювати стабільно.
// Масштабованість — можливість легко адаптувати ПЗ до зростаючого навантаження.
// Адаптивність — продукт має бути гнучким, щоб швидко міняти функціонал/інтерфейс.
// Вартість — зниження витрат на розробку і збільшення ефективності важливі для успішної конкуренції на ринку.
// Для створення коду, який задовольнятиме ці вимоги, потрібен або величезний практичний досвід(що не завжди можливо),
// або знання принципів створення правильного коду.Отже, розгляньмо основні парадигми програмування та порівняємо їхні 
// сильні та слабкі сторони.

// Процедурне програмування
// Процедурне програмування — це парадигма програмування, у якій програми структуровані у вигляді набору функцій,
// які виконують певні дії над даними.
// Основні концепції процедурного програмування включають:
// Процедури(функції): Основною одиницею програми є функції.Вони призначені для виконання конкретних завдань. 
// Функції приймають аргументи(вхідні дані), обробляють їх і можуть повертати результат(вихідні дані).
// Локальні та глобальні змінні: Змінні, що оголошуються в межах функції, є локальними й доступними лише в цій функції.
// Змінні, оголошені поза функціями, є глобальними й доступними в усій програмі.

// Процедурний код — це набір не пов'язаних явно функцій і змінних для зберігання й обробки інформації.
// Цей підхід — простий і прямолінійний.Він може використовуватись для задач, в яких немає тісно пов'язаних сутностей 
// (даних і функцій для їх обробки).
// Розгляньмо приклад процедурного коду, в якому є глобальні змінні і функція для підрахунку результату.
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage(30000, 10, 20));// 30200

// Процедурне програмування — це те, як ми з тобою писали код до сих пір.Воно є простим і зрозумілим і може бути використане 
// для написання простих програм.Проте зі збільшенням складності програми процедурний підхід може стати неефективним, оскільки 
// втрачається зв'язок між даними й методами їх обробки.

//? б'єктно-орієнтоване програмування

// Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. 
// Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо.Кожен з об’єктів містить
// дані(властивості) і методи для взаємодії з ними.
// Перепишемо код із попереднього прикладу із застосуванням ООП.
// Для цього об'єднаємо дані та функцію їх обробки в об'єкт employee.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// При такому підході відсутні або майже відсутні глобальні змінні.Методи не залежать від параметрів, а використовують властивості 
// об'єкта, які задаються при його створенні і можуть бути змінені іншими методами.
// Програмування в стилі ООП допомагає структурувати код, полегшує його розробку та підтримку і дозволяє створювати більш складні
// програми, організовані навколо об'єктів та їх взаємодії.

//?  Клас

// Для розуміння основних концепцій об'єктно-орієнтованого програмування важливо володіти основними термінами. 
// Найпростіше буде розібрати їх через проведення аналогії з чимось із реального світу.
// Уявімо, що ми проєктуємо автомобіль. Про що варто подумати заздалегідь?
// У нього буде двигун, чотири колеса, бензобак та інші запчастини.Автомобіль повинен виконувати певні дії: заводитися,
// збільшувати і зменшувати швидкість тощо.Ми також маємо знати, як працює двигун і колеса, тобто за якими законами взаємодіють 
// різні частини машини.

// У проєкті треба описати:

// всі запчастини, з яких складається автомобіль
// яким чином ці запчастини взаємодіють між собою
// що повинен зробити водій, щоб автомобіль загальмував, увімкнулися фари тощо.
// Результатом нашої роботи буде один певний ескіз(шаблон, схема, кліше), на основі якого в подальшому буде створюватися 
// необмежена кількість автомобілів.Ми тільки що розробили те, що в ООП називається класом.
//   Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів, а також правила для взаємодії з цією сутністю 
//     (контракт).Вони виступають в якості шаблонів для створення нових об'єктів.
// У нашому прикладі клас визначає сутність: автомобіль.
// Властивостями класу будуть запчастини: двигун, колеса, фари тощо.
// Методами класу будуть дії: відчинити двері, завести двигун, збільшити швидкість тощо.
// Екземпляр класуУ прикладі з попереднього розділу ми зупинилися на створенні певного ескізу(шаблону, схеми).Автомобілі,
//   розроблені за цими ескізами, сходять з конвеєра.Кожен з них точно повторює креслення: усі системи взаємодіють саме так, як було спроєктовано.При цьому кожен автомобіль унікальний.Усі автомобілі мають номер кузова і двигуна, але їхні номери різні.Автомобілі також розрізняються за кольором, оздобленням салону.
// Ці автомобілі — це екземпляри класу.
//   Екземпляр(об'єкт, інстанція) — це окремий представник класу, який має дані (властивості) і методи (функції), які працюють з 
//   цими даними.Екземпляр — це те, що створено за кресленням, тобто на підставі опису з класу.
// Іншими словами, об'єкт має конкретні значення властивостей і методи, що працюють з цими властивостями на основі правил, заданих 
// у класі.У прикладі з автомобілями:
// Клас — це якийсь абстрактний автомобіль на кресленні
// Екземпляр (об'єкт) — це конкретний автомобіль, що стоїть у нас під вікнами
// Інтерфейс класу
// Сідаючи за кермо автомобіля, ми бачимо певний набір елементів управління, з якими можна взаємодіяти.
// Інтерфейс — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.
// По суті, інтерфейс описує клас, чітко визначаючи всі можливі дії над ним.
// Гарний приклад інтерфейсу — панель приладів автомобіля, яка дозволяє викликати методи, наприклад, збільшення швидкості,
//   гальмування, повороти, перемикання передач, увімкнення фар тощо.
// Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю й простотою.
// Клас із простим інтерфейсом легко використовувати, але будуть існувати завдання, які за допомогою нього буде складно вирішити.
// Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів.Такий 
// інтерфейс дозволить виконувати дуже багато дій, але його використання буде пов'язане з труднощами й ризиком помилитися, 
// переплутавши щось.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

//? Клас

// Для розуміння основних концепцій 

//! об'єктно-орієнтованого програмування важливо володіти основними термінами.
// Найпростіше буде розібрати їх через проведення аналогії з чимось із реального світу.
// Уявімо, що ми проєктуємо автомобіль. Про що варто подумати заздалегідь?
// У нього буде двигун, чотири колеса, бензобак та інші запчастини.Автомобіль повинен виконувати певні дії: заводитися,
//   збільшувати і зменшувати швидкість тощо.Ми також маємо знати, як працює двигун і колеса, тобто за якими законами взаємодіють різні частини машини.
// У проєкті треба описати:
// всі запчастини, з яких складається автомобіль
// яким чином ці запчастини взаємодіють між собою
// що повинен зробити водій, щоб автомобіль загальмував, увімкнулися фари тощо.
// Результатом нашої роботи буде один певний ескіз(шаблон, схема, кліше), на основі якого в подальшому буде створюватися
// необмежена кількість автомобілів.
//* Ми тільки що розробили те, що в ООП називається класом.
//!! Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів, а також правила для взаємодії з цією
//* сутністю(контракт).
// Вони виступають в якості шаблонів для створення нових об'єктів.
// У нашому прикладі клас визначає сутність: автомобіль.
//!! Властивостями класу будуть запчастини:
// двигун, колеса, фари тощо.
//!! Методами класу будуть дії:
//  відчинити двері, завести двигун, збільшити швидкість тощо.
//!! Екземпляр класу
// У прикладі з попереднього розділу ми зупинилися на створенні певного ескізу (шаблону, схеми). Автомобілі, розроблені за цими ескізами, сходять з конвеєра. Кожен з них точно повторює креслення: усі системи взаємодіють саме так, як було спроєктовано. При цьому кожен автомобіль унікальний. Усі автомобілі мають номер кузова і двигуна, але їхні номери різні. Автомобілі також розрізняються за кольором, оздобленням салону.
// Ці автомобілі — це екземпляри класу.
//!! Екземпляр(об'єкт, інстанція) —
// це окремий представник класу, який має дані (властивості) і методи (функції), які працюють
// з цими даними.Екземпляр — це те, що створено за кресленням, тобто на підставі опису з класу.
// Іншими словами, об'єкт має конкретні значення властивостей і методи, що працюють з цими властивостями на основі правил,
// заданих у класі.У прикладі з автомобілями:
// Клас — це якийсь абстрактний автомобіль на кресленні
//!! Екземпляр (об'єкт) — це конкретний автомобіль, що стоїть у нас під вікнами
// Інтерфейс класу
// Сідаючи за кермо автомобіля, ми бачимо певний набір елементів управління, з якими можна взаємодіяти.
//!! Інтерфейс — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.
// По суті, інтерфейс описує клас, чітко визначаючи всі можливі дії над ним.
// Гарний приклад інтерфейсу — панель приладів автомобіля, яка дозволяє викликати методи, наприклад, збільшення швидкості,
// гальмування, повороти, перемикання передач, увімкнення фар тощо.
// Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю й простотою.
// Клас із простим інтерфейсом легко використовувати, але будуть існувати завдання, які за допомогою нього буде складно вирішити.
// Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів.
// Такий інтерфейс дозволить виконувати дуже багато дій, але його використання буде пов'язане з труднощами й ризиком помилитися, 
// переплутавши щось.

//!!!!! Класи
// Оголошення класу

// Синтаксис літерала об'єкта дозволяє створити один об'єкт.Проте часто є потреба створити багато однотипних об'єктів з 
// однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними.Все це потрібно робити динамічно, 
// під час виконання програми.З цією метою використовують класи.

// Оголошення класу має такий синтаксис:
// ключове слово class
// ім’я класу (у прикладі: User)
// тіло класу у фігурних дужках


// class User {
  // Тіло класу
// }
// Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.
// А як створити з класу екземпляр?
//   Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new,
// поставивши його перед викликом класу.Результатом виклику new User() буде екземпляр класу User.Він буде містити дані і 
// мати поведінку, що описані у класі.

// class User {
  // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// Тести:

// Який оператор використовується для створення нового екземпляра класу?

// create
//* new
// instance
// Result

//* Точнісінько так! Для створення нового екземпляра класу використовується оператор new.

// Як створити екземпляр класу Car?

// Car.new()
// new Car
//* new Car()
// Car(new)
// Result

//* Ти дуже уважний/-а! new Car() — це правильний синтаксис створення екземпляра класу Car.

// Задача:

// Using the class keyword, declare the Car class with an empty body.

// The class Car is declared.
// The result of calling new Car() is an empty object.

// class Car {
  
// }

// const car = new Car();
// console.log(car); // {}

//!!!! Конструктор класу

// Спосіб створення класу залежить від твоєї задачі.У нашому прикладі клас User представляє користувача, тому ми 
// додамо до нього поля для імені та пошти.
// Для ініціалізації екземпляра класу використовується метод constructor.
// Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не 
// змінює екземпляр класу.

// class User {
  // Синтаксис оголошення методу класу
//   constructor() {
		// ...
//   }
// }
// Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}
// Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.

// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}
// Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.

// class User {
//   constructor(name, email) {
    // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' } Тут в консоль вивели обект тому й фігуні душки.

// Таким чином, this усередині конструктора посилається на новостворений об'єкт.
// Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
// Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

//todo  Тести:

// Який метод класу викликається першим при створенні екземпляра?

// new
// create
//* constructor
// Result

//* Саме так! При створенні екземпляра першим викликається метод constructor.

// Що таке this усередині конструктора?

// Посилання на клас
// Посилання на параметр конструктора
//* Посилання на новостворений об'єкт
// Result

//* І це абсолютно правильна відповідь! this усередині конструктора посилається на новостворений об'єкт.

// Що робить метод constructor у класі?

// Визначає інтерфейс класу
// Створює новий клас
// * Ініціалізує власні властивості екземпляра класу
// Створює екземпляр класу
// Result

//* Дуже добре! Тобі вдалося запам’ятати найголовніше з цього розділу. Метод constructor використовується для 
// ініціалізації власних властивостей екземпляра класу.

//todo  Задача :

// Add a constructor method to the Car class that accepts three parameters:

// brand — the make of the car
// model — the model of the car
// price — the price of the car
// The Car class should create an object with properties named brand, model, and price, which receive their values from the arguments 
// passed when creating a new instance using the new operator.

// The Car class has been declared.
// The Car class has a constructor method.
// As a result of calling new Car("Audi", "Q3", 36000), an object will be created:
// {brand: "Audi", model: "Q3", price: 36000}
// As a result of calling new Car("BMW", "X5", 58900), an object will be created:
// {brand: "BMW", model: "X5", price: 58900}
// As a result of calling new Car("Nissan", "Murano", 31700), an object will be created:
// { brand: "Nissan", model: "Murano", price: 31700 }

// class Car{
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//   }

// }

// const car1 = new Car("Audi", "Q3", 36000);
// console.log(car1);

// const car2 = new Car("BMW", "X5", 58900);
// console.log(car2); // {brand: "BMW", model: "X5", price: 58900}

// const car3 = new Car("Nissan", "Murano", 31700);
// console.log(car3); // {brand: "Nissan", model: "Murano", price: 31700}

//! Об'єкт параметрів

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями,
// замість непов'язаного набору аргументів.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango); 
// { name: "Mango", email: "mango@mail.com" } ( фігурні душки бо це обєкт)


//todo  Задача :

// Refactor the Car class so that it accepts one parameter - an object with the properties brand, model and price.

// The Car class has been declared.
// The Car class has a constructor method.
// As a result of calling new Car({ brand: "Audi", model: "Q3", price: 36000 }), an object will be created: {brand: "Audi", model: "Q3", price: 36000}.
// As a result of calling new Car({ brand: "BMW", model: "X5", price: 58900 }), an object will be created: {brand: "BMW", model: "X5", price: 58900}.
// As a result of calling new Car({ brand: "Nissan", model: "Murano", price: 31700 }), an object will be created: {brand: "Nissan", model: "Murano", price: 31700}.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 });
// const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });

// console.log(car1);
// console.log(car2);
// console.log(car3);

//!!!! Методи класу

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
// Методи класу — це функції, які будуть доступні екземпляру в його прототипі.Вони оголошуються в довільному порядку після
// конструктора.На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними 
// символами.
// Розгляньмо приклад використання методів у класі User.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

  // Метод getEmail
//   getEmail() {
		// ...
  // }

  // Метод changeEmail
//   changeEmail(newEmail) {
		// ...
//   }
// }
// Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті 
// об'єкта-екземпляра.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

//todo  Задача:

// Add two methods to the Car class.

// getPrice() — returns the value of the price property from the object that will invoke it.
// changePrice(newPrice) — updates the value of the price property in the object that will invoke 
// it to the value of the newPrice parameter.
// In the Car class, a method getPrice is declared.
// The getPrice method returns the value of the price property of the class instance that invokes it.
// In the Car class, a method changePrice is declared.
// The changePrice method modifies the value of the price property of the class instance that invokes it.
// ({ brand: "Audi", model: "Q3", price: 36000 })

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//     }
    
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1.getPrice());

// car1.changePrice(38000);
// console.log(car1.getPrice());

// **Завдання:**
// Створи клас `Book`, який буде мати такі властивості:
// - `title` (назва книги),
// - `author` (автор книги),
// - `price` (ціна книги).

// Додай два методи:
// 1. `getInfo()` — повинен повертати рядок у форматі: `"Назва: [title], Автор: [author]"`.
// 2. `changePrice(newPrice)` — змінює значення ціни книги.

// **Приклад використання:**
// 1. Створи об'єкт книги з назвою `"Гаррі Поттер"`, автором `"Дж. К. Роулінг"` і ціною `500`.
// 2. Виклич метод `getInfo()` і виведи результат у консоль.
// 3. Зміни ціну книги на `450` за допомогою методу `changePrice()` і перевір, чи змінилася ціна.

// class Book {
//   constructor(obj) {
//     this.title  = obj.title;
//     this.author = obj.author;
//     this.price = obj.price;
//   }
//   getInfo() {
//     return `Назва: ${this.title}, Автор: ${this.author}`;
//   }
  
//   getPrice() {
//     return this.price;
    
//   }
//   changePrice(newPrice) {

//     this.price = newPrice;
//   }
// }

// const book = new Book({title: "Гаррі Поттер", author: "Дж. К. Роулінг", price: 500});
// console.log(book.getInfo());
// console.log(book.getPrice());

// book.changePrice(450);
// console.log(book.getPrice());

// **Завдання:**
// Створи клас `Movie`, який буде мати такі властивості:
// - `title` (назва фільму),
// - `director` (режисер фільму),
// - `rating` (рейтинг фільму).

// Додай три методи:
// 1. `getDetails()` — повинен повертати рядок у форматі: `"Фільм: [title], Режисер: [director], Рейтинг: [rating]"`.
// 2. `getRating()` — повертає поточний рейтинг фільму.
// 3. `updateRating(newRating)` — змінює значення рейтингу фільму.

// **Приклад використання:**
// 1. Створи об'єкт фільму з назвою `"Інтерстеллар"`, режисером `"Крістофер Нолан"` і рейтингом `8.6`.
// 2. Виклич метод `getDetails()` і виведи результат у консоль.
// 3. Зміни рейтинг фільму на `9.0` за допомогою методу `updateRating()` і перевір, чи змінився рейтинг.

// class Movie {
//   constructor(params) {
//     this.title = params.title;
//     this.director = params.director;
//     this.rating = params.rating;
//   }
//   getDetails() {
//     return `назва: ${this.title}, діректор: ${this.director}, рейтинг: ${this.rating}`;
//   }
//   getRating() {
//     return this.rating;
//   }
//   updateRating(newRating) {
//     this.rating = newRating;
//   }
// }

// const movie1 = new Movie({ title: "Інтерстеллар", director: "Крістофер Нолан", rating: 8.6 });
// console.log(movie1.getDetails());

// console.log(movie1.getRating());
// movie1.updateRating(9);
// console.log(movie1.getRating());  

// ### **Завдання:**  
// Створи клас `Smartphone`, який буде мати такі властивості:  
// - `brand` (марка телефону),  
// - `model` (модель),  
// - `batteryLevel` (заряд батареї у відсотках).  

// Додай три методи:  
// 1. `getInfo()` — повертає рядок у форматі `"Телефон: [brand] [model], Заряд: [batteryLevel]%"`.  
// 2. `chargeBattery(percent)` — додає `percent` до `batteryLevel`, але не може перевищувати 100%.  
// 3. `useBattery(percent)` — зменшує заряд на `percent`, але не може опуститися нижче 0%.  

// ### **Приклад використання:**  
// 1. Створи об'єкт `smartphone1` з маркою `"Samsung"`, моделлю `"Galaxy S21"` і початковим зарядом `50%`.  
// 2. Виклич `getInfo()`, перевір початковий стан.  
// 3. Заряди телефон на `30%`, перевір рівень заряду.  
// 4. Використай батарею на `60%`, перевір рівень заряду.  


// class Smartphone {
//   constructor(obj) {
//     this.brand = obj.brand;
//     this.model= obj.model;
//     this.batteryLevel = obj.batteryLevel;
//   }

//   getInfo() {
//     return `Телефон: ${this.brand}, model: ${this.model}, Заряд: ${this.batteryLevel} %`;
//   }
//   chargeBattery(percent) {
//     this.batteryLevel += percent;
//     if (this.batteryLevel > 100) {
//       this.batteryLevel = 100; // Щоб заряд не перевищував 100%
//     }
//   }
//   useBattery(percent) {
//     this.batteryLevel -= percent;
//     if (this.batteryLevel < 0) {
//       this.batteryLevel = 0; // Щоб заряд не став від’ємним
//     }
//   }

// }

// const smartphone1 = new Smartphone({ brand: "Samsung", model: "Galaxy S21", batteryLevel: 50});
// console.log(smartphone1.getInfo());Телефон: Samsung, // model: Galaxy S21, Заряд: 50 %
// smartphone1.chargeBattery(30);
// console.log(smartphone1.getInfo()); // Телефон: Samsung, model: Galaxy S21, Заряд: 80 %
// smartphone1.useBattery(60);
// console.log(smartphone1.getInfo());//Телефон: Samsung, model: Galaxy S21, Заряд: 20 %

//! class User 
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
    
//   }
//   changeEmail(newEmail) {
    
//   }
// }

// Після створення екземпляра можна використовувати оголошені методи класу, які будуть звертатися до властивостей об'єкта, 
// що їх викликав.

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

//todo Tect:

// Як правильно звернутися до властивості username класу Customer у його методі?

// Customer.username
// username
//* this.username
// this.Customer.username
// Result

//* Правильна відповідь! Правильний спосіб звернутися до властивості username класу Customer у його методі — це this.username. 
// У методі класу this використовується для посилання на поточний об'єкт, тобто на екземпляр класу Customer.

//todo  ЗАДАЧА:

// Add two methods to the Car class.

// getPrice() — returns the value of the price property from the object that will invoke it.
//   changePrice(newPrice) — updates the value of the price property in the object that will invoke it to the value of the 
// newPrice parameter.
// In the Car class, a method getPrice is declared.
// The getPrice method returns the value of the price property of the class instance that invokes it.
// In the Car class, a method changePrice is declared.
// The changePrice method modifies the value of the price property of the class instance that invokes it.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// Приклад використання:
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1.getPrice()); // 36000

// car1.changePrice(38000);
// console.log(car1.getPrice()); // 38000

// Приклад: 

// Цей приклад чудово демонструє використання класу `User` для створення об'єкта користувача. 

// Ось що тут відбувається:
// 1. **Конструктор приймає один параметр (`params`)** – це об'єкт, що містить `name` та `email`.
// 2. **Всередині конструктора** `this.name = params.name;` та `this.email = params.email;` – тобто властивості `name` та `email` отримуються з переданого об'єкта `params`.
// 3. **Створення нового екземпляра** через `new User({...})` – тут ми передаємо об'єкт `{ name: "Mango", email: "mango@mail.com" }`, і він використовується для ініціалізації `mango`.
// 4. **При `console.log(mango)`** – ми бачимо, що об'єкт `mango` містить `name` та `email`.

// Цей підхід корисний тим, що дозволяє легко передавати структури даних у конструктор, особливо якщо об’єкт має багато властивостей. Наприклад, можна додати ще параметри:

// ```javascript
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//     this.age = params.age;
//     this.isAdmin = params.isAdmin || false; // значення за замовчуванням
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
//   age: 25,
//   isAdmin: true,
// });

// console.log(mango);
// { name: "Mango", email: "mango@mail.com", age: 25, isAdmin: true }
// ```

// Тут ми додали `age` та `isAdmin`, причому `isAdmin` має значення за замовчуванням `false`, якщо не передати його у `params`.

// !!! Прототип екземпляру

// Розглянемо для прикладу код класу User, який наразі має такий вигляд:

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());  // “mango@mail.com”
// Якщо поглянути на структуру екземпляра класу User в інструментах розробника, може виникнути питання: "Де методи, які ми викликаємо?"
// Об'єктно-орієнтоване програмування в JavaScript побудоване на прототипному наслідуванні. Методи класу не стають 
// власними властивостями екземпляра.І це правильно, оскільки, на відміну від значень властивостей, вони не є унікальними.Це одна й та сама функція, яка викликається в контексті різних об'єктів. Немає сенсу копіювати методи для кожного екземпляра, враховуючи, що може існувати багато тисяч екземплярів.
// Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// При створенні екземпляра через new, об'єкт, збережений у властивості prototype класу, автоматично стає його прототипом.
// Це означає, що властивість[[Prototype]] екземпляра отримує посилання на властивість prototype класу.
//*   { getEmail: ƒ, changeEmail:ƒ} 
//*   changeEmail: ƒ changeEmail(newEmail)
//*   constructor: class User
//*   length: 1
//*   name: "User"
//*   prototype: { getEmail: ƒ, changeEmail: ƒ } 
//*   arguments: (...)
//*   caller: (...)
//*   [[FunctionLocation]]: script-06.js: 2045
//*   [[Prototype]]: ƒ()
//*   [[Scopes]]: Scopes[2]
//*   getEmail: ƒ getEmail()
//*   [[Prototype]]: Object

// Завдяки цьому об'єкт-екземпляр може використовувати методи класу, тобто властивості свого прототипу. Також у цьому 
// об'єкті зберігається посилання на метод constructor класу, але це потрібно лише для внутрішніх механізмів класу і не має 
// значення для нас.

// Куди записуються оголошені методи класу?

// У властивість [[Prototype]] екземпляра
// У властивість prototype класу
// На екземпляр класу

// Тести: 

//!  Куди записуються оголошені методи класу?

// У властивість [[Prototype]] екземпляра
//* У властивість prototype класу
// На екземпляр класу
// Result

//* Абсолютно точно! Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу.

// Що зберігається у властивості [[Prototype]] екземпляра класу?

// Посилання на клас
//* Посилання на властивість prototype класу
// Посилання на властивість [[Prototype]] класу
// Посилання на метод constructor класу
// Result

//* У властивості [[Prototype]] екземпляра класу зазвичай зберігається посилання на властивість prototype класу. Такий механізм дозволяє створювати спільні методи та властивості для всіх екземплярів класу, економлячи при цьому пам'ять.

//!!!!    Приватні властивості

// Водій автомобіля натискає на педаль газу — і машина набирає швидкість.Він може зручно та просто керувати системою клімату,
// бачить поточну швидкість на спідометрі тощо.Водночас для такого зручного використання можливостей інтерфейсу всередині 
// автомобіля виконується дуже багато дій і процесів.

// Інкапсуляція — це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від зовнішнього коду. 
// Інкапсуляція реалізується приватними властивостями та методами, доступ до яких можна отримати тільки всередині класу.

// Інший розробник, який користується цим класом, має отримувати доступ тільки до публічного інтерфейсу — набору публічних властивостей
// і методів класу.
// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни ззовні, тобто приватною.Додаючи до імені властивості 
// на початку символ #, ми робимо її приватною.Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим.


// class User {
  // Необов'язкове оголошення публічних властивостей
  // name;
  // Обов'язкове оголошення приватних властивостей
  // #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

//todo  Задача:

// Refactor the Car class so that the brand property is private, and add two methods to the public interface for reading 
// and modifying this property.

// getBrand() returns the value of the private brand property.
// changeBrand(newBrand) changes the value of the private brand property to newBrand.
// The Car class is declared.
// The brand property in the Car class is declared as private.
// The constructor of the class accepts an object with properties brand, model, and price.
// As a result of the call new Car({ brand: "Audi", model: "Q3", price: 36000 }), an object { model: "Q3", price: 36000 } will be created.
// As a result of the call new Car({ brand: "bmw", model: "X5", price: 58900 }), an object { model: "X5", price: 58900 } will be created.
// The instance lacks a public brand property.
// The method getBrand() returns the value of the private brand property.
// The method changeBrand("Honda") changes the value of the private brand property to "Honda".

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// Створюємо об'єкти
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1.getBrand()); // "Audi"

// car1.changeBrand("Honda");
// console.log(car1.getBrand()); // "Honda"

// const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 });
// console.log(car2.getBrand()); // "BMW"

//!!! Приватні методи

// Ти вже знаєш, як працюють публічні методи.Подивимось на це на прикладі класу User з приватною властивістю #email 
// та публічною властивістю name.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

// Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// Іноді потрібно не просто отримувати або змінювати адресу електронної пошти, але й проводити певні дії, які мають бути приховані 
// від "зовнішнього світу".
// Скажімо, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
// Це можна зробити за допомогою приватних методів. Додаючи до назви методу на початку символ #, ми робимо його приватним.

//? class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

  // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

  // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

  // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.
// Цей метод не доступний ззовні класу, тому користувачі(або інші розробники) не можуть його викликати напряму. 
// Вони можуть лише використовувати публічний метод changeEmail, який у свою чергу використовує приватний метод для валідації.
// Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність роботи класу.

//todo Тест:
// Навіщо використовуються приватні властивості та приватні методи?

// Щоб відкрити деталі реалізації класу
// Щоб скоротити інтерфейс, з яким взаємодіє користувач
//* Щоб приховати деталі реалізації класу
// Щоб підвищити швидкість роботи коду
// Result

// І це правильна відповідь! Приватні властивості та приватні методи використовуються, щоб приховати деталі реалізації класу. 
// Це дозволяє ізолювати(інкапсулювати) внутрішню реалізацію класу від зовнішнього коду й забезпечити контроль доступу до деяких 
// властивостей і методів, щоб гарантувати безпеку та стабільність програми.

//!!!   Геттери і сеттери

// Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями.Геттер і сеттер 
// імітують звичайну публічну властивість класу, але дозволяють взаємодіяти з іншими властивостями зручнішим способом.

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// У прикладі вище оголошені геттер і сеттер email.Щоб оголосити геттер і сеттер, потрібно поставити перед ім'ям 
// властивості відповідні ключові слова — get і set.Всередині цих методів:
// повертаємо значення приватної властивості #email за допомогою геттера
// змінюємо її значення за допомогою сеттера
// Також вважається гарною практикою називати геттери і сеттери так само, як і властивість, з якою вони працюють. 
// Це спрощує читання коду та його розуміння.Коли інші розробники бачать геттер чи сеттер, який називається так само,
// як і властивість, вони можуть легко здогадатися, що цей метод служить для доступу до конкретної властивості.Наприклад,
// геттер і сеттер для приватної властивості #email найлогічніше називати просто email, як у прикладі вище.
// Геттер і сеттер повинні називатися однаково. 
// Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють.Геттер може існувати без сеттера, так само 
// як і сеттер без геттера.
// Розгляньмо приклад: геттер виконується при спробі отримати значення властивості, а сеттер — при спробі її змінити.

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код.
// При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {... }, і рядок
// "mango@supermail.com" буде значенням параметра newEmail.


// Перевага в тому, що це методи.Отже, під час запису або читання можна виконати додатковий код з будь - якими перевірками,
// на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.log("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// Геттери і сеттери доречно використовувати для простих операцій читання та зміни значення властивостей,
// особливо приватних, як їх публічний інтерфейс.Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

//todo  Задача:

// Refactor the Car class. In addition to the private property #brand, make the properties model and price private. 
// Standardise the public interface of the class by replacing the already declared methods with the getters and setters brand,
// model and price to interact with private properties.

// The class Car is declared.
// The private property brand is declared in the Car class.
// The private property model is declared in the Car class.
// The private property price is declared in the Car class.
// The class constructor takes the parameter params, which is an object with the properties brand, model and price.
// The Car class declares the brand getter.
// The setter brand is declared in the Car class.
// The model getter is declared in the Car class.
// The setter model is declared in the Car class.
// The Car class has the price getter declared.
// The Car class has a declared setter price.

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   // Геттер для brand
//   get brand() {
//     return this.#brand;
//   }

//   // Сеттер для brand
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Геттер для model
//   get model() {
//     return this.#model;
//   }

//   // Сеттер для model
//   set model(newModel) {
//     this.#model = newModel;
//   }

//   // Геттер для price
//   get price() {
//     return this.#price;
//   }

//   // Сеттер для price
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// // ✅ Тестуємо клас
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(car1.brand); // Audi
// console.log(car1.model); // Q3
// console.log(car1.price); // 36000

// car1.brand = "Honda"; // Використання сетера
// console.log(car1.brand); // Honda

// car1.price = 38000;
// console.log(car1.price); // 38000

//!!!  Статичні властивості
// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості.
// Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості.Вони корисні для зберігання інформації,
// що стосується класу.
// Статичні властивості оголошуються в тілі класу.Перед ім'ям властивості додається ключове слово static. Статичні 
// властивості можна використовувати як у методах класу, так і поза класом.

// class MyClass {
// 	static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

// // У екземпляра немає доступу до статичних властивостей класу.

// class MyClass {
// 	static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад: адміністратор,
// редактор, звичайний користувач тощо.Можливі ролі користувачів будемо зберігати як статичну властивість roles — об'єкт 
// із властивостями.

// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
// 		basic: "basic"
//   };

//   #email;
//   #role;

//   constructor(params) { 
//     this.#email = params.email; 
//     this.#role = params.role || User.roles.basic; 
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

//todo   Тест:

// Прочитай приклад коду

// class MyClass {
// 	static b = 5;

// 	constructor(value) {
// 		this.a = value;
// 	}
// }

// const instance = new MyClass(10);
// console.log(instance.b);
// Що буде виведено в консоль при зверненні до instance.b?

// 5
// 10
// помилка
//*  undefined
// Result

// * У даному прикладі, коли ти звертаєшся до instance.b, ти отримаєш undefined, оскільки властивість 
// b у класі MyClass оголошена як статична(static), і вона не доступна на екземплярах класу.Тобто ти не можеш звертатися до instance.

//todo  Задача:

// Refactor the Car class. Add a public static property maxPrice with a numeric value of 50000 — the maximum allowable price for a car.

// Add a check to the price setter for the value of the newPrice parameter being passed. If it is greater than maxPrice, the setter does nothing; if it is less than or equal to maxPrice, it updates the car's price.

// Below the class declaration, we have added instance initializations and method calls to demonstrate how the price getters and setters will be used.

// The Car class is declared.
// The Car class contains a static property maxPrice.
// The value of the static property maxPrice is the number 50000.
// The instance does not contain the property maxPrice.
// In class Car, a getter price is declared.
// In class Car, a setter price is declared.
// Calling the setter price on an instance of the class, with an argument value less than the value of maxPrice, updates the property #price.
// Calling the setter price on an instance of the class, with an argument value greater than the value of maxPrice, does not update the property #price.
// class Car {
//   static maxPrice = 50000; // Static property available only at the class level

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     } else {
//       console.log(`Error: Price cannot exceed ${Car.maxPrice}`);
//     }
//   }
// }

// // ✅ Testing the class
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000; // ✅ Valid price change
// console.log(audi.price); // 49000

// audi.price = 51000; // ❌ Invalid, will trigger an error message
// console.log(audi.price); // Still 49000, because setter blocked the update
