// console.log('Привет, мир')

// let x = 4;
// let y = 9;
// let z = 4;

// let leti = x * y;

// console.log('Количество квартир в подъезде', leti);

// let lety = leti * z;

// console.log('Количество квартир в доме', lety);

// console.log('Количество квартир в подъезде', x * y);

// console.log(x === y)
// console.log(x !== y)

// let x1 = 10;
// let y1 = 2;

// let x2 = -3;
// let y2 = 3;

// let cathetus1 = Math.abs(x1 - x2);
// let cathetus2 = Math.abs(y1 - y2);

// console.log(cathetus1);
// console.log(cathetus2);

// console.log(Math.abs(
//     Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
//     )
// );

// let first = 0.1 + 0.2 + 0.033;
// let second = 0.33334;
// let precision = 3;

// let FirstNormalRized = Math.round(
//     first * Math.pow(10, precision)
// );

// let SecondNormalRized = Math.round(
//     second * Math.pow(10, precision)
// );

// console.log(FirstNormalRized);
// console.log(SecondNormalRized);

// console.log('Исходные числа равны', first === second);
// console.log('Исходные числа не равны', first !== second);
// console.log('Числа равны', FirstNormalRized === SecondNormalRized);
// console.log('Первое чило больше', FirstNormalRized > SecondNormalRized);
// console.log('Первое чило меньше', FirstNormalRized < SecondNormalRized);

// let n = -100;
// let m = 350;

// let range = Math.abs(m-n)
// let numberInRange = Math.round(Math.random() * range);
// let min = Math.min(n, m);

// console.log(min + numberInRange);

// let precision = 3;
// let number = 0x12f + 0.3 + 0.1;

// console.log("Исходное число", number);
// console.log("Целая часть", Math.floor(number));
// console.log(
//   "Дробная часть",
//   Math.round(number % 1 * Math.pow(10, precision))
// );

// Cпособы записи строк и текстов
// let singleQuote = 'Строка в одиночный ковычках';
// let doubleQuote = "Строка в двойных ковычках";
// let tickQuote = `Строка в обратных ковычках`;

// //многострочные тексты
// let multiline1 = 'Строка\nс\nпереносами';
// let multiline2 = `Строка
// \nс
// \nпереносами`;

// console.log(multiline2);

// let str1 = 'Первая строка';
// let str2 = 'Вторая строка';

// let concat = str1 + '\n' + str2; // Первая строка\nВторая строка

// let tickConcat = `${str1}
// ${str2}`; // Первая строка\nВторая строка

// let greetings = 'Привет';
// let names = 'Тимофей';
// console.log(`${greetings}, ${names}! Добро пожаловать!`);

// console.log('Кавычка в кавычках\'"');
// console.log("'Кавычка в кавычках\"'");
// console.log(`'Кавычка в кавычках\`'`);
// console.log('Символ табуляции:\t-таб');
// console.log('Обратный слэш: \\ \\');
// console.log('\x31'); // цифра 1 в UTF-8 в HEX
// console.log('\u0031'); // цифра 1 в UTF-16 в HEX
// console.log('\u{1f354}'); // символ эмодзи гамбургер, код в UTF-32 в HEX

// //Тип данных boolean: true/false (По-русски: логический тип)
// let yep = true;
// let nope = false;

// let yes = 5>3;
// let no = 3<3;

// //инвертирование
// let alsoNo = !yes;
// console.log(alsoNo);

// let x = 10;
// let y = 20;

// if (x > y) {
//   console.log('x больше y');
// }

// if (x < y) {
//   console.log('x меньше y');
// }

// true === true; // true
// true !== true; // false
// true === false; // false
// true !== false; // true

// "строка" === "строка"; // true
// "строка" === `строка`; // true
// "строка" === `строка`; // true

// ("строка" === "строка") === `строка`; // false , важен порядок вычелслений. Сначала первая строка сравнивается со второй, и ответ получаетчя true , а далее прозводится операция: true === `строка`; -поэтому и получается false

// 'строка1' !== 'строка2'; //
// 'строка1' !== 'строка2'; // false

// // === и !==  всегда вернется fasle при сравнении значений разных типов
// false !== 0;
// true !== 1;
// 0 !== 'ковычкам';
// 3 !== '3';
// false !== '';
// true !== 'true';

