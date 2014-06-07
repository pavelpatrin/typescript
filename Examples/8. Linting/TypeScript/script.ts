/**
 * Created by pavelpat on 02.06.14.
 */

module Application
{
    export class HelloWorldAlerter
    {
        public alert()
        {
            alert('Hello world!');
        }
    }
}

var alerter = new Application.HelloWorldAlerter();
alerter.alert();