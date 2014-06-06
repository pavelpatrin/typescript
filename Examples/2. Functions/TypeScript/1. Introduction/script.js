/**
* Created by pavelpat on 03.06.14.
*/
var _this = this;
/**
* Декларирование функции как в JS.
*/
function a() {
    return 123;
}

a();

/**
* Декларирование функции с описанием типов.
*/
function b(a) {
    return 123;
}

b(123);

/**
* Определение функции в стиле TypeScript.
*/
var c = function (a) {
    return 123;
};

c(123);

/**
* Lambda-определение функции.
*/
var d = function (a) {
    return 123;
};

d(123);

/**
* Отличия при работе с this
*/
document.body.addEventListener('click', function (e) {
    console.log(this);
});
document.body.addEventListener('click', function (e) {
    console.log(_this);
});

function test(a) {
}
//# sourceMappingURL=script.js.map
