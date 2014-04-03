
function createFirstName() {
    var name = "Andrew";
    return name;
}

//saveName(createFirstName, "Amelia", "Smith");

//document.getElementById("output").innerHTML = LetterChanges("Hellothere");
//document.getElementById("output").innerHTML = SimpleAdding(8);



function LetterCapitalize(str) {
    "use strict";
    var workingArray = str.split(" ");
    newArray = [];
    for (var i = 0; i < workingArray.length; i++) {
        var shiftable = workingArray[i];
        shiftable = shiftable.split("");
        shiftable.shift();
        shiftable.unshift((workingArray[i][0].toUpperCase()));
        shiftable = shiftable.join("");
        newArray.push(shiftable);
    }

    var result = newArray.join(" ");

    return result;
}

//document.getElementById("output").innerHTML = LetterCapitalize("Hello there, how are you?");

function CheckNums(num1, num2) {
    "use strict";
    if (num2 > num1) {
        return "true";
    }
    return false;
}

//document.getElementById("output").innerHTML = CheckNums(2, 2);

function TimeConvert(num) {
    "use strict";
    num /= 60;
    var numHour = num - num % 1;
    var numMinutes = num % 1 * 60;
    return numHour + ":" + Math.round(numMinutes);

}

//document.getElementById("output").innerHTML = TimeConvert(103);

function AlphabetSoup(str) {
    "use strict";
    return str.split("").sort().join("");
}

//document.getElementById("output").innerHTML = AlphabetSoup("Bob");


function AbCheck(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[(i+4)] === 'b') {
            return "true";
        }
    }
    return "false";
}

//document.getElementById("output").innerHTML = AbCheck("after badly");

function ArithGeo(arr) {
    
    for (var i = 0; i < (arr.length - 2) ; i++) {
        var sequence = -1;
        if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
            sequence = "arithmetic";
        }
        if (arr[i + 1] / arr[i] === arr[i + 2] / arr[i + 1]) {
            sequence = "geometrics";
        }
        
    }
    return sequence;
}
//document.getElementById("output").innerHTML = ArithGeo([2, 6, 18, 54, 56]);



function ArrayAdditionI(arr) {

    //find largest
    for (var i = 0; i < arr.length; i++)
    {  
           var largest= Math.max.apply( Math, arr);
           var spliced= arr.splice(arr.indexOf(largest), 1);
            
    }
    for (var j = 0; j < (arr.length-1); j++)
        for (var k = 0; k < (arr.length-1); k++)
    {
        var sum = arr[j] + arr[j + 1];

    }
         

    if (sum = largest)
        ()
    return sum;

}
document.getElementById("output").innerHTML = ArrayAdditionI([5,7,16,1,2]);



