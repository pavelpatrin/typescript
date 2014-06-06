/**
* Created by pavelpat on 03.06.14.
*/
/**
* Перечисление цветов.
*/
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["White"] = 2] = "White";
    Colors[Colors["Black"] = 3] = "Black";
})(Colors || (Colors = {}));

/**
* Перечисление со значениями.
*/
var Digits;
(function (Digits) {
    Digits[Digits["One"] = 1] = "One";
    Digits[Digits["Two"] = 2] = "Two";
    Digits[Digits["Three"] = 3] = "Three";
})(Digits || (Digits = {}));

/**
* Вычисляемое перечисление.
*/
var Style;
(function (Style) {
    Style[Style["None"] = 0] = "None";
    Style[Style["Bold"] = 1] = "Bold";
    Style[Style["Italic"] = 2] = "Italic";
    Style[Style["Underline"] = 4] = "Underline";
    Style[Style["Emphasis"] = Style.Bold | Style.Italic] = "Emphasis";
    Style[Style["Hyperlink"] = Style.Bold | Style.Underline] = "Hyperlink";
})(Style || (Style = {}));

function fillBackground(color) {
    alert(color);
}

fillBackground(0 /* Red */);
//# sourceMappingURL=script.js.map
