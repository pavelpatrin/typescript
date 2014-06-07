/**
* Created by pavelpat on 02.06.14.
*/
var Application;
(function (Application) {
    var HelloWorldAlerter = (function () {
        function HelloWorldAlerter() {
        }
        HelloWorldAlerter.prototype.alert = function () {
            alert('Hello world!');
        };
        return HelloWorldAlerter;
    })();
    Application.HelloWorldAlerter = HelloWorldAlerter;
})(Application || (Application = {}));

var alerter = new Application.HelloWorldAlerter();
alerter.alert();
//# sourceMappingURL=script.js.map
