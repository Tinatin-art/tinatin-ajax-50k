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

  const getProduct = async (url) => {

    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);

    }
    return await result.json();
  };

  getProduct("http://localhost:3000/products")
    .then(data => {
      data.forEach(({
        ttl,
        color,
        img,
        title,
        origin_price,
        old_price
      }) => {
        new cardProduct(
          ttl,
          color,
          img,
          title,
          origin_price,
          old_price,
          '.list_product'
        ).render();

      });
    });

};

module.exports = get_list_product;