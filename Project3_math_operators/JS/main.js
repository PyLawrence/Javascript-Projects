function MathTextClicked(ele, func, num1, num2) {
    // ref is the reference to the element that called this function
    // allows me to utilize 1 function for multiple elements without if/else
    var ref = ele.id;
    // set the text of the element that called to the function the element wants us to call
    document.getElementById(ref).innerText = func(num1, num2);
    // allow the browser to set the cursor type for the element
    document.getElementById(ref).style.cursor = "auto";
}

//#region Basic Operators

function Multiplication(num1, num2) {
    return num1 * num2;
}
function Division(num1, num2) {
    return num1 / num2;
}

function Addition(num1, num2) {
    return num1 + num2;
}

function Subtraction(num1, num2) {
    return num1 - num2;
}

function Modulus(num1, num2) {
    return num1 % num2;
}

//#endregion



function DecrementTextClicked(ele, num) {
    var ref = ele.id;
    //wanted to put in the next line but the operation has to happen first
    num--;
    document.getElementById(ref).innerText = num;
}

function IncrementTextClicked(ele, num) {
    var ref = ele.id;
    //wanted to put in the next line but the operation has to happen first
    num++;
    document.getElementById(ref).innerText = num;
}

//not worth having in their own functions
// function Increment(num) {
//     return num++;
// }

// function Decrement(num) {
//     return num--;
// }

function NegateTextClicked(ele, num) {
    var ref = ele.id;
    document.getElementById(ref).innerText = -num;
    document.getElementById(ref).style.cursor = "auto";
}

function RandomNumberTextClicked(ele) {
    var ref = ele.id;
    document.getElementById(ref).innerText = randomInt();
    document.getElementById(ref).style.cursor = "auto";

}

function randomInt() {
    var a = Math.random() * 100;
    return Math.round(a);
}


function SetPointer() {
    //document.getElementById("math").style.cursor = "pointer";
    // Since more than 1 element will need the affect, use class and apply affect to class instead.
    var eles = document.getElementsByClassName("math");
    for (i = 0; i < eles.length; i++) {
        eles[i].style.cursor = "pointer";

    }
}