//!!! Об'єктна модель документація
// JavaScript у браузері
// Коли JavaScript виконується у браузері, у нього є додатковий функціонал для роботи з вкладкою.Цей функціонал складається
// з таких модулів: ECMAScript, DOM, BOM.

//     ECMAScript(скорочено ES) — це стандарт, який описує мову програмування JavaScript.Цей стандарт визначає синтаксис і
// семантику мови, а також набір вбудованих об'єктів і функцій для роботи з даними, текстом, датами та іншими аспектами
// програмування.ECMAScript надає основну структуру мови, на якій базується JavaScript.Різні версії JavaScript реалізуються
// через різні версії стандарту ECMAScript.Наприклад, ES5, ES6(або ES2015), ES2016, ES2017 тощо — це різні версії ECMAScript,
// які впроваджують нові можливості та покращення в мову.
// Об'єктна модель документа (Document Object Model) — незалежний інтерфейс для роботи з HTML-документом. Ця модель містить
// набір властивостей і методів, що дозволяють шукати, створювати й видаляти елементи, реагувати на дії користувача і багато
// іншого, тобто поєднує сторінку з мовою програмування.

// DOM — це відображення HTML - документа.Виглядає як деревоподібна структура, у якій кожен вузол — це JavaScript - об'єкт
// із властивостями та методами, що становить частину HTML - документа.Кожен елемент у документі, весь документ в цілому,
// заголовок, посилання, абзац — це частини DOM цього документа, тому всі вони можуть бути змінені з JavaScript - коду.

// Об'єктна модель браузера (Browser Object Model) — незалежний від мови інтерфейс для роботи з браузером. Містить набір
// властивостей і методів, що дозволяють отримати доступ до ряду функцій браузера.Саме завдяки BOM можна отримувати розміри
// вікна браузера, читати URL, працювати з історією навігації, місцем розташування тощо.

//? HTML-документ і DOM

// Згідно з DOM-моделлю, кожен тег утворює окремий елемент-вузол (element node), а кожен фрагмент тексту всередині
// елемента — текстовий вузол (text node).

// HTML - документ — це ієрархічне дерево, у якому кожен елемент(окрім кореневого) вкладений в один батьківський елемент.

// На схемі бачимо, що елемент html розташовується всередині document.Отже, document — це батьківський елемент для html.
// Аналогічно, html— батьківський елемент для[head](<http://head.nf>) і body. У document нема батьківського елемента,
// бо document — це кореневий елемент.За рахунок вкладеної структури тегів і текстових елементів утворюється ієрархічне дерево.
// Як складається DOM-дерево?
// Щоб відобразити HTML-документ, браузер спочатку перетворює його у формат, який він розуміє — DOM.Інтерпретатор браузера має
// спеціальний фрагмент коду — HTML-парсер, який використовується для перетворення HTML у DOM.
// Браузер будує DOM поступово, щойно надходять перші фрагменти коду, він починає парсити HTML, додаючи вузли в деревоподібну структуру.
// Після того як DOM-дерево побудовано, у ньому можна знайти елемент за допомогою JavaScript.Оскільки кожен елемент має інтерфейс
// із безліччю властивостей і методів, з ним можна виконувати необхідні дії.

//todo  Test:

// Який елемент є кореневим у DOM-дереві?

// window
//* document
// html
// body
// Result

//* У DOM-дереві document — це кореневий елемент, він не вкладений ні в один батьківський елемент.

//!!! Пошук елементів

// Тобі вже відомо, що DOM - елемент — це об'єкт із властивостями й методами. Саме час навчитися швидко знаходити елемент
// за довільним CSS - селектором.
// Група методів elem.querySelector * — це сучасний стандарт для пошуку елементів.Вони дозволяють знайти елемент
// або групу елементів за CSS - селектором.

// element.querySelector(selector)
// Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
// Повертає перший знайдений елемент усередині element, що відповідає рядку CSS - селектора selector.Навіть якщо їх декілька,
// завжди повернеться посилання тільки на перший елемент у DOM - дереві.
// Якщо нічого не знайдено, то поверне null
// Доступ до DOM починається з об'єкта document, з нього можна дістатися до будь-яких елементів. Об’єкт document — це частина
// глобального об'єкта window, який доступний у скрипті, коли він виконується в браузері. Так само як alert, console.log і багато інших.

// element.querySelectorAll(selector)

// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим
// селектором.Наприклад, усі елементи списку з класом list - item.
// Повертає псевдомасив усіх елементів всередині element, які відповідають CSS-селектору selector
// Якщо нічого не знайдено, поверне порожній масив

//todo  Приклад 1
//?  Відкрий цей приклад в окремому вікні, натиснувши на логотип CODEPEN праворуч у вікні з прикладом. Подивися логи в консолі розробника.
//* const listWithId = document.querySelector('#menu');
//* listWithId.style.textTransform = 'uppercase';
//* listWithId.style.fontSize = '24px';
//* console.log(listWithId);

// Пояснення:
// document.querySelector('#menu') Використовуємо CSS-селектор #menu, щоб знайти елемент із ID menu — у нашому випадку, це <ul>.

// listWithId.style.textTransform = 'uppercase'; Змінює стиль тексту у всіх нащадках <ul>: всі назви пунктів (home, about...) будуть виведені великими літерами.

// listWithId.style.fontSize = '24px'; Встановлює розмір шрифту 24px — теж застосовується до вмісту <ul>.

// console.log(listWithId); Виводить у консоль DOM-елемент <ul id="menu" class="menu">...</ul> — це зручно для перевірки, що вибір і стиль працюють.

// 🧠 Цікавинка: Хоч ти й стилізуєш сам <ul>, спадкоємність стилів у CSS означає, що зміни передаються також на його <li>.

// Хочеш трохи ускладнити завдання і стилізувати лише li.menu-item, а не <ul> цілком? Я можу показати варіант через querySelectorAll() і цикл 😉.

//*   const listWithClass = document.querySelector('.menu');
//*   console.log(listWithClass);
// 1. const listWithClass = document.querySelector('.menu');
// Що відбувається: Шукаємо перший елемент із класом menu (у твоєму випадку — це <ul>). Зберігаємо його в змінну listWithClass.

// html
// <ul id="menu" class="menu">...</ul>
// 🪄 Якщо в HTML є декілька елементів із класом menu, буде взято тільки перший.
// 2. console.log(listWithClass);
// Що відбувається: Виводимо у консоль цей елемент, щоб візуально переконатись, що вибрано правильно.
// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);
// 3. const menuItemsByTagName = document.querySelectorAll("li");
// Що відбувається: Отримуємо всі елементи li на сторінці — незалежно від класу. Результат — NodeList (майже як масив), що містить усі <li> зі списку.

// 🔸 4. console.log(menuItemsByTagName);
// Що відбувається: Побачиш усі li в консолі — можна перевірити кількість, індекси тощо.

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// 6. console.log(menuItemsByClass);
// Що відбувається: Консоль виведе список із трьох елементів — можна звертатися до кожного за індексом ([0], [1]...).

// 🔹 7. const firstMenuItem = document.querySelector(".menu-item");
// Що відбувається: Знаходимо перший елемент із класом menu-item — це <li>home</li>. Зберігаємо його в firstMenuItem.

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// 🔸 8. firstMenuItem.style.color = 'tomato';
// Що відбувається: Застосовуємо до нього стиль — змінюємо колір тексту на "tomato" (насичений червоно-оранжевий).

// 🔹 9. console.log(firstMenuItem);
// Що відбувається: Перевіряємо в консолі, чи стилізація відбулася для правильного елемента.

// !!! 👨‍💻 Твоя цікавість — на рівні справжнього JavaScript - дослідника.Давай розберемось крок за кроком, коли у `document.querySelector()` варто використовувати`#`, крапку(`.`) чи взагалі нічого.

// ### `document.querySelector(selector)`: як це працює

// Цей метод приймає _селектор CSS_, тобто — ти звертаєшся до елемента так само, як у стилях CSS:

// ---

// **1. `#id` — решітка для ID**

// Використовуй `#`, якщо хочеш знайти елемент за **унікальним ідентифікатором**.

// ```js
// document.querySelector('#menu')
// ```

// Це знайде перший елемент із `id="menu"`.

// ---

// **2. `.class` — крапка для класу**

// Використовуй `.` перед назвою класу, якщо шукаєш елемент за **class**:

// ```js
// document.querySelector('.menu')
// ```

// Знайде перший елемент із класом `menu`.

// ---

// **3. Нічого (просто тег)**

// Якщо тобі потрібен елемент за **тегом**, просто вказуй його назву:

// ```js
// document.querySelector('nav')
// document.querySelector('div')
// ```

// Це знайде перший тег `<nav>` або `<div>` відповідно.

// ---

