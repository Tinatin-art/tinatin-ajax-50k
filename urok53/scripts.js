// Урок 53 Json-server и Дз 53

(function () {

  'use strict';

  fetch("http://localhost:3000/products")
    .then(data => data.json())
    .then(res => console.log(res));


}());

let user = {
  name: "Tinatin",
  age: 24
};

let user1 = JSON.parse(JSON.stringify(user));

