//!   Асинхронність
//? Асинхронні операції
// Весь код виконується процесором твого комп'ютера.
// Код, який ми писали досі, був синхронним, тобто займав процесор на весь час свого виконання. Так, швидкість виконання 
// циклу для ітерації по масиву залежить від швидкості процесора.
// Є операції, які взаємодіють із зовнішнім світом, наприклад: обмін даними із сервером у мережі. Це набагато повільнішеніж 
// отримання даних із пам'яті. Якщо такі операції обробляються синхронно, то процесор простоює під час мережевого запиту до сервера, замість того, щоб виконувати інший код.
// Синхронний код виконується послідовно, кожна інструкція очікує, доки виконається попередня. Коли ти викликаєш функцію, яка 
// виконує тривалу дію, це зупиняє програму на увесь час її виконання. Тобто в моделі синхронного програмування все відбувається по черзі.
// Уяви чергу придбання квитків на потяг. Ти не можеш почати купувати квиток доти, доки квиток не придбає людина перед тобою. Так само 
// люди, які стоять за тобою, не можуть почати купувати квитки доти, доки ти не придбаєш.
// В асинхронному коді одночасно можуть виконуватися декілька операцій. У такій моделі мережевий запит на сервер не зупинить 
// програму, вона продовжить виконувати інші операції. Коли запит завершиться, програма повідомляє про це й отримує доступ до результату 
// (наприклад, даних із сервера).
// Уяви обід в ресторані. Ти та інші відвідувачі замовляєте їжу. Тобі не потрібно чекати, доки їм принесуть їжу, перш ніж замовляти. 
// Так само інші відвідувачі не повинні чекати, доки ти отримаєш свою страву і поїси, перш ніж вони зможуть замовити. Кожен отримає свою 
// страву, щойно її завершать готувати.
// Розглянемо різницю на прикладі, у якому програма виконує два мережеві запити на сервер, після чого обробляє їх результат.

// Операції 1 і 2 — це функції, які роблять запити на сервер.

// Операції 3, 4 і 5 — будь-який інший звичний для тебе код.

// У синхронній моделі все зрозуміло — попередні операції блокують виконання наступних, доки вони не завершаться. Якщо 
// операції 3, 4 і 5 — це обробка кліків користувача, то інтерфейс просто зависне, доки не будуть виконані й оброблені 
// результати запитів 1 і 2.
// Уявімо, що користувач відправив коментар (мережевий запит) і водночас захотів відкрити сайдбар з останніми новинами. 
// Після кліка відправити коментар, інтерфейс зависне і не буде реагувати на його дії, доки від сервера не прийде результат 
// відправлення коментаря. Погодься, це не дуже зручно.

// В асинхронній моделі старт мережевого запиту викликає щось на зразок розгалуження, тобто запуск запиту і результат його 
// обробки — це різні дії. Доки виконується запит, програма продовжує працювати й виконувати інший код. Щойно мережевий запит 
// буде виконаний, програма може почати обробляти його результат одразу після звільнення. Це означає, що користувач відправив коментар 
// і відразу зміг відкрити сайдбар зі свіжими новинами, не чекаючи, доки прийде відповідь від сервера.

// За одиницю часу, як і раніше, може виконуватися тільки одна операція, тому що JavaScript — однопотокова мова. Асинхронне програмуванндосягається шляхом відкладених викликів функцій, де ініціалізація асинхронної операції і обробка її результату — це різні дії.

//todo  Test

//  Як виконується синхронний код?

//* Послідовно, кожна наступна інструкція чекає завершення поточної
// По черзі, кілька інструкцій виконуються в міру можливості інтерпретатора
// Паралельно, інструкції не чекають завершення поточної операції
// Result

// У синхронній моделі код виконується послідовно — кожна наступна інструкція чекає завершення поточної.

//?  Асинхронний код
// У синхронному коді інструкції обробляються послідовно. Отже, наступна інструкція не може почати своє виконання, доки не 
// виконається попередня.
// console.log("First log");
// console.log("Second log");
// console.log("Third log");
// У консолі будуть три послідовні повідомлення в тому порядку, в якому відповідні функції console.log() були викликані.

// First log
// Second log
// Third log

