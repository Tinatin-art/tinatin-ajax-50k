// // Language
// let langElem = document.getElementById('lang');
// let langElem2 = document.getElementById('lang2');
// let dropElem = langElem.querySelector('.active-dropdown');
// let drop2Elem = langElem2.querySelector('.active-dropdown2');

// dropElem.onclick = function(){
//   langElem.classList.toggle('open');
// };
// drop2Elem.onclick = function(){
//   langElem2.classList.toggle('open');
// };



// // yellow Shopcard
// let shopElem = document.getElementById('shop');
// let icon_shopElem = shopElem.querySelector('.icon_shop');

// icon_shopElem.onclick = function () {
//   shopElem.classList.toggle('open');
// };

// // Добавление товаров в корзину

// let class_name = document.getElementsByClassName("add_cart");


// let myFunction = function (evt) {
//   evt.preventDefault();



//   let title = this.parentNode.parentNode.parentNode.querySelectorAll(".price p a");
//   let price = this.parentNode.parentNode.parentNode.querySelectorAll(".money .currency .price_p");
//   let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".prod div img");
//   let create_li = document.createElement('li');
//   create_li.classList.add("bag_item");

//   console.log();
//   console.log();
//   console.log();

//   create_li.innerHTML = '<div class="bag_img">\
// 									        <a href="#"><img src="' + image[0].src + '" alt=""></a>\
// 							          </div>\
// 								        <div class="bag_info">\
// 								          <p class="info_title"><a href="#">' + title[0].innerText + '</a></p>\
// 									        <div class="info_price">\
//                             <span>$<span class="oprice">' + price[0].innerText + '</span></span>\
// 								          </div>\
// 									        <div class="trash">\
// 										        <a href="#"><i class="far fa-trash-alt"></i></a>\
// 									        </div>\
// 								        </div>';

//   let block_cart = document.querySelector('.shopcard_dropdown ul');
//   block_cart.appendChild(create_li);

//   alert("Товары успешно добавлены в корзину!");

//   // Удаление товаров
//   delete_product();
//   // Суммирование цен
//   sum_price();
//   // Количество товаров
//   count_product();
// };

// for (var i = 0; i < class_name.length; i++) {
//   class_name[i].addEventListener('click', myFunction, false);
//   // addEventListener - добавляем событие клика
//   // 'click', myFunction, false
//   // Тип события
//   // Что должно выполнятся
//   // Обработчик
// }

// function delete_product() {
//   let click_trash = document.querySelectorAll(".trash");

//   for (var i = 0; i < click_trash.length; i++) {
//     click_trash[i].addEventListener('click', del_func, false);
//   }

//   function del_func(evt) {
//     evt.preventDefault();

//     this.parentNode.parentNode.remove();
    
//     // Отнимать цены от суммы
//     sum_price();
//     // Отнимать количество товаров
//     count_product();
//   }
// }


// function sum_price() {
//   var count_price = document.querySelectorAll('.info_price .oprice');

//   var result = 0;

//   for (var i = 0; i < count_price.length; i++) {
//     result = result + (+count_price[i].textContent);

//   }
//   document.querySelector(".myCart .total_price").innerHTML = `$ ${result}`;

//   document.querySelector(".shopcard_total span").innerHTML = `$ ${result}`;
// }

// function count_product() {
//   var count_product = document.getElementsByClassName("bag_item").length;
//   document.querySelector(".myCart .total_cart").innerHTML = count_product;
// }

// const tabs = {
//   list_tabs: [
//     "Лидеры продаж",
//     "Новинки",
//     "Распродажа"
//   ]
// };

// var create_ul = document.createElement("ul");

// tabs.list_tabs.forEach((item, i) =>{
//   create_ul.innerHTML += `<li>${item}</li>`;
// });

// document.querySelector(".insert_listing").innerHTML += create_ul.outerHTML;