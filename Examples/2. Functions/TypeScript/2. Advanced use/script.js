/**
* Created by pavelpat on 03.06.14.
*/
/**
* Параметры со значениями по-умолчанию.
*/
function defaults(x, y, z) {
    if (typeof y === "undefined") { y = x * 2; }
    if (typeof z === "undefined") { z = x + y; }
    return z;
}

defaults(1);
defaults(1, 2);
defaults(1, 2, 3);

/**
* Опциональные параметры.
*/
function optionals(x) {
    if (x === undefined) {
        return 0;
    }

    return x;
}

optionals();
optionals(1);

/**
* Переменное колличество аргументов.
*/
function args(a, b, c) {
    var args = [];
    for (var _i = 0; _i < (arguments.length - 3); _i++) {
        args[_i] = arguments[_i + 3];
    }
    console.log(a);
    console.log(b);
    console.log(c);

    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

args(1, 2, 3, 4, 5, 6, 7, 8, 9, 9);
//# sourceMappingURL=script.js.map
