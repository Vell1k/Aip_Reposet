/*ЗАДАНИЕ 105(1)

let test = 15;

if (test > 10) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 105(2)
let test = 5;

if (test < 10) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 105(3)
let test = 10;

if (test >= 10) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 105(4)
let test = 10;

if (test <= 10) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 106
let test = 10;

if (test == 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

ЗАДАНИЕ 107
let test = 10;

if (test != 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

ЗАДАНИЕ 108(1)
let test1 = 1;
let test2 = 2;

if (test1 > test2) {
    console.log('test1 больше');
} else {
    console.log('test2 больше');
}

ЗАДАНИЕ 108(2)
let test1 = 2;
let test2 = 2;

if (test1 == test2) {
    console.log('значения равны');
} else {
    console.log('значения не равны');
}

ЗАДАНИЕ 109
let test1 = 'abc';
let test2 = 'abc';

if (test1 == test2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 110
let test1 = '123';
let test2 = 123;

if (test1 == test2) {
    console.log('значения равны');
} else {
    console.log('значения не равны');
}

ЗАДАНИЕ 111(1)
Ответ: '+++'. 

ЗАДАНИЕ 111(2)
Ответ: '+++'.

ЗАДАНИЕ 111(3)
Ответ: '+++'.

ЗАДАНИЕ 111(4)
Ответ: '---'.

ЗАДАНИЕ 111(5)
Ответ: '+++'.

ЗАДАНИЕ 112(1) 
Ответ: '---'

ЗАДАНИЕ 112(2) 
Ответ: '---'

ЗАДАНИЕ 112(3) 
Ответ: '---'

ЗАДАНИЕ 112(4) 
Ответ: '+++'

ЗАДАНИЕ 112(5)
Ответ: '+++'

ЗАДАНИЕ 113(1)
let num = 3;

if (num > 0 && num < 5) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 113(2)
let num = 15;

if (num >= 10 && num <= 20) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 113(3)
let num1 = 1;
let num2 = 3;

if (num1 <= 1 && num2 >= 3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 114(1) 
Ответ: '---'

ЗАДАНИЕ 114(2) 
Ответ: '+++'

ЗАДАНИЕ 114(3) 
Ответ: '+++'

ЗАДАНИЕ 114(4) 
Ответ: '+++'

ЗАДАНИЕ 114(5) 
Ответ: '+++'

ЗАДАНИЕ 114(6) 
Ответ: '+++'

ЗАДАНИЕ 114(7) 
Ответ: '---'

ЗАДАНИЕ 114(8)
Ответ: '+++'

ЗАДАНИЕ 115
Сначала проверка num > 1 && num < 5, потом num == 0, и в конце между ними ставится ||.

ЗАДАНИЕ 116(1)
if ((num > 5 && num < 10) || num == 20) 

ЗАДАНИЕ 116(2)
if (num > 5 || (num > 0 && num < 3)) 

ЗАДАНИЕ 116(3)
if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) 

ЗАДАНИЕ 117
if (!(num1 >= 0 || num2 <= 10)) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 118(1)
let test = true;

if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 118(2)
let test = false;

if (test === false) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 119(1)
Ответ: Ложными при приведении к логическому типу являются: число 0, пустая строка, значения null, undefined, NaN и false. Все остальные значения дают true.

ЗАДАНИЕ 119(2)
Ответ: '+++'

ЗАДАНИЕ 119(3)
Ответ: '---'

ЗАДАНИЕ 119(4)
Ответ: '---'

ЗАДАНИЕ 119(5)
Ответ: '---'

ЗАДАНИЕ 119(6)
Ответ: '+++'

ЗАДАНИЕ 119(7)
Ответ: '---'

ЗАДАНИЕ 119(8)
Ответ: '---'

ЗАДАНИЕ 120
let test = true;

if (test) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 121(1)
let test = true;

if (!test) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 121(2)
let test = true;

if (!test) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 121(3)
let test = true;

if (test) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 122(1)
Ответ: '+++'

ЗАДАНИЕ 122(2)
Ответ: '+++'

ЗАДАНИЕ 122(3)
Ответ: '---'

ЗАДАНИЕ 122(4)
Ответ: '---'

ЗАДАНИЕ 122(5)
Ответ: '---'

ЗАДАНИЕ 122(6)
Ответ: '---'

ЗАДАНИЕ 122(7)
Ответ: '---'

ЗАДАНИЕ 122(8)
Ответ: '---'

ЗАДАНИЕ 122(9)
Ответ: '+++'

ЗАДАНИЕ 122(10)
Ответ: '+++'

ЗАДАНИЕ 123(1)
let test1 = true;
let test2 = true;

if (test1 && test2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(2)

let test1 = true;
let test2 = true;

if (test1 && !test2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(3)
let test1 = true;
let test2 = true;

if (!test1 && !test2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(4)
let test1 = true;
let test2 = true;

if (test1 && test2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(5)
let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(6)
let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 123(7)
let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 124
let test = 10;

if (test == 10) {
    console.log('yes');
}

ЗАДАНИЕ 125(1)
if (test > 0) console.log('+++'); else console.log('---');

ЗАДАНИЕ 125(2)
if (test > 0) console.log('+++');

ЗАДАНИЕ 127(1)
let day = 15;

if (day >= 1 && day <= 10) {
    console.log('первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('третья декада');
}

ЗАДАНИЕ 127(2)
let day = 15;

if (day >= 1 && day <= 10) {
    console.log('первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('третья декада');
} else {
    console.log('неверное значение переменной day');
}

ЗАДАНИЕ 128
let num = 45;

if (num >= 10 && num <= 99) {
    let str = String(num);
    let sum = Number(str[0]) + Number(str[1]);
    
    if (sum <= 9) {
        console.log('сумма цифр однозначна');
    } else {
        console.log('сумма цифр двузначна');
    }
}

ЗАДАНИЕ 129
let lang = 'ru';

switch (lang) {
    case 'ru':
        console.log('rus');
        break;
    case 'en':
        console.log('eng');
        break;
    case 'de':
        console.log('deu');
        break;
    default:
        console.log('language not supported');
        break;
}

ЗАДАНИЕ 131
let num = 1;
let res;

res = num >= 0 ? '1' : '2';

console.log(res);

ЗАДАНИЕ 132(1)
let a = 2 * (3 - 1);
let b = 6 - 2;

console.log(a == b);

ЗАДАНИЕ 132(2)
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

console.log(a > b);

ЗАДАНИЕ 132(3)
let a = 2 ** 4;
let b = 4 ** 2;

console.log(a != b);

ЗАДАНИЕ 133
let ok = confirm('Вам уже 18 лет?');

if (ok) {
    console.log('Вам пришла пенсия');
} else {
    console.log('Доступ пользователю запрещён.');
}

ЗАДАНИЕ 134
let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

ЗАДАНИЕ 135(1)
let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

ЗАДАНИЕ 135(2)
let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);

ЗАДАНИЕ 135(3)
let age = 17;
let res;

if (age >= 18) {
    if (age <= 23) {
        res = 'от 18 до 23';
    } else {
        res = 'больше 23';
    }
} else {
    res = 'меньше 18';
}

console.log(res);

ЗАДАНИЕ 135(4)
let age = 19;
let res;

if (age >= 18) {
    if (age <= 23) {
        res = 'от 18 до 23';
    } else {
        res = 'больше 23';
    }
} else {
    res = 'меньше 18';
}

console.log(res);

ЗАДАНИЕ 136
let min = 10;

if (min >= 0 && min <= 19) {
    console.log('1 треть');
}

if (min >= 20 && min <= 39) {
    console.log('2 треть');
}

if (min >= 40 && min <= 59) {
    console.log('3 треть');
}

ЗАДАНИЕ 137
let arr = [1, 2, 3];

if (arr.length === 3) {
    console.log(arr[0] + arr[1] + arr[2]);
}

ЗАДАНИЕ 138(1)
let str = 'abcde';

if (str[0] == 'a') {
    console.log('!');
}

ЗАДАНИЕ 138(2)
let str = 'abcdex';

if (str[str.length - 1] == 'x') {
    console.log('!');
}

ЗАДАНИЕ 138(3)
let str = 'abcde';

if (str[0] == 'a' || str[0] == 'b') {
    console.log('!');
}

ЗАДАНИЕ 139(1)
let num = 1230;
let str = String(num);

if (str[str.length - 1] == '0') {
    console.log('!');
}

ЗАДАНИЕ 139(2)
let num = 1234;
let str = String(num);
let last = str[str.length - 1];

if (last == '0' || last == '2' || last == '4' || last == '6' || last == '8') {
    console.log('число чётное');
} else {
    console.log('число нечётное');
}

ЗАДАНИЕ 140(1)
let num = 4;

if (num % 2 == 0) {
    console.log('число чётное');
} else {
    console.log('число нечётное');
}

ЗАДАНИЕ 140(2)
let num = 9;

if (num % 3 == 0) {
    console.log('число делится на 3');
} else {
    console.log('число не делится на 3');
}

// ЗАДАНИЕ 141(1)
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(2)
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(3)
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
    console.log('+++');
} else {
    console.log('---');
}
 ЗАДАНИЕ 141(4)
let num = 123;

if (String(num)[0] === '1') {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(5)
let num = 123;

if (String(num)[0] === '1') {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(6)
let num = 123;

if (String(num)[0] === '1') {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(7)
let num = 123;
let first = String(num)[0];

if (first === '1') {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(8)
let num = 12;

if (String(num).length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(9)
let num = 12;
let str = String(num);

if (str.length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(10)
let num = 12;

if (String(num).length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(11)
let num = 12;

if (String(num).length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(12)
let num = 12;

if (String(num).length === 2) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 141(13)
let num = '123033';

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
    console.log('суммы равны');
} else {
    console.log('суммы не равны');
}

ЗАДАНИЕ 142(1)
let month = 6;

if (month == 12 || month == 1 || month == 2) {
    console.log('зима');
} else if (month >= 3 && month <= 5) {
    console.log('весна');
} else if (month >= 6 && month <= 8) {
    console.log('лето');
} else {
    console.log('осень');
}

ЗАДАНИЕ 142(2)
let str = 'abcde';

if (str[0] == 'a') {
    console.log('первый символ a');
} else {
    console.log('первый символ не a');
}
ЗАДАНИЕ 142(3)
let num = 12345;
let first = String(num)[0];

if (first == '1' || first == '2' || first == '3') {
    console.log('первый символ 1, 2 или 3');
} else {
    console.log('первый символ другой');
}
ЗАДАНИЕ 142(4)
let num = 123;
let str = String(num);

let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);

console.log(sum);
ЗАДАНИЕ 142(5)
let num = 123321;
let str = String(num);

let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sum1 == sum2) {
    console.log('суммы равны');
} else {
    console.log('суммы не равны');
}
*/


