/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/module/add_to_cart.js":
/*!**************************************!*\
  !*** ./script/module/add_to_cart.js ***!
  \**************************************/
/***/ (function(module) {

function add_to_cart() {
  // Language
  let langElem = document.getElementById('lang');
  let langElem2 = document.getElementById('lang2');
  let dropElem = langElem.querySelector('.active-dropdown');
  let drop2Elem = langElem2.querySelector('.active-dropdown2');

  dropElem.onclick = function () {
    langElem.classList.toggle('open');
  };

  drop2Elem.onclick = function () {
    langElem2.classList.toggle('open');
  }; // yellow Shopcard


  let shopElem = document.getElementById('shop');
  let icon_shopElem = shopElem.querySelector('.icon_shop');

  icon_shopElem.onclick = function () {
    shopElem.classList.toggle('open');
  }; // Добавление товаров в корзину


  function myFunction(ttl, prc, img) {
    let title = ttl;
    let price = prc;
    let image = img;
    let create_li = document.createElement('li');
    create_li.classList.add("bag_item");
    console.log();
    console.log();
    console.log();
    create_li.innerHTML = '<div class="bag_img">\
                                            <a href="#"><img src="' + image[0].src + '" alt=""></a>\
							          </div>\
								        <div class="bag_info">\
								          <p class="info_title"><a href="#">' + title[0].innerText + '</a></p>\
									        <div class="info_price">\
                            <span>$<span class="oprice">' + price[0].innerText + '</span></span>\
								          </div>\
									        <div class="trash">\
										        <a href="#"><i class="far fa-trash-alt"></i></a>\
									        </div>\
								        </div>';
    let block_cart = document.querySelector('.shopcard_dropdown ul');
    block_cart.appendChild(create_li);
    alert("Товары успешно добавлены в корзину!"); // Удаление товаров

    delete_product(); // Суммирование цен

    sum_price(); // Количество товаров

    count_product();
    fetch("http://localhost:3000/requests", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        "ttl": title[0].innerText,
        "image": image[0].src,
        "price": price[0].innerText
      })
    });
  } // for (var i = 0; i < class_name.length; i++) {
  //   class_name[i].addEventListener('click', myFunction, false);
  // addEventListener - добавляем событие клика
  // 'click', myFunction, false
  // Тип события
  // Что должно выполнятся
  // Обработчик
  // }


  document.querySelector(".list_product").addEventListener("click", event => {
    if (event.target.parentNode.classList.contains("prod")) return false;
    let title = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price p a");
    let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".money .currency .price_p");
    let image = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".prod div img");
    myFunction(title, price, image);
  });
}

module.exports = add_to_cart;

/***/ }),

/***/ "./script/module/count_product.js":
/*!****************************************!*\
  !*** ./script/module/count_product.js ***!
  \****************************************/
/***/ (function(module) {

function count_product() {
  var count_product = document.getElementsByClassName("bag_item").length;
  document.querySelector(".myCart .total_cart").innerHTML = count_product;
}

module.exports = count_product;

/***/ }),

/***/ "./script/module/delete_product.js":
/*!*****************************************!*\
  !*** ./script/module/delete_product.js ***!
  \*****************************************/
/***/ (function(module) {

function delete_product() {
  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener('click', del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove(); // Отнимать цены от суммы

    sum_price(); // Отнимать количество товаров

    count_product();
  }
}

module.exports = delete_product;

/***/ }),

/***/ "./script/module/get_list_product.js":
/*!*******************************************!*\
  !*** ./script/module/get_list_product.js ***!
  \*******************************************/
/***/ (function(module) {

function get_list_product() {
  'use strict';

  class cardProduct {
    constructor(tool, toolClass, img, title, originPrice, oldPrice, innerBlock) {
      this.tool = tool;
      this.toolClass = toolClass;
      this.img = img;
      this.title = title;
      this.originPrice = originPrice;
      this.oldPrice = oldPrice;
      this.innerBlock = document.querySelector(innerBlock);
      this.valuta = 85;
      this.originPrice = this.convertToUSD(this.originPrice);
      this.oldPrice = this.convertToUSD(this.oldPrice);
    }

    convertToUSD(price) {
      const result = price / this.valuta;
      return result.toFixed(2);
    }

    render() {
      const div = document.createElement('div');
      div.classList.add('prod');
      div.innerHTML = `
                          <div class="image">
                            <div class="tool ${this.toolClass}"><span>${this.tool}</span></div>
                            <img class="add_image" src=${this.img} alt="">
                            <div class="desc_img">
                              <i class="fas fa-arrows-alt"></i>
                              <span>Quick view</span>
                            </div>
                     
                          </div>
                          <div class="price">
                            <p><a class="ttl" href="#">${this.title}</a></p>
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
                              <span class="currency"><span>$</span><span class="price_p">${this.originPrice}</span>
                              <del class="price_del"><span>$</span>${this.oldPrice}</del>
                            </div>
                            <div class="btns done">
                              <ul>
                                <li class="add_cart"><i class="fas fa-shopping-bag "></i></li>
                                <li class="add_price"><a href="#"><i class="fas fa-balance-scale"></i></a></li>
                                <li class="add_pic"><a href="#"><i class="fas fa-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
  `;
      this.innerBlock.append(div);
    }

  }

  const getProduct = async url => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
    }

    return await result.json();
  };

  getProduct("http://localhost:3000/products").then(data => {
    data.forEach(({
      ttl,
      color,
      img,
      title,
      origin_price,
      old_price
    }) => {
      new cardProduct(ttl, color, img, title, origin_price, old_price, '.list_product').render();
    });
  });
}

;
module.exports = get_list_product;

/***/ }),

/***/ "./script/module/total_price.js":
/*!**************************************!*\
  !*** ./script/module/total_price.js ***!
  \**************************************/
/***/ (function(module) {

function total_price() {
  var count_price = document.querySelectorAll('.info_price .oprice');
  var result = 0;

  for (var i = 0; i < count_price.length; i++) {
    result = result + +count_price[i].textContent;
  }

  document.querySelector(".myCart .total_price").innerHTML = `$ ${result}`;
  document.querySelector(".shopcard_total span").innerHTML = `$ ${result}`;
}

module.exports = total_price;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
(function () {
  const get_list_product = __webpack_require__(/*! ./module/get_list_product */ "./script/module/get_list_product.js"),
        add_to_cart = __webpack_require__(/*! ./module/add_to_cart */ "./script/module/add_to_cart.js"),
        count_product = __webpack_require__(/*! ./module/count_product */ "./script/module/count_product.js"),
        delete_product = __webpack_require__(/*! ./module/delete_product */ "./script/module/delete_product.js"),
        total_price = __webpack_require__(/*! ./module/total_price */ "./script/module/total_price.js");

  get_list_product();
  add_to_cart();
  count_product();
  delete_product();
  total_price();
})();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map