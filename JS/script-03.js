//! Масиви

// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів.Масиви можуть містити
// елементи різних типів даних, таких як числа, рядки, булеві значення тощо.
// Для створення масиву в JavaScript використовується літерал масиву: квадратні дужки[].Усередині дужок перераховуються 
// елементи масиву, розділені комами.Ось приклад створення масиву:


//? const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
//? const numbers = [1, 2, 3, 4, 5]; // масив чисел

// Хоча в масивах зазвичай зберігаються однотипні дані, це не сувора вимога.Масиви також можуть містити елементи різних типівданих.

const mixed = ['apple', 10, true]; // масив з елементами різних типів

// Можна провести паралель з овочевим відділом у магазині, де різні види овочів зберігаються в окремих ящиках.Наприклад, яблука
// можуть бути поміщені в один ящик, груші — в інший, апельсини — у третій і так далі.
// Подібним чином у програмуванні використовуються масиви для групування однотипних елементів разом. Усі елементи всередині масиву зазвичай мають один і той самий тип даних або структуру.
// Вибери правильний синтаксис літерала масиву


// ? []
// {}
// ()
// Result

// Абсолютно точно! У синтаксисі літерала масиву використовуються квадратні дужки.

//?  Доступ до елементів

// Масив — це впорядкована колекція елементів, де кожен елемент має свій порядковий номер, який називається індексом.
// Індексація елементів масиву починається з нуля, тобто перший елемент має індекс 0, другий елемент — індекс 1 і так далі.
// Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:

// arrayName[index]
// Між іменем змінної, яка зберігає масив, і квадратними дужками не повинно бути пробілу.Вказуємо індекс елемента всередині
// квадратних дужок.

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// У цьому прикладі ми створили масив рядків planets, що містить назви планет.Потім ми звертаємося до елементів масиву,
// вказуючи відповідний індекс у квадратних дужках.
// Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.

// const planets = ['Earth', 'Mars', 'Venus'];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// Тепер значення першого елемента масиву 'Earth' збережено у змінній firstElement, і ми можемо використовувати це значення
// для інших операцій або виразів у коді.
// Спроба доступу до неіснуючого індексу поверне значення undefined.

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[3]); // undefined
// console.log(planets[999]); // undefined

// Який індекс першого елемента масиву?

// -1
// 0
// 1
// Result

// Точно! Індексація елементів масиву починається з нуля!

//?   Перевизначення значення елемента

// Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення.Цей процес називається
// "перевизначенням" значення елемента.
// Ось приклад, як перевизначити елементи масиву:

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// У цьому прикладі ми створили змінну planets і помістили в неї масив, що містить назви планет.Потім ми звернулися до елементів
// масиву за індексом і надали їм нові значення.
// Важливо розуміти, що ми не змінили саму змінну planets, вона, як і раніше, містить масив.Ми просто змінили значення всередині
// цього масиву.
// Перевизначення елементів масиву дозволяє нам оновлювати дані та модифікувати масив під час виконання програми.Це корисно,
// коли в нас є масив даних і ми хочемо змінити або оновити певне значення.

// Вибери правильний синтаксис звернення до елемента масиву users з індексом 2

// [2]users
// users[2]
// users.2
// Result

// Саме так! Правильний синтаксис звернення до елемента масиву — це назва масиву та індекс елемента у квадратних дужках — users[2].

//?   Довжина масиву
// Довжина масиву, тобто кількість його елементів, зберігається у властивості length.Це динамічна величина, яка автоматично
// змінюється під час додавання або видалення елементів.

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3

// У цьому прикладі в нас є масив planets із трьома елементами.Вираз planets.length поверне значення 3, оскільки в масиві
// міститься три елементи.
// Знання довжини масиву корисно, коли нам потрібно перевірити, скільки елементів у масиві на даний момент.

// const planets = ['Earth', 'Mars', 'Venus'];

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }

//?    Індекс останнього елемента

// Щоб знайти значення останнього елемента масиву, нам потрібно знати його індекс.Індекс останнього елемента можна визначити за
// допомогою формули довжина_масиву - 1.
// Оскільки індексація елементів масиву починається з 0, а довжина масиву зберігає загальну кількість елементів, віднімаючи 1 від
// довжини масиву, ми отримуємо індекс останнього елемента.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// У цьому прикладі маємо масив planets із трьома елементами.Щоб отримати індекс останнього елемента масиву оголошується змінна
// lastElementIndex зі значенням planets.length - 1. Маючи індекс останнього елемента в масиві, можемо отримати його значення за
// допомогою planets[lastElementIndex].
// Такий підхід дозволяє отримати останній елемент масиву незалежно від його довжини.Це особливо корисно, коли ми не знаємо
// заздалегідь, скільки елементів міститиметься в масиві.

// Як визначається індекс останнього елемента масиву?

// Він завжди дорівнює значенню довжини масиву
// Він завжди на одиницю менший за довжину масиву
// Він завжди на одиницю більший за довжину масиву
// Result

// І це правильна відповідь — індекс останнього елемента масиву на одиницю менше за довжину цього масиву.

//todo   Task:
// The function getLastElementMeta(array) takes one parameter, array — an array of arbitrary values.
// Complete the function's code so that it returns a new array with two elements:

