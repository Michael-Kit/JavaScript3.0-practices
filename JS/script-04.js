//!      Об’єкти
// Створення об'єкта

// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга,
// продукт магазину — чого завгодно.Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення
// (значення).

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// Для оголошення об’єкта використовуються фігурні дужки {} — літерал об'єкта.
// При створенні об'єкта до нього відразу можна додати властивості, але це не обов’язково. Кожна властивість обов’язково
// складається з пари ключ: значення.
// Ключ також називають ім'ям властивості і це зазвичай рядок.
// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
// Властивості між собою розділяються комою.

// Вибери синтаксис літерала об'єкта

// []
// {}
// ()
// Result

// Так, ти все знаєш! Для оголошення об'єкта використовуються фігурні дужки `{}`. Круглі дужки — для виклику функції,
// а квадратні — для масиву.

// Вибери символ, яким розділяється ім'я та значення властивості

// =
// ;
// :
// ,
// Result

// І це правильна відповідь! Ім'я та значення властивості розділяються `:` (двокрапкою). Різні властивості розділяються
// між собою `,` (комою). Після блоку коду ставиться `;` (крапка з комою). А `=` використовується для прирівняння значення.

// Task:
// Declare a variable apartment and assign it an object that describes an apartment with the following characteristics:

// imgUrl — a string that contains the path to the image, with the value "https://via.placeholder.com/640x480";
// descr — a string that contains the description, with the value "Spacious apartment in the city center";
// rating — a number that contains the rating, with the value 4;
// price — a number that contains the price, with the value 2153;
// tags — an array of strings that contains metadata, with the value ["premium", "promoted", "top"].
// A variable apartment has been declared.
// The value of the variable apartment is an object.
// The object contains the property imgUrl.
// The value of the property imgUrl is the string "https://via.placeholder.com/640x480".
// The object contains the property descr.
// The value of the property descr is the string "Spacious apartment in the city center".
// The object contains the property rating.
// The value of the property rating is the number 4.
// The object contains the property price.
// The value of the property price is the number 2153.
// The object contains the property tags.
// The value of the property tags is the array["premium", "promoted", "top"].

//     apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }

//?   Вкладені властивості

// Значенням властивості може бути інший об'єкт.
// Це використовується для зберігання вкладених і згрупованих даних.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// Наприклад, статистика користувача соціальної мережі stats складається з кількості підписників, переглядів і лайків, і зберігати ці дані найзручніше у
// вигляді об'єкта. Те саме з місцем розташування location, окремо країна і місто.
// У майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю підписників тощо.

// Вибери типи даних, які можуть бути значеннями властивості об'єкта

// Масив
// Об’єкт
// Рядок
//*  Усі варіанти вище
// Result

// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.

// Task:

// The object apartment describes a flat with the following characteristics:

// imgUrl — the path to the image
// descr — the description
// rating — the rating
// price — the price
// tags — the metadata
// Add the property owner to the apartment object, with the value being an object containing information about the owner.

// Add the following properties to the owner object:

// name — a string containing the owner's name, with the value "Henry";
// phone — a string containing the phone number, with the value "982-126-1588";
// email — a string containing the email address, with the value "henry.carter@aptmail.com"
// The variable apartment is declared.
// The value of the variable apartment is an object.
// The object of the variable apartment has the properties imgUrl, descr, rating, price and tags with values.
// The apartment object contains the owner property.
// The value of the owner property is an object.
// The owner object has the name property.
// The value of the name property is "Henry".
// The owner object has a phone property.
// The value of the phone property is "982-126-1588".
// The owner object has the email property.
// The value of the email property is "henry.carter@aptmail.com".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com"}
// };
  
//? Доступ до властивостей через крапку
// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
// Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined
// Вибери синтаксис доступу до властивості firstName об'єкта user

// user-firstName
//* user.firstName
// user[firstName]
// user”firstName”
// Result

// Чудово! Синтаксис доступу до властивості об'єкта можна представити у вигляді objectName.key. Отже, user.firstName — це правильна відповідь.

// Task:
// The apartment object describes an apartment and has 5 properties: image path, description, rating, price, tags. 4 variables are declared, the value of
// which is the value of the properties of the apartment object.

// Complete the code by assigning to the declared variables the expressions of accessing the corresponding properties of the apartment object.

// aptRating — rating;
// aptDescr — description;
// aptPrice — price;
// aptTags — tags.
// The variable apartment is declared.
// The value of the variable apartment is an object.
// The object of the variable apartment has the properties imgUrl, descr, rating, price and tags with values.
// The variable aptRating is declared.
// The value of the variable aptRating is the number 4.
// The variable aptDescr is declared.
// The value of the variable aptDescr is the string "Spacious apartment in the city centre".
// The variable aptPrice is declared.
// The value of the variable aptPrice is the number 2153.
// The variable aptTags is declared.
// The value of the aptTags variable is an array of strings["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
// const aptTags = apartment.tags;
  
//?  Доступ до вкладених властивостей

// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
// Значення властивості — це вкладений об’єкт.
// Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:

// user.location — це звернення (шлях) до об'єкта у властивості location,
// user.location.country — звернення до властивості country в цьому об'єкті.
// Тобто «крапка» вказує наступну вкладеність.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// Значення властивості — це масив.
// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"
// Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// Task:
// The apartment object describes an apartment with 6 properties: image path, description, rating, price, tags and owner.The owner property is also an object.
// Six variables are declared, the values of which are the values of the corresponding properties of the apartment object.

// Complete the code by setting the declared variables to expressions that refer to the corresponding properties of the apartment object.

// ownerName — owner's name;
// ownerPhone — owner's phone;
// ownerEmail — owner's email address;
// numberOfTags — the number of array elements in the tags property;
// firstTag — the first element of the array in the tags property;
// lastTag — the last element of the array in the tags property.
// The variable apartment is declared using const.
// The value of the apartment variable is an object.
// The variable ownerName is declared using const.
// The value of the ownerName variable is the string "Henry".
// The variable ownerPhone is declared using const.
// The value of the ownerPhone variable is 982-126-1588.
// The ownerEmail variable is declared using const.
// The value of the ownerEmail variable is henry.carter@aptmail.com.
// The variable numberOfTags is declared using const.
// The value of the numberOfTags variable is 3.
// The variable firstTag is declared using const.
// The value of the firstTag variable is premium.
// The lastTag variable is declared using const.
// The value of the lastTag variable is top.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
// const lastTag = apartment.tags[apartment.tags.length - 1]; // Альтернативний спосіб отримання останнього елемента масиву

//?   Доступ до властивостей через квадратні дужки

// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”].
// Схоже на звернення до елемента масиву з відмінністю.Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем
// (ім’ям властивості).
// Синтаксис «квадратних дужок» використовується значно рідше.Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у
// змінній, наприклад, як значення параметра функції.
// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// У прикладі вище:

// console.log(book.propKey); — це undefined, оскільки в об’єкті book немає властивості з ключем propKey.
// console.log(book[propKey]); — це "Bernard Cornwell", оскільки значенням змінної propKey є рядок “author”, і в об’єкті book є властивість з ключем author,
// то цей запис поверне значення властивості author).

