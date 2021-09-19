import $ from "jquery";

(function () {

    const get_list_product = require('./module/get_list_product'),
        add_to_cart = require('./module/add_to_cart'),
        count_product = require('./module/count_product'),
        delete_product = require('./module/delete_product'),
        total_price = require('./module/total_price');

    get_list_product();
    add_to_cart();
    count_product();
    delete_product();
    total_price();
}());

console.log($("h2").text());

$(document).ready(function () {
    $('#accordeon .acc-head').on('click', function () {
        $('#accordeon .acc-body').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(1000);
    });
});

// Д/з 64 урока
// все сделать через jquery 

// создайте список
// внутри списка создайте <a>
// задайте ссылки для <a>
// оформите список с помощью css
// вывести весь список на страницу 


var txt1 = $("<li></li>").append($("<a href='https://learn.jquery.com/about-jquery/how-jquery-works/'>text1</a>"));
var txt2 = $("<li></li>").append($("<a href='http://jquery.page2page.ru/index.php5/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B3%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BD%D0%B5%D1%86_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2'>text2</a>"));
var txt3 = $("<li></li>").append($("<a href='https://learn.jquery.com/about-jquery/how-jquery-works/'>text3</a>"));
$(".list").append(txt1, txt2, txt3);