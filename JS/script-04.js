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

// Цикл for...in

// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//   // інструкції
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
// Iterate over the apartment object using the for...in loop and write all its keys to the keys array and all the values of its properties to the values array.

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