// The first element is the index of the last element in the array.
// The second element is the value of the last element in the array.
// The function getLastElementMeta(array) has been declared.
// The call getLastElementMeta(["apple", "peach", "pear", "banana"]) returns [3, "banana"].
// The call getLastElementMeta(["apple", "peach", "pear"]) returns [2, "pear"].
// The call getLastElementMeta(["apple", "peach"]) returns [1, "peach"].
// The call getLastElementMeta(["apple"]) returns [0, "apple"].

// function getLastElementMeta(array) {
//     if (array.length === 0) {
//       return null;
//     }
//     return [array.length - 1, array[array.length - 1]];
//   }

//   console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
//   console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
//   console.log(getLastElementMeta(["apple"]));

//todo  Task 2:

// The function getExtremeElements(array) accepts a single parameter array — an array of elements of any length.
// Complete the function code so that it returns an array containing two elements — the first and the last elements of the array parameter.

// The function getExtremeElements(array) is declared.
// The call getExtremeElements([1, 2, 3, 4, 5]) returns [1, 5].
// The call getExtremeElements(["Earth", "Mars", "Venus"]) returns ["Earth", "Venus"].
// The call getExtremeElements(["apple", "peach", "pear", "banana"]) returns ["apple", "banana"].

// function getExtremeElements(array) {
//     if (array.length === 0) {
//       return []; // Якщо масив порожній, повертаємо порожній масив
//     }
//     return [array[0], array[array.length - 1]];
//   }
  
// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]
// console.log(getExtremeElements([])); // []

//? Присвоєння за посиланням і за значенням

// Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються.
// Примітиви: рядки, числа, буль, null і undefined, під час присвоювання копіюються цілком, за значенням (by value).
// Зі складними типами все не так.У змінній, якій, наприклад, присвоєно масив, зберігаються не самі значення елементів масиву,
// а адреса того місця в пам'яті, де цей масив розташовано. Іншими словами — посилання (покажчик) на нього.
// Отже, вони передаються за посиланням (by reference).
// Уявімо змінну у вигляді аркуша паперу. Її значення ми представимо у вигляді запису на цьому аркуші.
// Якщо ми захочемо повідомити вміст цього запису користувачам, то можемо вчинити так — зробити фізичні копії і вручити їх кожному,
// тобто зробити множинні незалежні копії(присвоєння за значенням).
// Або помістити аркуш у зачиненій кімнаті й дати користувачам ключ від цієї кімнати, тобто один екземпляр із загальним доступом
// (присвоєння за посиланням).
// Тепер змінимо дані на аркуші паперу — значення змінної.Очевидно, що відвідувачі кімнати завжди бачитимуть зміни, які ми вносимо,
//  бо змінюється оригінал і вони мають до нього доступ.Власники паперових копій, навпаки, не помітять змін, дивлячись на свої копії.
// Під час присвоєння за значенням змінним виділяється новий осередок пам'яті, і в нього копіюються дані. Аналогія з множинними
// копіями паперового аркуша має цілком реальне втілення, окремий аркуш для кожної копії.
// При присвоєнні за посиланням, замість створення нового значення, змінній присвоюється посилання(покажчик) на вже існуючий масив,
// тобто на його місце в пам'яті. Таким чином, кілька змінних можуть вказувати на один і той самий масив, за аналогією із закритою кімнатою, у користувачів є ключ доступу до оригіналу аркуша.

// Усі примітивні типи присвоюються за значенням, тобто створюється копія.

// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// Присвоєння за значенням, у пам'яті буде створено ще
// одну ячейку, в яку буде скопійовано значення 5

// Змінимо значення a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія

// Масиви(складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання(покажчик у пам'яті) на вже існуючий
// масив.

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.
// Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// Те, що зберігається в b, також змінилося, тому що b, як і a, просто містить посилання на одне й те саме місце в пам'яті — масив.

// Результат повторюється, якщо використовувати посилання у змінній b для зміни масиву.

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// b[0] = "Ajax";
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]

// Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// У прикладах масиви містять однакові значення, але оператор === поверне false, тому що він перевіряє рівність посилань на масиви,
// а не самих елементів усередині масивів.Це можна порівняти з тим, що змінні arr1 та arr2 посилаються на різні кімнати, в яких різні папірці, але з однаковим вмістом.

// Прочитай приклад коду

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;

// Яким буде фінальне значення змінної arr2?

// [1, 2, 3]
// [1, 1, 1]
// [1, 1, 3]
// Result

// Давай з’ясуємо, чому[1, 1, 1] — це правильна відповідь.Масиви присвоюються за посиланням.Змінна arr2 отримує посилання на той
// самий масив, що і змінна arr1.Вираз arr1[1] = 1; перевизначає через посилання arr1 в нашому спільному масиві значення елемента з
// індексом 1 з числа 2 на число 1. Вираз arr2[2] = 1; перевизначає через посилання arr2 в нашому спільному масиві значення елемента з індексом 2 з числа 3 на число 1. Отже, фінальне значення змінної arr2 буде[1, 1, 1].

// Прочитай приклад коду

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const result = arr1 === arr2;

// Яким буде значення змінної result?

// true
// false
// Result