// Task:
// The apartment object describes an apartment with 5 properties: image path, description, rating, price, tags. 4 variables are declared, the values of
// which are the values of the corresponding properties of the apartment object.

// Complete the code by setting the declared variables to expressions of accessing the corresponding properties of the apartment object
// using the syntax of square brackets.

// aptRating — a rating;
// aptDescr — a description;
// aptPrice — a price;
// aptTags — tags.
// The variable apartment is declared.
// The value of the apartment variable is an object.
// The variable aptRating is declared.
// The value of the variable aptRating is 4.
// The variable aptDescr is declared.
// The value of the aptDescr variable is Spacious apartment in the city centre.
// The variable aptPrice is declared.
// The value of the variable aptPrice is 2153.
// The variable aptTags is declared.
// The value of the aptTags variable is ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
  
//?    Зміна значення властивостей
// Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

//*  TAsk:
// Enhance the code by updating the values of the properties of the apartment object:

// the price of the price property to 5000;
// the rating of the apartment in the property rating by 4.7;
// the name of the owner in the nested property name to "Henry Sibola";
// an array of tags in the tags property, adding the string "trusted" to the end.
// The variable apartment is declared.
// The value of the variable apartment is an object.
// The value of the nested property price is the number 5000.
// The value of the nested property rating is the number 4.7.
// The value of the nested property name is the string "Henry Sibola".
// The value of the nested property tags is the array["premium", "promoted", "top", "trusted"].
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.tags); // ["premium", "promoted", "top", "trusted"]

//?  Додавання властивостей
// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
// Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// Task:
// dd several new properties to the apartment object:

// area — area in square metres, the number 60;
// rooms — number of rooms, the number 3;
// location — the location of the apartment, an object with the following nested properties:
// country — the country, the string "Jamaica";
// city — the city, the string "Kingston".
// Please note: if you try to add the properties country and city to the location property that has not yet been created, you will encounter an error. First, initialize location as an empty object, and then add the properties to it.

// The variable apartment is declared.
// The value of the apartment variable is an object.
// The value of the nested property area is the number 60.
// The value of the nested property rooms is the number 3.
// The value of the nested location property is an object.
// The value of the nested property location.country is the string Jamaica.
// The value of the nested property location.city is the string Kingston.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
//   };

//?    Короткі властивості
// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.
// Синтаксис у наступному прикладі занадто громіздкий, адже доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне
// значення: name: name, і age: age,.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Синтаксис коротких властивостей(shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості,
// а її значення як значення властивості.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Замість name: name, використали name.

// А замість age: age, — age.

// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.
  
// Task:
// Enhance the object declaration code so that it has the properties name, price, image and tags with values from variables with the same names. Be sure to use the short property syntax.

// The variable product is declared.
// The value of the product variable is an object.
// The value of the nested property name is the string "Repair Droid".
// The value of the nested property price is the number 2500.
// The value of the nested image property is the string "https://via.placeholder.com/640x480".
// The value of the nested tags property is the array["on sale", "trending", "best buy"].

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

//?    Обчислювальні властивості

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається
// як значення змінної або як результат виконання функції.
// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Sibola";
// console.log(user.name); // "Henry Sibola"
// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.
// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

// Using the syntax of computational properties, enhance the code for declaring the credentials object so that it has two properties: email and password, the keys of
// which are stored in the variables emailInputName and passwordInputName.

// The value of the email property should be the string "henry.carter@aptmail.com", and the value of the password property should be the string "jqueryismyjam".

// The variable credentials is declared.
// The value of the credentials variable is an object.
// The credentials object contains the email property.
// The value of the nested property email is the string "henry.carter@aptmail.com".
// The credentials object contains the password property.
// The value of the nested property password is the string "jqueryismyjam".
// The syntax of computed properties is used.

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// }

//?  Перебір об'єкта

//todo   Цикл for...in

// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
  // інструкції
// }

// Змінна key доступна тільки в тілі циклу.
// На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.
// Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// Task:
// Iterate over the apartment object using the for...in loop and write all its keys to the keys array and all the values of its
//  properties to the values array.

// The variable apartment is declared.
// The value of the apartment variable is an object.
// The variable keys is declared.
// The value of the keys variable is an array ["descr", "rating", "price"].
// The variable values is declared.
// The value of the values variable is an array. ["Spacious apartment in the city centre", 4, 2153]
// The for...in loop is used.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key); // Додаємо ключ до масиву keys
//     values.push(apartment[key]); // Додаємо значення до масиву values
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// ?  Метод Object.keys()

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей,
//     метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо ключ і значення властивості.

// Що повертає метод Object.keys()?

//* Масив імен властивостей об'єкта
// Масив значень властивостей об'єкта
// Result

// Давай запам’ятаємо: метод Object.keys(object) приймає об'єкт і повертає масив ключів його властивостей.
// Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// Iterate the apartment object using the Object.keys() method and the for...of loop. Write to the variable keys an array of keys of the properties of the object apartment, and add all the values of its properties to the array values.

// The variable apartment is declared.
// The value of the variable apartment is an object.
// The variable keys is declared.
// The value of the keys variable is an array ["descr", "rating", "price"].
// The value of the keys variable is obtained using the Object.keys() method.
// The variable values is declared.
// The value of the variable values is an array ["Spacious apartment in the city centre", 4, 2153].
// The value of the values variable is obtained using the for...of loop.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment); // Отримуємо масив ключів
// const values = [];

// for (const key of keys) {
//     values.push(apartment[key]); // Додаємо значення відповідних ключів
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

//*  Task:

// Refactor the countProps(object) function by replacing the key enumeration using the for...in loop with the Object.keys() method
// to get an array of properties.The function should return the number of properties in the object object.

// The countProps(object) function is declared.
// Calling countProps({}) returns 0.
// Calling countProps({ name: "Mango", age: 2 }) returns 2.
// Calling countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) returns 3.
// The function uses the Object.keys() method.

// function countProps(object) {
//     let propCount = 0;
  
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
  
//     return propCount;
// }
//    function countProps(object) {
//         return Object.keys(object).length;
//       }
//     console.log(countProps({})); // 0
//     console.log(countProps({ name: "Mango", age: 2 })); // 2
//     console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//?    Метод Object.values()
// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object) повертає масив значень його властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

// Task:
// Write an array of keys to the properties of the apartment object into the keys variable and an array of values into the values variable.Use the Object.keys()
// and Object.values() methods.

// The variable apartment is declared.
// The value of the variable apartment is an object.
// The variable keys is declared.
// The value of the variable keys is the array ["descr", "rating", "price"].
// The variable values is declared.
// The value of the variable values is the array ["Spacious apartment in the city center", 4, 2153].
// The Object.keys() method is used to get an array of keys from the apartment object.
// The Object.values() method is used to get an array of values from the apartment object.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// //*  Task витрати на зарплату :
// The function countTotalSalary(salaries) accepts an object of salaries (salaries) as a parameter. Each property of the salaries object is a key that contains the employee's name, and its value is their corresponding salary.

// Complete the countTotalSalary(salaries) function so that it returns the total sum of the salaries of all employees.

// Tips:

