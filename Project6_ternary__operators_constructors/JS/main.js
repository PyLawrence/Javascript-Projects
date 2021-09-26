function Check_Age() {
    var Age, Can_Vote;

    Age = document.getElementById("AgeInput").value;
    Can_Vote = (Age < 18) ? "You are too young to vote." : "You are old enough to vote.";
    document.getElementById("Age").innerText = Can_Vote;
}


function Vehicle(make, model, year, color) {
    this.Vehicle_Make = make;
    this.Vehicle_Model = model;
    this.Vehicle_Year = year;
    this.Vehicle_Color = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

class Person {
    // it really bugged me we made a constructor without an actual class definition
    // even though it happens automatically.
    constructor(name, age, height, occupation) {
        this.Name = name;
        this.Age = age;
        this.Height = height;
        this.Occupation = occupation;
    }
}

var John = new Person("John", 20, 72, "Carpenter");

function OutputVehicle(id) {
    document.getElementById(id).innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function nestedFunction(ele) {

    document.getElementById(ele.id).innerText = genRandNum();

    function genRandNum() {
        return Math.round(Math.random() * 100);
    }
    
}