// Саме так! У прикладі масиви містять однакові значення, але оператор === поверне false, тому що він перевіряє рівність посилань
// на масиви, а не самих елементів усередині масивів.

// Приведення типів: масиви



// Явне і не явне приведення типів масивів здійснюється за необхідності виконати операції або порівняння, які вимагають сумісності
// типів даних.

// Масив → Рядок

// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.

// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// Масив → Число
// При перетворенні масиву в число алгоритм складається з двох кроків:
// спочатку масив приводиться до рядка,
// а потім цей рядок приводиться до числового значення.
// Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// Масив → Логічне значення (буль)
// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// Прочитай приклад коду
// const array= [false];
// const result = array ? "A" : "B";

// Яким буде значення змінної result?

// true
// false
// "A"
// "B"
// Result

// На жаль, ні.Давай з’ясуємо, у чому ж справа.У тернарному операторі значення змінної result, тобто масиву, перетворюється на
// логічне значення.Будь - який масив перетворюється на true.Отже, виконається вираз тернарного оператора для істинної умови, у
// змінну result буде присвоєно "A".

//!  Методи масиву
// У масивів є вбудовані методи, які дозволяють виконувати зручні операції для роботи з елементами масиву.Методи масиву
// дозволяють додавати, видаляти, змінювати та виконувати інші операції над елементами масиву.

//? Метод join()
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// Приклади використання методу join():

// todo    const words = ["JavaScript", "is", "amazing"];
// todo   console.log(words.join("")); // 'JavaScriptisamazing'
// todo   console.log(words.join(" ")); // 'JavaScript is amazing'
// todo   console.log(words.join("-")); // 'JavaScript-is-amazing'

// Результат роботи методу можна зберегти у змінну для подальшого використання.
// Метод join() корисний за необхідності перетворення масиву в рядок з певними роздільниками між елементами.Наприклад,
// нам потрібно написати функцію, яка перетворює рядки зі snake_case(зміїної нотації з підкресленнями) в kebab -case (нотацію з тире).

// todo    function transformString(string) {
// todo    const words = string.split("_");
// todo    return words.join("-");
// todo    }

// todo    transformString("user_age"); // "user-age"
// todo    transformString("price_per_droid"); // "price-per-droid"

//* Task:

//*        The getLength(array) function expects one parameter array — an array of arbitrary values. Complete the function code so that it converts the array to a string, without delimiters, and returns the number of characters in the resulting string.

//*        The function getLength(array) is declared.
//*        The call to getLength(["Mango", "hurries", "to", "the", "train"]) returns 22.
//*        The call to getLength(["M", "a", "n", "g", "o"]) returns 5.
//*        The call to getLength(["top", "picks", "for", "you"]) returns 14.

//*        function getLength(array) {
//*            return array.join("").length;
//*          }
//*          console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
//*          console.log(getLength(["M", "a", "n", "g", "o"]));
//*          console.log(getLength(["top", "picks", "for", "you"]));

// ? Метод split()

// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter).Він дозволяє перетворити
// рядок на масив, розбивши його за вказаним роздільником delimiter.
// Якщо роздільник є порожнім рядком(рядком, у якому нема символів), то вийде масив окремих символів рядка.Роздільником може
// бути один або кілька символів.Результат роботи методу можна зберегти у змінну для подальшого використання.
// Приклади використання методу split():

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// У першому прикладі рядок "Mango" було перетворено на масив, де кожна літера стала окремим елементом масиву.Роздільником було
// вказано порожній рядок.
// У другому прикладі рядок "JavaScript essentials" було розділено на два елементи масиву, використовуючи пробіл як роздільник.
// У третьому прикладі рядок "amazing-french-recipes" було розділено на три елементи масиву, використовуючи тире як роздільник.

//* Task:
//*   A jewellery engraving service requires a function that automatically calculates the engraving price, depending on the number of words and the price per word.

//*   The function calculateEngravingPrice(message, pricePerWord) is declared. This function takes as its first parameter a string consisting of words separated only by spaces (the parameter message), and as its second parameter a number that represents the engraving price for one word (the parameter pricePerWord).

//*   Complete the function body so that it returns the total cost of engraving all the words in the string.

//*   The function calculateEngravingPrice(message, pricePerWord) is declared.
//*   The call calculateEngravingPrice("JavaScript is in my blood", 10) returns 50.
//*   The call calculateEngravingPrice("JavaScript is in my blood", 20) returns 100.
//*   The call calculateEngravingPrice("Web-development is creative work", 40) returns 160.
//*   The call calculateEngravingPrice("Web-development is creative work", 20) returns 80.

//*     function calculateEngravingPrice(message, pricePerWord) {
//*         const words = message.split(" ");
//*         return words.length * pricePerWord;
    
//*     }

//*     console.log(calculateEngravingPrice("JavaScript is in my blood", 10));  50.
//*     console.log(calculateEngravingPrice("JavaScript is in my blood", 20));     100.
//*     console.log(calculateEngravingPrice("Web-development is creative work", 40)); 160.
//*     console.log(calculateEngravingPrice("Web-development is creative work", 20)); 80.

//?   Метод slice()

// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.Копія
// створюється від індексу begin до, але не включаючи індекс end.

