function reverse(data) {
    var splitStr = data.split(" ");
    console.log(splitStr);
    var result = "";
    result = splitStr[splitStr.length - 1];
    for (let i = splitStr.length - 2; i >= 0; i--) {
        result = result + " " + splitStr[i];
    }
    console.log(result)
}


reverse("vivek Thangam how are you");