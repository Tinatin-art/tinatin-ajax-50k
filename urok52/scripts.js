// Урок 52 Методы перебора массивов и Дз 52

(function () {

  'use strict';

  // filter
  const array = ["Яблоки", "Груши", "Виноград", "Апельсин"];

  // array.filter(function(name){
  //   // console.log(name === "Яблоки");
  // });

  const result = array.filter(name => name.length < 6);

  // const result = array.filter(function(name){

  //   return name.length < 6;
  //   // if(name.length < 6){
  //   //   return name;
  //   // }
  // });

  console.log(result);

  // map

  const array1 = ["Яблоки", "Груши", "Виноград", "Апельсин"];

  const result1 = array1.map(item => item.length < 6);

  console.log(result1);
  // *****************************************************
  const array2 = ["Яблоки", "ГРУША", "Виноград", "Апельсин"];

  const result2 = array2.map(item => item.toLowerCase());

  console.log(result2);
  // ****************************************************
  // Every/ some
  const array3 = [5, "ГРУША", "Виноград", "Апельсин"];

  // array3.some(item => console.log(typeof(item)));

  // const result3 = array3.some(item => typeof(item) == 'number');
  const result3 = array3.every(item => typeof (item) == 'number');
  console.log(result3);

  // **************************************************
  // reduce
  const array4 = [5, 6, 8, 7, 2, 3];
  const array5 = ['i', 'love', 'you', 'JS'];
  // 5+6+8+7+2+3
  const result4 = array4.reduce((count, item) => count + item);
  console.log(result4);

  // const result5 = array5.reduce((count, item)=> count + ' ' + item);
  const result5 = array5.reduce((count, item) => `${count} / ${item}`, 'Summ:');
  // это доп параметр по умолчанию
  console.log(result5);
  // ****************************************************

  // entries
  const obj = {
    suleimanov: "sname",
    ismar: "name",
    26: "age"
  };

  const res = Object.entries(obj)
    // .filter(item => console.log(item));
    // .filter(item => console.log(item[1]));
    .filter(item => item[1] === 'name')
    .map(item => item[0]);

  console.log(res);
  // [ [ '26', 'age' ], [ 'suleimanov', 'sname' ], [ 'ismar', 'name' ] ]
  // Вложенные массивы, множественные массивы


  // Дз/52 урока
  // 1. Сделать функцию которая конвертирует строку в тип массив
  // input: ‘alex’, ‘denis’, ‘victory’
  // output: [‘alex’, ‘denis’, ‘victory’];

  function fun(name1, name2, name3){

    let array0 = [name1, name2, name3];
    console.log(array0);

  }
  fun("alex", "denis", "victory");


  // const string = "alex, denis, victory";
  // let arr = string.split(', ');
  // console.log(arr);

  // 2. Сделать функцию которая получает числовые значения в виде строки и их конвертирует в массив и потом найти общую сумму с помощью reduce метода
  // input: '1', '2', '3'
  // output: 6'
  
  function hi(num1, num2 , num3) {
    
    let arr0 = [num1, num2, num3];
    console.log(arr0);
    const resul = arr0.map(item => Number(item)).reduce((count, item) => count + item);
    console.log(resul);
  }
  hi('1', '2', '3');
  
  // const number = ['1', '2', '3'];
  // const resul = number.map(item => Number(item)).reduce((count, item)=> count + item);

  // console.log(resul);

}());