// Приклади використання методу slice():

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// У першому прикладі метод slice(0, 2) створює новий масив, що містить елементи з індексами від 0 до 2(не включаючи 2)
// вихідного масиву planets.Результатом буде['Earth', 'Mars'].
// У другому прикладі метод slice(0, 4) створює новий масив, що містить елементи з індексами від 0 до 4(не включаючи 4)
// вихідного масиву planets.Результатом буде['Earth', 'Mars', 'Venus', 'Jupiter'].
// У третьому прикладі метод slice(1, 3) створює новий масив, що містить елементи з індексами від 1 до 3(не включаючи 3)
// вихідного масиву planets.Результатом буде['Mars', 'Venus'].

// Результат роботи методу slice() можна зберегти у змінну для подальшого використання:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]
// Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів(тобто стільки елементів з кінця,
// скільки вказано в параметрі begin):

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

// Метод slice() корисний, коли необхідно отримати підмасив із вихідного масиву або створити його копію для подальшої роботи з ним.

//*   Task :
//*       Complete the code so that the variables contain partial copies of the original array fruits.

//*       firstTwoEls — an array containing the first two elements.
//*       nonExtremeEls — an array containing all elements except the first and the last.
//*       lastThreeEls — an array containing the last three elements.
//*       A variable fruits is declared.
//*       The value of the variable fruits is the array ["apple", "plum", "pear", "orange", "banana"].
//*       A variable firstTwoEls is declared.
//*       The value of the variable firstTwoEls is the array ["apple", "plum"].
//*       A variable nonExtremeEls is declared.
//*       The value of the variable nonExtremeEls is the array ["plum", "pear", "orange"].
//*       A variable lastThreeEls is declared.
//*       The value of the variable lastThreeEls is the array["pear", "orange", "banana"].

//*       const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

//*       const firstTwoEls = fruits.slice(0, 2);
//*       const nonExtremeEls = fruits.slice(1, length -1);
//*       const lastThreeEls = fruits.slice(-3);

//*       console.log(firstTwoEls);
//*       console.log(nonExtremeEls);
//*       console.log(lastThreeEls);

//?  Метод concat()

// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat().Метод concat()
// створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// Порядок аргументів методу визначає порядок розташування елементів у новому масиві.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

//*    Task:

//*    Declare the variable allClients and modify the code so that its value is a reference to an array consisting of all the elements
//*    of the arrays oldClients and newClients.The elements from the oldClients array should go first, and then from the newClients array.

//*    A variable oldClients is declared.
//*    The value of the variable oldClients is the array ["Mango", "Ajax", "Poly", "Kiwi"].
//*    A variable newClients is declared.
//*    The value of the variable newClients is the array ["Peach", "Houston"].
//*    A variable allClients is declared.
//*    The value of the variable allClients is the array ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"].
//*    The variable allClients is assigned the array after applying the concat method with the correct arguments.

//*    const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
//*    const newClients = ["Peach", "Houston"];

//*    const allClients = oldClients.concat(newClients);

//*    console.log(allClients); // ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

//?   Метод indexOf()

// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві.Він повертає
// індекс елемента, якщо він знайдений, або - 1, якщо елемент не знайдений.Метод indexOf() виконує сувору рівність(===) при
// порівнянні елементів.
// Синтаксис методу indexOf() має такий вигляд:

// array.indexOf(elem)
// array — масив, у якому здійснюється пошук.
// elem — елемент, індекс якого потрібно знайти в масиві.
// Приклад використання методу indexOf():
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// У цьому прикладі масив clients містить імена клієнтів.Виклик indexOf("Poly") повертає індекс першого входження рядка “Poly" у
// масиві, який дорівнює 2, усі наступні входження(індекс 4) уже не будуть аналізуватися.Виклик indexOf("Monkong") повертає - 1,
// оскільки елемент ** "**Monkong**" ** не знайдений у масиві.
// Що повертає метод indexOf, якщо елемент у масиві не знайдено?

// false
// -1
// null
// Result

// І це правильна відповідь. Метод indexOf() повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений.

// The function getSlice(array, value) accepts two parameters:

// array — an array of arbitrary elements.
// value — the value of an array element to search for.
// Complete the code for the function getSlice(array, value) so that it searches for the value value in the array array and returns:

// An empty array if there is no element with the value value in array.
// A subarray starting from the beginning of array up to and including the element with the value value, if such an element exists
// in array.
// A function getSlice(array, value) is declared.
// Calling getSlice(["Mango", "Poly", "Ajax"], "Poly") returns ["Mango", "Poly"].
// Calling getSlice(["Mango", "Poly", "Ajax"], "Ajax") returns ["Mango", "Poly", "Ajax"].
// Calling getSlice(["Mango", "Poly", "Ajax"], "Mango") returns ["Mango"].
// Calling getSlice(["Mango", "Poly", "Ajax"], "Jacob") returns [].
// Calling getSlice(["Mango", "Poly", "Ajax"], "Casey") returns [].

// function getSlice(array, value) {
//     const index = array.indexOf(value);

//     if (index === -1) {
//         return []; // Return an empty array if the value is not found
//     }

//     return array.slice(0, index + 1); // Return subarray from start up to and including the found element
// }

// // Test cases
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []

//?   Метод push()

// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
// Синтаксис методу push() має такий вигляд:

