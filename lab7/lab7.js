/* 
ЗАДАНИЕ 144
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    console.log(elem);
}

ЗАДАНИЕ 145(1)
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    console.log(key);
}

ЗАДАНИЕ 145(2)
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    console.log(obj[key]);
}

ЗАДАНИЕ 146(1)
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

ЗАДАНИЕ 146(2)
let i = 11;

while (i <= 33) {
    console.log(i);
    i++;
}

ЗАДАНИЕ 146(3)
let i = 100;

while (i >= 1) {
    console.log(i);
    i--;
}

ЗАДАНИЕ 146(4)
let num = 1;
let count = 0;

while (num <= 1000) {
    num = num * 3;
    count++;
}

console.log(num);
console.log(count);

ЗАДАНИЕ 147(1)
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

ЗАДАНИЕ 147(2)
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

ЗАДАНИЕ 147(3)
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

ЗАДАНИЕ 147(4)
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

ЗАДАНИЕ 147(5)
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

ЗАДАНИЕ 148(1)
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
}

ЗАДАНИЕ 148(2)
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}

ЗАДАНИЕ 148(3)
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

ЗАДАНИЕ 148(4)
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

ЗАДАНИЕ 149(1)
let arr = [2, 5, 9, 15, 1, 4];

for (let elem of arr) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}

ЗАДАНИЕ 149(2)
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
    if (obj[key] % 2 !== 0) {
        console.log(obj[key]);
    }
}

ЗАДАНИЕ 150(1)
let res = 0;

for (let i = 2; i <= 100; i += 2) {
    res += i;
}

console.log(res);

ЗАДАНИЕ 150(2)
let res = 0;

for (let i = 1; i <= 99; i += 2) {
    res += i;
}

console.log(res);

ЗАДАНИЕ 150(3)
let res = 1;

for (let i = 1; i <= 20; i++) {
    res *= i;
}

console.log(res);

ЗАДАНИЕ 151(1)
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res += elem;
}

console.log(res);

ЗАДАНИЕ 151(2)
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    if (elem % 2 === 0) {
        res += elem;
    }
}

console.log(res);

ЗАДАНИЕ 151(3)
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res += elem ** 2;
}

console.log(res);

ЗАДАНИЕ 151(4)
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;

for (let elem of arr) {
    res *= elem;
}

console.log(res);

ЗАДАНИЕ 152(1)
let str = '';

for (let i = 1; i <= 5; i++) {
    str += '-';
}

console.log(str);

ЗАДАНИЕ 152(2)
let str = '';

for (let i = 1; i <= 9; i++) {
    str += i;
}

console.log(str);

ЗАДАНИЕ 152(3)
let str = '';

for (let i = 9; i >= 1; i--) {
    str += i;
}

console.log(str);

ЗАДАНИЕ 152(4)
let str = '-';

for (let i = 1; i <= 9; i++) {
    str += i + '-';
}

console.log(str);

ЗАДАНИЕ 153(1)
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}

ЗАДАНИЕ 153(2)
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    console.log(sum);
}

ЗАДАНИЕ 153(3)
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str[0] === '1') {
        console.log(i);
    }
}

ЗАДАНИЕ 153(4)
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    if (sum === 5) {
        console.log(i);
    }
}
   
ЗАДАНИЕ 154
let arr = [1, 2, 3, 4, 5];

for (let elem of arr)
    console.log(elem);

ЗАДАНИЕ 155
Ответ: Выведется ошибка. Из-за точки с запятой после закрывающей скобки цикла for образовался бесконечный цикл без тела. Браузер зависнет и выдаст ошибку переполнения стека (или превышения лимита времени), а console.log никогда не выполнится.

ЗАДАНИЕ 156(1)
let arr = [1, 2, 3, 0, 4, 5];

for (let elem of arr) {
    if (elem === 0) {
        break;
    }
    console.log(elem);
}

ЗАДАНИЕ 156(2)
let arr = [1, 2, 3, 4, -5, 6];
let sum = 0;

for (let elem of arr) {
    if (elem < 0) {
        break;
    }
    sum += elem;
}

console.log(sum);

ЗАДАНИЕ 156(3)
let arr = [1, 2, 3, 4, 5];
let position;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        position = i;
        break;
    }
}

console.log(position);

ЗАДАНИЕ 156(4)
let sum = 0;
let count = 0;
let i = 1;

while (sum <= 100) {
    sum += i;
    count++;
    i++;
}

console.log(count);

ЗАДАНИЕ 157
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

ЗАДАНИЕ 158(1)
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
}

ЗАДАНИЕ 158(2)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i + '' + j + ' ');
    }
}

ЗАДАНИЕ 161(1)
let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

ЗАДАНИЕ 161(2)
let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push('x');
}

console.log(arr);

ЗАДАНИЕ 161(3)
let arr = [1, -2, 3, -4, 5];
let newArr = [];

for (let elem of arr) {
    if (elem > 0) {
        newArr.push(elem);
    }
}

console.log(newArr);

ЗАДАНИЕ 162(1)
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}

console.log(arr);

ЗАДАНИЕ 162(2)
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i]--;
}

console.log(arr);

ЗАДАНИЕ 162(3)
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}

console.log(arr);

ЗАДАНИЕ 163(1)
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}

console.log(obj);

ЗАДАНИЕ 163(2)
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj) {
    if (obj[key] % 2 === 0) {
        newObj[key] = obj[key];
    }
}

console.log(newObj);

ЗАДАНИЕ 163(3)
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj) {
    newObj[obj[key]] = key;
}

console.log(newObj);

ЗАДАНИЕ 164(1)
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}

console.log(obj);

ЗАДАНИЕ 164(2)
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] + 1;
}

console.log(obj);

ЗАДАНИЕ 165(1)
let arr = ['a', 'b', 'c', 'd', 'e'];

if (arr.includes('c')) {
    console.log('+++');
} else {
    console.log('---');
}

ЗАДАНИЕ 165(2)
let num = 7;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log('простое число');
} else {
    console.log('составное число');
}

ЗАДАНИЕ 166
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
    let str = String(elem);
    if (str[0] === '1' || str[0] === '2') {
        sum += elem;
    }
}

console.log(sum);

ЗАДАНИЕ 167
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let key in obj) {
    let elem = String(obj[key]);
    if (elem[0] === '1' || elem[0] === '2') {
        sum += obj[key];
    }
}

console.log(sum);

ЗАДАНИЕ 168(1)
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

ЗАДАНИЕ 168(2)
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

ЗАДАНИЕ 168(3)
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

ЗАДАНИЕ 168(4)
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

ЗАДАНИЕ 168(5)
let res = 0;
for (let i = 1; i <= 10; i++) {
    res += i;
}
console.log(res);

ЗАДАНИЕ 168(6)
let res2 = 1;
for (let i = 1; i <= 10; i++) {
    res2 *= i;
}
console.log(res2);

ЗАДАНИЕ 168(7)
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    sum += Number(elem);
}
console.log(sum);

ЗАДАНИЕ 168(8)
let sum2 = 0;
for (let elem of arr) {
    sum2 += +elem;
}
console.log(sum2);

ЗАДАНИЕ 168(9)
let sum3 = 0;
for (let elem of arr) {
    sum3 += +elem;
}
console.log(sum3);

ЗАДАНИЕ 168(10)
let sum4 = 0;
for (let i = 0; i < arr.length; i++) {
    sum4 += +arr[i];
}
console.log(sum4);

ЗАДАНИЕ 168(11)
let sum5 = 0;
for (let i = 0; i < arr.length; i++) {
    sum5 += +arr[i];
}
console.log(sum5);

ЗАДАНИЕ 168(12)
let sum6 = 0;
for (let i = 0; i < arr.length; i++) {
    sum6 += +arr[i];
}
console.log(sum6);

ЗАДАНИЕ 168(13)
let arr13 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr13.length; i++) {
    arr13[i] = arr13[i] ** 2;
}
console.log(arr13);

ЗАДАНИЕ 168(14)
let arr14 = [];
for (let i = 1; i <= 5; i++) {
    arr14.push(i);
}
console.log(arr14);

ЗАДАНИЕ 168(15)
let obj = {a: 1, b: 2, c: 3};
let sum15 = 0;
for (let key in obj) {
    sum15 += obj[key];
}
console.log(sum15);

ЗАДАНИЕ 168(16)
let sum16 = 0;
for (let key in obj) {
    sum16 += obj[key];
}
console.log(sum16);

ЗАДАНИЕ 168(17)
let arr17 = [1, 2, 3, 4, 5];
let res17 = '---';
for (let elem of arr17) {
    if (elem === 3) {
        res17 = '+++';
        break;
    }
}
console.log(res17);

ЗАДАНИЕ 168(18)
let arr18 = [];
for (let i = 1; i <= 5; i++) {
    arr18.push(i);
}
console.log(arr18);

ЗАДАНИЕ 168(19)
let arr19 = [1, 2, 3, 4, 5];
let res19 = false;
for (let elem of arr19) {
    if (elem === 3) {
        res19 = true;
        break;
    }
}
console.log(res19);

ЗАДАНИЕ 168(20)
let arr20 = [1, 2, 3, 4, 5];
for (let elem of arr20) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}

ЗАДАНИЕ 168(21)
let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res21 = [];
for (let elem of arr21) {
    if (elem % 2 !== 0) {
        res21.push(elem);
    }
}
console.log(res21);

ЗАДАНИЕ 169(1)
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

ЗАДАНИЕ 169(2)
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

ЗАДАНИЕ 169(3)
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

ЗАДАНИЕ 169(4)
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push('x');
}
console.log(arr4);

ЗАДАНИЕ 169(5)
let arr5 = [];
for (let i = 1; i <= 10; i++) {
    arr5.push(i);
}
console.log(arr5);

ЗАДАНИЕ 169(6)
let arr6 = [5, 12, 3, 8, 15, -2];
for (let elem of arr6) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}

ЗАДАНИЕ 169(7)
let arr7 = [1, 2, 3, 4, 5];
let hasFive = false;
for (let elem of arr7) {
    if (elem === 5) {
        hasFive = true;
        break;
    }
}
console.log(hasFive);

ЗАДАНИЕ 169(8)
let arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;
for (let elem of arr8) {
    sum8 += elem;
}
console.log(sum8);

ЗАДАНИЕ 169(9)
let arr9 = [1, 2, 3, 4, 5];
let sum9 = 0;
for (let elem of arr9) {
    sum9 += elem ** 2;
}
console.log(sum9);

ЗАДАНИЕ 169(10)
let arr10 = [1, 2, 3, 4, 5];
let sum10 = 0;
for (let elem of arr10) {
    sum10 += elem;
}
let avg = sum10 / arr10.length;
console.log(avg);

// ЗАДАНИЕ 169(11)
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

// ЗАДАНИЕ 169(12)
let arr12 = [];
for (let i = 10; i >= 1; i--) {
    arr12.push(i);
}
console.log(arr12);

// ЗАДАНИЕ 169(13)
let arr13 = [-5, 10, -3, 8, -1];
let sum13 = 0;
for (let elem of arr13) {
    if (elem > 0) {
        sum13 += elem;
    }
}
console.log(sum13);

ЗАДАНИЕ 169(14)
let arr14 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr14) {
    let str = String(elem);
    if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        console.log(elem);
    }
}

ЗАДАНИЕ 169(15)
let arr15 = [1, 2, 3, 4, 5];
for (let i = arr15.length - 1; i >= 0; i--) {
    console.log(arr15[i]);
}

ЗАДАНИЕ 169(16)
let arr16 = [5, 1, 3, 2, 7];
for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] === i) {
        console.log(arr16[i]);
    }
}

ЗАДАНИЕ 169(17)
let arr17 = [1, 2, 3, 4, 5];
for (let elem of arr17) {
    document.write(elem + '<br>');
}

ЗАДАНИЕ 169(18)
let arr18 = [1, 2, 3, 4, 5];
for (let elem of arr18) {
    document.write('<p>' + elem + '</p>');
}

ЗАДАНИЕ 169(19)
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < days.length; i++) {
    if (i === 5 || i === 6) {
        document.write('<b>' + days[i] + '</b><br>');
    } else {
        document.write(days[i] + '<br>');
    }
}

ЗАДАНИЕ 169(20)
let days20 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 2;
for (let i = 0; i < days20.length; i++) {
    if (i === day) {
        document.write('<i>' + days20[i] + '</i><br>');
    } else {
        document.write(days20[i] + '<br>');
    }
}

ЗАДАНИЕ 169(21)
let obj21 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700
};
for (let key in obj21) {
    obj21[key] = obj21[key] + obj21[key] * 0.1;
}
console.log(obj21);

ЗАДАНИЕ 169(22)
let obj22 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700
};
for (let key in obj22) {
    if (obj22[key] <= 400) {
        obj22[key] = obj22[key] + obj22[key] * 0.1;
    }
}
console.log(obj22);

ЗАДАНИЕ 169(23)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj23 = {};
for (let i = 0; i < arr1.length; i++) {
    obj23[arr1[i]] = arr2[i];
}
console.log(obj23);

ЗАДАНИЕ 169(24)
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;
for (let key in obj24) {
    sumKeys += Number(key);
    sumValues += obj24[key];
}
console.log(sumKeys / sumValues);

ЗАДАНИЕ 169(25)
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysArr = [];
let valuesArr = [];
for (let key in obj25) {
    keysArr.push(key);
    valuesArr.push(obj25[key]);
}
console.log(keysArr);
console.log(valuesArr);

ЗАДАНИЕ 169(26)
let obj26 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452
};
let res26 = [];
for (let key in obj26) {
    let str = String(obj26[key]);
    if (str[0] === '1' || str[0] === '2') {
        res26.push(obj26[key]);
    }
}
console.log(res26);

ЗАДАНИЕ 169(27)
let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {};
for (let i = 0; i < arr27.length; i++) {
    obj27[i + 1] = arr27[i];
}
console.log(obj27);

ЗАДАНИЕ 169(28)
let arr28 = ['a', 'b', 'c', 'd', 'e'];
let obj28 = {};
for (let i = 0; i < arr28.length; i++) {
    obj28[arr28[i]] = i + 1;
}
console.log(obj28);
*/
