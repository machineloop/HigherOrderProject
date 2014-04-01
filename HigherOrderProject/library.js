function saveName(firstnameFunc, lastname, middlename) {
    var combinedName;

    if (typeof firstnameFunc === "function") {
        combinedName = firstnameFunc() + " " + middlename + " " + lastname;
    }
    document.getElementById("output").innerHTML = combinedName;
}

function SimpleAdding(num) {
    return num * (num + 1) / 2;
}
