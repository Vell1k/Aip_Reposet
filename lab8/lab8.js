/*
ЗАДАНИЕ 170(1)
let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];

console.log(arr[2][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

ЗАДАНИЕ 170(2)
let arr = [[1, 2], [3, 4], [5, 6]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}

console.log(sum);

ЗАДАНИЕ 171
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}

console.log(sum);

ЗАДАНИЕ 172
let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];

console.log(sum);

ЗАДАНИЕ 173(1)
let arr = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}

console.log(sum);

ЗАДАНИЕ 173(2)
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

for (let subArr1 of arr) {
  for (let subArr2 of subArr1) {
    for (let elem of subArr2) {
      sum += elem;
    }
  }
}

console.log(sum);

ЗАДАНИЕ 174(1)
let arr = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}

console.log(sum);

ЗАДАНИЕ 174(2)
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}

console.log(sum);

ЗАДАНИЕ 175(1)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i].push(j + 1);
  }
}

console.log(arr);

ЗАДАНИЕ 175(2)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {
    arr[i].push('x');
  }
}

console.log(arr);

ЗАДАНИЕ 175(3)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let k = 0; k < 5; k++) {
      arr[i][j].push(k + 1);
    }
  }
}

console.log(arr);

ЗАДАНИЕ 176(1)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = []; // Создаем подмассив
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

ЗАДАНИЕ 176(2)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = []; // Создаем массив, а не строку
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

ЗАДАНИЕ 176(3)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = []; // Присваиваем пустой массив
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

ЗАДАНИЕ 176(4)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = []; // Используем i
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

ЗАДАНИЕ 176(5)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = []; // Создаем подмассив по индексу, не трогая весь массив arr
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

ЗАДАНИЕ 176(6)
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j); // Добавляем элементы во вложенный массив
  }
}

console.log(arr);

ЗАДАНИЕ 177(1)
let arr = [];
let k = 1;

for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i].push(k++);
  }
}

console.log(arr);

ЗАДАНИЕ 177(2)
let arr = [];
let k = 2;

for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i].push(k);
    k += 2;
  }
}

console.log(arr);

ЗАДАНИЕ 177(3)
let arr = [];
let k = 1;

for (let i = 0; i < 2; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let l = 0; l < 2; l++) {
      arr[i][j].push(k++);
    }
  }
}

console.log(arr);

ЗАДАНИЕ 177(4)
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(5)
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(6)
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(7)
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(8)
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(9)
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(10)
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(11)
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(12)
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 177(13)
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

ЗАДАНИЕ 178(1)
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sum = obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + 
          obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + 
          obj.key3.key1 + obj.key3.key2 + obj.key3.key3;

console.log(sum);

ЗАДАНИЕ 178(2)
let obj = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
};

console.log(obj[2][2]);
console.log(obj[3][1]);

ЗАДАНИЕ 178(3)
let obj = {
  key1: {
    a: 1, b: 2, c: {
      d: 3,
      e: 4,
    }, f: 5,
  },
  key2: {
    g: 6, h: 7,
  },
};

let sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h;

console.log(sum);

ЗАДАНИЕ 179(1)
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  }
};

let sum = 0;

for (let key in obj) {
  let subObj = obj[key];
  for (let subKey in subObj) {
    sum += subObj[subKey];
  }
}

console.log(sum);

ЗАДАНИЕ 179(2)
let obj = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  }
};

let sum = 0;

for (let key1 in obj) {
  let subObj1 = obj[key1];
  for (let key2 in subObj1) {
    let subObj2 = subObj1[key2];
    for (let key3 in subObj2) {
      sum += subObj2[key3];
    }
  }
}

console.log(sum);

ЗАДАНИЕ 180
let students = {
  'group1': ['name11', 'name12', 'name13'],
  'group2': ['name21', 'name22', 'name23'],
  'group3': ['name31', 'name32', 'name33'],
};

console.log(students['group3'][0]);

ЗАДАНИЕ 181(1)
let data = {
  1: [
    'data11',
    'data12',
    'data13',
  ],
  2: [
    'data21',
    'data22',
    'data23',
  ],
  3: [
    'data31',
    'data32',
    'data33',
  ],
  4: [
    'data41',
    'data42',
    'data43',
  ],
};

for (let key in data) {
  for (let elem of data[key]) {
    console.log(elem);
  }
}

ЗАДАНИЕ 181(2)
let data = [
  {
    1: 'data11',
    2: 'data12',
    3: 'data13',
  },
  {
    1: 'data21',
    2: 'data22',
    3: 'data33',
  },
  {
    1: 'data31',
    2: 'data32',
    3: 'data33',
  },
];

for (let obj of data) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

ЗАДАНИЕ 181(3)
let data = [
  {
    1: [
      'data111',
      'data112',
      'data113',
    ],
    2: [
      'data121',
      'data122',
      'data123',
    ],
  },
  {
    1: [
      'data211',
      'data212',
      'data213',
    ],
    2: [
      'data221',
      'data222',
      'data223',
    ],
  },
  {
    1: [
      'data411',
      'data412',
      'data413',
    ],
    2: [
      'data421',
      'data422',
      'data423',
    ],
  },
];

for (let obj of data) {
  for (let key in obj) {
    for (let elem of obj[key]) {
      console.log(elem);
    }
  }
}

ЗАДАНИЕ 182(1)
let employees = [
  { name: 'name1', salary: 300 },
  { name: 'name2', salary: 400 },
  { name: 'name3', salary: 500 },
];

employees.forEach(function(employee) {
  console.log(employee.name + ' - ' + employee.salary);
});

ЗАДАНИЕ 182(2)
let employees = [
  { name: 'name1', salary: 300 },
  { name: 'name2', salary: 400 },
  { name: 'name3', salary: 500 },
];

let total = 0;
for (let employee of employees) {
  total += employee.salary;
}
console.log(total);

ЗАДАНИЕ 182(3)
let employees = [
  { name: 'name1', salary: 300, age: 28 },
  { name: 'name2', salary: 400, age: 29 },
  { name: 'name3', salary: 500, age: 30 },
  { name: 'name4', salary: 600, age: 31 },
  { name: 'name5', salary: 700, age: 32 },
];

let total = 0;
for (let employee of employees) {
  if (employee.age >= 30) {
    total += employee.salary;
  }
}
console.log(total);

ЗАДАНИЕ 183(1)
let affairs = {
  '2018': {
    11: { 29: ['name111', 'name112', 'name113'], 30: ['name121', 'name122', 'name123'] },
    12: { 30: ['name211', 'name212', 'name213'], 31: ['name221', 'name222', 'name223'] }
  },
  '2019': {
    12: { 29: ['name311', 'name312', 'name313'], 30: ['name321', 'name322', 'name323'], 31: ['name331', 'name332', 'name333'] }
  }
};

let year = '2019';
let month = 12;
let day = 31;

console.log(affairs[year][month][day]);

ЗАДАНИЕ 183(2)
let obj = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' }
};

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]);

ЗАДАНИЕ 183(3)
let obj = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' }
};

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]);

ЗАДАНИЕ 183(4)
let obj = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' }
};

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]);

ЗАДАНИЕ 183(5)
let obj = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' }
};

let key1 = 'key2';
let key2 = 'key4';

console.log(obj[key1][key2]);

ЗАДАНИЕ 184
let employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  }
];

employees.push({
  name: 'name4',
  salary: 600,
  age: 31
});

ЗАДАНИЕ 185(1)
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs['2019-12-29'].push('data24');

ЗАДАНИЕ 185(2)
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs['2019-12-29'].push('data24');

ЗАДАНИЕ 185(3)
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41', 'data42');

ЗАДАНИЕ 185(4)
let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

ЗАДАНИЕ 185(5)
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  }
};

students['group1']['subgroup11'].push('student114');

ЗАДАНИЕ 185(6)
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  }
};

students['group1']['subgroup13'] = [];

ЗАДАНИЕ 185(7)
let students = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  }
};

students['group4'] = {};
students['group4']['subgroup41'] = [];
students['group4']['subgroup41'].push('student411', 'student412');


ЗАДАНИЕ 186(1)
let result = Math.pow(2, 10);
console.log(result); 

ЗАДАНИЕ 186(2)
let result = Math.sqrt(245);
console.log(result);

ЗАДАНИЕ 186(3)
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3); 
}

let result = Math.sqrt(sum);
console.log(result);

ЗАДАНИЕ 187(1)
let num = Math.sqrt(379);

console.log(Math.round(num)); 
console.log(num.toFixed(1)); 
console.log(num.toFixed(2)); 

ЗАДАНИЕ 187(2)
let num = Math.sqrt(587);

let result = {
  'floor': Math.floor(num),
  'ceil': Math.ceil(num)
};

console.log(result); 

ЗАДАНИЕ 188
let min = Math.min(4, -2, 5, 19, -130, 0, 10);
let max = Math.max(4, -2, 5, 19, -130, 0, 10);

console.log(min);
console.log(max);

ЗАДАНИЕ 189(1)
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

ЗАДАНИЕ 189(2)
let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

console.log(arr);

ЗАДАНИЕ 190
let a = 10;
let b = 4;

let result = Math.abs(a - b);
console.log(result);

ЗАДАНИЕ 191(1)
let str = 'js';
console.log(str.toUpperCase());

ЗАДАНИЕ 191(2)
let str = 'JS';
console.log(str.toLowerCase());

ЗАДАНИЕ 192
let str = 'i study javascript';

let word1_substr = str.substr(2, 5);
let word1_substring = str.substring(2, 7);
let word1_slice = str.slice(2, 7);

let word2_substr = str.substr(8, 10);
let word2_substring = str.substring(8, 18);
let word2_slice = str.slice(8, 18);

console.log('Метод substr: ', word1_substr, word2_substr);
console.log('Метод substring: ', word1_substring, word2_substring);
console.log('Метод slice: ', word1_slice, word2_slice);

ЗАДАНИЕ 193(1)
let str = 'http://rock.com';
console.log(str.startsWith('http://'));

ЗАДАНИЕ 193(2)
let str = 'index.html';
console.log(str.endsWith('.html'));

ЗАДАНИЕ 194
let str = '1-2-3-4-5';
let result = str.replace(/-/g, '.');
console.log(result);

ЗАДАНИЕ 195(1)
let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);

ЗАДАНИЕ 195(2)
let str = '12345';
let arr = str.split('');
console.log(arr);

ЗАДАНИЕ 195(3)
let arr = [1, 2, 3, 4, 5];
let str = arr.join('-');
console.log(str);

ЗАДАНИЕ 196(1)
let arr = [1, 2, 3];
console.log(arr.shift());

ЗАДАНИЕ 196(2)
let arr = [1, 2, 3];
console.log(arr.pop());

ЗАДАНИЕ 196(3)
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

ЗАДАНИЕ 196(4)
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

ЗАДАНИЕ 197(1)
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(0, 3);
console.log(result);

ЗАДАНИЕ 197(2)
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(3);
console.log(result);

ЗАДАНИЕ 198(1)
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

ЗАДАНИЕ 198(2)
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

ЗАДАНИЕ 198(3)
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(9, 0, 'e');

console.log(arr);

ЗАДАНИЕ 199
let arr = [1, 2, 3, 4, 5];
let result = arr.includes(3);
console.log(result);

ЗАДАНИЕ 200
let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
console.log(keys);

ЗАДАНИЕ 201(1)
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum); 

ЗАДАНИЕ 201(2)
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum); 

ЗАДАНИЕ 201(3)
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

ЗАДАНИЕ 201(4)
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

ЗАДАНИЕ 201(5)
let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
  prod *= Number(digit);
}

console.log(prod); 

*/