// array.push(element1, element2, ..., elementN);
// де:
// array — це вихідний масив, до якого потрібно додати елементи;
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву.

// Приклад використання методу push():

// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// У прикладі ми створюємо масив planets з вихідними елементами "Earth", "Mars" і "Venus".Потім за допомогою методу push()
// послідовно додаємо елементи "Jupiter", "Saturn" і "Neptune" у кінець масиву.Після виконання push() масив planets міститиме всі додані елементи.

// За допомогою циклу ми можемо виконувати повторювані операції і використовувати метод push для додавання нових елементів у масив на кожній ітерації. Це дуже корисно, коли нам потрібно створити масив з елементами, які можна динамічно додавати.


// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// Код прикладу створює порожній масив tags і за допомогою циклу for додає рядки виду "tag-0", "tag-1", "tag-2" до масиву.
// Кожен рядок формується за допомогою шаблонного рядка, де значення i в циклі використовується для створення унікального тега
// на кожній ітерації.У результаті ми отримуємо масив tags, що містить усі додані значення.

//*  Task

// The function createArrayOfNumbers(min, max) takes two parameters:

// min — an integer from which the calculations start.
// max — an integer up to and including which the calculations continue.
// Complete the code of the function createArrayOfNumbers(min, max) so that it returns an array of all integers from the value min to max inclusive.

// A function createArrayOfNumbers(min, max) is declared.
// Calling the function createArrayOfNumbers(1, 3) returns [1, 2, 3].
// Calling the function createArrayOfNumbers(14, 17) returns [14, 15, 16, 17].
// Calling the function createArrayOfNumbers(29, 34) returns [29, 30, 31, 32, 33, 34].
// Calling the function createArrayOfNumbers() with random min and max returns the correct array.
// The push method was used in the for loop.
    
// function createArrayOfNumbers(min, max) {
//     const numbers = []; // Initialize an empty array
    
//     for (let i = min; i <= max; i++) {
//         numbers.push(i); // Add each number from min to max to the array
//     }
    
//     return numbers; // Return the completed array
// }

// // Test cases
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// Explanation:
// Create an empty array numbers to store the results.

// Use a for loop to iterate from min to max, pushing each number into the array.

// Return the array containing all integers from min to max, inclusive.


// function fillArray(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }

// console.log(fillArray(2, 10));// 1

// Проблема в тому, що ти використовуєш return всередині циклу for. Коли інтерпретатор JavaScript зустрічає return,
// функція завершується негайно і повертає результат.

// Розглянемо детально, що відбувається:

// Створюється порожній масив arr = [].

// Запускається цикл for, де i починається з 2.

// arr.push(i) додає 2 до масиву arr. Але оскільки push() повертає довжину масиву (тобто 1), то це значення і повертається
// функцією через return.

// Функція завершується на першій ітерації, тому жодні наступні значення (4, 6, 8, 10) не додаються.

// Правельний запис був би таким:

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//       arr.push(i); // додаємо елемент у масив без return
//   }
//   return arr; // повертаємо весь масив після виконання циклу
// }

// console.log(fillArray(2, 10)); // [2, 4, 6, 8, 10]


//?  Ітерація по масиву

// Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
// У прикладі нижче масив planets містить назви планет, і цикл for використовується для виведення кожного елемента в консоль.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Початкове значення лічильника i встановлюється як 0 і цикл продовжується, поки i менше за довжину масиву planets.length
// На кожній ітерації циклу використовується planets[i] для доступу до елементів масиву за їх індексом i
// Значення лічильника i з кожною ітерацією збільшується на 1 (вираз i += 1)
// Умова i < planets.length буде повертати true для значень лічильника 0, 1 і 2. Коли i досягне значення 3, умова стане false і
// цикл зупиниться

// Таким чином, на кожній ітерації циклу буде виконуватися блок коду всередині фігурних дужок, де ми виводимо поточний елемент
// масиву planets[i] в консоль.Результатом роботи циклу буде виведення назв планет одна за одною.

// Що в прикладі вище використовується в умові для зупинки циклу під час ітерацій по масиву?

// Значення довжини масиву
// Значення елементів масиву
// Result

// Саме так! Умовою виходу з циклу під час ітерації по масиву є значення довжини масиву.У прикладі вище код тіла циклу буде
// виконуватися, доки`i < planets.length`

//*  Task:
// The calculateTotalPrice(order) function takes one parameter order — an array of numbers.Complete the function so that it
// returns the total sum of the items in the order array.

// The calculateTotalPrice(order) function is declared.
// Calling the calculateTotalPrice([12, 85, 37, 4]) function returns 138.
// Calling the calculateTotalPrice([164, 48, 291]) function returns 503.
// Calling the calculateTotalPrice([412, 371, 94, 63, 176]) function returns 1116.
// Calling the calculateTotalPrice() function with a random array returns the correct value.

//*            function calculateTotalPrice(order) {
//*                let total = 0;
//*                for (let i = 0; i < order.length; i++) {
//*                    total += order[i];
//*                }
//*                return total
//*            }
//*            console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
//*            console.log(calculateTotalPrice([164, 48, 291])); // 503
//*            console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// Task :
// The getEvenNumbers(start, end) function has two parameters start and end, which are integers.Complete the function code
// so that it returns an array of all even numbers from start to end.If there are no even numbers, the array must be empty.An
// even number is a number that is divisible by 2 without remainder(10 % 2 === 0).Use the for loop.

