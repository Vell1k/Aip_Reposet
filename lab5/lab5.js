"use strict";
/* Блок "Объекты"


ЗАДАНИЕ 80
let obj = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj[4]);
console.log(obj[5]);
console.log(obj[6]);
console.log(obj[7]);

ЗАДАНИЕ 81
let months = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
};

console.log(months);

ЗАДАНИЕ 82
let user = {name: 'Иван', surname: 'Иванов', patronymic: 'Иванович'};
alert(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);

ЗАДАНИЕ 83
let date = {year: 2026, month: 10, day: 6};
alert(date.year + '-' + date.month + '-' + date.day);

ЗАДАНИЕ 84(1)
let obj = {
	'1a': 1,  кавычки обязательны
	'b2': 2,  кавычки не обязательны
	'c-c': 3, кавычки обязательны
	'd 4': 4, кавычки обязательны
	'e5': 5   кавычки не обязательны
};
ЗАДАНИЕ 84(2)
let obj = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};
console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);

ЗАДАНИЕ 85
let obj = {x: 1, y: 2, z: 3};

obj.x = obj.x ** 2;
obj.y = obj.y ** 2;
obj.z = obj.z ** 2;

console.log(obj);

ЗАДАНИЕ 86
let obj = {};

obj.a = 1;
obj.b = 2;
obj.c = 3;

console.log(obj);

ЗАДАНИЕ 87
let obj1 = {1: 'a', 2: 'b', 3: 'c'};
let obj2 = {3: 'c', 1: 'a', 2: 'b'};

console.log(obj1[1], obj1[2], obj1[3]);
console.log(obj2[1], obj2[2], obj2[3]);

ЗАДАНИЕ 88
let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);

ЗАДАНИЕ 89
let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

ЗАДАНИЕ 90
let obj = {x: 1, y: 2, z: 3};
let key = 'y';
console.log(obj[key]);

ЗАДАНИЕ 91(1)
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

ЗАДАНИЕ 91(2)
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

ЗАДАНИЕ 92(1)
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

ЗАДАНИЕ 92(2)
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

ЗАДАНИЕ 93(1)
let key = 'x';

let obj = {
	[key]: 1,
	y: 2,
	z: 3
};
ЗАДАНИЕ 93(2)
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};

ЗАДАНИЕ 94
Выведется true, затем false. Ключ x есть в объекте, поэтому первая проверка даёт true, а ключа w в объекте нет, поэтому вторая проверка даёт false

ЗАДАНИЕ 95
Выведется false. Оператор delete удаляет свойство x из объекта, поэтому проверка 'x' in obj после удаления покажет, что такого ключа больше нет

ЗАДАНИЕ 96(1)
Выведется 'object'. Объект всегда имеет тип object

ЗАДАНИЕ 96(2)
Выведется 'object'. Пустой массив тоже является объектом

ЗАДАНИЕ 96(3)
Выведется 'object'. Переменная obj содержит объект

ЗАДАНИЕ 96(4)
Выведется 'number'. obj['x'] возвращает значение 1, а тип числа — number


ЗАДАНИЕ 97(1)
Выведется object. Объект всегда имеет тип object

ЗАДАНИЕ 97(2)
Выведется object. Массив в JavaScript также является объектом

ЗАДАНИЕ 97(3)
Выведется object. Переменная arr содержит массив, а тип массива - object

ЗАДАНИЕ 97(4)
Выведется number. arr[0] возвращает число 1, а тип числа - number

ЗАДАНИЕ 97(5)
Выведется string. В этом массиве элементы записаны в кавычках, поэтому arr[0] — это строка '1', а её тип — string

ЗАДАНИЕ 98(1)
Выведется true. Функция Array.isArray проверяет, является ли переданное значение массивом, а [1, 2, 3] — это массив.

ЗАДАНИЕ 98(2)
Выведется false. {x: 1, y: 2, z: 3} — это объект, а не массив, поэтому проверка даёт false.

ЗАДАНИЕ 99(1)
let test = {x: 1, y: 2, z: 3};
console.log(test);

Выведется объект {x: 1, y: 2, z: 3}. Это объект

ЗАДАНИЕ 99(2)
let test = {x: 1, y: 2, z: 3};
console.log(test.x);

Выведется число 1. Это примитив

ЗАДАНИЕ 99(3)
let test = [1, 2, 3];
console.log(test);

Выведется массив [1, 2, 3]. Это объект

ЗАДАНИЕ 99(4)
let test = [1, 2, 3];
console.log(test[1]);

Выведется число 2. Это примитив

ЗАДАНИЕ 99(5)
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1);

Выведется массив [1, 2, 3]. Это объект

ЗАДАНИЕ 99(6)
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1[test2]);

Выведется число 2. Это примитив

ЗАДАНИЕ 99(7)
string, number, boolean, null, undefined, symbol

ЗАДАНИЕ 100(1)
Выведется ['a', 2, 3]. Переменные arr1 и arr2 ссылаются на один и тот же массив, поэтому изменение arr1[0] отражается и в arr2

ЗАДАНИЕ 100(2)
Выведется ['a', 'b', 3]. Изменения arr1[0] и arr2[1] применяются к одному и тому же массиву, поэтому в arr1 видны оба изменения

ЗАДАНИЕ 100(3)
Выведется ['b', 2, 3]. Сначала arr1[0] меняется на 'a', затем arr2[0] (тот же элемент) меняется на 'b'. В arr2 хранится итоговое значение 'b'

ЗАДАНИЕ 101(1)
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr);

Выведется ['a', '!', 'c']. Константа запрещает переприсваивать саму переменную, но изменять элементы массива по индексу можно

ЗАДАНИЕ 101(2)
const arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr);

Выведется ошибка. Попытка присвоить переменной arr новый массив вызывает TypeError, так как нельзя переприсваивать константу

ЗАДАНИЕ 101(3)
const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr);

Выведется ['a', 'b', 'c']. Присваивание нового массива константе arr вызывает ошибку, поэтому исходный массив остаётся без изменений

ЗАДАНИЕ 102
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
const res = arr1[1] + arr2[2];
console.log(res);

ЗАДАНИЕ 103(1)
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

ЗАДАНИЕ 103(2)
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

ЗАДАНИЕ 103(3)
let obj = {x: 1, y: 2, z: 3};
let sum = obj['x'] + obj['y'] + obj['z'];
console.log(sum);

ЗАДАНИЕ 103(4)
let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

*/