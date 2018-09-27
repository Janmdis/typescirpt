"use strict";
//public 公共
//protected 肥肉
//private 私有
//readonly
var lady = /** @class */ (function () {
    function lady(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    lady.prototype.say = function () {
        console.log("hellow");
    };
    lady.prototype.wang = function () {
        console.log("love me");
    };
    return lady;
}());
var yjj = new lady("女", "杨晶晶", 18);
console.log(yjj);
yjj.say();