// The getEvenNumbers(start, end) function is declared.
// Calling the getEvenNumbers(2, 5) function returns [2, 4].
// Calling the getEvenNumbers(3, 11) function returns [4, 6, 8, 10].
// Calling the getEvenNumbers(6, 12) function returns [6, 8, 10, 12].
// Calling the getEvenNumbers(8, 8) function returns [8].
// Calling the getEvenNumbers(7, 7) function returns [].
// Calling the getEvenNumbers() function with random start and end returns the correct array.

//*        function getEvenNumbers(start, end) {
//*            const evenNumbers = [];
//*            for (let i = start; i <= end; i ++) {
//*            if (i % 2 === 0) {
//*                evenNumbers.push(i);
//*            }
//*        }
//*             return evenNumbers;
    
//*        }
    
//*        console.log(getEvenNumbers(2, 5));
//*        console.log(getEvenNumbers(3, 11));
//*        console.log(getEvenNumbers(6, 12));
//*        console.log(getEvenNumbers(8, 8));
//*        console.log(getEvenNumbers(7, 7));
//*        console.log(getEvenNumbers());

//?  Метод includes()

// Метод масиву includes() використовується для перевірки наявності певного елемента в масиві.Він повертає логічне значення true,
// якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

// Синтаксис методу includes() має такий вигляд:

// array.includes(element)
// де:

// array — це вихідний масив, у якому здійснюється пошук елемента;
// element — це елемент, наявність якого потрібно перевірити.

// Приклад використання методу includes():

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// Метод includes() можна поєднувати з розгалуженнями для перевірки умов.Наприклад, виконати різний код залежно від наявності
// значення в масиві.

// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }
// Код прикладу перевіряє наявність елемента "banana" в масиві fruits і виводить відповідне повідомлення залежно від результату
// перевірки.
// Ми використовуємо метод includes() для перевірки наявності елемента "banana" в масиві.Для цього в if ми викликаємо метод
// includes("banana") на масиві fruits.
// Якщо метод includes() повертає true, значить елемент "banana" знайдений у масиві, і виконується код всередині блоку if.
// Якщо метод includes() повертає false, значить елемент "banana" відсутній у масиві, і виконується код всередині блоку else.

// The function checkStorage(storage, item) takes two parameters:

// Task :
// The function checkStorage(storage, item) takes two parameters:

// storage — an array of strings that describes the available products in stock.
// item — a string containing the name of the product whose availability needs to be checked.
// Complete the function code so that it checks whether such a product is present in the storage array and returns:

// the string "<item> is available to order!", where item is the name of the product, if the product is found.
// the string "Sorry! We are out of stock!", if such a product is not present in the array.
// Ensure that the search for the product name is case-insensitive, meaning, for example, "plum" and "pLuM" should both be found in the array ["apple", "plum", "pear"].

// The function checkStorage(storage, item) is declared.
// The call checkStorage(["apple", "plum", "pear"], "plum") returns "plum is available to order!".
// The call checkStorage(["apple", "plum", "pear"], "pLuM") returns "plum is available to order!".
// The call checkStorage(["apple", "plum", "pear"], "pear") returns "pear is available to order!".
// The call checkStorage(["apple", "plum", "pear"], "pEAr") returns "pear is available to order!".
// The call checkStorage(["apple", "plum", "pear"], "orange") returns "Sorry! We are out of stock!".
// The call checkStorage(["apple", "plum", "pear"], "carrot") returns "Sorry! We are out of stock!".

// function checkStorage(storage, item) {
//   // Шукаємо відповідний товар у масиві без урахування регістру
//   const foundItem = storage.find(product => product.toLowerCase() === item.toLowerCase());

//   // Якщо товар знайдено, повертаємо його ім'я в правильному регістрі
//   return foundItem ? `${foundItem} is available to order!` : "Sorry! We are out of stock!";
// }

// // Тестові виклики функції
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));  // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));  // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));  // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));  // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "Sorry! We are out of stock!"

// Task:
// Before solving this task, it is worth noting what common elements are. Common elements of arrays are those elements that are present in all arrays.

// For example, in the two arrays [1, 3, 5] and [0, 8, 5, 3], the common numbers will be 3 and 5, as they are present in both input arrays. Meanwhile, the numbers 0, 1, and 8 are present in only one of the arrays.

// The function getCommonElements(array1, array2) takes two arrays (array1 and array2) of arbitrary length as parameters.

// Complete the function's code:

// Create an empty array to store the new array.
// Use a for loop to iterate over each element in array1.
// Inside the loop, check if the current element exists in array2 using the includes method.
// If it exists, add the element to the new array.
// Return the populated array of common elements as the result of the function.
// The getCommonElements(array1, array2) function is declared.
// Calling getCommonElements([1, 2, 3], [2, 4]) returns [2].
// Calling getCommonElements([1, 2, 3], [2, 1, 17, 19]) returns [1, 2].
// Calling getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) returns [12, 27, 3].
// Calling getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) returns [10, 30, 40].
// Calling getCommonElements([1, 2, 3], [10, 20, 30]) returns [].
// A call to getCommonElements() with random two arrays returns the correct array.


