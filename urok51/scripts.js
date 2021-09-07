// Урок 51

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


    fetch('search.php', {
        method: "POST",
        body: JSON.stringify({
          query: search.value
        }),
        headers: {
          "Content-type": "application/json"
        }

      })
      .then(response => response.json())
      .then(json => {


        let creat_ul = document.createElement('ul');

        for (let i = 0; i < json.length; i++) {

          creat_ul.innerHTML += `<li>
                              <a href="${json[i].href}">${json[i].text}</a>
                              </li>`;
        }

        search_res.innerHTML = creat_ul.outerHTML;
      })
      .catch(console.log("Ошибка"));



  });


  // Д/з 51 урока
  // 1. Сделать конвертацию валют с помощью fetch запросов, конвертация должна быть: 
  // сом - доллар
  // доллар - сом 
  // сом - рубль 
  // рубль -сом 
  // сом - евро


  const inputSom1 = document.querySelector('#som1'),
    inputUsd1 = document.querySelector('#usd1'),
    inputRub1 = document.querySelector('#rub1'),
    inputEuro1 = document.querySelector('#euro1')

  inputSom1.addEventListener('input', () => {

    fetch('current.json', {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      })
      .then(response => response.json())
      .then(json => {


        const result1 = inputSom1.value / json.current.usd;
        const result2 = inputSom1.value * json.current.rub;
        const result5 = inputSom1.value * json.current.euro;


        inputUsd1.value = (result1).toFixed(2);
        inputRub1.value = (result2).toFixed(2);
        inputEuro1.value = (result5).toFixed(2);

      })
      .catch(console.log("Что-то пошло не так"));

  });

  inputUsd1.addEventListener('input', () => {

    fetch('current.json', {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })
    .then(response => response.json())
    .then(json => {


      const result3 = inputUsd1.value * json.current.som;
      inputSom1.value = (result3).toFixed(2);

    })
    .catch(console.log("Что-то пошло не так"));


  });


  inputRub1.addEventListener('input', () => {

    fetch('current.json', {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })
    .then(response => response.json())
    .then(json => {


      const result4 = inputRub1.value * json.current.som2;
      inputSom1.value = (result4).toFixed(2);
      
    })
    .catch(console.log("Что-то пошло не так"));
        
  });
}());