// Код нижче — асинхронний. З функцією setTimeout() ми познайомимося далі. Зараз про неї нам потрібно знати тільки те, що вона приймає два параметри:
// callback-функцію, яка буде викликана після закінчення часу;
// час, після якого буде викликана функція.
// Виконується першою
// console.log("First log");

// setTimeout(() => {
	// Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 2000);

// Виконується другою
// console.log("Third log");

// Функція setTimeout() відпрацьовує синхронно й реєструє відкладений виклик переданої callback-функції. Ця функція буде 
// викликана асинхронно, через вказаний проміжок часу.

// Хоча маємо 3 різні команди console.log(), їх порядок виводу може бути не відповідним послідовності коду через асинхронну 
// природу setTimeout().

// First log
// Third log
// Second log

// Послідовність подій:

// Виконується синхронний console.log("First log");, і в консоль виводиться "First log".
// Виконується setTimeout(), який синхронно ставить передану функцію в асинхронну чергу на виконання. Але через вказану 
// \затримку в 2000 мілісекунд (2 секунди), виконання цієї функції відкладається на цей час.
// Виконується синхронний console.log("Third log");, і в консоль виводиться "Third log".
// Після 2 секунд виконується асинхронний виклик функції, переданої в setTimeout(), і в консоль виводиться "Second log".
// Багатопотоковість

// Не плутай асинхронність і багатопотоковість (паралелізм) — це різні моделі програмування. Наведемо просту аналогію, яка 
// все розставить на свої місця. Уяви, що ти шеф у ресторані, і надходить замовлення на каву і тости.

// Синхронний однопотоковий підхід — ти сам спочатку готуєш каву, потім тости і подаєш їх, після чого прибираєшся на кухні.
// Асинхронний однопотоковий підхід —- ти починаєш готувати каву і встановлюєш таймер, потім починаєш готувати тости і так само встановлюєш таймер. Доки кава і тости готуються, ти прибираєш на кухні. Коли таймери спрацьовують, ти знімаєш з вогню каву, дістаєш тости і подаєш їх.
// Багатопотоковий підхід (паралелізм) — ти наймаєш двох помічників. Одного — для приготування кави, а іншого — для тостів. Тепер у тебе є проблема управління помічниками (потоками), щоб вони не конфліктували один з одним на кухні під час спільного використання ресурсів.

// В асинхронних однопотокових процесах у тебе є графік завдань, в якому деякі завдання залежать від результату роботи інших. З виконанням кожного завдання викликається код для обробки його результату.

// Тайм-аут

// Внутрішній таймер-планувальник браузера дозволяє відкладати виклик функції на певний період часу. Для цього є тайм-аути та інтервали, вони контролюють, коли і як часто викликається функція. Таймери реалізовані в браузері, а не вбудовані в мову, і доступні на глобальному об'єкті window.

// Метод setTimeout() дозволяє запланувати одноразовий виклик функції через певний час.

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// callback — функція, виклик якої необхідно запланувати;
// delay — час у мілісекундах, через який callback-функція буде викликана один раз.

// Додаткові аргументи (arg1, arg2 тощо) не обов’язкові і будуть передані callback функції під час виклику. Результатом виклику setTimout() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.

// У прикладі коду нижче через дві секунди після натискання на кнопку в консолі розробника з'явиться повідомлення, вказане в колбек-функції для setTimeout. При кожному натисканні на кнопку буде запускатися новий таймер, якому буде присвоюватися новий числовий ідентифікатор.

// Розглянь, як це реалізовано в живому прикладі.

//todo Приклад 10-1
// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

//   console.log(timerId);
// };

// button.addEventListener("click", onClick);


//todo Test 
// Що повертає виклик функції setTimeout?

//* Числовий ідентифікатор таймера
// Значення затримки до виклику функції
// Посилання на відкладену функцію
// Нічого
// Result

//* Саме так! Виклик функції setTimeout() повертає цифровий ідентифікатор створеного таймера.

// Що робить функція setTimeout?

// Викликає передану функцію
//* Планує в асинхронній черзі відкладений виклик функції через вказаний інтервал часу
// Чекає зазначеного часу, перед тим як викликати функцію
// Result

