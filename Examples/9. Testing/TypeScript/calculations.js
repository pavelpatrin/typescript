/**
* Created by pavelpat on 07.06.14.
*/
var Calculations;
(function (Calculations) {
    var SimpleMath = (function () {
        function SimpleMath() {
        }
        /**
        * Takes two numbers and returns those addiction.
        *
        * @param {number} a
        * @param {number} b
        *
        * @return {number}
        */
        SimpleMath.prototype.addTwoNumbers = function (a, b) {
            return a + b;
        };
        return SimpleMath;
    })();
    Calculations.SimpleMath = SimpleMath;
})(Calculations || (Calculations = {}));
//# sourceMappingURL=calculations.js.map
