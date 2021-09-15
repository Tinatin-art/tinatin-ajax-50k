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
    };



    // yellow Shopcard
    let shopElem = document.getElementById('shop');
    let icon_shopElem = shopElem.querySelector('.icon_shop');

    icon_shopElem.onclick = function () {
        shopElem.classList.toggle('open');
    };

    // Добавление товаров в корзину

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

        alert("Товары успешно добавлены в корзину!");

        // Удаление товаров
        delete_product();
        // Суммирование цен
        sum_price();
        // Количество товаров
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
    }

    // for (var i = 0; i < class_name.length; i++) {
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