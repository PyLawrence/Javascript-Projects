// global var (yucky)
var globalX = 25;

function displayVars(ele) {
    // local scope var
    var internalX = 30;
    document.getElementById(ele.id).innerText = globalX + internalX;
}


function brokenDisplayVars(ele) {
    // use a var that is not within this function scope
    document.getElementById(ele.id).innerText = globalX + internalX;
}

function greetUser(ele) {
    // if it is afternoon, we may chat lol
    if (new Date().getHours() >= 12) {
        document.getElementById(ele.id).innerText = "Hey how is it goin?";
    }
    else {
        document.getElementById(ele.id).innerText = "It's too early, go away.";
    }
}


// dispEle is the element that will display if the login was valid
// inputEle is the text box that the user inputs their username into.
function checkUsername(dispEle, inputEle) {
    user = document.getElementById(inputEle).value;
    // obviously not how real logins work
    if (user == "admin") {
        document.getElementById(dispEle).innerText = "Login validated."
    }
    else if (user == "owner") {
        document.getElementById(dispEle).innerText = "Login validated."
    }
    else {
        document.getElementById(dispEle).innerText = "Invalid username."
    }
}


function timeFunc(dispEle) {
    var time = new Date().getHours()
    var reply;

    if (time < 12 == time > 0) {
        reply = "It is morning!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon!";
    }
    else {
        reply = "It is evening time!";
    }

    document.getElementById(dispEle).innerText = reply;
}