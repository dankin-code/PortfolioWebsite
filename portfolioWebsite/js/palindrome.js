function palindrome() {

    var word = $("#testWord").val();
    var result;

    //create an array and split the word 

    var wordArray = word.split("");
    //reverse the elements of the array

    //$("#displayArea8").text(wordArray);

    wordArray.reverse();
    //join the elements of the array into a word

    //$("#displayArea8").text(wordArray);

    var newWord = wordArray.join("");

    if (word == newWord) {
        result = "This word is a palindrome";
    }

    else {
        result = "This world is NOT a palindrome"
    }

    $("#displayArea8").html(result);

}
