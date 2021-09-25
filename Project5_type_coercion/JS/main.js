function typeCoercion() {
    console.log(5 + 5);
    document.write(typeof "Not an int");
    document.write("<br>");
    var a = 5 + "50";
    document.write(a);
    document.write("<br>" + a + " is a(n) " + typeof a + " in this case.");
    document.write("<br>" + Infinity / Infinity);
    document.write("<br>" + isNaN("I am a string"));
    document.write("<br>" + isNaN(50));

}

function displayInfinity(ele, num) {
    document.getElementById(ele.id).innerText = num;
}

function compareInt(ele, num1, num2) {
    document.getElementById(ele.id).innerText = num1 > num2;
    // inverse
    console.log("%s should not be the output", num1 < num2);
}

function compareIntEqual(ele, num1, num2) {
    document.getElementById(ele.id).innerText = num1 == num2;
    // inverse
    console.log("%s should not be the output", num1 != num2);
}

function fullCompare(ele, val1, val2) {
    document.getElementById(ele.id).innerText = val1 === val2;
    console.log("%s should not be the output", val1 !== val2);
}

function dualCompare(ele, num1, num2, num3, num4) {
    document.getElementById(ele.id).innerText = (num1 > num2 && num3 < num4);
}

function orCompare(ele, num1, num2, num3, num4) {
    document.getElementById(ele.id).innerText = (num1 > num2 || num3 < num4);
}

function CompareNotTrue(ele, num1, num2) {
    document.getElementById(ele.id).innerText = num1 != num2;
}


typeCoercion();