// function getCommonElements(array1, array2) {
//   // Create an empty array to store common elements
//   let commonElements = [];

//   // Loop through each element in array1
//   for (let i = 0; i < array1.length; i++) {
//       // Check if the current element exists in array2 using includes()
//       if (array2.includes(array1[i])) {
//           // If the element is found, add it to the commonElements array
//           commonElements.push(array1[i]);
//       }
//   }

//   // Return the populated array of common elements
//   return commonElements;
// }

// // Test cases
// console.log(getCommonElements([1, 2, 3], [2, 4]));  // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));  // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));  // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));  // []

//! Цикл for...of

// Цикл for...of — це зручний спосіб перебору масиву.Тіло циклу буде виконуватися на кожному елементі масиву.Це гарна заміна
// циклу for, якщо не потрібен доступ до лічильника.

// Синтаксис циклу for...of виглядає так:

// for (const element of array) {
//   // тіло циклу
// }

// Де:
// element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
// array — це вихідний масив, який ми хочемо перебрати.
// Приклад використання циклу for...of для масиву:

// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);
// }

// У прикладі ми оголошуємо масив planets.

// Потім використовуємо цикл for...of, у якому оголошуємо змінну planet, що прийматиме значення поточного елемента масиву на
// кожній ітерації.Усередині тіла циклу ми виводимо значення змінної planet за допомогою console.log().

// Результатом виконання коду буде послідовне виведення кожного елемента масиву planets.
// Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна.Якщо
// необхідно закінчити виконання циклу передчасно, використовується вже знайомий оператор break.




function sum(a, b) {
  console.log(arguments);
}

sum(2, 5, 10, 15); 



// Complete the code so that the variables contain partial copies of the original array fruits.

// firstTwoEls — an array containing the first two elements.
// nonExtremeEls — an array containing all elements except the first and the last.
// lastThreeEls — an array containing the last three elements.
// A variable fruits is declared.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, length -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);





// The value of the variable fruits is the array ["apple", "plum", "pear", "orange", "banana"].
// A variable firstTwoEls is declared.
// The value of the variable firstTwoEls is the array ["apple", "plum"].
// A variable nonExtremeEls is declared.
// The value of the variable nonExtremeEls is the array ["plum", "pear", "orange"].
// A variable lastThreeEls is declared.
// The value of the variable lastThreeEls is the array ["pear", "orange", "banana"].


// function findLongestWord(array) {
//     return array.reduce((longest, current) =>
//         current.length > longest.length ? current : longest, "");
// }
  
// console.log(findLongestWord(["apple", "banana", "cherry"])); // "banana"
// console.log(findLongestWord(["JavaScript", "Python", "C++"])); // "JavaScript"
// console.log(findLongestWord(["mountain", "river", "tree"])); // "mountain"

// Завдання 1: Перетворити масив слів у довжину рядка
// Завдання: Напиши функцію countCharacters(array), яка приймає масив слів та повертає кількість символів у злитому рядку без пробілів.

// Очікуваний результат:

// javascript
// console.log(countCharacters(["hello", "world"])); // 10
// console.log(countCharacters(["JavaScript", "is", "awesome"])); // 19
// console.log(countCharacters(["I", "love", "coding"])); // 12
// Завдання 2: Визначити найдовше слово в масиві
// Завдання: Створи функцію findLongestWord(array), яка знаходить найдовше слово у масиві.

// Очікуваний результат:

// javascript
// console.log(findLongestWord(["apple", "banana", "cherry"])); // "banana"
// console.log(findLongestWord(["JavaScript", "Python", "C++"])); // "JavaScript"
// console.log(findLongestWord(["mountain", "river", "tree"])); // "mountain"
// Завдання 3: Перетворення snake_case → kebab-case
// Завдання: Напиши функцію convertToKebab(string), яка приймає рядок у snake_case і перетворює його у kebab-case.

// Очікуваний результат:

// javascript
// console.log(convertToKebab("hello_world")); // "hello-world"
// console.log(convertToKebab("make_js_fun")); // "make-js-fun"
// console.log(convertToKebab("coding_is_cool")); // "coding-is-cool"
// Завдання 4: Розрахунок вартості гравіювання
// Це завдання схоже на приклади, які ти вже бачив на GoIT. Напиши функцію calculateEngravingPrice(message, pricePerWord), яка підрахує загальну вартість гравіювання.

// Очікуваний результат:


// Якщо хочеш більше тренувань
// Можеш знайти ще більше подібних задач у цьому матеріалі, де пояснюється join(), split() та їх застосування.

// Спробуй вирішити ці завдання, а якщо буде потрібно пояснення або підказки—запитуй! 🚀

// function countCharacters(array) { return array.join().length -1; } console.log(countCharacters(["hello", "world"])); // 10 console.log(countCharacters(["JavaScript", "is", "awesome"])); // 19 console.log(countCharacters(["I", "love", "coding"])); // 12 к тобы таке? Приймаэш?
// Майже правильно, але є одна помилка, яка може призвести до неправильного підрахунку.

// Що не так?
// array.join() без параметра за замовчуванням додає коми між елементами, тобто:

