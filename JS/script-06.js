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

function foo() {
  console.log(this);
}

foo(); // window



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

Test:
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

