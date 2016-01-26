function numbers() {

    //declare 5 variables and prompt user to input as integer
    var MyNumbers = [];
    MyNumbers[0] = $("#numb0").val();
    MyNumbers[1] = $("#numb1").val();
    MyNumbers[2] = $("#numb2").val();
    MyNumbers[3] = $("#numb3").val();
    MyNumbers[4] = $("#numb4").val();
    var num0 = parseInt(MyNumbers[0]);
    var num1 = parseInt(MyNumbers[1]);
    var num2 = parseInt(MyNumbers[2]);
    var num3 = parseInt(MyNumbers[3]);
    var num4 = parseInt(MyNumbers[4]);
    var least;
    var greatest;
    var mean;
    var sum;
    var product;

    $("#displayArea2").text("You entered the following numbers: " + num0 + ", " + num1 + ", " + num2 + ", " + num3 + ", and " + num4);

    //determine which number is the least

    least = Math.min(num0, num1, num2, num3, num4);
    $("#displayArea3").text("The least number is: " + least);

    //determing which number is the greatest
    greatest = Math.max(num0, num1, num2, num3, num4);
    $("#displayArea4").text("The greatest number is: " + greatest);

    //determine the sum of the numbers
    sum = (num0 + num1 + num2 + num3 + num4);

    $("#displayArea5").text("The sum of the numbers is: " + sum);

    //determine the mean of the numbers
    mean = sum / MyNumbers.length;
    $("#displayArea6").text("The mean of the numbers is: " + mean);

    //determine the product of all the numbers
    product = (num0 * num1 * num2 * num3 * num4);
    $("#displayArea7").text("The product of the numbers is: " + product);

}