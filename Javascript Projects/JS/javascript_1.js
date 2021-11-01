function doSwitch(ele) {
    // I don't care for switch statements too much either
    //9 times out of 10 there is a much better way to do something
    var eleRef = document.getElementById(ele.id);
    var favFruit = eleRef.innerHTML;
    var resultStr = "My favorite fruit is "
    var fruits = ["Bananas", "Oranges", "Apples", "Pears"];

    switch (favFruit) {
        case "Bananas":
            resultStr += "bananas";
            break;
        case "Oranges":
            resultStr += "oranges";
            break;
        case "Apples":
            resultStr += "apples";
            break;
        case "Pears":
            resultStr += "pears";
            break;
        default:
            resultStr = fruits[Math.floor(Math.random() * fruits.length)];
            break;
    }

    eleRef.innerText = resultStr;
}

function getClassName(ele) {
    var fruits = ["Bananas", "Oranges", "Apples", "Pears"];
    var element = document.getElementById(ele.id);
    var s_Ele = document.getElementsByClassName(element.className);
    for (i = 0; i < s_Ele.length; i++) {
        s_Ele[i].innerHTML = fruits[Math.floor(Math.random() * fruits.length)];
    }
}

function drawGradient() {
    var c = document.getElementById("mainCanv");
    var ctx = c.getContext("2d");
    //getting these numbers right was weird to figure out
    var grd = ctx.createRadialGradient(250, 150, 0, 0, 0, 500);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 300);
}