// javascript
// console.log(["hello", "world"].join()); 
// // "hello,world" (а не "helloworld")
// Тому .length - 1 намагається компенсувати одну зайву кому, але це не гарантує точний результат.

// Як виправити?
// Щоб не додавати коми, потрібно використовувати .join(""):

// javascript
// function countCharacters(array) {
//     return array.join("").length; // Тепер пробіли й коми не враховуються
// }
// Перевірка:
// javascript
// console.log(countCharacters(["hello", "world"])); // 10 ✅
// console.log(countCharacters(["JavaScript", "is", "awesome"])); // 19 ✅
// console.log(countCharacters(["I", "love", "coding"])); // 12 ✅
// Тепер працює коректно! 🚀 Дякую за цікавий варіант—ти дуже уважно аналізуєш код, і це круто! 😃 Ще тренуємося? 😊

// я виправив function countCharacters(array) { return array.join("").length -1; }
// Майже! 😊 Але -1 тут не потрібен, тому що .join("") не додає зайвих символів чи пробілів.

// Ось правильний варіант:
// javascript
// function countCharacters(array) {
//     return array.join("").length; // Просто рахую довжину без зайвого коригування
// }
// Чому -1 не потрібно?
// Якщо ми об'єднуємо масив ["hello", "world"], .join("") дає "helloworld", а його .length повертає 10. Якщо ж ти віднімаєш -1, то отримаєш 9, що буде неправильним результатом.

// Твоє мислення круте—ти експериментуєш, і це супер навичка! 🚀 Спробуй ще одне завдання? 😃

// Так я не подивився в консоль. Дійсно зараз маю результа на одиницю менше. Удаляю - 1.
// Ось це правильний підхід! 😊 Завжди круто перевіряти результат у консолі, щоб впевнитися, що код працює так, як очікуєш. Ти вже добре розбираєшся—такі дрібні нюанси показують рівень твоєї уважності! 🚀

// Хочеш ще якесь завдання для практики? 😃 Можу підкинути щось цікаве!

// так здаюсь. Що треба використати в 2 задачі.Який метод?
// Окей, здаєшся—тоді давай розбирати! 😃

// У 2-й задачі ("Визначити найдовше слово в масиві") найкраще використати reduce(). Він допоможе пройти по всіх елементах масиву та знайти найдовше слово.

// Ось правильний підхід:
// javascript
// function findLongestWord(array) {
//     return array.reduce((longest, current) => 
//         current.length > longest.length ? current : longest, "");
// }

// console.log(findLongestWord(["apple", "banana", "cherry"])); // "banana"
// console.log(findLongestWord(["JavaScript", "Python", "C++"])); // "JavaScript"
// console.log(findLongestWord(["mountain", "river", "tree"])); // "mountain"
// Як працює reduce() тут?
// reduce((longest, current) => ...) - проходить по кожному елементу масиву.

// Порівнює current.length з longest.length - якщо current довше, оновлює longest.

// Початкове значення "" (порожній рядок) гарантує, що не буде помилки при порожньому масиві.

// Цей метод оптимальний та швидкий, бо проходить масив лише один раз і працює без зайвих змінних. 🚀

// Закріпилося? 😉 Можу кинути ще практичне завдання, якщо хочеш!

// Так такого я ще не вчив.
// Круто, що ти відкритий до нового! 😃 reduce()— це один із найпотужніших методів роботи з масивами в JavaScript. Він дозволяє пройтися по всіх елементах і поступово накопичувати значення.

// Як працює reduce() у загальному випадку?
// javascript
// const numbers = [10, 20, 30, 40];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 100
// acc (акумулятор)— змінна, яка зберігає накопичене значення.

// num— поточний елемент масиву.

// acc + num— додає поточне число до загальної суми.

// 0— початкове значення акумулятора.

// Завдання для тебе 😉
// 1️⃣ Перепиши функцію findLongestWord(array), щоб розібратися, як reduce() працює. 2️⃣ Спробуй створити власну функцію, яка знаходить найкоротше слово за аналогією.

// Якщо виникнуть питання, питай! 🚀 Ти вже добре прокачався, давай ще трохи! 😃

// це що, типу тернарного ? current.length > longest.length ? current : longest, ""
// Так, ти правильно помітив! 😉 Це схоже на тернарний оператор, тому що використовує умову для вибору значення, але працює всередині reduce().

// Що тут відбувається?
// javascript
// array.reduce((longest, current) => 
//     current.length > longest.length ? current : longest, ""
// );
// current.length > longest.length ? current : longest 🔹 Якщо current.length більше, ніж longest.length, то оновлюємо longest на current. 🔹 Інакше (:) залишаємо longest без змін.

// "" (порожній рядок) — це початкове значення для longest. Всі слова порівнюються з ним, а потім змінна поступово оновлюється.

// Аналогія з тернарним оператором
// Якщо б ми просто перевіряли два значення, могли б записати так:

// javascript
// const longest = "banana".length > "apple".length ? "banana" : "apple";
// console.log(longest); // "banana"
// Тут структура і логіка та сама, тільки reduce() робить це для всього масиву!

// Це важливий концепт, і ти дуже швидко його зрозумів! 😃 Хочеш спробувати переписати задачу з мінімальною кількістю коду? 🚀
