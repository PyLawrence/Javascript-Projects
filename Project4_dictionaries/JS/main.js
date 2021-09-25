function displayDictValue(ele) {
    // define local dictionary
    var dataDict = {
        Name: "John",
        Age: "50",
        Height: 72,
        Occupation: "Carpenter"
    }
    // delete occupation from the dict
    delete dataDict.Occupation;

    // display value from the dict
    document.getElementById(ele.id).innerText = dataDict.Occupation;
}