// Initialise a variable totalSalary with the value 0, which will be responsible for the total sum of all employees' salaries.
// Use the Object.values() method to get the values (salaries) from the salaries object.
// Iterate over the obtained values using a loop and add each value to the totalSalary variable.
// Return totalSalary as the result.
// The countTotalSalary(salaries) function is declared.
// Calling countTotalSalary({}) returns 0.
// Calling countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) returns 330.
// Calling countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) returns 400.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     // Отримуємо масив значень зарплат
//     const salaryValues = Object.values(salaries);

//     // Додаємо кожне значення до загальної суми
//     for (const salary of salaryValues) {
//         totalSalary += salary;
//     }

//     return totalSalary;
// }

// // Перевірка роботи функції:
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

//?  Масив об’єктів
// Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад, користувача, книги, автомобіля, шоколадного батончика тощо.
// Для опису групи сутностей використовується масив об'єктів.
// Уяви, що треба описати бібліотеку. Кожна книга — це окремий об’єкт, що містить інформацію про назву, автора, кількість сторінок, рейтинг тощо. Якщо книга — це один об’єкт, то біблотека — це колекція книг, тобто масив об’єктів.
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
//   }
// ];

// У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві
// гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти. Доступ до властивостей через крапку),
// оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

// Яку особливість має колекція об'єктів у прикладі вище?

// У всіх об'єктів різний набір властивостей, з різними значеннями
//* У всіх об'єктів однаковий набір властивостей, з різними значеннями
// У всіх об'єктів однаковий набір властивостей, з однаковими значеннями
// Result

//* І це правильна відповідь! У колекції об'єктів у прикладі кожен об’єкт має однаковий набір властивостей та їх імена. А значення властивостей будуть різними
// для кожного об’єкта.

// Task:

// The array colors contains a collection of colours.Each colour is represented as an object with properties hex and rgb, holding the respective values for
// each format and colour.
// Iterate over the array of objects colors using a for...of loop.Add the values of the hex properties to the array hexColors and the values of
// the rgb properties to the array rgbColors from all objects in the colors array.

// A variable colors is declared.
// The value of the variable colors is an array.
// A variable hexColors is declared.
// The value of the variable hexColors is an array ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"].
// A variable rgbColors is declared.
// The value of the variable rgbColors is an array["244,67,54", "33,150,243", "76,175,80", "255,235,59"].

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" }
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);// ["#f44336", "#2196f3","#4caf50","#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//? Пошук об'єкта за значенням властивості

// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості.Наприклад, потрібно знайти книгу за її автором.
// Для цього необхідно: перебрати масив у циклі;
// додати умову, виконання якої означатиме успішний результат пошуку.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

// У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той, у якого порівняння значення властивості author і authorToSearchFor
// поверне true.Щойно об’єкт з необхідним автором знайдено, виконається тіло if, де ми вже можемо працювати зі знайденим об'єктом.

// Task:
// The function getProductPrice(productName) accepts a single parameter productName — the name of the product. The function contains an array of
// objects products with properties such as name — the product name, price — the price, and quantity — the quantity.

// Complete the function code so that it searches for a product object with a specific name (the name property) in the products array and returns
// its price (the price property). If a product with that name is not found, the function should return null.

// The getProductPrice(productName) function is declared.
// Calling getProductPrice(‘Radar’) returns 1300.
// The getProductPrice(‘Grip’) call returns 1200.
// The getProductPrice(‘Scanner’) call returns 2700`.
// Calling getProductPrice(‘Droid’) returns 400.
// Calling getProductPrice(‘Engine’) returns null.
// Ось правильний варіант завершеної функції getProductPrice(productName), яка виконує пошук продукту за його назвою та повертає його ціну:
// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price; // Повертаємо його ціну
//         }
//     }

//     return null;
//   }
  
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//  console.log(getProductPrice("Droid"));
//  console.log(getProductPrice("Engine"));// null
// 🔹 Як працює код?
// Є масив products – список об'єктів, де кожен має name, price та quantity.

// Цикл for...of проходить по кожному продукту в масиві.

// Перевіряємо, чи product.name дорівнює productName (що передано в аргумент).

// Якщо знайшли збіг, повертаємо product.price.

// Якщо жоден продукт не співпав, повертаємо null.

// 🚀 Чому це працює?
// Використання for...of дозволяє легко проходити по масиву.

// Порівняння product.name === productName знаходить потрібний об'єкт.

// Повернення null чітко вказує, що товар відсутній.

// Ця функція гнучка, працює для будь-яких даних і легко розширюється.

//?  Колекція значень властивості

// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів.Наприклад, взяти з масиву об'єктів, які описують
// книги, усі назви або рейтинг.
// Для цього необхідно:
// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.
// Наприклад, отримаємо список назв усіх книг у колекції books.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
// У результаті вийде масив значень певної властивості з усіх об'єктів.
// Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

//* TAsk:
// Write a getAllPropValues(propName) function that takes one parameter propName — the name(key) of the property.The function should return an array of all property
//  values with this name from each object in the products array.If there are no properties with this name in the objects, the function must return an empty array.

// The getAllPropValues(propName) function is declared.
// Calling getAllPropValues("name") returns ["Radar", "Scanner", "Droid", "Grip"].
// Calling getAllPropValues("quantity") returns [4, 3, 7, 9].
// Calling getAllPropValues("price") returns [1300, 2700, 400, 1200].
// Calling getAllPropValues("category") returns[].

// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     const values = []; // Ініціалізуємо порожній масив для збереження значень властивості

//     for (const product of products) { // Перебираємо кожен об'єкт у масиві products
//         if (product.hasOwnProperty(propName)) { // Перевіряємо, чи об'єкт має таку властивість
//             values.push(product[propName]); // Додаємо значення властивості до масиву
//         }
//     }

//     return values; // Повертаємо масив значень
// }

// Тестуємо функцію
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

// 🔹 Як працює код?
// 1️⃣ Створюємо порожній масив values, в який будемо додавати значення. 2️⃣ Проходимо for...of циклом по products – перебираємо кожен об'єкт у масиві. 3️⃣
// Перевіряємо, чи product містить передану властивість propName(hasOwnProperty(propName)). 4️⃣ Якщо властивість існує, додаємо її значення до масиву values.
//  5️⃣ Повертаємо values – готовий масив всіх значень цієї властивості. 6️⃣ Якщо властивість відсутня в об'єктах, повертаємо пустий масив [].

// 🚀 Чому це рішення правильне?
// ✅ Використовує стандартний цикл for...of, що робить код читабельним. ✅ Використання hasOwnProperty(propName) запобігає помилкам. ✅
// Гнучкість – можна шукати будь - яку властивість у products, а не лише "name", "price" або "quantity".

//* TAsk А тепер розв'яжемо задачу "Вартість товару"!

// The function calculateTotalPrice(productName) accepts one parameter, productName— the name of the product.The function contains an array of objects products
// with properties such as name— the name of the product, price— the price, and quantity— the quantity.

// Complete the function code so that it returns the total cost (price * quantity) of the product with that name from the array products.

// If there is no product with that name, the function should return the string "Product <productName> not found!", where <productName> is the name of the product.

