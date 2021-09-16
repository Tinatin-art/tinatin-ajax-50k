// Делаю запрос на db.json 

function getRequest() {
    "use strict";

    fetch("/urok62dz/db.json")
        .then(response => response.json()
            .then(function (data) {

                let out1 = "";
                let out2 = "";
                let out3 = "";
                for (let key in data) {
                    out1 += data[key]['name'];
                    out2 += data[key]['age'];
                    out3 += data[key]['city'];
                }
                document.querySelector('.request1').textContent = out1;
                document.querySelector('.request2').textContent = out2;
                document.querySelector('.request3').textContent = out3;
            }));

}

export default getRequest;