// //сравнение строк происходит посимвольно по кодам символа, условно "по алфавиту"
// console.log('z' > 'a'); // 122 > 97
// 'az' > 'axzzz'; // a === a , z > x
// 'z' > 'Z'; // 122 > 90
// '10' < '5'; // вот так сюрприз, это потомучто код символа 1 менььше чем код симвлоа 5
// '10' > '05'; //а вот теперь все на своих местах, тут код символа 1 больше чем код символа 0

// // DANGER ZONE!!!  Черная магия НИЖЕ
// '10' > 5; // true
// 10 > '5'; // true
// 10 > 'x'; // false, x не число (NaN)
// 10 < 'x'; // false, x не число (NaN)

// //сравнения с boolean всегда сводятся к сравнению  чисел
// // true - 1, fasle - 0
// 1 > false; // true, 1 > 0
// 0 < true; // true, 0 < 1
// '10' > true; // true, 10 > 1
// '1' > true; // false, 1>1
// '1' > false; // true. 1 > 0
// 'x' > true; // false, NaN > 1

// Условные операторы

// IFIFIFIFIFIF if

// if (condition) {
//   // код выполняющийся при соблюдении условий
// }

// if (condition) {
//   // код выполняющийся при соблюдении условий
// } else {
//   // код выполняющийся в противном случае
// }

// if (condition1) {
//   // при первом условии
// } else if (condition2) {
//   // при втором устовии
// } else if (condition3){
//   // при третьем условии
// } else {
//   // если ни одно условие не соблюдено
// }

// // пример с дискриминантом
// let d = 10;

// if (d > 0) {
//   // вычисляем x1, x2
// } else if (d === 0) {
//   // вычисляем единственное значение x
// } else {
//   // (в противном случае нету решений) выводит сообщение об отсутствии решений
// }

// //switch

// let fruit = 'Яблоко';

// switch (fruit) {
//   case 'Яблоко':
//   console.log('Перед нами яблоко');
//   break;
//   case 'Банан':
//     console.log('Перед нами банан');
//     break;
//   case 'Арбуз':
//   case 'Вишня':
//   case 'Клубника':
//     console.log('Это ягода, а не фрукт');
//     break;
//   default:
//     console.log('Не знаю такого фрукта');
//     break;
// }


// Примеры условных оераторов

/*Вычисление дискриминанта и решение квадратного уравнения
a*x*x + b*x + c = 0
Даны параметры a, b и c для квадратного уравнения.
Нужно вывести возможные значения x этого уравнения.
*/

// let a = 3;
// let b = 5;
// let c = 10;

// let d = b * b - 4 * a * c;

// /* старое решение
// let dRoot = Math.sqrt(d);
// console.log('x1 = ',  (-b + dRoot) / (2*a));
// console.log('x2 = ',  (-b - dRoot) / (2*a));
// */

// if (d < 0) {
//   console.log("Квадратное уравнение не имеет решений");
// } else if (d === 0) {
//   let x = -b / (2 * a);
// } else {
//   let dRoot = Math.sqrt(d);
//   console.log("x1 = ", (-b + dRoot) / (2 * a));
//   console.log("x2 = ", (-b - dRoot) / (2 * a));
//   console.log(`Квадратное уравнение имеет 2 решения\n:x1 = ${x1}
//   nx2 = ${x2}`);
// };



// //Определяем день недели как выходной или будний день

// let day = 'Вторник';



// switch (day) {
//   case 'Понедельник':
//   case 'Вторник':
//   case 'Среда':
//   case 'Четверг':
//   case 'Пятница':
//     console.log(day + ' - это будний день!');
//     break;
//   case 'Суббота':
//   case 'Воскресенье':
//   console.log(day + ' - это выходной день!');
//   break;
//   default:
//     console.log('Я не слышал о дне недели, который называется ' + day);
//     break;
// };


// /*
// Определяем четность числа
// */
// let num = 2;

// if (num % 2 === 0) {
//   console.log(`Число ${num} четное`);
// } else {
//   console.log(`Число ${num} нечетное`);
// };



// //Сокращенный вариант
// let x = 0;

// if (Math.random() > 0.5) {
//   x = 10;
// } else {
//   x = 20;
// }