// The function calculateTotalPrice(productName) is declared.
// The call calculateTotalPrice("Blaster") returns "Product Blaster not found!"
// The call calculateTotalPrice("Radar") returns 5200
// The call calculateTotalPrice("Droid") returns 2800
// The call calculateTotalPrice("Grip") returns 10800
// The call calculateTotalPrice("Scanner") returns 8100
// Ось правильна реалізація функції calculateTotalPrice(productName), яка знаходить продукт за назвою та повертає загальну вартість (ціна × кількість):

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//       }
//     } return `Product ${productName} not found!`;
   
// }
// console.log(calculateTotalPrice("Blaster"));//"Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid")); //2800
// console.log(calculateTotalPrice("Grip")); //10800
// console.log(calculateTotalPrice("Scanner"));//8100
// 🔹 Як працює код?
//     1️⃣ Перебираємо масив products за допомогою for...of. 2️⃣ Перевіряємо, чи product.name дорівнює productName. 3️⃣ Якщо продукт знайдено, повертаємо
// product.price * product.quantity. 4️⃣ Якщо продукт не знайдено, повертаємо рядок "Product <productName> not found!".

// 🚀 Чому це правильне рішення?
// ✅ Чистий і зрозумілий код, без зайвих операцій. ✅ Гнучкість – працює з будь-якими товарами. ✅ Правильно обробляє ситуацію, коли товар відсутній.

//?    Методи об'єкта

// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних(наприклад, дані про книгу).Об'єкти-сховища зазвичай містяться в масиві таких самих
// об'єктів. Цей масив є колекцією однотипних елементів.
// А що, якщо нам потрібно створити функції для виконання операцій над масивом даних ? Наприклад, додавання або видалення книги.І ці функції мають
// виконуватися багато разів.

// // ❌ Слабкопов'язані, незалежні сутності
// const books = ["The Last Kingdom", "Dream Guardian"];
// function getBooks() {}
// function addBook() {}
// Один із варіантів — оголосити змінну books і дві функції getBooks() і addBook(bookName).
// Цей спосіб має недоліки. Адже ми маємо три незалежні сутності без явного синтаксичного зв’язку і зі слабким логічним. Є краще рішення.
//   Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція, така властивість називається
// методом об'єкта.

// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі).
// Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.

// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».



// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.



// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
// bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

// Що таке метод об'єкта?

// функція, оголошена як окрема змінна
// //* функція, оголошена як властивість об'єкта
// масив
// Result

// І це правильна відповідь! Метод — це функція, оголошена як властивість об'єкта.


// The owner of the herbal shop "At The Old Toad" has approached us and requested a programme for inventory management.The programme should add, remove, search for,
// and update potions.

// Declare the object atTheOldToad with the following properties:

// potions — an array where the potions will be stored. Let it be empty for now.
// getPotions() — a method that returns the string "List of all available potions".
// addPotion(potionName) — a method that returns the string "Adding <potionName>", where potionName is the value of the parameter potionName.
// The variable atTheOldToad has been declared.
// The value of the variable atTheOldToad is an object.
// The value of the property potions is an array [].
// The value of the property getPotions is a method of the object.
// The call to the method atTheOldToad.getPotions() returns the string "List of all available potions".
// The value of the property addPotion is a method of the object.
// The call to the method atTheOldToad.addPotion("Invisibility") returns the string "Adding Invisibility".
// The call to the method atTheOldToad.addPotion("Power potion") returns the string "Adding Power potion".

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// // Test calls
// console.log(atTheOldToad.getPotions()); // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"

//? Доступ до властивостей об'єкта

// Методи використовуються для роботи з властивостями об'єкта та їх змінних.
// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.

// Ключове слово this — це контекст виконання функції.


// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це посилання на об'єкт bookShelf.
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
// Логічно замислитися, чому б не використовувати ім'я об'єкта у зверненні до властивостей?
// Адже ми явно не збираємося його змінювати.
// Справа в тому, що ім'я об'єкта — річ ненадійна.Методи одного об'єкта можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто при створенні
// об'єкта ми наперед зовсім не знаємо імені. Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

//? Task
// The object atTheOldToad has the following properties:

// potions — an array of strings containing the names of potions.
// getPotions() — a method that returns the string "List of all available potions".
// Change the code of the method getPotions() so that it returns the value of the property potions.

// The variable atTheOldToad is declared.
// The value of the variable atTheOldToad is an object.
// The value of the property potions is an array ["Speed potion", "Stone skin"].
// The value of the property getPotions is a method of the object.
// The call to the method atTheOldToad.getPotions() returns the current value of the property potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return "List of all available potions";
//   },
//   // Change the method to return the potions array
//   getPotions() {
//     return this.potions; // Use this to access the potions property
//   }
// };
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]

//? Зміна за посиланням

// У властивості books об'єкта bookShelf зберігається масив.
// Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.

// const bookShelf = {
//   books: ["The Last Kingdom"],
// };

// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

// У прикладі нижче в ключовому слові this зберігається посилання на об'єкт, що викликав відповідний метод.
// Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books.Це означає, що його можна змінювати за посиланням,
// наприклад, використавши метод масиву push() для додавання нового елемента.

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
// При цьому з методу addBook не потрібно нічого повертати, якщо цього не вимагає завдання.Під час його виклику ми просто міняємо значення масиву
// за посиланням — і елементи масиву у властивості books змінюються.

//*  Task:
// The variable atTheOldToad has been declared.
// The value of the variable atTheOldToad is an object.
// The value of the property potions is an array ["Speed potion", "Stone skin"].
// The value of the property getPotions is a method of the object.
// The value of the property addPotion is a method of the object.
// The call to the method atTheOldToad.getPotions() returns the current value of the property potions.
// After calling the method atTheOldToad.addPotion("Invisibility"), the property potions will contain the
// array["Speed potion", "Stone skin", "Invisibility"].
// After calling the method atTheOldToad.addPotion("Power potion"), the property potions will contain the
// array["Speed potion", "Stone skin", "Invisibility", "Power potion"].

// Declare the object atTheOldToad with the following properties:
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName); // Додаємо нове зілля в масив potions
//   },
// };
// // Перевірка
// console.log(atTheOldToad.getPotions());
// // Очікуваний результат: ["Speed potion", "Stone skin"]

// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions());
// // Очікуваний результат: ["Speed potion", "Stone skin", "Invisibility"]

// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());
// // Очікуваний результат: ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// 🔹 Як працює код?
// 1️⃣ Створюємо об'єкт atTheOldToad з властивістю potions, яка є масивом. 2️⃣ Метод getPotions повертає поточний масив potions. 3️⃣ Метод addPotion додає нове
// зілля до масиву potions за допомогою this.potions.push(potionName). 4️⃣ Викликаємо методи getPotions і addPotion для перевірки роботи.

// ?  Масив об’єктів

// Ти вже знаєш, що об'єкт дає змогу згрупувати характеристики сутності, наприклад, книги.
// Тому найчастіше будемо працювати з масивом об'єктів. Для цього зберігатимемо у властивості books не рядки, а об'єкти з назвою книги та рейтингом, а в майбутньому,
// можливо, й іншими характеристиками.

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		return this.books;
// 	}
// };

// Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає його в масив у властивості books.

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

// При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.

// Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг. Для цього:

// Оголосимо новий метод getAvarageRating в об'єкті.
// Оголосимо змінну totalRating для зберігання загального рейтингу.
// Переберемо масив книг за посиланням this.books у циклі for...of.
// На кожній ітерації додамо до загального рейтингу - рейтинг книги.
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

// Task:
// The client wants each potion to be represented not only by its name but also by its price. Therefore, the potions property will now store an array of objects with properties name and price.

// The object atTheOldToad has the following properties:

// potions — an array of objects, each representing a potion with name and price.
// getPotions() — a method that returns the value of the potions property.
// addPotion() — a method that accepts a parameter, an object representing a new potion newPotion, and adds it to the end of the array in the potions property.
// Add a method getTotalPrice(), which should return the total cost of all the potions in the potions property.

// The variable atTheOldToad is declared.
// The value of the variable atTheOldToad is an object.
// The value of the property atTheOldToad.getPotions is a method of the object.
// The call to the method atTheOldToad.getPotions() returns the current value of the potions property.
// The value of the property atTheOldToad.addPotion is a method of the object.
// After calling the method atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), the last element in the potions array will be this object.
// After calling the method atTheOldToad.addPotion({ name: "Power potion", price: 270 }), the last element in the potions array will be this object.
// The value of the property atTheOldToad.getTotalPrice is a method of the object.
// The call to the method atTheOldToad.getTotalPrice() returns the total cost of all the potions in the potions property.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },

//   getTotalPrice() {
//     return this.potions.reduce((total, potion) => total + potion.price, 0);
//   }
// };

// // Test cases
// console.log(atTheOldToad.getPotions());
// // Expected: [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// // Expected: [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }, { name: "Invisibility", price: 620 }]

// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());
// // Expected: [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }, { name: "Invisibility", price: 620 }, { name: "Power potion", price: 270 }]

// console.log(atTheOldToad.getTotalPrice());
// // Expected: 460 + 520 + 620 + 270 = 1870
//? Зміна об'єкта в масиві

// Ціла група завдань зводиться до зміни значення властивості певного об'єкта в масиві. Наприклад, зміна рейтингу книги. Пошук необхідного об'єкта в масиві
// виконується за унікальним значенням властивості, наприклад, за ім'ям книги.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 	}
// };

// Метод changeRating очікує на назву книги, якій необхідно змінити рейтинг, і нове значення рейтингу, яке потрібно підмінити в об'єкті.
// Процес зміни властивостей об’єкта в масиві починається з таких кроків:

// Перебір масиву об'єктів у циклі, наприклад for...of.
// Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				// Знайшли необхідний об’єкт за назвою книги
// 			}
// 		}
// 	}
// };

// При виконанні if ми можемо бути впевнені, що на даній ітерації в змінній book знаходиться посилання на необхідний нам об'єкт, оскільки об'єкти передаються за посиланнями. Тепер достатньо звернутися до властивості цього об'єкта і прирівняти йому нове значення.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);
// Після виклику методу changeRating властивість rating об'єкта з назвою, що збігається з bookName, буде оновлено на newRating.

//? Task

// The object atTheOldToad has the following properties:

// potions — an array of potion objects.
// getPotions() — a method that returns the value of the potions property.
// updatePotionName() — a method that accepts two string parameters, oldName and newName.
// Complete the method updatePotionName(oldName, newName) so that it updates the name of the potion from oldName to newName in the array of potions in the potions property.

// The variable atTheOldToad has been declared.
// The value of the variable atTheOldToad is an object.
// The value of the property atTheOldToad.potions is an array.
// The value of the property atTheOldToad.updatePotionName is a method of the object.
// After the first call to the method atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// the potions property will contain the array[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }].
// After the second call to the method atTheOldToad.updatePotionName("Speed potion", "Polymorth"),
//   the potions property will contain the array[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }].

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName; // Змінюємо назву зілля
//       }
//     }
//   },
// };
// // // Перевірка
// console.log(atTheOldToad.getPotions());
// // // Очікуваний результат: [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
// // // Очікуваний результат: [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]
// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions());
// // Очікуваний результат: [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]
// 🔹 Як працює код ?
// 1️⃣ Створюємо об'єкт atTheOldToad з властивістю potions, яка є масивом об'єктів. 2️⃣ Метод getPotions повертає поточний масив potions. 3️⃣ Метод updatePotionName
// перебирає масив potions і змінює назву зілля, якщо знайдено збіг з oldName. 4️⃣ Викликаємо методи getPotions і updatePotionName для перевірки роботи.
// 🚀 Чому це правильне рішення ?
// ✅ Чистий і зрозумілий код, без зайвих операцій. ✅ Гнучкість – працює з будь-якими зіллями. ✅ Правильно обробляє ситуацію, коли зілля відсутнє.
//? Підсумок
// У цьому розділі ти дізнався, що об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Ці функції називаються методами об'єкта.
// Методи використовуються для роботи з властивостями об'єкта та їх змінних. Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, а ключове слово this.
// Ключове слово this — це контекст виконання функції. Значенням this буде посилання на об'єкт, що викликав відповідний метод.
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями». Ти також дізнався, як змінювати властивості об'єкта в масиві,
// перебираючи масив об'єктів у циклі, і як змінювати значення властивостей об'єкта в масиві за посиланням.
// Тепер ти можеш створювати об'єкти, які згруповують дані та методи для роботи з цими даними, і використовувати їх у своїх проєктах.
//?    Завдання на повторення
// 1️⃣ Що таке метод об'єкта і як його використовувати?
// Метод об'єкта — це функція, оголошена як властивість об'єкта. Його використовують для виконання операцій над даними цього об'єкта.
// 2️⃣ Як отримати доступ до властивостей об'єкта в методі?
// Для доступу до властивостей об'єкта в методі використовують ключове слово this, яке посилається на об'єкт, що викликав метод.
// 3️⃣ Як змінити властивість об'єкта в масиві?
// Для зміни властивості об'єкта в масиві перебирають масив у циклі, знаходять потрібний об'єкт за унікальним значенням властивості і змінюють його властивість.
// 4️⃣ Як працює ключове слово this в методах об'єкта?
// Ключове слово this в методах об'єкта посилається на об'єкт, що викликав цей метод, дозволяючи отримувати доступ до його властивостей і методів.
// 5️⃣ Як змінити властивість об'єкта в масиві за посиланням?
// Властивість об'єкта в масиві можна змінити за посиланням, звернувшись до неї через this і використовуючи методи масиву, наприклад, push() для додавання елементів.
// 6️⃣ Як створити об'єкт, який згруповує дані та методи для роботи з цими даними?
// Щоб створити об'єкт, який згруповує дані та методи для роботи з цими даними, оголошують об'єкт з властивостями (даними) і методами (функціями),
// які виконують операції над цими даними. Використовують ключове слово this для доступу до властивостей об'єкта в методах.
// 7️⃣ Як використовувати методи об'єкта для роботи з даними?
// Методи об'єкта використовують для виконання операцій над даними цього об'єкта, наприклад, для отримання, зміни або додавання нових даних.
// 8️⃣ Як перебирати масив об'єктів і змінювати властивості об'єктів у цьому масиві?
// Масив об'єктів перебирають у циклі, наприклад, for...of, і змінюють властивості об'єктів, використовуючи умови для знаходження потрібного об'єкта.
// 9️⃣ Як додати новий об'єкт до масиву об'єктів?
// Новий об'єкт додають до масиву об'єктів, використовуючи метод push() для додавання нового об'єкта в кінець масиву.
// 🔟 Як отримати значення властивості об'єкта в методі?
// Значення властивості об'єкта в методі отримують, використовуючи this і назву властивості, наприклад, this.propertyName.

