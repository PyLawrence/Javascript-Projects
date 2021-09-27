function countdown(userInp, dispEle) {
    var seconds = document.getElementById(userInp).value;
    var timer = document.getElementById(dispEle);

    function tick() {
        seconds = seconds - 1;
        timer.innerText = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds < 0) {
            alert("Time's up!!!")
            clearTimeout(time);
            timer.innerText = "";
        }
    }
    tick();
}

// yucky global vars
var slideIndex = 1;
var slideShowAutomatic = true;

showSlides(slideIndex);


function plusSlides(n, auto = true) {
    showSlides(slideIndex += n);
    // if auto is not its default value, it will disable the auto slide show functionality
    slideShowAutomatic = auto;
}


function currentSlide(n) {
    showSlides(slideIndex = n);
    // also need to stop auto function if we click a dot
    slideShowAutomatic = false;
}

// pretty much word for word what is on the site
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        // learned why we need spaces before the class name -_-
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// my timer, acts more of a time.sleep() from python than the above timer.
function sleep(ms) {
    // when the promise is fulfilled, it can then continue, allowing the timeout to work here a little better.
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function so we can use the await keyword
// async is used in this case to wait for the defined "promise" to be fulfilled
async function AutoSlideShow() {
    await sleep(3000);

    //checks to see if the user manually changed slides
    //if they did, stop the auto slide show
    if (slideShowAutomatic) {
        showSlides(slideIndex += 1);
        AutoSlideShow();
    }
}