// //тоже самое (Тернарный оператор)
// Math.random() > 0.5 ? console.log(x = 10) : console.log(x = 20);

// //тоже самое
// x = Math.random() > 0.5 ? 10 : 20;
// console.log(x);

// //так не стоит писать тенарный оператор
// let age = 23;
// let isadult = age > 18 ? true : false;
// console.log(isadult);

// //нужно так. При тернарном операторе не стоит писать в случае тру и фолс
// let isadultdoneright = age > 18;
// console.log(isadultdoneright);

 

// //Результат сравнений более сложных структур
// let day = 'Воскресенье';
// //с помощью оператора 'или' мы моежм объеденить несколько сравнений в одно большое условие 
// if (day === 'Суббота' || day === 'Воскресенье') {
//   console.log(day + ' - это выходной день');
// } else {
//   console.log(day + ' - это точно не выходной!');
// }

// let password = '123';  

// // //Длина пароля больше 3 и меньше  26
// if (password.length > 3 && password.length < 26) {
//   console.log('Допустимый пароль');
// } else {
//   console.log('Такой пароль не подходит, пожалуйста введите не меньше 3-х и не больше 26 знаков');
// }


// //приоритет - сначала && потом ||
// let x = 8;

// if (x === 13 || x > 0 && x < 11) {
//   console.log('x - число 13 или число от 1 до 10');
// } else {
//   console.log('Такого значения не существует');
// }


// //упарвление приоритетом с помощю скобок
// let f = 102;
// if (f % 3 === 0 || f % 2 === 0 && f > 100) {
//   console.log('f делится на 3 или на 2 и f больше 100');
// } else if(f < 0) {
//   console.log('f меньше нуля');
// }


// //инвертируем условие
// let j = -102;
// //если инвертируем, то сначала скобки ставим, а потом восклицательный знать
// if (!(j % 3 === 0 || j % 2 === 0) && j > 100) {
//   console.log('j не делится ни на 3, ни на 2 и j больше 100');
// } else if(j < 0 || j % 3 === 0 || j % 2 === 0) {
//   console.log('j меньше нуля, либо четное, либо нечетное значение');
// }



//Д/з модуль 3 

// Задание
// В переменную password запишите строку с любым произвольным паролем.
//  Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'.
//   Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

// Проверка результата
// Для проверки запустите код с разными вариантами надёжных и ненадёжных паролей. Примеры корректный паролей:
// •	1234-
// •	4321_
// •	qaz-xsw
// •	_zxd




// let password = '123-';  

// // // //Длина пароля больше 3 и меньше  26 '-_


// //Можно так
// if (/[\-\_\'\?]/.test(password) && password.length > 3 && password.length < 26) {
//   console.log('Пароль надёжный');
// } else {
//   console.log('Пароль недостаточно надёжный');
// }

// //но нужно так

// if (password.includes('-') || password.includes('_') || password.includes('\'') && password.length > 3 && password.length < 26) {
//   console.log('Пароль надёжный');
// } else {
//   console.log('Пароль недостаточно надёжный');
// }



// // В переменных name, surname написаны имя и фамилия человека. 
// // При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. 
// // Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. 
// // Запишите результат в новые переменные и выведите их значения с помощью console.log. 
// // С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.




// let name = 'ноРиК';
// let surname = 'гаЛОян';

// // можно так
// let subn = name.substr(0, 1);
// let subne = name.substr(1);
// let subnup = subn.toUpperCase()
// let subndo = subne.toLowerCase()
// let subnall = subnup + subndo;
// console.log(subnall);

// let subs = surname.substr(0, 1);
// let subse = surname.substr(1);
// let subsup = subs.toUpperCase()
// let subsdo = subse.toLowerCase()
// let subsall = subsup + subsdo;
// console.log(subsall);


// // а можно так 
// let subnall = name[0].toUpperCase() + name.substr(1).toLowerCase();
// let subsall = surname[0].toUpperCase() + surname.substr(1).toLowerCase();


// let oldnamesur = name + surname;
// let newnamesur = subnall + subsall;


// newnamesur !== oldnamesur ? console.log('«Имя было преобразовано»') : console.log('«Имя осталось без изменений»');





// //МАССИВЫ