//!  Синтаксис spread і rest

//? Залишкові параметри
// Ми вже знаємо, що викликати функцію можна з будь-якою кількістю аргументів незалежно від того, як її було визначено. Зайві аргументи не викличуть помилку.

// function multiply(a, b) {
// 	console.log(a, b)
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2
// multiply(1, 2, 3, 4); // 1 2

// У прикладі вище проблема в тому, що аргументів більше, ніж параметрів. І будуть використані лише перші два аргументи — за кількістю оголошених параметрів.
// Ми вже вміємо розв'язувати такі завдання, використовуючи псевдомасив arguments, у який збираються всі передані аргументи.

// function multiply() {
// 	console.log(arguments)
// }

// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]
// Починаючи зі стандарту ES6, з'явилася концепція залишкових параметрів (...rest). Це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів у масив.

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]

// Вільні параметри можуть бути позначені через три крапки .... Буквально це означає: "збери параметри, що залишилися, і поклади їх у масив".
// Ім'я параметра може бути довільним. Найчастіше його називають args або rest.

//* Task

// Using the residual parameter syntax, extend the code of the add() function so that it accepts any number of arguments to the args parameter and returns the sum of them.

// The add function is declared.
// The add function declares the args parameter.
// To collect arguments into the variable args in the function signature, the residual parameter syntax is used.
// The call to add(15, 27) returns 42.
// The call add(12, 4, 11, 48) returns 75.
// The call add(32, 6, 13, 19, 8) returns 78.

// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }
// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78
// 🔹 Як працює код?
// 1️⃣ Функція add оголошена з параметром args, який збирає всі передані аргументи в масив. 2️⃣ Використовуємо цикл for...of для перебору елементів масиву args.
// 3️⃣ На кожній ітерації додаємо значення аргументів до змінної total. 4️⃣ Повертаємо загальну суму total.
// 🚀 Чому це правильне рішення?
// ✅ Використання залишкових параметрів дозволяє функції приймати будь-яку кількість аргументів. ✅ Код чистий і зрозумілий, без використання псевдомасиву arguments.
// ✅ Гнучкість – функція може працювати з різною кількістю аргументів.
// ✅ Легко розширюється для додавання нових функціональностей, наприклад, обробки різних типів аргументів.

//? Збір частини аргументів
// Іноді потрібно зібрати в масив не всі аргументи, а лише частину з них. Наприклад, перші два аргументи, а решту — зібрати в масив.
// Це можна зробити за допомогою залишкових параметрів (...rest). Вони дозволяють зібрати в масив лише ту частину аргументів, яка необхідна, і залишити інші
// окремими параметрами.
// Це може бути корисно, коли потрібно обробити лише частину аргументів, а решту ігнорувати або обробляти окремо.
// Операція rest дозволяє зібрати всі аргументи, які передані функції, в масив. Це робиться за допомогою трьох крапок перед назвою параметра,
// наприклад, ...args.
// Операція(...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна.Для цього потрібно оголосити параметри до «збирання».
// Можна покласти перші кілька параметрів у змінні, а решту — зібрати в масив.

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// У цьому прикладі функція multiply приймає два окремих параметри first і second, а всі інші аргументи збираються в масив args.
// Таким чином, перші два аргументи будуть передані в параметри first і second, а всі інші аргументи будуть зібрані в масив args.
// Усі аргументи, для яких будуть оголошені параметри, передадуть їм свої значення, інші аргументи міститимуться в масиві.

// У параметр first буде поміщено перший аргумент
// У параметр second буде поміщено другий аргумент
// У параметр args буде поміщено масив з інших аргументів

// Операція rest збирає решту всіх аргументів, а тому повинна завжди бути останньою в підписі функції, інакше виникне помилка SyntaxError: Rest parameter must be last formal parameter.

// Це викличе помилку:

// function multiply(first, ...args, second) {
// }

// Це також викличе помилку:

// function multiply(...args, first, second) {
// }

// TAsk:
// Assignment 1/1
// The function addOverNum() accepts a variable number of numerical arguments.

// Enhance the function code so that it calculates the sum of only those arguments that are greater than a specified number.This number will always be passed
// as the first argument.

// To solve this task, you need to do the following:

// The first parameter value should represent the specified number, and the remaining arguments should be collected using the syntax (...args).
// Inside the function, initialize a variable to store the total sum.
// Then, iterate over each argument using a loop.
// Check if each argument is greater than the specified number, and if so, add it to the total sum.
// Finally, return the total sum.
// The function addOverNum() has been declared.
// The function addOverNum accepts the following parameters: value, ...args.
// The call addOverNum(50, 15, 27) returns 0.
// The call addOverNum(10, 12, 4, 11, 48, 10, 8) returns 71.
// The call addOverNum(15, 32, 6, 13, 19, 8) returns 51.
// The call addOverNum(20, 74, 11, 62, 46, 12, 36) returns 218.

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }
// // Test cases
// console.log(addOverNum(50, 15, 27)); // Expected: 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // Expected: 71 12+48+11 = 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // Expected: 51 32+19 = 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // Expected: 218 74+62+46+36 = 218
// 🔹 Як працює код
// ?
// 1️⃣ Функція addOverNum оголошена з параметром value і залишковим параметром args, який збирає всі інші аргументи в масив.
// 2️⃣ Ініціалізуємо змінну total для зберігання суми. 3️⃣ Використовуємо цикл for...of для перебору елементів масиву args.
// 4️⃣ На кожній ітерації перевіряємо, чи більше значення аргументу за value. Якщо так, додаємо його до total.
// 5️⃣ Повертаємо загальну суму total.
// 🚀 Чому це правильне рішення?
// ✅ Використання залишкових параметрів дозволяє функції приймати будь-яку кількість аргументів. ✅ Код чистий і зрозумілий, без використання псевдомасиву arguments.
// ✅ Гнучкість – функція може працювати з різною кількістю аргументів.
// ✅ Легко розширюється для додавання нових функціональностей, наприклад, обробки різних типів аргументів.
// ✅ Використання циклу for...of робить код простим і зрозумілим для читання.
// ✅ Використання умовної перевірки дозволяє обробляти лише ті аргументи, які відповідають умові, що робить код ефективним.

// ? Входження параметрів

// Ти вже знаєш, як отримати масив зі списку аргументів.
// Інколи потрібно зробити протилежне — передати масив поелементно у функцію, яка викликається.Наприклад, є вбудована функція Math.max(),
// яка шукає та повертає найбільший з аргументів(чисел), тобто очікує не масив значень, а довільну кількість аргументів.
// Math.max(14, -4, 25, 8, 11);
// Уяви, що є масив температур у вигляді чисел [14, -4, 25, 8, 11].
// Як викликати для нього Math.max? Адже він очікує отримати список чисел, а не один масив.

