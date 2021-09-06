// ООП - понятие
// применение

// как понять что есть строка?

// let str = 'text';

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(strObj);

// let Array = [1,2,3];

// console.log(Array);

// let car = {
//   kusov: 'Jelezo',
//   kolesa: '4 kolesa',
//   modal: function () {
//     console.log("Hello");
//   }
// };

// // let mb = {
// //   marka: 'Mers',
// //   god: 2021
// // };
// let mb = Object.create(car);
// // mb.__proto__ = car;

// // Object.setPrototypeOf(mb, car);

// console.log(mb.kusov);
// console.log(mb.modal);
// mb.modal();

// Д/з 36 урока
// input: let salary = {
//   almaz: 1200,
//   adilet: 1300,
//   nursultan: 3000,
// };
// let bonus = {
//   almaz: 400,
//   adilet: 300,
//   nursultan: 200,
// }

// Сделайте метод который будет суммировать зарплату с бонусом 

// output: almaz 1600, adilet 1600, nursultan 3200 

let salary = {
  almaz: 1200,
  adilet: 1300,
  nursultan: 3000,
};

let bonus = {
  almaz: 400,
  adilet: 300,
  nursultan: 200,
};

Object.setPrototypeOf(salary, bonus);

let almaz = salary.almaz + bonus.almaz;
let adilet = salary.adilet + bonus.adilet;
let nursultan = salary.nursultan + bonus.nursultan;
console.log("almaz " + almaz, "adilet " + adilet, "nursultan " + nursultan);