//* Правильно! Функція setTimeout планує в асинхронній черзі відкладений виклик функції, який виконується після 
// зазначеного інтервалу часу. Вона не викликає функцію безпосередньо, а лише планує її виконання через певний час

//? Скасування тайм-ауту

// Якщо з якихось причин нам потрібно скасувати відкладений виклик функції, зареєстрованої тайм-аутом, використовується метод clearTimeout(id).

// Метод clearTimeout(id)приймає ідентифікатор таймера та “очищає його”, тобто видаляє реєстрацію відкладеного виклику функції з черги.


// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// У прикладі вище ми викликали clearTimeout(), який виконається раніше, ніж буде викликана функція greet(). Отже, таймер 
// з timerId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.

// У цьому прикладі ми додали кнопку скасування таймера «Clear timeout».
//  todo Приклад 10-2
// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;

// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });

// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

// Кожного разу при натисканні на кнопку Set timeout буде створюватися новий таймер, якому буде присвоєно новий ідентифікатор.
// Натискання на кнопку Clear timeout очистить відповідний таймер за переданим числовим ідентифікатором.
// Якщо потрібно очищати всі таймери, можна, наприклад, зберігати ідентифікатори всіх запущених таймерів у вигляді масиву, 
// перебирати його та послідовно очищати.
// todo Test
// Що потрібно передати функції clearTimeout?

// Посилання на функцію, яка була передана в setTimeout
//* Ідентифікатор таймера, який повернув виклик setTimeout
// Затримку, після якої буде зупинено таймер
// Result

//* Чудово! Тепер ти знаєш, як скасувати виклик переданої у setTimeout функції.

//? Інтервал

// Метод setInterval() — це простий спосіб повторення коду знову і знову з певним інтервалом.
// Синтаксис і параметри такі самі, як у setTimeout().

// const intervalId = setInterval(callback, delay, arg1, arg2, ...);

// Результатом виклику setInterval() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його 
// подальшого скасування.
// На відміну від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу.
// Щоразу при натисканні на кнопку Start буде створюватися новий інтервал, якому буде присвоєно новий числовий ідентифікатор.
// У прикладі будемо кожну секунду виводити в консоль рядок. Використовуємо Math.random(), щоб рядки були різні.
// todo Приклад 10-3

// const startBtn = document.querySelector(".js-start");

// startBtn.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// У браузерного таймера є мінімально можлива затримка, вона коливається приблизно від 0 до 4 мілісекунд. За стандартом, 
// мінімальна затримка становить 4 мілісекунди, тому різниці між setInterval(cb, 1) і setInterval(cb, 4) немає.
// Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay. Адже через занадто велике завантаження процесора 
// деякі запуски функцій-інтервалів будуть пропущені. Браузери продовжують виконувати тайм-аути та інтервали, навіть якщо вкладка браузера неактивна, але водночас знижується частота 
// спрацьовування таймерів.

//todo  Test

// Що повертає функція setInterval?

//* Числовий ідентифікатор інтервалу
// Значення затримки до виклику функції
// Посилання на відкладену функцію
// Нічого
// Result

//* Так і є! Функція setInterval повертає числовий ідентифікатор інтервалу.

// Скільки разів буде викликана функція foo для setInterval(foo, 2000)?

//*Кожні 2 секунди
// Один раз через 2 секунди
// Один раз одразу і один раз через 2 секунди
// Result

//* Супер! Ти дійсно розумієш, як працює setInterval!

// Що робить функція setInterval?

// Викликає передану функцію
//* Планує в асинхронній черзі повторний виклик функції через вказаний інтервал часу
// Чекає зазначеного часу, перед тим як викликати функцію
// Result   
//* Правильно! Функція setInterval планує в асинхронній черзі повторний виклик функції, який виконується через 
// зазначений інтервал часу. Вона не викликає функцію безпосередньо, а лише планує її виконання через певний час.

//? Скасування інтервалу

// Якщо з якихось причин нам потрібно скасувати виконання функції, зареєстрованої інтервалом, використовується метод clearInterval.
// clearInterval(id)
// Він приймає ідентифікатор інтервалу та очищає його, тобто видаляє виклики, зареєстровані переданим інтервалом з асинхронної черги.

// const greet = () => {
//   console.log("Hello!");
// };

