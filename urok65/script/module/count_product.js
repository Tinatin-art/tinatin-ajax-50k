function count_product() {
    var count_product = document.getElementsByClassName("bag_item").length;
    document.querySelector(".myCart .total_cart").innerHTML = count_product;
}

module.exports = count_product;