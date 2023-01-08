console.log("Script Initiated")

var input = document.getElementById("search")

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        if (!input.value.trim().length) return;

        changeURL(input.value)
    }
});

function changeURL(value) {
    window.location.assign(`/mercury/?url=${btoa(value)}`);
}




//Toogle white mode and dark mode

//Pretty bad way of managing states but I learned from Roblox so ¯\_(ツ)_/¯