// const intervalId = setInterval(greet, 3000);

// clearInterval(intervalId);

// У прикладі вище ми викликали clearInterval(), який виконається раніше, ніж буде викликана функція greet(). Отже, інтервал 
// з intervalId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.
// У живому прикладі ми додали кнопку скасування інтервалу Stop, клікаючи на неї ми викличемо clearInterval() і передамо 
// ідентифікатор інтервалу, який потрібно зупинити.
// todo Приклад 10-4
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId = null;

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });
// Кожного разу при натисканні на кнопку Start буде створюватися новий інтервал, якому буде присвоєно новий ідентифікатор.
// Натискання на кнопку Stop очистить відповідний інтервал за переданим числовим ідентифікатором.
// Якщо потрібно очистити всі інтервали, можна, наприклад, зберігати ідентифікатори всіх запущених інтервалів у вигляді масиву,
// перебирати його та послідовно очищати.
// todo Test
// Що потрібно передати функції clearInterval?
// Посилання на функцію, яка була передана в setInterval
//* Ідентифікатор інтервалу, який повернув виклик setInterval
// Затримку, після якої буде зупинено інтервал
// Result   
//* Чудово! Тепер ти знаєш, як скасувати виклик переданої у setInterval функції.

// Що потрібно передати функції clearInterval?

// Посилання на функцію, яка була передана в setInterval
// Значення часу, через яке буде повторюватися інтервал
//* Ідентифікатор інтервалу, який повернув setInterval
// Result

//* Абсолютно точно! Функції потрібно передати ідентифікатор інтервалу.

//? Дата і час

// Створення дати
// Вбудований клас Date безпосередньо спрощує більшу частину роботи з датами. Це дозволяє відображати моменти у часі як об'єкти і 
// маніпулювати ними за допомогою заздалегідь визначених методів. Використовуючи можливості класу Date, можна створювати годинник, лічильники, календарі та інші інтерактивні елементи інтерфейсу.
// Екземпляр класу Date — це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, 
// що зберігає дату і час на момент його ініціалізації, тобто поточні дату і час.

// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// У рядковому перетворенні об'єкт повертає результат виклику вбудованого методу toString(), тому у першому 
// лозі ми отримаємо рядок, а не об'єкт.
//todo Test
// Що буде результатом виклику new Date() без аргументів?

//* Об'єкт, що представляє поточні дату і час
// Термін, що представляє поточні дату і час
// Result

//* Саме так! Результатом виклику new Date() без аргументів буде об'єкт, що представляє поточні дату і час.

//? Встановлення дати
// Створюючи екземпляр класу Date, можна налаштувати різні формати відображення даних. Нижче приклад, де до класу Date передають рядок, 
// який описує тільки дату.
// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"
// Тут до Date передали рядок, де дата і час розділяються великою літерою T (time).

// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Як ти бачиш, формат рядка, переданого до Date, дуже гнучкий.
// Можна передати тільки рік, рік і місяць, або повну дату, включно з числом і часом.

// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Інший спосіб створення нової дати — це передати сім чисел, які описують рік, місяць (починається з 0), день, години, хвилини, секунди 
// й мілісекунди. Обов'язкові тільки перші три.

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

//? Unix час

// Для комп’ютерів відлік часу рахується в мілісекундах, що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time). Це — Unix час.
// Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула з 01.01.1970.
// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"Вбудований метод getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року
// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// Це число унікальне й ніколи не повториться, тому що момент часу унікальний і завжди тільки збільшується.
// Зручність цього формату полягає в тому, що можна відображати точні моменти часу у вигляді одного числа і не турбуватися про дати, 
// рядки й часові пояси. Адже можна отримати всю необхідну інформацію, коли необхідно.

// //? Метод Date.now()
// Ми вже розглядали приклад створення об'єкта часу. У нього є метод getTime, який дозволяє отримати числове представлення моменту 
// часу в кількості мілісекунд.

// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// У разі, коли все, що потрібно, це числове представлення моменту часу, немає сенсу створювати цілий об'єкт. Можна використовувати 
// метод Date.now() — це швидкий і зручний спосіб отримати поточний час у вигляді мілісекунд
// const time = Date.now(); // 1693237207904
// Основна ідея застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.
// Якщо ти хочеш виміряти, скільки часу займає виконання деякого коду, можна зробити так:

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);
// Зберегти час до події.
// Зберегти час після події.
// Порахувати різницю між кінцевим і початковим часом.
// todo Test
// Що повертає виклик методу Date.now()?

// Об’єкт
// Рядок
//* Число
// Result

//* Звісно, число — це правильна відповідь!

//? Геттери і сеттери

// Екземпляр класу Date має безліч методів для читання та запису значень дати і часу. Методи повертають або присвоюють рік, місяць, 
// день місяця або тижня, годину, хвилину, секунду і мілісекунду для кожного екземпляра.
// Геттери використовуються для читання всієї дати або окремої складової. Значення, що повертається, залежить від поточного 
// часового поясу, встановленого на комп'ютері.
// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// // Повертає день місяця від 1 до 31
// console.log("Day: ", date.getDate()); // 16

// // Повертає день тижня від 0 до 6, починається з неділі
// console.log("Day of the week: ", date.getDay()); // 6

// // Повертає місяць від 0 до 11
// console.log("Month: ", date.getMonth()); // 2

// // Повертає рік з 4 цифр
// console.log("Full year: ", date.getFullYear()); // 2030

// // Повертає години
// console.log("Hours: ", date.getHours()); // 14

// // Повертає хвилини
// console.log("Minutes: ", date.getMinutes()); // 25

// // Повертає секунди
// console.log("Seconds: ", date.getSeconds()); // 0

// // Повертає мілісекунди
// console.log("Milliseconds: ", date.getMilliseconds()); // 0

// Все, що можна прочитати — можна записати, методи для запису починаються з префікса set.

// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50); 
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// date.setMonth(4); 
// console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

//!   Проміси

//?   Що таке проміси?

// Уяви, що Полі обіцяє спекти торт на мій день народження через два тижні.
// Якщо все буде добре і вона не захворіє, у мене буде торт.
// Якщо Полі буде погано себе почувати, то не зможе спекти торт. У будь-якому разі, ми все одно влаштуємо вечірку.
// Обіцянка — це не гарантія виконання, ми не знаємо, чи виконає Полі її, чи ні.
// У програмуванні також є завдання, результат яких ми дізнаємося тільки в майбутньому.

// Promise (проміс, від англ. promise — обіцяти) — об'єкт, що представляє поточний стан асинхронної операції. Це обгортка для значення, невідомого на момент створення промісу. Проміс дозволяє обробляти результати асинхронних операцій таким чином, якби вони були синхронними: замість кінцевого результату асинхронної операції, повертається своєрідна обіцянка отримати результат у майбутньому.
// todo Test
// Що таке проміс?

// Об'єкт, що зберігає стан синхронної операції
//* Об'єкт, що зберігає стан асинхронної операції
// Функція, яка виконує асинхронну операцію
// Функція, яка повертає об'єкт
// Result
// Абсолютно точно! Проміс — це об'єкт, що зберігає стан асинхронної операції, який використовується для відслідковування стану 
//* операції: чи була операція виконана успішно, з помилкою, або ще не завершена.
// ?   Життєвий цикл проміса
// Проміс може бути у трьох станах:

// Очікування (pending) — початковий стан під час створення промісу.
// Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) — операція відхилена з помилкою.

// На момент створення проміс знаходиться в очікуванні (pending). Після чого він може завершитися успішно (fulfilled), повернувши 
// результат (значення). Проміс може також завершитися не успішно (rejected) і повернути помилку. Коли проміс переходить у стан f
// ulfilled або rejected — це назавжди.
// Коли проміс виконаний або відхилений, використовується термін settled. Це не окремий стан, а лише спосіб описати, що проміс 
// перебуває в будь-якому стані, крім очікування.

// todo Test
// Вибери всі стани, які існують у промісу

//* Fulfilled
// Settled
// Loading
// Success
//* Rejected
//* Pending
// Result

//* І цу вірно стани, які має проміс — це Fulfilled, Rejected, Pending.

// У якому стані спочатку перебуває проміс?

// Settled
//* Pending
// Fulfilled
// Rejected
// Result

//* Саме так! На момент створення проміс знаходиться в очікуванні (pending).

