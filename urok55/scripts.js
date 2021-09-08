// Урок 55 Получения данных из сервера Async await
// Дз/55
// 1. создайте файл с несколькими постами в формате json
// 2. сделайте асинхронный запрос на сервер json server
// 3. вывести посты на страницу 



(function () {

  'use strict';

  class Thenable {

    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      // alert(resolve);
      // выполнить resolve со значением this.num * 2 через 1000 mc
      setTimeout(() => resolve(this.num * 2), 1000);
    }
  }

  async function f() {
    // код будет ждать 1 секунду
    // после чего значение result станет равным 2
    let result = await new Thenable(5);
    alert(result);
  }
  f();

  async function getResponse() {

    let response = await fetch("http://localhost:3000/products");
    let content = await response.json();

    let key;
    const div = document.querySelector('.list_product');

    for (key in content) {

      div.innerHTML += `
                        <li class="prod">
                          <div class="image">
                            <div class="tool"><span>${content[key].top_ttl}</span></div>
                            <img class="add_image" src=${content[key].img} alt="">
                            <div class="desc_img">
                              <i class="fas fa-arrows-alt"></i>
                              <span>Quick view</span>
                            </div>

                          </div>
                          <div class="price">
                            <p><a class="ttl" href="#">${content[key].title}</a></p>
                            <div class="star-icons">
                              <ul class="star_wrap">
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li class="review">
                                  <a class="view" href="#"><em>6 Review(s)</em></a>
                                </li>
                              </ul>
                            </div>
                            <div class="money">
                              <span class="currency"><span>$</span><span class="price_p">${content[key].origin_price}</span>
                              <del class="price_del"><span>$</span>${content[key].old_price}</del>
                            </div>
                            <div class="btns done">
                              <ul>
                                <li class="add_cart"><a href="#"><i class="fas fa-shopping-bag "></i></a></li>
                                <li class="add_price"><a href="#"><i class="fas fa-balance-scale"></i></a></li>
                                <li class="add_pic"><a href="#"><i class="fas fa-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
  `;
    }
  }

  getResponse();


}());