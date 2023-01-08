var debounce = false


//Specific image cause im a stupid idiot
var image = document.getElementById("image")

//Button variable


//im too lazy to do this for every element so imma just say "VARIABLES"

const ElementsListMain = [document.getElementById("search"), document.getElementById("toggle"), document.getElementById("topnav")]
const ElementsListMovie = [document.getElementById("search-movie"), document.getElementById("toggle"), document.getElementById("embed-player"), document.getElementById("topnav")]

function toggleMode() {
    if (debounce === false) { //Dark turning into light
        debounce = true;
        image.src = "./assets/icon_light.png"
        if (!window.location.href.includes("/movie.html")) {
            for (const v of ElementsListMain) {
                v.classList.toggle("active")
            }
            document.body.style.backgroundColor = "white";
            console.log(debounce) //Should be true
        } else {
            for (const v of ElementsListMovie) {
                document.body.style.backgroundColor = "white";
                v.classList.toggle('active');
            }
        }
    } else {
        if (!window.location.href.includes("/movie.html")) {
            debounce = false; //Light turning into dark
            image.src = "./assets/icon.png"
            for (const v of ElementsListMain) {
                v.classList.toggle("active")
            }
            document.body.style.backgroundColor = "#1f1f1f";
            console.log(debounce) //Should be false
        } else {
            for (const v of ElementsListMovie) {
                v.classList.toggle("active")
                document.body.style.backgroundColor = "#1f1f1f";
                image.src = "./assets/icon.png"
                debounce = false;
            }
        }
    }
}