// // let fruits = ['Яблоко', 'Апельсин', 'Банан', 'Груша', 'Манго',]


// let alphabet = [];

// // добавить в конце массива
// alphabet.push('Г');
// alphabet.push('Д');
// alphabet.push('Е', 'Ж', 'З');

// // добавить в начале массива
// alphabet.unshift('В');
// alphabet.unshift('А', 'Б');


// console.log(alphabet.length);
// console.log(alphabet);




// //здесь ошиблись в значении массива 
// let greethings = ['hello', 'good morning', 'good evning', 'good afternoon'];
// console.log(greethings[2]);

// //А здесь исправили значение массива 
// greethings[2] = 'good evening';
// console.log(greethings[2]);


// = 

// let fibo = [1, 1]

// for (let i = 1; i < 49; ++i) {
//   fibo.push(fibo[i] + fibo[i - 1]); 
// }

// //шаги выполнения
// // 1) let i = 1;
// // 2) i < 49;
// // 3)fibo.push(fibo[i] + fibo[i - 1]); 
// // 4) ++i ( тоесть внезависимости ото всего каждый раз к i добовляется +1)


// //цикл который никогда не завершится и повесит вашу программу
// for (;;) {console.log('Я буду сниться тебе в кошмарах')};

// //цикл который может завершиться на любой итерации с вероятностью начиная 10%
// for (;Math.random() > 0.1;) {console.log('И еще разочек')}; 

// //выносим инициализатор за пределы цикла, а заверщающую инструкцию - в телоё
// for(let i = 100; i > 0;) {console.log('i = ' + i--)};

// //вечный цикл, считающий до бесконечности (на самом деле нет)
// for (i = 0;; ++i) {console.log(i)};





// //let of in


// //for of
// let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Ананас', 'Дыня',];

// console.log('Сегодня я съел:');

// for (let fruit of fruits) {
//     console.log(fruit);    
// }

// //for in
// let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

// console.log('Рейтинг студентов:');

// //parseInt: преобразует строку в число

// for (let i in rating) {
//     console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
// }






// // Циклы while и do/while

// //цикл do
// let teaVolume = 200;

// console.log('Вы налили себе ' + teaVolume + ' мл чая');

// while (teaVolume > 0) {
//     console.log('В чашке осталось ' + teaVolume + ' мл чая');
//     teaVolume -=10;
// };

// console.log('Вы выпили весь чай');


// //while Freelancer
// let num = 0;
// while (num < 5) {
//     console.log(num);
//     num++;
// } 

// //
// let nub = 5;
// while(nub){
//     console.log(nub);
//     nub--;
// }
// // ==========
// while (nub) {
//     console.log(nub--);
// };

// // ============
// while(nub) console.log(nub--);

//Конструкция DO...WHILE - Freelancer
// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

//Цикл FOR - freelancer

// let num;
// for (let num = 0; num < 5; num++) {
//     console.log(num);
// }

// console.log(`Вывод вне цикла: ${num}`);

// // Можно убрать любую часть цикла
// let num = 0;
// for (; num < 5;) {
//     console.log(num);
//     num++;
// }


// //Директива break

// let num = 0;
// for(; num < 5; num++) {
//     console.log(num);
//     if(num == 2) break;
// }

// console.log(`${num}`);
// console.log(num);


// console.log(`Работа окончена num = 
// ${num}`)


// //Директива conrinue
// let num = 0;
// for(; num < 5;num++) {
//     if(num !== 2) continue;
//     console.log(num);
// }

// for(; num < 5;num++) {
//     if(num == 2) continue;
//     console.log(num);
// }




//Метки

// firstFor: for ( let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size === 2){
//             break firstFor;
//         }
//     console.log(size);
//     }
// }

// firstFor: for ( let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size === 2){
//             continue firstFor;
//         }
//     console.log(size);
//     }
// }



//ДОМАШКА

// 1. Изучить теорию
// 2. Решить задачи:

//Задача №1
//Вывести в консоль числа от 1 до 5

// //1 способ
// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// //2 способ
// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

// //3 способ
// let num;
// for (let num = 1; num <= 5; num++) {
//     console.log(num);
// }