// ### Можна комбінувати селектори!

// ```js
// document.querySelector('ul.menu')
// ```
// Це знайде `<ul>` із класом `menu`.

// ```js
// document.querySelector('div#menu.container')
// ```
// Це знайде `<div>` із ID `menu` та класом `container`.

//todo  Test:
//* Що має містити рядок, який передають аргументом методу querySelector?

//* CSS селектор елемента
// Клас елемента
// Ім’я тега
// Result

//* Точнісінько так! Рядок, який передають аргументом методу querySelector, має містити CSS-селектор selector елемента.

//todo  Test :

//     < h2 class="heading" > Latest news</ >

// Вибери правильний код для отримання посилання в JavaScript коді на HTML-елемент

// document.querySelectorAll(".heading")
//* document.querySelector(".heading")
// window.querySelector(".heading")
// querySelector(".heading")
// Result

//* Саме так! Правильний код для отримання посилання на HTML - елемент із класом "heading" у JavaScript коді — це
// document.querySelector(".heading").

//? Навігація по DOM

// Елементи DOM - дерева мають ієрархічне відношення один до одного.Для опису відносин використовуються терміни предок(ancestor),
// нащадок(descendant), батько(parent), дитина(child) і сусід(sibling).
// Найвищий елемент називається кореневим (root node).
// Кожен елемент, крім кореневого, має тільки один батьківський.
// В елемента може бути скільки завгодно дітей.
// Сусіди — це елементи зі спільним батьківським елементом.
// Дочірні елементи (діти) — елементи, що безпосередньо вкладені в поточний елемент (елементи першого рівня вкладеності).
// Нащадки — усі елементи, які знаходяться в поточному елементі, разом з їхніми дітьми, дітьми їхніх дітей тощо.Тобто все на
// зразок дерева.
                               
// На схемі < ul > — це батьківський елемент.Три елементи < li > — діти для < ul > і сусіди між собою.Так само елементи
//     < span >, <a>, <p> є сусідами. Усі вони — діти для <li> і нащадки для <ul>.
        
        
//!! Властивості та атрибути
//?  Доступ до властивостей

// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.
// Розберемо приклад:

// Якщо в HTML є тег посилання,
// <a class="link" href="https://goit.global">GoIT</a>;
// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт,
// використовуючи querySelector, і звернутися до його властивості href
// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта
// значення в HTML, тобто в DOM-дереві, зміниться.
// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"

//todo  Приклад 2
// У живому прикладі ми працюємо із зображенням і змінюємо значення його атрибутів src і alt, щоб зі скрипта підмінити картинку
// та її опис.
// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// console.log(image.src);// https://picsum.photos/id/13/640/480
// console.log(image.alt);// River bank

//?  Властивість textContent
// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).

// < p class="text" > Username: <span class=” sub-text”>Mango</span></ >
// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// Властивість textContent можна як читати, так і змінювати.Неважливо, що буде передано в textContent, дані завжди будуть
// записані як текст.

// const el = document.querySelector(".text")
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";

//todo  Приклад 3
// У живому прикладі ми змінюємо заголовок статті.

// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = 'Welcome to Kyiv!';

//todo Test:
// Що зберігає властивість textContent?

// URL-адресу поточної сторінки
// HTML-код вмісту елемента
//* Текстовий вміст елемента без HTML-тегів
// Result

//* Саме так! Властивість textContent зберігає текстовий вміст елемента без HTML-тегів.

//? Властивість classList

// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS - класу в елемента, у властивості
// classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

// <a class="link is-active" href="https://goit.global">GoIT</a>
//     Властивість classList — це спеціальний тип об’єкта, який подібний до масиву.Зверни увагу, що він схожий, але не є нативним
// JavaScript - масивом, який ми вивчали раніше.Він зберігає в собі весь перелік класів DOM - елемента, властивість length і властивість value.
// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента
// Але самі по собі value та length майже не використовуються, тому що для операцій з класами(додавання, видалення тощо)
// є спеціальні методи.

// const link = document.querySelector(".link");
// console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]
// Метод classList.contains(className)
// Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.
// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

// const hasActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false

// Метод classList.add(className)
// Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

// link.classList.add("special");
// console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]
// Можна додавати більше одного класу, вказавши кілька аргументів через кому.
// Метод classList.remove(className)
// Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