// У який стан переходить проміс, що успішно виконався?

// done
// success
//* fulfilled
// rejected
// Result

//* Абсолютно точно! Успішний проміс переходить у стан fulfilled , а проміс, який завершився з помилкою — у стан rejected.

//? Створення проміса

// Проміс створюється як екземпляр класу Promise, який приймає функцію як аргумент (називається "виконавцем" (executor)) і відразу 
// викликає її, ще до створення і повернення промісу.

// const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
// });

// resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
// reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

// Колбек-функція повідомляє проміс, коли і як операція, з якою він пов'язаний, буде завершена. У ній можна виконувати будь-яку асинхронну операцію. Після її завершення потрібно викликати:

// resolve() для позначення успішного виконання. Результатом буде fulfilled.
// Або

// reject() у разі помилки, який встановлює стан промісу як "відхилений" (rejected).

// Значення, що повертається цією функцією-виконавцем, ігнорується.
// У прикладі показано, як змінюється значення змінної isSuccess на true або false, щоб викликати resolve або reject та імітувати 
// успішне виконання промісу (fulfilled) або виконання з помилкою (rejected).

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу
// promise.then(result => console.log(result)).catch(error => console.error(error)); щоб побачити ща саме повертає проміс

// У змінну promise буде записаний проміс (об'єкт) у стані pending, а через дві секунди, щойно буде викликаний resolve() або reject(), 
// 	проміс перейде у стан fulfilled або rejected, і ми зможемо його оброб
// todo Test
// Вибери правильний синтаксис створення промісу

// const promise = Promise(executor)
//* const promise = new Promise(executor)
// const promise = Promise(new)
// Result

//* Чудово! Правильний синтаксис створення промісу в JavaScript — це const promise = new Promise(executor). Тобто використовується ключове слово new і конструктор Promise(), щоб створити проміс.

// Що повертає виклик new Promise()?

//* Об’єкт
// Функцію
// undefined
// Result

//* Саме так! Виклик new Promise() повертає об'єкт.

//? Метод then()

// Код, якому потрібно зробити щось асинхронно, створює проміс і повертає його.
// Зовнішній код, отримавши проміс, додає до нього обробники. Після завершення процесу асинхронний код переводить проміс у стан 
// fulfilled або rejected, і автоматично викликаються методи промісів (обробники) у зовнішньому коді.
// Метод проміса then() приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан.
// Результат промісу — це значення або помилка, яку функції отримають як аргументи.
// promise.then(onResolve, onReject)

// onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та 
// отримає його результат як аргумент.
// onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та 
// отримає її як аргумент.

// Після створення промісу, його результат обробляється в callback-функції.
// Код пишеться таким чином, щоб врахувати всі сценарії на майбутнє:
// Якщо проміс виконається.
// Якщо проміс не виконається.

// У прикладі нижче callback-функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у 
// метод then() за ім'ям.

//  todo Test
// Який метод промісу використовується для обробки його результату?

// process
// execute
//* then
// Result

//* Саме так! Метод промісу, який використовується для обробки його результату, це then.

// Коли виконається колбек-функція, яка передається першим аргументом у метод then?

// Щойно проміс буде створено
//* Після того, як проміс буде виконано успішно
// Після того, як проміс буде виконано з помилкою
// Після того, як проміс буде виконано успішно або з помилкою
// Result

//* Правильно! Колбек-функція, яка передається першим аргументом у метод then, виконається після того, як проміс буде виконано успішно.

// Що отримує функція, яка передається першим аргументом у метод then?

//* Значення, з яким виконався проміс
// Помилку, з якою виконався проміс
// Result

//* Так і є! Функція, яка передається першим аргументом у метод then, отримує значення, з яким виконався проміс. Якщо проміс 
// завершився з помилкою, то ця функція не викликається. Помилку можна обробити у колбек-функції, передаючи її другим аргументом 
// у метод then.

//? Метод catch() 

// На практиці в методі then() обробляють тільки успішне виконання промісу.
// Помилку його виконання обробляють у спеціальному методі catch() для «відловлювання» помилок.

// promise
// 	.then(value => {
		// Promise fulfilled
// 	})
// 	.catch(error => {
	  // Promise rejected
