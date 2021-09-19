function total_price() {
    var count_price = document.querySelectorAll('.info_price .oprice');

    var result = 0;

    for (var i = 0; i < count_price.length; i++) {
        result = result + (+count_price[i].textContent);

    }
    document.querySelector(".myCart .total_price").innerHTML = `$ ${result}`;

    document.querySelector(".shopcard_total span").innerHTML = `$ ${result}`;
}

module.exports = total_price;