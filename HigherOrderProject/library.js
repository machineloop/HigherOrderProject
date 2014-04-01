function saveName(firstnameFunc, lastname, middlename) {
    var combinedName;

    if (typeof firstnameFunc === "function") {
        combinedName = firstnameFunc() + " " + middlename + " " + lastname;
    }
    document.getElementById("output").innerHTML = combinedName;
}

function LetterChanges(str) {

    var result = "";
    for (var i = 0; i < str.length; i++) {
        var current = str[i];
        if (str[i] == 'z') {
            current = 'a';
        } else if (str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
            current = String.fromCharCode(str.charCodeAt(i) + 1);
            //cur = 'X';
        }

        if (current == 'a' || current == 'e' || current == 'i' || current == 'o' || current == 'u') {
            current = current.toUpperCase();
        }
        result += current;
    }
    return result;
}

function SimpleAdding(num) {
    return num * (num + 1) / 2;
}
