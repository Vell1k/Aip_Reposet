"use strict";
/*ЗАДАНИЕ 10
"use strict";
alert('text!');

ЗАДАНИЕ 13
len num = 123;
alert(num);

ЗАДАНИЕ 14
let a = 4;
let a = 1, b = 4;
let a, b;
a = 3;
b=3;

ЗАДАНИЕ 15
let a;
a = 10;
alert(a);

a = 20;
alert(a);

ЗАДАНИЕ 17
let a = 1 + 2 + 3;
alert(a);

ЗАДАНИЕ 18(1)
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

ЗАДАНИЕ 18(2)
let c = 10;
let d = 5;
let result = c + d;
alert(result);

ЗАДАНИЕ 18(3)
let a = 1;
let b = 2;
let c = 3;
alert(a + b + c);

ЗАДАНИЕ 18(4)
let a = 10;
let b = 5;
let c = b - a;
let d = 7;
let result = c + d;
alert(result);

ЗАДАНИЕ 19(1)
let a = 5 + 5 * 3;
alert(a); Ответ: 20

ЗАДАНИЕ 19(2)
let a = 5 + 5 * 3 + 3;
alert(a); Ответ: 23

ЗАДАНИЕ 19(3)
let a = 8 / 2 + 2;
alert(a); Ответ: 6

ЗАДАНИЕ 19(4)
let a = 8 + 2 / 2;
alert(a); Овтет: 9

ЗАДАНИЕ 20(1)
let a = 8 / 2 * 2;
alert(a); Ответ: 8

ЗАДАНИЕ 20(2)
let a = 8 * 4 / 2 / 2;
alert(a); Ответ: 8

ЗАДАНИЕ 21(1)
let a = (2 + 3) * (2 + 3);
alert(a); Ответ: 25

ЗАДАНИЕ 21(2)
let a = (2 + 3) * 2 + 3;
alert(a); Ответ: 13

ЗАДАНИЕ 21(3)
let a = 2 * (2 + 4 * (3 + 1));
alert(a); Ответ: 36

ЗАДАНИЕ 21(4)
let a = 2 * 8 / 4;
alert(a); Ответ: 4

ЗАДАНИЕ 21(5)
let a = (2 * 8) / 4;
alert(a); Ответ: 4

ЗАДАНИЕ 21(6)
let a = 2 * (8 / 4);
alert(a); Ответ: 4

ЗАДАНИЕ 22
let a = 1.5;
let b = 0.75;
alert(a + b);

ЗАДАНИЕ 23(1)
let a = -100;
alert(a);

ЗАДАНИЕ 23(2)
let a = 5;
alert(-a);

ЗАДАНИЕ 25
let a = 13;
let b = 5;
alert(a % b)

ЗАДАНИЕ 26
alert(2 ** 10)

ЗАДАНИЕ 27(1)
let a = 3 * 2 ** 3;
alert(a); Ответ: 24
ЗАДАНИЕ 27(2)
let a = (3 * 2) ** 3;
alert(a); Ответ: 216

ЗАДАНИЕ 27(3)
let a = 3 * 2 ** (3 + 1);
alert(a); Ответ: 48

ЗАДАНИЕ 27(4)
let a = 2 ** 3 * 3;
alert(a); Ответ: 24

ЗАДАНИЕ 27(5)
let a = 3 * 2 ** 3 * 3;
alert(a); Ответ: 72

ЗАДАНИЕ 28
let name = 'Velilla;
let surname = 'Yagyaev'
alert(name);
alert(surname);

ЗАДАНИЕ 29(1)
let str = '!!!';
alert(str);

ЗАДАНИЕ 29(2)
let str1 = 'java';
let str2 = 'script';
alert(str1 + str2);

ЗАДАНИЕ 29(3)
let str1 = 'hello';
let str2 = 'world';
alert(str1 + ' ' + str2);

ЗАДАНИЕ 30
let str = 'Ariya';
alert(str.length); 

ЗАДАНИЕ 31
let str1 = 'xxx';
let str2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;

ЗАДАНИЕ 32
let str = `a
b
c`;

ЗАДАНИЕ 34
let a;
alert(a); 

ЗАДАНИЕ 35
let a = null;
alert(a);

ЗАДАНИЕ 36(1)
let a = true;
alert(a);

ЗАДАНИЕ 36(2)
let b = false;
alert(b);

ЗАДАНИЕ 37
let str1 = '5';
let str2 = '10';
alert(str1 * str2);

ЗАДАНИЕ 38
alert( 10 / 0);
alert(-10 / 0);

ЗАДАНИЕ 39(1)
let a = 1;
console.log(a);

ЗАДАНИЕ 39(2)
let a = 1;
let b = 10;
console.log(a, b);

ЗАДАНИЕ 40
console.log(123);
console.log('123');
console.log(true);

ЗАДАНИЕ 41
alert(kggkkg);

ЗАДАНИЕ 42
const PI = 3.14;
let radius = 5;
let len = 2 * PI * radius;
alert(len);

ЗАДАНИЕ 43(1)
let a = '5' + '2';
alert(a); Ответ: 52

ЗАДАНИЕ 43(2)
let a = '5' + 2;
alert(a); Ответ: 52

ЗАДАНИЕ 43(3)
let a = 5 + '2';
alert(a); Ответ: 52

ЗАДАНИЕ 43(4)
let a = 5 + 2;
alert(a); Ответ: 7

ЗАДАНИЕ 43(5)
let a = '5' * '2';
alert(a); Ответ: 10

ЗАДАНИЕ 43(6)
let a = '5' - '2';
alert(a); Ответ: 3

ЗАДАНИЕ 43(7)
let a = '5' / '2';
alert(a); Ответ: 2.5

ЗАДАНИЕ 43(8)
let a = '5' % '2';
alert(a); Ответ: 1

ЗАДАНИЕ 43(9)
let a = '5s' * '2';
alert(a); Ответ: NaN

ЗАДАНИЕ 43(10)
let a = '5s' + '2';
alert(a); Ответ: 5s2

ЗАДАНИЕ 43(11)
let a = (-'5') + (-'2');
alert(a); Ответ: -5-2

ЗАДАНИЕ 43(12)
let a = '5' * 1 + '2' * 1;
alert(a); Ответ: 7

ЗАДАНИЕ 43(13)
let a = '5' * '1' + '2' * '1';
alert(a); Ответ: 7

ЗАДАНИЕ 43(14)
let a = '' + 3 + 1;
alert(a); Ответ: 31

ЗАДАНИЕ 44(1)
let a = '10';
let b = '20';
alert(Number(a) + Number(b));
ЗАДАНИЕ 44(2)
alert( Number('2') + Number('3') ); Ответ: 5

ЗАДАНИЕ 44(3)
alert( 2 + Number('3') ); Ответ: 5

ЗАДАНИЕ 44(4)
alert( '2' + Number('3') ); Ответ: 23

ЗАДАНИЕ 45
let a = +'2';
let b = +'3';
alert(a + b);

ЗАДАНИЕ 47(1)
let a = '5px';
let b = '6px';
alert(parseInt(a) + parseInt(b));

ЗАДАНИЕ 47(2)
let a = '5.5px';
let b = '6.25px';
alert(parseFloat(a) + parseFloat(b));

ЗАДАНИЕ 47(3)
let a = '5.5px';
let b = '6.25px';
let sum = parseFloat(a) + parseFloat(b);
alert(sum + 'px');

ЗАДАНИЕ 48
let a = 5;
let b = 10;
alert(String(a) + String(b));

ЗАДАНИЕ 49(1)
let num = 12345;
alert(String(num).length);

ЗАДАНИЕ 49(2)
let num1 = 12345;
let num2 = 678;
let result = String(num1).length + String(num2).length;
alert(result);

ЗАДАНИЕ 50(1)
alert(true + 3); Ответ: 4
ЗАДАНИЕ 50(2)
alert(true + true); Ответ: 2
ЗАДАНИЕ 50(3)
alert(true - true); Ответ: 0
ЗАДАНИЕ 50(4)
alert(true + false); Ответ: 0
ЗАДАНИЕ 50(5)
alert('1' + true); Ответ: 1true
ЗАДАНИЕ 50(6)
alert( String(true) + 1 ); Ответ: true1
ЗАДАНИЕ 50(7)
alert( String(true) + Number(true) ); Ответ: true1

ЗАДАНИЕ 51(1)
true
ЗАДАНИЕ 51(2)
false
ЗАДАНИЕ 51(3)
true
ЗАДАНИЕ 51(4)
false
ЗАДАНИЕ 51(5)
false
ЗАДАНИЕ 51(6)
true
ЗАДАНИЕ 51(7)
false
ЗАДАНИЕ 51(8)
true
ЗАДАНИЕ 51(9)
true
ЗАДАНИЕ 51(10)
false
ЗАДАНИЕ 51(11)
true
ЗАДАНИЕ 51(12)
true
ЗАДАНИЕ 51(13)
false
ЗАДАНИЕ 51(14)
true
ЗАДАНИЕ 51(15)
false
ЗАДАНИЕ 51(16)
true
ЗАДАНИЕ 51(17)
false
ЗАДАНИЕ 51(18)
true
ЗАДАНИЕ 51(19)
false
ЗАДАНИЕ 51(20)
true
ЗАДАНИЕ 51(21)
true

ЗАДАНИЕ 52(1)
let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);

ЗАДАНИЕ 52(2)
let str = 'abcde';
let newStr = str[4] + str[3] + str[2] + str[1] + str[0];
alert(newStr);

ЗАДАНИЕ 52(3)
let str = 'abcde';
let num = 2;
alert(str[num]);

ЗАДАНИЕ 54(1)
let str = 'abcde';
alert(str[str.length - 1]);
ЗАДАНИЕ 54(2)
let str = 'abcde';
alert(str[str.length - 2]);
ЗАДАНИЕ 54(3)
let str = 'abcde';
alert(str[str.length - 3]);

ЗАДАНИЕ 55
let str = '12345';
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);
alert(sum);

ЗАДАНИЕ 56(1)
let num = 12345;
let str = String(num);
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);
alert(sum);

ЗАДАНИЕ 56(2)
let num = 12345;
let str = String(num);
let proizv = str[0] * str[1] * str[2] * str[3] * str[4];
alert(proizv);

ЗАДАНИЕ 56(3)
let num = 12345;
let str = String(num);
let newStr = str[4] + str[3] + str[2] + str[1] + str[0];
alert(newStr);

ЗАДАНИЕ 57(1)
let num = 1;
num = num + 1;
num = num + 1;

alert(num); Ответ: 3

ЗАДАНИЕ 57(2)
let num = 1;
num = num + 2;
num = num + 3;

alert(num); Ответ: 6

ЗАДАНИЕ 58
let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

ЗАДАНИЕ 59
let num = 10;
num++;
num++;
num--;
alert(num);

ЗАДАНИЕ 60(1)
let num = 3;
alert(++num); Ответ: 4

ЗАДАНИЕ 60(2)
let num = 3;
alert(num++); Ответ: 3

ЗАДАНИЕ 60(3)
let num = 3;
alert(--num); Ответ: 2

ЗАДАНИЕ 60(4)
let num = 3;
alert(num--); Ответ: 3

ЗАДАНИЕ 60(5)
let num1 = 3;
let num2 = ++num1;
alert(num1);
alert(num2); Ответ:  4,  4

ЗАДАНИЕ 60(6)
let num1 = 3;
let num2 = num1++;
alert(num1);
alert(num2); Ответ: 4,  3

ЗАДАНИЕ 60(7)
let num1 = 3;
let num2 = --num1;
alert(num1);
alert(num2); Ответ: 2,  2

ЗАДАНИЕ 60(8)
let num1 = 3;
let num2 = num1--;
alert(num1);
alert(num2); Ответ: 2,  3

ЗАДАНИЕ 60(9)
let num1 = 3;
num1++;
let num2 = num1--;
alert(num1++);
alert(--num2); Ответ: 4,  1

ЗАДАНИЕ 61(1)
alert(0.1 * 0.2);
Выведется: 0.020000000000000004
ЗАДАНИЕ 61(2)
alert(0.3 - 0.1);
0.19999999999999998

ЗАДАНИЕ 62
let age = prompt('Введите возраст:');
alert(age);

ЗАДАНИЕ 63(1)
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
alert(Number(num1) + Number(num2));

ЗАДАНИЕ 63(2)
let side = prompt('Введите сторону квадрата');
let area = Number(side) * Number(side);
alert(area);

ЗАДАНИЕ 63(3)
let side1 = prompt('Введите первую сторону прямоугольника');
let side2 = prompt('Введите вторую сторону прямоугольника');
let perimeter = 2 * (Number(side1) + Number(side2));
alert(perimeter);

ЗАДАНИЕ 64(1)
document.write('Спят усталые игрушки');
ЗАДАНИЕ 64(2)
document.write('<i>Книжки спят</i>');
ЗАДАНИЕ 64(3)
let str = 'text';
document.write('<i>' + str + '</i>');
ЗАДАНИЕ 64(4)
for (let i = 1; i <= 5; i++) {
    document.write(i + '<br>');
}

ЗАДАНИЕ 65(1)
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2));

ЗАДАНИЕ 65(2)
let a = 1;
let b = 2;
let c = 3;
console.log(a + b + c);

ЗАДАНИЕ 65(3)
let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

ЗАДАНИЕ 65(4)
let num = 123;
let str = String(num);
console.log(str[0]);

ЗАДАНИЕ 65(5)
let a = 0;
console.log(++a);

ЗАДАНИЕ 65(6)
let num = 123;
let str = String(num);
console.log(str.length);

ЗАДАНИЕ 65(7)
let a = 24 * 60 * 60;
console.log(a);

ЗАДАНИЕ 65(8)
let num = 123;
let str = String(num);
console.log(str.length);

ЗАДАНИЕ 65(9)
let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

ЗАДАНИЕ 65(10)
Ошибок нет

ЗАДАНИЕ 65(11)
let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

ЗАДАНИЕ 65(12)
let a = '123';
let b = '456';
let s = Number(a) + Number(b);
console.log(s);

ЗАДАНИЕ 66(1)
alert(24 * 60 * 60);
ЗАДАНИЕ 66(2)
alert(30 * 24 * 60 * 60);
ЗАДАНИЕ 66(3)
alert(365 * 24 * 60 * 60);
ЗАДАНИЕ 66(4)
alert(24 * 60);
ЗАДАНИЕ 66(5)
alert(365 * 24 * 60);
ЗАДАНИЕ 66(6)
alert(1024 * 1024);
ЗАДАНИЕ 66(7)
alert(1024 * 1024 * 1024);
ЗАДАНИЕ 66(8)
alert(10 * 1024 * 1024 * 1024);
ЗАДАНИЕ 66(9)
alert(1024 * 1024 * 1024 * 1024);
ЗАДАНИЕ 66(10)
alert(1024 * 1024 * 1024);

ЗАДАНИЕ 67(1)
let r = 5;
let s = Math.PI * r * r;
alert(s);
ЗАДАНИЕ 67(2)
let a = 5;
let s = a * a;
alert(s);
ЗАДАНИЕ 67(3)
let a = 5;
let b = 10;
let s = a * b;
alert(s);
ЗАДАНИЕ 67(4)
let a = 5;
let b = 10;
let p = 2 * (a + b);
alert(p);
ЗАДАНИЕ 67(5)
let tc = 25;
let tf = tc * 9 / 5 + 32;
alert(tf);
ЗАДАНИЕ 67(6)
let tf = 77;
let tc = (tf - 32) * 5 / 9;
alert(tc);
*/
let a = 0;
console.log(++a);