// 	});

// Колбек-функція в методі catch буде викликана в разі виконання промісу з помилкою, і отримає цю помилку як аргумент. Метод catch 
// має йти після then.
// Винесемо обробку помилки з методу then у метод catch.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch(error => {
//     console.log(error); // "Error! Error passed to reject function"
//   });
// todo Test
// Чи виконається метод catch, якщо проміс виконався без помилки?

// Так
//* Ні
// Result

//* Абсолютно точно! Метод catch не виконається, якщо проміс виконався без помилки.

// Коли виконається функція, яка передається аргументом у метод catch?

// Щойно проміс буде створено
// Після того, як проміс буде виконано успішно
//* Після того, як проміс буде виконано з помилкою
// Після того, як проміс буде виконано успішно або з помилкою
// Result

//* Саме так! Функція, яка передається аргументом у метод catch, виконається після того, як проміс буде виконано з помилкою. 
// Тобто вона призначена для обробки помилок, які виникають під час виконання промісу.

// Що отримує функція, яка передається аргументом у метод catch?

// Значення, з яким виконався проміс
//I* Помилку, з якою виконався проміс
// Result

//* Правильно! Функція, яка передається аргументом у метод catch, отримує помилку, з якою виконався проміс.

//?    Метод finally()

// Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату 
// (fulfilled або rejected).

// promise
// 	.then(value => {
	  // Promise fulfilled
// 	})
// 	.catch(error => {
	  // Promise rejected
// 	})
// 	.finally(() => {
	  // Promise fulfilled or rejected
// 	});

// Метод finally() дозволяє уникнути дублювання коду в обробниках then() і catch().
// Колбек-функція не отримає жодних аргументів, оскільки неможливо визначити, чи був проміс виконаний або відхилений. 
// Тут буде виконуватися код, який необхідно запустити в будь-якому разі.

// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// todo Test

// Чи виконається метод finally, якщо вже виконався метод then?

//* Так
// Ні
// Result

//* Правильно! Метод finally виконається незалежно від того, чи вже виконався метод then, чи сталася помилка (rejected).

// Коли виконається функція, яка передається аргументом у метод finally?

// Щойно проміс буде створено
// Після того, як проміс буде виконано успішно
// Після того, як проміс буде виконано з помилкою
//* Після того, як проміс буде виконано успішно або з помилкою
// Result

//* Саме так! Функція, яка передається аргументом в метод finally, виконається після того, як проміс буде виконано, незалежно від того, чи він виконався успішно, чи сталася помилка.

// Що отримує функція, яка передається аргументом у метод finally?

// Значення, з яким виконався проміс
// Помилку, з якою виконався проміс
//* Нічого
// Result

//* Так і є! Функція, яка передається аргументом у метод finally, не отримує жодних значень або помилок від промісу.

//?    Ланцюжки промісів

// Метод then() повертає новий проміс, який у свою чергу отримує значення від своєї callback-функції onResolve. Ця особливість дозволяє 
// формувати послідовність асинхронних операцій, зв'язуючи проміси в ланцюжок.

// Метод then() повертає проміс. Перед його виконанням може минути деякий час, отже, частина ланцюжка, що залишилася, буде чекати 
// на результат. У разі виникнення помилки в будь-якому місці ланцюжка, виконання всіх наступних then() скасовується, а управління 
// передається методу catch(). Тому він має знаходитись у кінці ланцюжка усіх then().

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// todo Test
// Що повертає метод then?

//* Проміс
// Значення, яке поверне його колбек-функція
// undefined
// Result

//* Правильно! Метод then() видає новий проміс, значення або статус помилки якого визначається результатом колбек-функції, переданої до методу then. Завдяки цьому можна створювати ланцюжки асинхронної обробки результатів через послідовні виклики методу then.

// Яким буде значення промісу, який поверне then?

//* Значення, яке поверне його колбек-функція
// Завжди буде undefined
// Result

//* Правильно! Значенням промісу, який поверне then, буде значення, яке поверне його колбек-функція в разі успішного виконання 
// промісу, або помилка, яка виникне в разі невдачі. Таким чином, воно може бути будь-яким значенням або помилкою, залежно від того, 
// як проміс був виконаний.
