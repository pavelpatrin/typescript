/**
* Created by pavelpat on 07.06.14.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="tsUnit.ts" />
/// <reference path="calculations.ts" />
var CalculationsTests;
(function (CalculationsTests) {
    var SimpleMathTests = (function (_super) {
        __extends(SimpleMathTests, _super);
        function SimpleMathTests() {
            _super.apply(this, arguments);
            this.target = new Calculations.SimpleMath();
        }
        SimpleMathTests.prototype.addTwoNumbersWith1And2Expect3 = function () {
            var result = this.target.addTwoNumbers(1, 2);

            this.areIdentical(3, result);
        };

        SimpleMathTests.prototype.addTwoNumbersWith3And2Expect5 = function () {
            var result = this.target.addTwoNumbers(3, 2);

            this.areIdentical(4, result);
        };
        return SimpleMathTests;
    })(tsUnit.TestClass);
    CalculationsTests.SimpleMathTests = SimpleMathTests;
})(CalculationsTests || (CalculationsTests = {}));

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new CalculationsTests.SimpleMathTests());

// Use the built in results display
test.showResults(document.body, test.run());
//# sourceMappingURL=calculations-test.js.map
