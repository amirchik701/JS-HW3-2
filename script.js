


// do {
//   var a = +prompt('Введите число')
// } while (isNaN(a) || a === 0);

// do {
//   var b = +prompt('Введите степень')
// } while (isNaN(b) || b === 0);


// let summa = 1;

// for (let i = 1; i <= b; i++) {
//   summa = summa * a
//   alert(summa)
// }


// let a = 520;

/* Условие ? Если условие true выполнится это : Если false то это */
// a == 10 ? alert('Таааа  даамммм') : alert('Не тааа дааам')

// if (a == 10) {

//   alert('Таааа  даамммм')
// } else {
//   alert('Не тааа дааам')
// }

do {
  var a = +prompt('Введите число')
} while (isNaN(a) || a === 0);

do {
  var b = prompt('Введите символ')
} while (b == '');

do {
  var c = prompt('Введите конечный символ')
} while (b == '');

for (let i = 0; i < a; i++) {
  c = i == 0 ? c : b + c
  console.log(c);
}






























