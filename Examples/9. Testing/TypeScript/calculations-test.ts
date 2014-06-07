/**
 * Created by pavelpat on 07.06.14.
 */

/// <reference path="tsUnit.ts" />
/// <reference path="calculations.ts" />


module CalculationsTests
{
    export class SimpleMathTests extends tsUnit.TestClass {

        private target = new Calculations.SimpleMath();

        public addTwoNumbersWith1And2Expect3() {
            var result = this.target.addTwoNumbers(1, 2);

            this.areIdentical(3, result);
        }

        public addTwoNumbersWith3And2Expect5() {
            var result = this.target.addTwoNumbers(3, 2);

            this.areIdentical(4, result);
        }
    }
}


// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new CalculationsTests.SimpleMathTests());

// Use the built in results display
test.showResults(document.body, test.run());