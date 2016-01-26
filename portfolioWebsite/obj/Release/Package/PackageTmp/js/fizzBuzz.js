function fizzBuzz() {
    var firstNum = $("#num1").val();
    var secondNum = $("#num2").val();

    for (var loopCounter = 1 ; loopCounter <= 100 ; loopCounter++) {

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
}