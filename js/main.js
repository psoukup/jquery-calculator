$(function() {
    var stringNum = "";
    $('span').on('click', function() {
        $(this).clone().appendTo("#screen");
    })

    stringNum += ($("#screen").text())

    $("#cancel").on("click", function() {
        $("#screen").empty();
    })

    for (var i = 0; i < stringNum.length; i++) {
        if (stringNum[i] === '+') {
            var plus = stringNum.split("+");
        } else if (stringNum[i] === "&divide;") {
            var divideString = stringNum.split("&divide;");
        } else if (stringNum[i] === "*") {
            var multiplyString = stringNum.split("x");
        } else if (stringNum[i] === "-") {
            var minusString = stringNum.split("-");
        } else {
            return stringNum[i];
        }
        console.log(multiplyString)
    }
    $('#calc').on("click", function() {
        console.log($("#screen").text());
        console.log(stringNum)
    })

})
