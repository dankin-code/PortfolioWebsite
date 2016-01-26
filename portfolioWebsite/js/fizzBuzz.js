function fizzBuzz() {
    var firstNum = $("#num1").val();
    var secondNum = $("#num2").val();
    var message;





    for (var loopCounter = 1 ; loopCounter <= 100 ; loopCounter++) {

        if (isNaN(firstNum) || firstNum < 1 || firstNum > 100) {
            message = "Please enter a number between 1 and 100";
        }
        else {
            message = "You entered a valid first number";
        }

        if (isNaN(secondNum) || secondNum < 1 || secondNum > 100) {
            message = "Please enter a number between 1 and 100";
        }
        else {
            message = "You entered a valid second number";
        }


        if (loopCounter % firstNum == 0) {
            $("#displayArea9").append("fizz, ");
        }

        else if (loopCounter % secondNum == 0) {
            $("#displayArea9").append("buzz, ");
        }

        else {
            $("#displayArea9").append(loopCounter + ",");
        }

    }

    $("#displayArea9").html(message);

}