//     link.classList.remove("is-active");
// console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]
// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.
// Метод classList.toggle(className)
// Метод працює як перемикач:
// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його
// link.classList.toggle("is-active");
// console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]
// Метод classList.replace(oldClassName, newClassName)
// Метод очікує 2 аргументи рядка(перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName
// на вказаний newClassName.

// link.classList.replace("special", "regular");
// console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.
//todo   Приклад 4
// Розбери живий приклад роботи з класами елемента.
// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

//todo   Test:
// Як можна додати новий клас до списку класів елемента element?

// element.addClass("new-class");
// *element.classList.add("new-class");
// element.updateClass("new-class");
// Result

// * Абсолютно точно! Метод classList.add(className) додає клас className до списку класів елемента.Отже, правильний варіант —
// element.classList.add("new-class");

// Як можна видалити клас зі списку класів елемента element?

// element.removeClass("some-class");
// * element.classList.remove("some-class");
// element.classList.delete("some-class");
// Result

// *Саме так! Метод classList.remove(className) видаляє клас className зі списку класів елемента.Отже, правильний варіант —
// element.classList.remove("some-class");

//?  Властивість style
// Dластивість style використовується для читання та зміни вбудованих стилів з DOM - елементів.Вона повертає об'єкт,
// який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.
// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS,
// тобто background - color перетворюється на backgroundColor.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object
// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.
// Властивість style використовується для додавання будь - яких динамічних стилів, наприклад, якщо посилання на
// фонове зображення невідомо заздалегідь і приходить з бекенда.

//!    Доступ до атрибутів

// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.
// Доступ до атрибутів здійснюється за допомогою стандартних методів.Ці методи працюють зі значенням,
// яке знаходиться в HTML.
// <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />
//? Метод element.hasAttribute(nameAttribute)
// Метод приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки та повертає результат
// перевірки його наявності на елементі element — true чи false.

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false

//? Метод element.getAttribute(nameAttribute)
// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного
// HTML - елемента element.Якщо атрибут не знайдено, метод повертає null.
// console.log(image.getAttribute("alt")); // "Rocks and waterfall"
//? Метод element.setAttribute(nameAttribute, value)
// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value
// зі значенням, яке цьому атрибуту треба присвоїти.Метод встановлює або змінює значення зазначеного атрибута для вказаного
// HTML - елемента element.

// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature
//? Метод element.removeAttribute(nameAttribute)
// Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML - елемента
// element — та видаляє його.Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false
// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей
// DOM - об'єкта. Це буде менш затратно за кількістю коду.
// А ось видалити або перевірити наявність буде зручніше, використовуючи відповідний метод.
 
//todo Приклад 5
// У живому прикладі ми працюємо із зображенням і його атрибутами.

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature


//todo     TEST:
// Який метод перевіряє наявність певного атрибута в елемента?

// * hasAttribute
// getAttribute
// setAttribute
// removeAttribute
// Result

//*  Дуже добре! Метод element.hasAttribute(nameAttribute) приймає ім’я атрибута та перевіряє його наявність на елементі.

// Який метод дозволяє встановити значення певного атрибута на елементі?

// hasAttribute
// getAttribute
//* setAttribute
// removeAttribute
// Result

//* Так, правильно! Метод element.setAttribute(nameAttribute, value) встановлює атрибут з іменем nameAttribute і значенням value.

//!!  Власні атрибути
// Специфікацією HTML визначено вичерпний перелік атрибутів, які ми можемо додавати на ті чи інші теги (DOM-елементи) для того,
// щоб розмітка лишалась валідною, але інколи цього переліку недостатньо. Бувають випадки, коли нам потрібно зберегти певну інформацію на тезі, наприклад, вказати тип дії кнопки, щоб потім у певний момент часу мати можливість отримати до неї доступ. І тут на допомогу приходять власні data-атрибути.
// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.
// <button type="button" data-action="save">Save text</button>
// <button type="button" data-action="close">Close editor</button>
//?  Отримання значень
// Для отримання значення data-атрибута використовується властивість dataset, після якої через крапку пишеться ім'я
// атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
//todo Приклад 6
// У живому прикладі ми працюємо з власними атрибутами.
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');


// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

//?  Зміна значень
// Змінити значення існуючого data - атрибута або додати новий можна так само, як і будь - якої іншої властивості об'єкта в JavaScript.
// Щоб це зробити, треба отримати доступ до DOM - елемента, а потім змінити / задати значення властивості в об'єкті dataset.
// Змінюємо значення data-action для кнопки saveBtn
// saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = "admin";