// //4 способ
// let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// // let numb = [];
// for (let numi of num) {
//     if (numi !== '1' && numi !== '2' && numi !== '3' && numi !== '4' && numi !== '5') continue;
//     // numb.push(numi);
//     console.log(numi);
//     // console.log('Цыфра ' + numi + ' Выведены в консоль');
// }


// let num = 1;
// for (; num < 10; num++) {
//     if (num !== 1 && num !== 2 && num !== 3 && num !== 4 && num !== 5) continue;
//     console.log(num);
// }

// for(; num < 5;num++) {
//     if(num == 2) continue;
//     console.log(num);
// }


// 5 способ
// let num = 1;
// for (; num < 10; num++) {
//     console.log(num);
//     if ( num === 5) break;
// }


// let num = 0;
// for(; num < 5; num++) {
//     console.log(num);
//     if(num == 2) break;
// }

// //Задача №2
// let num = 8;
// while (num) {
// 	//Последний результат 0, верно? // Верно!
// 	console.log(num);
// 	num--;
// }
//Задача №3. Переписать на while
// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }

// let c = 0;
// while (c < 3) {
//     console.log(`Число: ${c}`);
//     c++;
// }
// //Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
// firstFor: for (let num = 0; num < 2; num++) {
// 	//Цикл №2
// 	for (let size = 0; size < 4; size++) {
//         if (size === 2) {
//             continue firstFor;
//         }
// 		console.log(size);
// 	}
// }
// //=======================================================
















// //цикл do-while

// // для простоты примера представим, что в пистолете 5 паторонов
// // вероятность выстрела - 20%
// do {
//     console.log('Нажимаем на курок');
// } while (Math.random() > 0.2);

// console.log('Похоже, вам не повезло');







// //Ключевые слова continue breake

// // колода
// let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];
// //карты в руке
// let hand = [];


// for (let card of cards) {
//     //выполняем только для нечетного индекса
//     if (card !== 'Король' && card !== 'Туз') continue;
//     hand.push(card);
//     console.log('Карта ' + card + ' добавлена в руку');
// }

// console.log('Карты в руке', hand);







// //колода
// let cards = ['2', 'Дама', 'Король', 'Туз', '5', '6', 'Король'];

// console.log('Ищем даму в колоде...')

// let found = false;

// for (let card of cards) {
//     console.log(`Из колоды вытянута карта ${card}`);
//     if (card === 'Дама') {
//         found = true;
//         break;
//     }
// }

// console.log(found ? 'Мы нашли даму!' : 'В колоде нет дам :(');



// let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];
// let hand = [];

// for (const card of cards) {
//     if (card !== 'Дама') continue;
//     hand.push(card);
//     console.log('Карта' + card + 'добавлена в руку');
// }

// console.log('Карта', hand, ' в руке');


// let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];


// let found = false;

// for (const card of cards) {
//     console.log(`Из колоды вытянута карта ${card}`);
//     if (card === 'Король') {
//         found = true;
//         break;
//     }
// }

// console.log(found ? 'Мы нашли Король и Туз!' : 'В колоде нет Ничего :(');




// //цикл for
// let i;

// console.log('Цикл for');

// for (i = 0; i < 11; i += 2) {
//     console.log(i);
// };



// // тоже самое только в цикле while
// console.log('Цикл while');

// //аналогичный цикл while с условием для завершения в теле цикла

// i = 0; // первую часть цикла for мы выносим перед циклом while

// while (true){
//     if (i > 10) break;
//     console.log(i);
//     i += 2;
// }



// let a = [];

// for (i = 0; i < 10; ++i) {
//     a.push(i * i);
// };

// console.log(a);

// //заполнение массива на основе значений доугого масива
// let b = [];

// for (let pow2 of a) {
//     b.push(pow2 / 2);
// };

// console.log(b);





////////////////НЕПОНЯТНО !!!   УРОК 4.7 - 1:50


// //Заполнение пустого массива на основе других данных (длинна масива неизвестна)
// let lines = [];
// let next;
// // while (next = file.nextLine()) {
// //     lines.push(next)
// // };

// // console.log(lines);

// //Обработка значений массива
// for (let line of lines) {
//     console.log('Длинна строки', line.length);
// }

// //Обработка индексов массива
// for (let number in lines) {
//     console.log(`Длинна строки №${number}:${lines[number].length}`);
// }


