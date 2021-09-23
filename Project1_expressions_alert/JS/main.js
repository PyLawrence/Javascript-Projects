//#region variable declarations
var documentText = "This text won't break, because I added: \"\\\"<br>";
var alertText = "ALERT: HELLO, WORLD!<br>";

var concat = documentText + " " + alertText;

var kid = "James", dad = "Mark", mom = "Janet";

// changes font color of the family member strings
var kid = kid.fontcolor("red");
var mom = mom.fontcolor("red");
var dad = dad.fontcolor("red");

// string concatenatation
var family = "Kid: " + kid + " Mom: " + mom + " Dad: " + dad;

var intA = 5 + 5;

//#endregion


//#region document mods
document.write(documentText);
//popup when page is opened
window.alert(alertText);
document.write(concat);
document.write(family);
//#endregion
