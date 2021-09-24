function testButtonClick() {
    // get the text value of 2 elements
    var localVar = document.getElementById("test1").innerText;
    var localVar2 = document.getElementById("test2").innerText;

    //combine the text values
    var localVarConCat = localVar += localVar2
    //use the combined string and the id of the element we want to modify to call assignVar
    assignVar(localVarConCat, "combined");
}

function assignVar(string, element) {
    //get a reference to the element from the passed element id, and change its text
    document.getElementById(element).innerText = string;

    //print the change to the console
    console.log("%s's text was modified to '%s'", element, string);

}