// Урок 49
// Все работает на Open Server

(function () {
  'use strict';

  const inputSom = document.querySelector('#som'),
    inputUsd = document.querySelector('#usd');


  inputSom.addEventListener('input', () => {


    const request = new XMLHttpRequest();

    request.open("GET", "current.json");
    // request.open = (method(GET/POST), url, asy, login, password );

    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.send();

    request.addEventListener('load', () => {
      // request.addEventListener('readystatechange', ()=>{
      // if(request.readyState === 4 && request.status === 200)
      if (request.status === 200) {
        // console.log(request.response);
        // console.log(JSON.parse(request.response));

        const currency = JSON.parse(request.response);

        // console.log(inputSom.value / currency.current.usd);

        const result = inputSom.value / currency.current.usd;

        inputUsd.value = (result).toFixed(2);

      } else {
        inputUsd.value = "Что-то пошло не так";
      }
    });

  });


  const search = document.querySelector("[name='search']"),
    btnSearch = document.querySelector(".search button"),
    search_res = document.querySelector(".search_result");

  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    const request_ = new XMLHttpRequest();

    request_.open("GET", "search.php?query=" + search.value);
    request_.send();

    request_.addEventListener('load', () => {

      if (request_.status === 200) {
        // console.log(request_.response);
        const data = JSON.parse(request_.response);

        // console.log(data[2].text);

        let creat_ul = document.createElement('ul');

        for (let i = 0; i < data.length; i++) {

          // console.log(i);
          creat_ul.innerHTML += `<li>
                                <a href="${data[i].href}">${data[i].text}</a>
                                </li>`;
        }

        search_res.innerHTML = creat_ul.outerHTML;

      } else {
        console.log("error");
      }
    });

  });


  // Д/з 49 урока
  // 1. Сделать конвертацию валют с помощью AJAX запросов, конвертация должна быть: 
  // сом - доллар
  // доллар - сом 
  // сом - рубль 
  // рубль -сом 

  const inputSom1 = document.querySelector('#som1'),
        inputUsd1 = document.querySelector('#usd1'),
        inputRub1 = document.querySelector('#rub1');


  
  inputSom1.addEventListener('input', () => {


    const request1 = new XMLHttpRequest();

    request1.open("GET", "current.json");
    // request.open = (method(GET/POST), url, asy, login, password );

    request1.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request1.send();

    request1.addEventListener('load', () => {
      // request.addEventListener('readystatechange', ()=>{
      // if(request.readyState === 4 && request.status === 200)
      if (request1.status === 200) {
        // console.log(request.response);
        // console.log(JSON.parse(request.response));

        const currency1 = JSON.parse(request1.response);

        // console.log(inputSom.value / currency.current.usd);

        const result1 = inputSom1.value / currency1.current.usd;
        const result2 = inputSom1.value * currency1.current.rub;


        inputUsd1.value = (result1).toFixed(2);
        inputRub1.value = (result2).toFixed(2);


      } else {
        inputUsd1.value = "Что-то пошло не так";
        inputRub1.value = "Что-то пошло не так";
      }
    });

  });


  inputUsd1.addEventListener('input', () => {


    const request1 = new XMLHttpRequest();

    request1.open("GET", "current.json");
    // request.open = (method(GET/POST), url, asy, login, password );

    request1.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request1.send();

    request1.addEventListener('load', () => {
      // request.addEventListener('readystatechange', ()=>{
      // if(request.readyState === 4 && request.status === 200)
      if (request1.status === 200) {
        // console.log(request.response);
        // console.log(JSON.parse(request.response));

        const currency1 = JSON.parse(request1.response);

        // console.log(inputSom.value / currency.current.usd);

        const result3 = inputUsd1.value * currency1.current.som;

        inputSom1.value = (result3).toFixed(2);

      } else {
        inputSom1.value = "Что-то пошло не так";
      }
    });

  });


  inputRub1.addEventListener('input', () => {


    const request1 = new XMLHttpRequest();

    request1.open("GET", "current.json");
    // request.open = (method(GET/POST), url, asy, login, password );

    request1.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request1.send();

    request1.addEventListener('load', () => {
      // request.addEventListener('readystatechange', ()=>{
      // if(request.readyState === 4 && request.status === 200)
      if (request1.status === 200) {
        // console.log(request.response);
        // console.log(JSON.parse(request.response));

        const currency1 = JSON.parse(request1.response);

        // console.log(inputSom.value / currency.current.usd);

        const result4 = inputRub1.value * currency1.current.som2;

        inputSom1.value = (result4).toFixed(2);

      } else {
        inputSom1.value = "Что-то пошло не так";
      }
    });

  });

}());