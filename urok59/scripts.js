// Урок 59   Инкапсуляция. Д/з 59


(function () {

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
                                <li class="add_cart"><a href="#"><i class="fas fa-shopping-bag "></i></a></li>
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

  // Урок 59 Инкапсуляция

  // function User (name, age){
  //   this.name = name;
  //   let UserAge = age;

  //   this.get = function(){
  //     console.log(`Имя пользователя: ${this.name}, Возвраст: ${this.age}`);
  //   };
  //   this.getAge = function(){
  //     return UserAge;
  //   };
  //   this.setAge = function(age){

  //     if(typeof age == "number" && age > 1 && age <150){
  //       UserAge = age;
  //     }else{
  //       console.log("Недопустимое значение");
  //     }
  //   };
  // }

  // const userData = new User("Tinatin", 24);
  // console.log(userData.name);
  // console.log(userData.getAge());
  // userData.setAge(30);
  // console.log(userData.getAge());
  // // userData.get();

  // class User {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   # sname = "Omurova";

  //   get() {
  //     console.log(`Имя пользователя: ${this.name}, Фам пользователя: ${this.#sname}, Возвраст: ${this.age}`);
  //   }
  //   get UserAge() {
  //     return this.age;
  //   }
  //   set UserAge(age) {

  //     if (typeof age == "number" && age > 1 && age < 150) {
  //       this.age = age;
  //     } else {
  //       console.log("Недопустимое значение");
  //     }

  //   }
  // }
  // const userData = new User("Tinatin", 24);
  // console.log(userData.UserAge);
  // userData.UserAge = 50;
  // console.log(userData.UserAge);

  // Д/з 59 урока
  // 1. создать класс для добавления пользователей
  // 2. класс должен содержать 3 поля
  //  name
  //  login
  //  password
  // 3. Класс должен быть уникальный не должны изменяться поля и класс не должен наследоваться. 

  class user1 {

    constructor(name, login, password) {
      this._name = name;
      this._login = login;
      this._password = password;
    }

    get() {
      console.log(`Имя пользователя: ${this.name}, Логин: ${this.login}, Пароль: ${this.password}`);

    }
    get UserPassword() {
      return this._password;
    }
    set UserPassword(value) {

      if (typeof value == "number") {
        this._password = value;
      } else {
        console.log("Недопустимое значение");
      }


    }
  }
  const userData1 = new user1("Tinatin", "helloworld", 147147);
  console.log(userData1);
  console.log(userData1.UserPassword);
  console.log(userData1.name);
  console.log(userData1.login);
  console.log(userData1.password);
  console.log(userData1.get());



}());