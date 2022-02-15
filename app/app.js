var scrollBtn = document.querySelector(".scrollBtn");

//navbars elements
var home = document.querySelector("#homeNav");
var about = document.querySelector("#aboutNav");
var contact = document.querySelector("#contactNav");

scrollBtn.style.opacity = "0%";
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

window.addEventListener("scroll", function (){

    if (window.pageYOffset < 200) {
        scrollBtn.style.opacity = "0%";
    }
    else {
        scrollBtn.style.opacity = "100%";
    }    
})

home.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    })
})

about.addEventListener("click", function () {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior:"smooth"
    })
})

contact.addEventListener("click", function () {
    window.scrollTo({
        top: 2350,
        left: 0,
        behavior:"smooth"
    })

})