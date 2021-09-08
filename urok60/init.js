// // Урок 60 Прием модуль, как и зачем его использовать  Д/з 60
// function sayHello1() {
//     "use strict";

//     const user = {

//         name: window.prompt("Enter your name: ", ""),
//         surname: window.prompt("Enter your surname: ", ""),
//         dateOfBirth: window.prompt("Enter your dateOfBirth: ", ""),
//         placeOfBirth: window.prompt("Enter your placeOfBirth: ", ""),


//         get DataBirth() {
//             // console.log(typeof this.dateOfBirth);
//             // this.name = value;
//             // return `typeof ${typeof (this.name)}`);

//             // console.log(this.dateOfBirth);
//             // this.dateOfBirth = Number(this.dateOfBirth);
//             console.log(typeof this.dateOfBirth);
//             console.log(this.dateOfBirth);

//             if (!isNaN(this.dateOfBirth)) {
//                 return this.dateOfBirth;
//             } else {
//                 alert("Введите дату");
//             }
//         }


//         // get user1() {

//         //     // return `${this.name} ${this.surname} ${this.dateOfBirth} ${this.placeOfBirth}`;
//         //     return this.dateOfBirth;
//         // },
//         // set user1(value) {

//         //     this.dateOfBirth = value;
//         //     console.log(`typeof ${typeof (value)}`);

//         //     console.log(`${value} typeof`);

//         //     if (typeof value === 'number') {
//         //         console.log(user.dateOfBirth);
//         //     } else {
//         //         alert("Введите дату");
//         //     }
//         // }



//     };

//     console.log('NameOfUser: ', user.name);
//     console.log('Surname: ', user.surname);
//     console.log('YearOfBirth: ', user.DataBirth);
//     console.log('PlaceOfBirth: ', user.placeOfBirth);






// }
// export default sayHello1;