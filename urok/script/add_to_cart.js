// 2)По клику на кнопку добавить в корзину в товар с следующими параметрами:
// 1) Картинка
// 2) Заголовок
// 3) Доп параметры цвет
// 4) Цена
// 3)Добавить корзину

// Конкретные задачи:
//   1)Получить картинку
//   2)Получить Заголовок
// let ttl = document.getElementsByClassName('ttl');
// ttl[0].innerText;
//   3)Получить доп параметры
//   4)Получить цену

//   Принцип получения данных следующий:
//   Получить данные можно с помощью 
// 1).class
// 2)#id 
// 3)attribue
// 4)tag

// let ttl = document.getElementsByClassName('ttl');
// console.log(ttl[1].innerText);

// let ttl = document.querySelectorAll('.price p > .ttl');
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// for (var text of ttl) {
//         console.log(text.innerText);
// }

// var arr =["Apple", "Orange", "Pearl"];

// arr.forEach(function(item, i, arr) {
//         alert(i + ":" + item + "(macciv:" + arr +")");

// });

// var arr = [1,  -1, 2, -2, 3];

// var positiveArr = arr.filter (function (number){
//         return number > 0;
// });

// alert(positiveArr);

// var names =["HTML", "CSS", "JavaScript"];

// var nameLengths = names.map(function(name){
//         return name.length;
// });
// alert(nameLengths);

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//         return number > 0;
// }

// alert(arr.every(isPositive));
// alert(arr.some(isPositive));

// var arr = [55, 65, 21, 1, 1, 5];
// var result = arr.reduce(function (sum, current) {
//         return sum + current;
// }, 0);
// alert(result);
// Результат ничего не вывелось

// Без команды вывод ничего не выведется!


// let image = document.getElementsByClassName('add_image');
// console.log(image[0]);
// let quick_view = document.getElementsByClassName('add_quick_view');
// console.log(quick_view[0].innerText);
// let tool = document.getElementsByClassName('tool');
// console.log(tool[0].innerText);
// let price_p = document.getElementsByClassName('price_p');
// console.log(price_p[0].innerText);
// let price_del = document.getElementsByClassName('price_del');
// console.log(price_del[0].innerText);
// let review = document.getElementsByTagName('em');
// console.log(review[0].innerText);


// var elements = document.getElementsByClassName("add_cart");
// for (var i=0; i<elements.length; i++){
//         console.log(elements[i]);
// }


// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function(){
//         var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//         alert(attribute[0].innerText);
// };

// for (var i=0; i<elements.length; i++){
//         elements[i].addEventListener('click', myFunction, false);
// }


// function tinatin(){
//   alert('Hello');
// }
// tinatin()

// function test_fan(param, param2, param3){
//   var number = 10;
//   var res;
//   res = number + param + param2 + param3;
//   alert(res);
// }

// test_fan(1, 10, 20);

// const arr = {
//   name: 'Tinatin',
//   age: 23,
//   param: {
//     color: 'white',
//     nat:'kyrgyz'
//   }
// };

// console.log(arr);
// console.log(arr.name);
// console.log(arr['name']);

// delete arr.name;
// console.log(arr);

// for (var key in arr){
//   // console.log(key);
//   console.log(arr[key]);
// }

// for (var key in arr){
//   if (typeof(arr[key]) === 'object'){
//     for(var key2 in arr[key]){
//       console.log(arr[key][key2]);
//     }
//   }else{
//     console.log(arr[key]);
//   }
// }

// Урок 31

// function name_fun(number) {
//   let num = number;
//   console.log(num);
// }
// name_fun(200);


// let num;

// function name_fun(num) {
//   let per_const = 120;
//   let result;

//   result = per_const + num;
//   console.log(result);
// }
// name_fun(1000);

// Урок 32

// Методы и Свойства строк
// let text = "Hello my name is Tinatin";
// console.log(text.length);

// let text1 = "Hello my name is Tinatin";
// console.log(text1.search("Tinatin"));

// let text2 = "Hellomyname is Tinatin";
// console.log(text2.slice(5, 7));

// let text3 = "Hello my name is Tinatin";
// console.log(text3.replace('my', 'her'));

// let text4 = "Hello my name is Tinatin";
// console.log(text4.toUpperCase());

// let text5 = "       Hello my name is Tinatin";
// console.log(text5.trim());

// Методы и Свойства чисел

// let num1 = 120;
// console.log(num1.toString());

// let x = 9.562354;
// console.log(x.toFixed());


// Добавление товаров в корзину

let class_name = document.getElementsByClassName("add_cart");
console.log(class_name);

let myFunction = function(evt){
  evt.preventDefault();
  
  let title = this.parentNode.parentNode.parentNode.querySelectorAll(".price p a");
  let price = this.parentNode.parentNode.parentNode.querySelectorAll(".money p");
  let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".prod div img");
  let create_li = document.createElement('li');

  console.log();
  console.log();
  console.log();

  create_li.innerHTML='<div class="bag_item">\
								        <div class="bag_img">\
									        <a href="#"><img src="'+image[0].src+'" alt=""></a>\
							          </div>\
								        <div class="bag_info">\
								          <p class="info_title"><a href="#">'+title[0].innerText+'</a></p>\
									        <div class="info_price">\
										        <h4>'+price[0].innerText+'</h4>\
								          </div>\
									        <div class="trash">\
										        <a href="#"><i class="far fa-trash-alt"></i></a>\
									        </div>\
								        </div>\
							        </div>';

  let block_cart = document.querySelector('.shopcard_dropdown ul');
  block_cart.appendChild(create_li);

  alert("Товары успешно добавлены в корзину!");
};

for (var i=0; i < class_name.length; i++){
  class_name[i].addEventListener('click', myFunction, false);
  // addEventListener - добавляем событие клика
  // 'click', myFunction, false
  // Тип события
  // Что должно выполнятся
  // Обработчик
}

// Массивы и псевдомассивы

// const arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.push(10));
// console.log(arr);
// console.log(arr.unshift(15));
// console.log(arr);

// // delete arr[0];
// // delete arr[3];
// console.log(arr.length);
// console.log(arr);
// arr[50] = 20;
// console.log(arr);

let arr = [10,20,12,32,2,11,25];
console.log(arr);

// for (i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let i of arr){
//   console.log(i);
// }

// arr.forEach(function(item, index, arr){
//   // console.log(index);
//   // console.log(item);
//   console.log('Index: '+ index + ' item: '+ item + ' array = '+arr);
// });

let object = { 0:1, 1:2, 2:3, length: 3 };
console.log(object);
let array = [];

for (i = 0; i < object.length; i++){
  array.push(object[i]);
  console.log(object[i]);
}

console.log(array);