// //обработка значений и индеков массива в обратном порядке
// console.log(a);

// let aReservd = []; 
// for (let i = a.length - 1; i>=0; --i) {
//     aReservd.push(a[i]);
// }

// console.log(aReservd);


// let num = [];
// for (u = 0; u < 10; ++u) {
//     num.push(u * u);
// };

// console.log(num);


// let numReserv = [];
// for (let u = num.length - 1; u >= 0; --u) {
//     numReserv.push(num[u]);
// }

// console.log(numReserv);



// Сложная логика выхода из ситуации

// let a = 0;
// while (a++ < 1000) {
//     if (crayfishWhistles()) break;
// }     ??????






// // Д/з № 4
// //Генератор случайных чисел
// // Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log.

// let array = [];
// let count = 100;
// let n = 0;
// let m = 100;

// for (let i = 0; i < count; i++) {
//     array.push(Math.round(Math.random() * (m - n) + n));
// }

// console.log(array);






// let hi = '!рим тевирП';


// function reverseString(hello) {
//     let reverse = "";
//     for (let i = hello.length - 1; i >= 0; i--) {
//         reverse += hello[i];
//     }
//     return reverse;
// }

// console.log(reverseString(hi)); //edoc




// // //Функции - function

// function printWeekday() {
//     // 0 - вс, 1 - пн, ...
//     let dayIndex = new Date().getDay();
//     let days = [
//         'воскресенье',
//         'понедельник',
//         'вторник',
//         'среда',
//         'четверг',
//         'пятница',
//         'соббота',
//     ];

//     console.log(`Сегодня ${days[dayIndex]}`);
// }


// printWeekday();





// //объявление функции с названием FunctionName
// function funnctionName() {
//     //тело функции
//     console.log('Вызвана функция');
// }

// // вызов функции
// funnctionName();





// //присваиваем фунцкию переменной, название после function можно опустить
// let functionAsVariable = function () {
//     console.log('Вызвана функция из переменной');
// }

// //для вызова используем название переменной
// functionAsVariable();





// function greet(who = 'Незнакомец') {
//     console.log(`Привет, ${who}`);
// }

// greet();
// greet('Петя');
// greet('Вася');
// greet();
// greet('Маша');







// //Функция с 2мя аргументами
// //при этом 2ой аргумент имеет значение по умолчанию
// function findCard(cards, wantedCard = 'Туз') {
//     console.log('Ищем в колоде карту ' + wantedCard);

//     let found = false;

//     for (let card of cards) {
//         console.log(`Из колоды вытянута карта ${card}`);
//         if (card === wantedCard) {
//             found = true;
//             break;
//         }
//     }
//     console.log(found ? `Мы нашли карту ${wantedCard}!` : `В колоде нет карты ${wantedCard} :(`);
// }

// let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];
// let mгCrrds = ['2', 'Король', 'Тз', '5', '6', 'Король'];

// findCard(myCards);
// findCard(mгCrrds);






// //Вывести индекс полученного значения
// function findCardIndex(cards, wantedCard = 'Туз') {
//     console.log('Ищем в колоде карту ' + wantedCard);

//     let foundIndex = -1;

//     for (let index in cards) {
//         let card = cards[index];
//         console.log(`Из колоды вытянута карта ${card}`);
//         if (card === wantedCard) {
//             foundIndex = index;
//             break;
//         }
//     }
//     console.log(foundIndex > -1 ? `Мы нашли карту ${wantedCard}!` : `В колоде нет карты ${wantedCard} :(`);
    
//     return foundIndex;
// }

// let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

// let aceIndex = findCardIndex(myCards);
// let jackIndex = findCardIndex(myCards, 'Валет');

// // findCardIndex(myCards);
 
// console.log(aceIndex);
// console.log(jackIndex);







let emails = ['mail0@mail.ru', 'mail1@ya.ru', 'mail1@mail.ru'];
let blacklist = ['mail1@ya.ru', 'mail3@ya.ru'];

function filter(mailAdressList, blacklist) {
    let mailAdressValid = [];
  
    for (let mailItem of mailAdressList) {
      if (!blacklist.includes(mailItem)) mailAdressValid.push(mailItem);
    }
    return (mailAdressValid);
}
  
  export default{filter};
  
  