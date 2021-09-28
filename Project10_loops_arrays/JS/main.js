function doAWhile(ele) {
    var i = 0;
    while (i < 10) {

        // going first we get 1 - 10
        i++;
        //document.write("<br>" + i);
        document.getElementById(ele.id).innerHTML = document.getElementById(ele.id).innerHTML.concat("<br>" + i);
        // going last we get 0 - 9
        // i++;

    }
}

function getStringLength(ele) {
    //kind of already did this for the search string method to return the offset

    var eleString = document.getElementById(ele.id).innerText;
    document.getElementById(ele.id).innerText = "The length of this string was:" + eleString.length
}

function forLoop(ele) {
    document.getElementById(ele.id).innerHTML = "";
    for (i = 0; i < 10; i++) {
        document.getElementById(ele.id).innerHTML = document.getElementById(ele.id).innerHTML.concat("<br>" + i);
    }
}

function arrayFunc(ele) {
    var greetings = [
        "Hello!", "Hi", "Hey", "How's it goin?", "Howdy!"
    ];

    var randomElement = greetings[Math.floor(Math.random() * greetings.length)]
    document.getElementById(ele.id).innerText = randomElement;
}

function constFunc(ele, ele2) {
    const Human = {
        Name: "John",
        Age: 25,
        Height: 72
    };

    document.getElementById(ele.id).innerText = Human.Name;

    Human.Age = 26;
    Human.Occupation = "Developer";

    for (let i = 1; i < 6; i++) {
        //defined
        console.log(i);
    }
    //undefined
    //console.log(i);

    document.getElementById(ele2).innerText = "I am " + Human.Age + ", and I am a " + Human.Occupation;
}

function letObj(ele) {
    let Human = {
        Name: "John",
        Age: 25,
        Height: 72,
        description: function () {
            return "My name is " + this.Name + ".  I am " + this.Age + " years old, and " + this.Height + " inches tall";
        }
    }

    document.getElementById(ele.id).innerText = Human.description();
}


function breakAndContinue(ele) {
    var a = 28;
    var output = [];
    for (i = 0; i < 40; i++) {
        if (i % 2 != 0) {
            //skip the rest of this loop through
            continue;
        }
        if (i == a) {
            //stop here don't do the loop anymore at all
            break;
        }
        // if i meets all conditions, add it to the arr
        output.push(i);
    }
    document.getElementById(ele.id).innerText = output;
}