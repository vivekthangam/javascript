var src = document.getElementById("src");
var des = document.getElementById("des");

var toLowerCase = () => des.innerText = src.value.toLowerCase();


var toCamelCase = () => {
    var str = src.value;
    des.innerText = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}




var camelCaseToNormal = () => {
    var str = src.value;
    des.innerText = str
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str) { return str.toUpperCase(); })
}

function toUpperCase() {
    des.innerText = src.value.toUpperCase();
}