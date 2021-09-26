function concatStrings(ele) {
    var string1 = "This is ";
    var string2 = "a concated ";
    var string3 = "string."
    var sentence = string1.concat(string2, string3);
    // console.log("This got ran");
    document.getElementById(ele.id).innerText = sentence;
}

function sliceString(ele) {
    var text = document.getElementById(ele.id).innerText;

    document.getElementById(ele.id).innerText = text.slice(12, -1);
}

function makeUpper(ele) {
    var text = document.getElementById(ele.id).innerText;

    document.getElementById(ele.id).innerText = text.toUpperCase();
}

function stringSearch(userInp, t_searched, dispEle) {
    // "searched string" or the string we are searching
    var s_string = document.getElementById(t_searched).innerText;
    // "query string" or the string we are using to search the other string
    var q_string = document.getElementById(userInp).value;
    // the resulting index of the location of the searched string
    var result = s_string.search(q_string);
    // "result offset" is the location of the result, to the end of the accepted search
    // subtracting 1 otherwise the offset will go 1 further than the last letter.
    var r_offset = result + q_string.length - 1;
    if (result != -1) {
        document.getElementById(dispEle).innerText = "'" + q_string + "'" + " was found at index " + result + " through " + r_offset;
    }
    else {
        document.getElementById(dispEle).innerText = "'" + q_string + "'" + " was not found.";
    }

    console.log(result.toString());

}

function cutDown(ele, num, accuracy) {
    document.getElementById(ele.id).innerText = num.toPrecision(accuracy);
}

function returnFixed(ele, num) {
    document.getElementById(ele.id).innerText = num.toFixed(1);
}

function getValue(ele) {
    var locText = document.getElementById(ele.id).innerText;
    // decided a visual indication of something changing is better here.
    //document.getElementById(ele.id).innerText = locText.valueOf();
    document.getElementById(ele.id).innerText = "It has been done."
    // 100% make sure it is actually doing something
    console.log(locText.valueOf());
}


