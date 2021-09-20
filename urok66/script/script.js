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

function* gen(n) {
    // Ismar

    for (let i = 0; i < n; i++) {
        yield i;
    }

    yield "i";
    yield "s";
    yield "m";
    yield "a";
    yield "r";
}
const res = gen(5);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());