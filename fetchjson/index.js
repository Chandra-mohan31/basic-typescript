"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://mern-ecommerce-application.herokuapp.com/api/products";
// interface Data {
//     id: number;
//     title: string;
//     completed:boolean;
// }
axios_1["default"].get(url).then(function (response) {
    // const data = response.data as Data;
    console.log(response.data);
});