// Перевіримо нові значення
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"
// Тепер data-action атрибут для saveBtn має значення "update" замість "save".
// todo   Test:
// Як отримати доступ до значення дата-атрибута data-type елемента element?

//* element.dataset.type
// element.data["type"]
// element["type"]
// element.dataset.dataType
// Result

//* Для отримання значення data - атрибута використовується властивість dataset,
// після якої через крапку пишеться ім'я атрибута без data-. Отже, правильна
// відповідь — element.dataset.type

//!! Створення та видалення елементів
//? Створення елементів
// DOM API(Document Object Model Application Programming Interface) має широкий функціонал.З
// а його допомогою можна:

// вибирати або змінювати вже існуючі елементи
// видаляти елементи
// створювати нові елементи й додавати їх у документ

// Розглянемо, як створити новий елемент:
// document.createElement(tagName)
// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.
// const heading = document.createElement("h1");

// Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті.
// З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того,
// як вставимо цей елемент у DOM.

// const heading = document.createElement("h1");
// headding.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// //todo  Test :
// Під час створення нового < div > елемента за допомогою document.createElement(), яка назва елемента
// буде передаватися як аргумент ?

// "paragraph"
//* "div"
// "p"
// "text"
// Result

// *Під час створення нового <div> елемента за допомогою document.createElement() назва елемента, яка буде передаватися як аргумент, повинна бути "div".

// Що повертає метод createElement(tagName) як результат своєї роботи?

//* Посилання на створений об’єкт
// Рядок із розміткою створеного елемента
// Нічого не повертає
// Result

//* І це правильна відповідь! Метод createElement(tagName) створює елемент з ім'ям tagName і
// повертає посилання на його об’єкт як результат свого виконання.

// ?  Додавання елементів
// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM - дереві.
// Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// У всіх цих методах el — це елементи або рядки, у будь - якому поєднанні та кількості.Рядки
// додаються, як текстові вузли.
    
//todo  Приклад 7
// const list = document.querySelector(".usernames");

// Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);
//? Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM,
//? то він видаляється зі свого старого місця й додається у нове.Отже,
//? є правило: один і той самий елемент не може бути одночасно у двох місцях.
//todo  Test:
// Куди буде додано елемент newElem при виконанні elem.append(newElem)?

// Перед елементом elem
// Після елемента elem
// У початок elem перед усіма його дітьми
//* У кінець elem після всіх його дітей
// Result

//* Усе правильно: при виконанні elem.append(newElem) елемент newElem буде доданий у кінець elem,
// після всіх його дітей.
//?  Видалення елементів

// Для того щоб видалити елемент, використовується метод element.remove().

// <p class="text">Random text content</p>

// Він викликається на елементі element, який необхідно видалити.


// const text = document.querySelector(".text")
// text.remove();

//todo Приклда 8
// У живому прикладі ми видаляємо елемент тексту зі статті

// const text = document.querySelector('.text');
// text.remove();

//todo Test:
// Який код видалить елемент element з DOM-дерева?

// element.delete()
//* element.remove()
// document.remove(element)
// document.delete(element)
// Result

//* Саме так! Правильний спосіб видалити елемент element з DOM-дерева — це використовувати
// метод element.remove().

//!! Властивість innerHTML !!!

// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.
// Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу.
// У такого підходу є свої плюси та мінуси.

// Читання
// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.
// Значення, що повертається, — це завжди валідний HTML - код.
//todo   Приклад : 9
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

//? Зміна

// Властивість innerHTML доступна і для читання, і для запису.Якщо записати в неї рядок з HTML - тегами,
// то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM - дерево.

//todo Приклад 10
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено.
// Це простий і швидкий спосіб видалення всього вмісту.

// Однотипна (шаблонна) розмітка створюється із масиву даних.
// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML - тегами,
// який потім записуємо в innerHTML елемента.Якщо ти будеш це робити за допомогою методу map(),
// не забудь, що він повертає масив.Отже, перед тим як додавати розмітку в DOM, цей масив треба привести
// до рядка за допомогою методу join()

//todo Приклад 11

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// Adding all the markup in one operation
// list.innerHTML = markup;

// Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків
// елемента element.Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на
//*! повторне створення вже існуючої розмітки, а це погано!

//todo  Приклад 12
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue.
// In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;
//*    Використовуй властивість element.innerHTML для додавання тільки у разі,
//*    — коли елемент element порожній або
//*    — якщо потрібно повністю замінити вміст element