// const temps = [14, -4, 25, 8, 11];
// console.log(temps); // [14, -4, 25, 8, 11]

// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN
// Тут доцільно використати оператор розпилення ...spread.
// Він схожий на залишкові параметри — теж використовує ..., але робить абсолютно протилежне.Коли функціонал ...spread використовується при виклику функції,
// він перетворює масив на список аргументів.

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// Task:
// The function getExtremeScores(scores) takes an array of scores (numbers) as its parameter scores.

// Complete the function's code so that it returns an object with two properties:

// The property best should contain the highest number from the array scores.
// The property worst should contain the lowest number from the array scores.
// Use the spread operator (...) along with the Math.max() and Math.min() methods.

// The function getExtremeScores(scores) is declared.
// The call to the function getExtremeScores([89, 64, 42, 17, 93, 51, 26]) returns the object { best: 93, worst: 17 }.
// The call to the function getExtremeScores([19, 7, 4, 17, 81, 24]) returns the object { best: 81, worst: 4 }.
// The spread syntax ... is used on the array scores to pass arguments to the Math.max() and Math.min() methods.

// function getExtremeScores(scores) {
  
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };  

// }
// Test cases
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // Expected: { best: 93, worst: 17 } 
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // Expected: { best: 81, worst: 4 }
// 🔹 Як працює код?
// 1️⃣ Функція getExtremeScores оголошена з параметром scores, який є масивом чисел.
// 2️⃣ Використовуємо оператор розпилення ... для передачі елементів масиву scores у функції Math.max() і Math.min().
// 3️⃣ Повертаємо об'єкт з властивостями best і worst, які містять максимальне і мінімальне значення відповідно.
// 🚀 Чому це правильне рішення?
// ✅ Використання оператора розпилення дозволяє передати масив як окремі аргументи у функції Math.max() і Math.min().
// ✅ Код чистий і зрозумілий, без використання псевдомасиву arguments.
// ✅ Гнучкість – функція може працювати з будь-яким масивом чисел.
// ✅ Легко розширюється для додавання нових функціональностей, наприклад, обробки різних типів аргументів.
// ✅ Використання об'єкта для повернення результатів робить код більш структурованим і зрозумілим.
//? Підсумок
// У цьому розділі ти дізнався про залишкові параметри (...rest) і оператор розпилення (...spread). Залишкові параметри дозволяють збирати аргументи функції в масив,
// а оператор розпилення дозволяє розпаковувати масив у список аргументів при виклику функції.
// Ці концепції дозволяють створювати гнучкі та ефективні функції, які можуть працювати з різною кількістю аргументів.
// Ти також дізнався, як використовувати залишкові параметри для збору частини аргументів і як використовувати оператор розпилення для передачі масиву як окремих аргументів.
// Тепер ти можеш використовувати ці концепції у своїх проєктах для створення більш гнучких і ефективних функцій.
//?    Завдання на повторення
// 1️⃣ Що таке залишкові параметри і як їх використовувати?
// Залишкові параметри — це синтаксис (...rest), який дозволяє збирати всі аргументи функції в масив. Використовується для прийому змінної кількості аргументів.
// 2️⃣ Як використовувати оператор розпилення для передачі масиву як окремих аргументів?
// Оператор розпилення (...spread) дозволяє розпакувати масив у список аргументів при виклику функції. Використовується для передачі елементів масиву як окремих аргументів.
// 3️⃣ Як збирати частину аргументів у масив за допомогою залишкових параметрів?
// Залишкові параметри дозволяють збирати лише частину аргументів у масив, оголошуючи їх після окремих параметрів у сигнатурі функції.
// 4️⃣ Як використовувати залишкові параметри для збору всіх аргументів функції?
// Залишкові параметри використовуються для збору всіх аргументів функції в масив, оголошуючи їх як останній параметр у сигнатурі функції з використанням синтаксису (...rest).
// 5️⃣ Як використовувати оператор розпилення для розпакування масиву в список аргументів?
// Оператор розпилення (...spread) використовується для розпакування масиву в список аргументів при виклику функції, наприклад, Math.max(...array).
// 6️⃣ Як використовувати залишкові параметри для обробки змінної кількості аргументів у функції?
// Залишкові параметри використовуються для обробки змінної кількості аргументів у функції, збираючи їх у масив, який можна перебирати або обробляти.
// 7️⃣ Як використовувати оператор розпилення для створення нових масивів з існуючих?
// Оператор розпилення (...spread) дозволяє створювати нові масиви, копіюючи елементи з існуючих масивів, наприклад, const newArray = [...oldArray].
// 8️⃣ Як використовувати залишкові параметри для збору аргументів у функції, яка приймає різні типи даних?
// Залишкові параметри дозволяють збирати аргументи різних типів у масив, який можна обробляти в тілі функції, наприклад, function(...args) { /* ... */ }.
// 9️⃣ Як використовувати оператор розпилення для передачі аргументів у функцію, яка очікує окремі параметри?
// Оператор розпилення (...spread) використовується для передачі аргументів у функцію, яка очікує окремі параметри, наприклад, function(...args) { /* ... */ }.
// 🔟 Як використовувати залишкові параметри для збору аргументів у функції, яка приймає об'єкти
// ?
// Залишкові параметри дозволяють збирати аргументи у функції, яка приймає об'єкти, оголошуючи їх як останній параметр у сигнатурі функції з використанням синтаксису (...rest).
// Наприклад, function(...args) { /* ... */ }.
// Це дозволяє збирати всі передані об'єкти в масив, який можна обробляти в тілі функції.
// Тепер ти можеш використовувати залишкові параметри і оператор розпилення для створення гнучких і ефективних функцій, які можуть працювати з різною кількістю аргументів і типами даних.
// Це дозволить тобі створювати більш складні і функціональні програми, які можуть обробляти різноманітні дані і виконувати різні операції над ними.
//? Створення масиву
// Операція ...spread дозволяє створити новий масив, який містить елементи з інших масивів або окремі значення. Це робить код більш чистим і зрозумілим.
// Раніше для створення нового масиву з елементів інших масивів використовувалися методи slice() і concat(). Тепер можна використовувати оператор розпилення,
// який робить це простіше і зрозуміліше.
// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те саме в коротшій формі.
// Розгляньмо приклад нижче, де створена копія масиву.
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// Уяви, що temps — це ящик яблук, і ми хочемо створити його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps — розподіляємо його в іншу колекцію. За такої умови ящик temps не зміниться, у ньому все ще будуть яблука, а в новому ящику — їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.

// Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий — він впливає на порядок елементів у новій колекції.
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// TAsk:
// In the variables firstGroupScores, secondGroupScores, and thirdGroupScores, the test results of individual groups are stored.Using the spread
// operator, complete the code as follows:

