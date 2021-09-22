// Дз 67 урока
let positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
];

var prices = [
    10000,
    4800,
    9200,
    2500,
    57000
];

let names = positions[4],
    price = prices[4];

// Задача № 1
let hit = {
    names: "Ховерборд Mattel 2016",
    price: 9200
}
console.log(`Хит продаж мартобря: ${hit.names} цена ${hit.price}`);

// Задача № 2

let a = Object.assign({}, positions); 
console.log(a);
let b = Object.assign({}, prices); 
console.log(b);

let items = []
let i = new Object({names, price})
items.push(i)
console.log(items);
console.log(`Купите ${names} по цене ${price} Q`);



// const a = 0;
// console.log(a);

// let obj = {
//     number: 5,
//     sayHello: function(){
//         say = () => {
//             console.log(this);
//         }
//         say();
//     }
// }

// obj.sayHello();

// let  names = ["Tinatin", "Aidai", "Aigerim", "Saltanat"];

// let shortName = names.filter((names) => {
//     return names.length < 8;
// })

// console.log(shortName);

// let  names = ["Tinatin", "Aidai", "Aigerim", "Saltanat"];

// names = names.map((names) => names.toLowerCase())

// console.log(names);

// function inter (srt1, srt2){
//     srt2 = srt2 || 0
//     console.log(`String: ${srt1} String: ${srt2}`);
// }

// inter('hi')

// // ! Res parametrs
// function max(a, b, c, ...number) {
//     console.log(number);
// }

// max(1, 2, 3, 4, 5, 6, 7)

// const arr1 = [1, 2, 3, 4],
//     arr2 = [5, 6, 7, 8]

// const res = Math.max(...arr1, ...arr2)
// console.log(res);


// // Слить во едина два обьекта

// const user = {
//     admin: {
//         name: "Tinatin",
//         sname: "Omurova"
//     },
//     pass: "ads123",
//     rool: "admin"
// }

// console.log(user.admin);
// const {
//     admin: {
//         name,
//         sname
//     },
//     pass,
//     rool
// } = user
// console.log(`${name} - ${sname} - ${pass} - ${rool}`);

// const admin = {
//     admin: "Tinatin",
//     pass: "blue"
// }
// // Es 6
// // const res = Object.assign({},user, admin)

// // Es 8
// const res = {
//     ...user,
//     ...admin
// }
// console.log(res);


// const x = 10,
//     y = 20

// const obj = {
//     x,
//     y,
//     cal: function () {
//         console.log(this.x * this.y);
//     }
// }

// obj.cal()
// console.log(obj);

// function connect({
//     host = "localhost",
//     port = 3000,
//     user = "root"

// }) {
//     console.log(`${host} - ${port} - ${user}`);
// }

// connect({
//     port: 2000
// })

// const arr = [1, 2, 3, 4, 5]
// const [a, b, c, d, e] = arr
// console.log(d);

// const arr = [
//     [1, 2], 3, [4, 5]
// ]
// const [
//     [a, b], c, [d, e]
// ] = arr
// console.log(d, e);


// const country = {
//         city: "Bishkek",
//         population: 300000,
//         gender: {
//             male: ['15%', '45%'],
//             female: ['20%', '80%']
//         }
// }

// // console.log(country.gender.male[0]);
// // Деструктиризация
// const {gender: {male:[male1, male2],female:[female1, female2] }} = country
// console.log(male1);

// var parent = {
//     foo() {
//         console.log("Привет от Родителя!");
//     }
// }

// // ES6 позволяет использовать метод super в (безклассовых) объектах с прототипами. Вот простой пример:

// var child = {
//     foo() {
//         super.foo();
//         console.log("Привет от Ребёнка!");
//     }
// }

// Object.setPrototypeOf(child, parent);
// child.foo(); // Привет от Родителя!
//              // Привет от Ребёнка!