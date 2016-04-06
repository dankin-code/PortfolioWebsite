//how to calculate the factorial of a number

// define a function called factorial

function factorial() {

    var theNumber = $("#factor").val();
    var factorial = 1;
    var loopCounter;
    var message;

    // validate the number entered

    if (isNaN(theNumber) || theNumber < 1 || theNumber > 100) {
    //if (theNumber < 1 || theNumber>100) {
            message = "Please enter a number between 1 and 100";
    }
    else {
         message = "You entered a valid number";

        //to calculate a factorial, we have to get the number to multiply by itself
        // then reduce it by one and repeat the multiplication until the value reaches 1  

        for (loopCounter = theNumber ; loopCounter > 0 ; loopCounter--) {

            factorial = factorial * loopCounter;
        }

    }
    //use jQuery to display the result in the display area

    $("#displayArea").html(message);
    $("#displayArea").html("Factorial of " + theNumber + " is :" + factorial);
}