// The variable allScores should store an array of all results from the first to the third group, inclusive.
// The variable bestScore should contain the highest overall score.
// The variable worstScore should contain the lowest overall score.
// The variable firstGroupScores has been declared.
// The value of the variable firstGroupScores is the array [64, 42, 93].
// The variable secondGroupScores has been declared.
// The value of the variable secondGroupScores is the array [89, 14, 51, 26].
// The variable thirdGroupScores has been declared.
// The value of the variable thirdGroupScores is the array [29, 47, 18, 97, 81].
// The variable allScores has been declared.
// The value of the variable allScores is the array [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81].
// The variable bestScore has been declared.
// The value of the variable bestScore is the number 97.
// The variable worstScore has been declared.
// The value of the variable worstScore is the number 14.
// The syntax ... was used to assign a value to the variable allScores to fill the array.
// The syntax ... is used to pass arguments to the Math.max() method on the array allScores.
// The syntax ... is used to pass arguments to the Math.min() method on the array allScores.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// // Combining all scores into a single array using the spread operator
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// // Finding the highest and lowest scores
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// // Expected output: [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]

// console.log(bestScore);
// // Expected output: 97

// console.log(worstScore);
// Expected output: 14
// 🔹 Як працює код?
// 1️⃣ Оголошуємо три масиви з результатами тестів для кожної групи.
// 2️⃣ Використовуємо оператор розпилення ... для об'єднання всіх результатів у один масив allScores.
// 3️⃣ Використовуємо Math.max(...allScores) для знаходження найвищого результату і Math.min(...allScores) для знаходження найнижчого.
// 4️⃣ Повертаємо об'єкт з усіма результатами, найкращим і найгіршим результатами.
// 🚀 Чому це правильне рішення ?
// ✅ Використання оператора розпилення дозволяє легко об'єднувати масиви і знаходити максимальні та мінімальні значення.
// ✅ Код чистий і зрозумілий, без використання псевдомасиву arguments.
// ✅ Гнучкість – функція може працювати з будь-яким числом груп і результатів.
// ✅ Легко розширюється для додавання нових функціональностей, наприклад, обробки різних типів аргументів.
// ✅ Використання об'єкта для повернення результатів робить код більш структурованим і зрозумілим.
//? Підсумок
// У цьому розділі ти дізнався про залишкові параметри (...rest) і оператор розпилення (...spread). Залишкові параметри дозволяють збирати аргументи функції в масив,
// а оператор розпилення дозволяє розпаковувати масив у список аргументів при виклику функції.
// Ці концепції дозволяють створювати гнучкі та ефективні функції, які можуть працювати з різною кількістю аргументів.

// Ти також дізнався, як використовувати залишкові параметри для збору частини аргументів і як використовувати оператор розпилення для передачі масиву як окремих аргументів.
// Тепер ти можеш використовувати ці концепції у своїх проєктах для створення більш гнучких і ефективних функцій.
// Це дозволить тобі створювати більш складні і функціональні програми, які можуть обробляти різноманітні дані і виконувати різні операції над ними.
// Це дозволить тобі створювати більш складні і функціональні програми, які можуть обробляти різноманітні дані і виконувати різні операції над ними.
//?    Завдання на повторення
// 1️⃣ Що таке залишкові параметри і як їх використовувати?
// Залишкові параметри — це синтаксис (...rest), який дозволяє збирати всі аргументи функції в масив. Використовується для прийому змінної кількості аргументів.
// 2️⃣ Як використовувати оператор розпилення для передачі масиву як окремих аргументів?
// Оператор розпилення (...spread) дозволяє розпакувати масив у список аргументів при виклику функції. Використовується для передачі елементів масиву як окремих аргументів.
// 3️⃣ Як збирати частину аргументів у масив за допомогою залишкових параметрів?
// Залишкові параметри дозволяють збирати лише частину аргументів у масив, оголошуючи їх після окремих параметрів у сигнатурі функції.
// 4️⃣ Як використовувати залишкові параметри для збору всіх аргументів функції?
// Залишкові параметри використовуються для збору всіх аргументів функції в масив, оголошуючи їх як останній параметр у сигнатурі функції з використанням синтаксису (...rest).
// 5️⃣ Як використовувати оператор розпилення для розпакування масиву в список аргументів?
// Оператор розпилення (...spread) використовується для розпакування масиву в список аргументів при виклику функції, наприклад, Math.max(...array).
// 6️⃣ Як використовувати залишкові параметри для обробки змінної кількості аргументів у функції?
// Залишкові параметри використовуються для обробки змінної кількості аргументів у функції, збираючи їх у масив, який можна перебирати або обробляти.
// 7️⃣ Як використовувати оператор розпилення для створення нових масивів з існуючих?
// Оператор розпилення (...spread) дозволяє створювати нові масиви, копіюючи елементи з існуючих масивів, наприклад, const newArray = [...oldArray].
// 8️⃣ Як використовувати залишкові параметри для збору аргументів у функції, яка приймає різні типи даних?
// Залишкові параметри дозволяють збирати аргументи різних типів у масив, який можна обробляти в тілі функції, наприклад, function(...args) { /* ... */ }.
// 9️⃣ Як використовувати оператор розпилення для передачі аргументів у функцію, яка очікує окремі параметри?
// Оператор розпилення (...spread) використовується для передачі аргументів у функцію, яка очікує окремі параметри, наприклад, function(...args) { /* ... */ }.
// 🔟 Як використовувати залишкові параметри для збору аргументів у функції, яка приймає об'єкти?
// Залишкові параметри дозволяють збирати аргументи у функції, яка приймає об'єкти, оголошуючи їх як останній параметр у сигнатурі функції з використанням синтаксису (...rest).

//?  Створення об'єкта
// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// Порядок розподілу має значення.Імена властивостей об'єкта — унікальні, тому властивості об'єкта, що розпиляються, можуть перезаписати значення вже
// існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Якби яблука в ящику мали наліпки з позначками, то в одному ящику не могло б бути двох яблук з однаковими позначками.Тому, пересипаючи другий ящик,
//   усі яблука, позначки яких будуть збігатися з тими, що вже знаходяться в новому ящику, замінять існуючі.



// Під час розпилення можна додавати властивості в довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// Task:

// In the constructor, you can create new tests that have default settings that are stored in the defaultSettings variable. When creating a test, all or part of the settings can be overridden, the custom settings are stored in the overrideSettings variable.

// In order to get the final test settings, you need to take the default settings and apply the overridden custom settings on top of them. Complete the code in such a way that the finalSettings variable contains an object of the final test settings.

// The variable defaultSettings is declared.
// The value of the defaultSettings variable is an object.
// The variable overrideSettings is declared.
// The value of the overrideSettings variable is an object.
// The variable finalSettings is declared.
// The value of the finalSettings variable is an object.
// The value of the finalSettings.theme property is "light".
// The value of the finalSettings.public property is "false".
// The value of the finalSettings.withPassword property is "true".
// The value of the finalSettings.minNumberOfQuestions property is 10.
// The value of the finalSettings.timePerQuestion property is 30.
// To assign a value to the finalSettings variable, use the syntax ....

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// // Merge objects using the spread operator
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
// /* Expected output:
// {
//   theme: "light",
//   public: false,
//   withPassword: true,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 30
// }
// */
